/**
 * Prerender: genera el HTML estático de cada ruta con el contenido ya
 * renderizado y sus metadatos (título, descripción, Open Graph, JSON-LD).
 *
 * Sin esto la SPA entrega `<div id="root"></div>` vacío y los crawlers que no
 * ejecutan JS (la mayoría de los de IA, y las previsualizaciones de WhatsApp o
 * Instagram) no ven nada. En el navegador, `main.tsx` hidrata ese HTML.
 *
 * Corre después de `vite build` (cliente, en dist/) y de
 * `vite build --ssr src/entry-server.tsx` (servidor, en dist-ssr/). Ver el
 * script `build` de package.json.
 */
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const raiz = resolve(import.meta.dirname, '..')
const dist = resolve(raiz, 'dist')
const distSsr = resolve(raiz, 'dist-ssr')

const MARCA_METADATOS = '<!-- metadatos -->'
const RAIZ_VACIA = '<div id="root"></div>'

const { render, METADATOS, bloqueMetadatos } = await import(
  pathToFileURL(resolve(distSsr, 'entry-server.js')).href
)

const plantilla = readFileSync(resolve(dist, 'index.html'), 'utf8')
for (const marca of [MARCA_METADATOS, RAIZ_VACIA]) {
  if (!plantilla.includes(marca)) {
    throw new Error(`prerender: dist/index.html no tiene ${marca}`)
  }
}

for (const ruta of Object.keys(METADATOS)) {
  const html = plantilla
    .replace(MARCA_METADATOS, bloqueMetadatos(ruta))
    .replace(RAIZ_VACIA, `<div id="root">${render(ruta)}</div>`)
  writeFileSync(resolve(dist, METADATOS[ruta].archivo), html)
  console.log(`prerender: ${ruta} → dist/${METADATOS[ruta].archivo}`)
}

rmSync(distSsr, { recursive: true, force: true })
