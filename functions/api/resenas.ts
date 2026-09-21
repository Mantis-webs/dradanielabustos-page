/**
 * Reemplaza el placeholder de Trustpilot (README punto 9): trae las últimas
 * reseñas visibles en el header público de Encuadrado por scraping.
 *
 * La página de Encuadrado es Next.js con SSR: el HTML que devuelve ya trae
 * el texto de las reseñas embebido (verificado 2026-09-21), así que alcanza
 * con un fetch + parseo por regex — no hace falta un browser headless ni un
 * SSR propio. El resultado se cachea en el edge con la Cache API de
 * Cloudflare (requiere dominio custom, no funciona en previews *.pages.dev)
 * para no pegarle a Encuadrado en cada visita.
 */

const ENCUADRADO_URL = 'https://p.encuadrado.com/p/dra-danielabustosriquelme'
const CACHE_TTL_SEGUNDOS = 60 * 60 * 24

interface Resena {
  texto: string
  autor: string
  rating: number
  fecha: string
}

function decodificarEntidades(texto: string): string {
  return texto
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

/**
 * Cada reseña vive en un bloque `data-slot="card-content"` con esta forma
 * (markup real de p.encuadrado.com, puede romperse si Encuadrado lo cambia):
 * <p class="my-auto line-clamp-2">TEXTO</p> ... <span class="font-semibold">RATING</span>
 * ... <span class="truncate text-muted-foreground">AUTOR</span>
 * <span class="shrink-0 text-muted-foreground">FECHA</span>
 */
function parsearResenas(html: string): Resena[] {
  const resenas: Resena[] = []
  const bloques = html.split('data-slot="card-content"').slice(1)

  for (const bloque of bloques) {
    const textoMatch = bloque.match(/<p class="my-auto line-clamp-2">(.*?)<\/p>/)
    const ratingMatch = bloque.match(/<span class="font-semibold">(\d+)<\/span>/)
    const autorMatch = bloque.match(
      /<span class="truncate text-muted-foreground">(.*?)<\/span>/,
    )
    const fechaMatch = bloque.match(/<span class="shrink-0 text-muted-foreground">(.*?)<\/span>/)

    if (!textoMatch || !ratingMatch || !autorMatch) continue

    resenas.push({
      texto: decodificarEntidades(textoMatch[1]).trim(),
      autor: decodificarEntidades(autorMatch[1]).trim(),
      rating: Number(ratingMatch[1]),
      fecha: fechaMatch ? decodificarEntidades(fechaMatch[1]).trim() : '',
    })

    if (resenas.length === 3) break
  }

  return resenas
}

export const onRequestGet: PagesFunction = async (context) => {
  const cache = caches.default
  const cacheKey = new Request(context.request.url, context.request)

  const enCache = await cache.match(cacheKey)
  if (enCache) return enCache

  let resenas: Resena[] = []

  try {
    const respuesta = await fetch(ENCUADRADO_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
      },
    })

    if (respuesta.ok) {
      resenas = parsearResenas(await respuesta.text())
    }
  } catch {
    resenas = []
  }

  const response = new Response(JSON.stringify({ resenas }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${CACHE_TTL_SEGUNDOS}`,
    },
  })

  // No cachear resultados vacíos: así el próximo request reintenta el scraping
  // en vez de quedar 24h sin reseñas por una falla transitoria de Encuadrado.
  if (resenas.length > 0) {
    context.waitUntil(cache.put(cacheKey, response.clone()))
  }

  return response
}
