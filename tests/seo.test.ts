import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  METADATOS,
  SITIO,
  bloqueMetadatos,
  urlCanonica,
  type Ruta,
} from '../src/data/seo'

const RUTAS = Object.keys(METADATOS) as Ruta[]

function jsonLd(bloque: string) {
  const match = bloque.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )
  return match ? JSON.parse(match[1]) : null
}

describe('METADATOS', () => {
  it.each(RUTAS)('%s: el título mide entre 30 y 60 caracteres', (ruta) => {
    const { length } = METADATOS[ruta].titulo
    expect(length).toBeGreaterThanOrEqual(30)
    expect(length).toBeLessThanOrEqual(60)
  })

  it.each(RUTAS)('%s: la descripción mide entre 70 y 160 caracteres', (ruta) => {
    const { length } = METADATOS[ruta].descripcion
    expect(length).toBeGreaterThanOrEqual(70)
    expect(length).toBeLessThanOrEqual(160)
  })

  it('no repite títulos ni descripciones entre rutas', () => {
    const titulos = RUTAS.map((ruta) => METADATOS[ruta].titulo)
    const descripciones = RUTAS.map((ruta) => METADATOS[ruta].descripcion)
    expect(new Set(titulos).size).toBe(RUTAS.length)
    expect(new Set(descripciones).size).toBe(RUTAS.length)
  })

  it('el sitemap lista exactamente las rutas de METADATOS', () => {
    const sitemap = readFileSync(resolve('public/sitemap.xml'), 'utf8')
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
    expect(urls.sort()).toEqual(RUTAS.map(urlCanonica).sort())
  })
})

describe('bloqueMetadatos', () => {
  it.each(RUTAS)('%s: trae canonical, Open Graph y Twitter de la ruta', (ruta) => {
    const bloque = bloqueMetadatos(ruta)
    const url = urlCanonica(ruta)
    expect(bloque).toContain(`<link rel="canonical" href="${url}" />`)
    expect(bloque).toContain(`<meta property="og:url" content="${url}" />`)
    expect(bloque).toContain(`content="${SITIO}/og-imagen.jpg"`)
    expect(bloque).toContain('name="twitter:card" content="summary_large_image"')
  })

  it('escapa comillas y < en los textos', () => {
    const bloque = bloqueMetadatos('/curso')
    // El título lleva "¿" y "—": tienen que llegar tal cual, sin romper el atributo.
    expect(bloque).toContain('<title>¿Por qué me inflamo? — Curso online')
    expect(bloque).not.toMatch(/content="[^"]*<[^"]*"/)
  })

  it('home: JSON-LD válido con WebSite y Person enlazados', () => {
    const datos = jsonLd(bloqueMetadatos('/'))
    const tipos = datos['@graph'].map((nodo: { '@type': string }) => nodo['@type'])
    expect(tipos).toEqual(['WebSite', 'Person'])
    const [sitio, persona] = datos['@graph']
    expect(sitio.publisher['@id']).toBe(persona['@id'])
    expect(persona.sameAs).toHaveLength(2)
  })

  it('curso: JSON-LD con Course, duración ISO 8601 y proveedor', () => {
    const datos = jsonLd(bloqueMetadatos('/curso'))
    const curso = datos['@graph'].find(
      (nodo: { '@type': string }) => nodo['@type'] === 'Course',
    )
    expect(curso.hasCourseInstance.courseWorkload).toBe('PT1H38M')
    expect(curso.provider['@id']).toBe(`${SITIO}/#dra`)
  })

  it('privacidad: sin JSON-LD', () => {
    expect(jsonLd(bloqueMetadatos('/privacidad'))).toBeNull()
  })
})
