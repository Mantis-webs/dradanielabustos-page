import { CORREO, INSTAGRAM, LINKEDIN } from './enlaces'

/**
 * Metadatos por ruta. Una sola fuente para dos consumidores:
 *
 * - El prerender (`scripts/prerender.mjs`): escribe estos datos en el <head>
 *   del HTML estático de cada ruta (`index.html`, `curso.html`,
 *   `privacidad.html`).
 *   WhatsApp, Instagram y LinkedIn no ejecutan JS, así que la tarjeta al
 *   compartir sale del HTML estático, no de React.
 * - La app (`useMetadatos`): actualiza título, descripción y canonical al
 *   navegar entre rutas sin recargar.
 */
export const SITIO = 'https://dradanielabustos.com'

export const NOMBRE_SITIO = 'Dra. Daniela Bustos Riquelme'

export const IMAGEN_COMPARTIR = '/og-imagen.jpg'

export type Ruta = '/' | '/curso' | '/privacidad'

export type Metadatos = {
  titulo: string
  descripcion: string
  /** Archivo HTML que genera el build para la ruta. */
  archivo: string
}

export const METADATOS: Record<Ruta, Metadatos> = {
  '/': {
    titulo: 'Dra. Daniela Bustos — Medicina integrativa online',
    descripcion:
      'Medicina integrativa y psiconeuroinmunología clínica con la Dra. Daniela Bustos Riquelme. Consulta online entre Barcelona y Chile: agenda tu hora.',
    archivo: 'index.html',
  },
  '/curso': {
    titulo: '¿Por qué me inflamo? — Curso online · Dra. Daniela Bustos',
    descripcion:
      'Entiende qué hay detrás de tu hinchazón y aprende por dónde empezar a cuidar tu salud digestiva. Curso online de la Dra. Daniela Bustos.',
    archivo: 'curso.html',
  },
  '/privacidad': {
    titulo: 'Política de privacidad — Dra. Daniela Bustos Riquelme',
    descripcion:
      'Cómo se recopilan, usan y protegen tus datos personales en dradanielabustos.com, y cómo ejercer tus derechos.',
    archivo: 'privacidad.html',
  },
}

export function urlCanonica(ruta: Ruta) {
  return ruta === '/' ? `${SITIO}/` : `${SITIO}${ruta}`
}

const escapar = (texto: string) =>
  texto.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const ID_DRA = `${SITIO}/#dra`

/**
 * Datos estructurados (schema.org). Solo con lo que ya está publicado en el
 * sitio: la formación es la de "Quién soy" (Enfoque.tsx) y el temario es el
 * del curso (Vsl.tsx). Título profesional, universidad y registro faltan
 * hasta que la clienta los entregue (README punto 8).
 */
function datosEstructurados(ruta: Ruta) {
  const dra = {
    '@type': 'Person',
    '@id': ID_DRA,
    name: 'Daniela Bustos Riquelme',
    honorificPrefix: 'Dra.',
    jobTitle: 'Médica integrativa',
    description:
      'Médica integrativa y especialista en Psiconeuroinmunología Clínica, con formación en Nutrición y Alimentación, Medicina Biorreguladora, Medicina Funcional y Medicina del Estilo de Vida.',
    knowsAbout: [
      'Medicina integrativa',
      'Psiconeuroinmunología clínica',
      'Nutrición y alimentación',
      'Medicina biorreguladora',
      'Medicina funcional',
      'Medicina del estilo de vida',
    ],
    url: `${SITIO}/`,
    image: `${SITIO}${IMAGEN_COMPARTIR}`,
    email: `mailto:${CORREO}`,
    sameAs: [INSTAGRAM, LINKEDIN],
  }

  if (ruta === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITIO}/#sitio`,
          url: `${SITIO}/`,
          name: NOMBRE_SITIO,
          inLanguage: 'es',
          publisher: { '@id': ID_DRA },
        },
        dra,
      ],
    }
  }

  if (ruta === '/curso') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Course',
          name: '¿Por qué me inflamo?',
          description: METADATOS['/curso'].descripcion,
          url: urlCanonica('/curso'),
          inLanguage: 'es',
          provider: { '@id': ID_DRA },
          teaches: [
            'Inflamación vs. distensión abdominal',
            'Factores alimenticios que inflaman',
            'Hábitos que inflaman',
            'Por dónde empezar: hábitos, alimentación y suplementación',
          ],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: 'PT1H38M',
            instructor: { '@id': ID_DRA },
          },
        },
        dra,
      ],
    }
  }

  return null
}

/** Bloque de <head> estático para una ruta (título, descripción, OG, Twitter, JSON-LD). */
export function bloqueMetadatos(ruta: Ruta) {
  const { titulo, descripcion } = METADATOS[ruta]
  const url = urlCanonica(ruta)
  const imagen = `${SITIO}${IMAGEN_COMPARTIR}`
  const lineas = [
    `<title>${escapar(titulo)}</title>`,
    `<meta name="description" content="${escapar(descripcion)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_CL" />`,
    `<meta property="og:site_name" content="${escapar(NOMBRE_SITIO)}" />`,
    `<meta property="og:title" content="${escapar(titulo)}" />`,
    `<meta property="og:description" content="${escapar(descripcion)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${imagen}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Dra. Daniela Bustos — Medicina Integrativa" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapar(titulo)}" />`,
    `<meta name="twitter:description" content="${escapar(descripcion)}" />`,
    `<meta name="twitter:image" content="${imagen}" />`,
  ]
  const datos = datosEstructurados(ruta)
  if (datos) {
    // `<` escapado para que ningún texto pueda cerrar el <script>.
    const json = JSON.stringify(datos).replace(/</g, '\\u003c')
    lineas.push(`<script type="application/ld+json">${json}</script>`)
  }
  return lineas.join('\n    ')
}
