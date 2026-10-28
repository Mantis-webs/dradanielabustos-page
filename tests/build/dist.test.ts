import { existsSync, readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { METADATOS, type Ruta } from '../../src/data/seo'

/*
 * Revisa el `dist/` que sale de `npm run build`: lo mismo que va a servir
 * Cloudflare Pages. Corre solo con `npm run test:build`, que hace el build
 * antes.
 */

const DIST = resolve('dist')
const RUTAS = Object.keys(METADATOS) as Ruta[]

/** Tope para el JS que se descarga al entrar a la home (antes era 601 KB). */
const TOPE_ENTRADA_KB = 500

const leer = (archivo: string) => readFileSync(resolve(DIST, archivo), 'utf8')

describe('dist: estructura para Cloudflare Pages', () => {
  it('NO hay 404.html en la raíz (desactiva el modo SPA y da 404 en /curso)', () => {
    expect(existsSync(resolve(DIST, '404.html'))).toBe(false)
  })

  it('NO hay _redirects (el modo SPA nativo de Pages ya cubre el fallback)', () => {
    expect(existsSync(resolve(DIST, '_redirects'))).toBe(false)
  })

  it('el build de servidor (dist-ssr) se limpió', () => {
    expect(existsSync(resolve('dist-ssr'))).toBe(false)
  })

  it.each(['robots.txt', 'sitemap.xml', 'llms.txt', 'og-imagen.jpg', 'favicon.ico', 'favicon.png'])(
    'publica %s',
    (archivo) => {
      expect(existsSync(resolve(DIST, archivo))).toBe(true)
    },
  )
})

describe.each(RUTAS)('dist: HTML de %s', (ruta) => {
  const { archivo, titulo } = METADATOS[ruta]

  it('existe', () => {
    expect(existsSync(resolve(DIST, archivo))).toBe(true)
  })

  it('#root viene con contenido', () => {
    const html = leer(archivo)
    expect(html).not.toContain('<div id="root"></div>')
    expect(html).toMatch(/<div id="root"><[a-z]/)
  })

  it('trae su propio título y no quedan marcas sin reemplazar', () => {
    const html = leer(archivo)
    expect(html).toContain(`<title>${titulo}</title>`)
    expect(html).not.toContain('<!-- metadatos -->')
  })

  it('el JSON-LD (si hay) es JSON válido', () => {
    const html = leer(archivo)
    for (const [, json] of html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    )) {
      expect(() => JSON.parse(json)).not.toThrow()
    }
  })

  it('todo /assets/ referenciado existe en dist', () => {
    const html = leer(archivo)
    const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((m) => m[1])
    expect(assets.length).toBeGreaterThan(0)
    for (const asset of assets) {
      expect(existsSync(resolve(DIST, `.${asset}`)), asset).toBe(true)
    }
  })

  it('no carga Google Fonts (fuentes autoalojadas)', () => {
    expect(leer(archivo)).not.toContain('fonts.googleapis.com')
  })
})

describe('dist: peso del JS de entrada', () => {
  const entrada = leer('index.html').match(
    /<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"/,
  )?.[1]

  it('se encuentra el script de entrada', () => {
    expect(entrada).toBeDefined()
  })

  it(`pesa menos de ${TOPE_ENTRADA_KB} KB (Vidstack va en un chunk aparte)`, () => {
    const kb = statSync(resolve(DIST, `.${entrada}`)).size / 1024
    console.info(`JS de entrada: ${kb.toFixed(0)} KB`)
    expect(kb).toBeLessThan(TOPE_ENTRADA_KB)
  })

  it('el reproductor de Vidstack no está en el JS de entrada', () => {
    expect(leer(`.${entrada}`)).not.toContain('media-player')
  })
})
