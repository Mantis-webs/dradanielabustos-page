import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

/**
 * El destino del producto es Cloudflare Pages, que sirve el sitio en la raíz.
 * BASE_PATH queda parametrizable por si además se publica bajo un subpath
 * (por ejemplo GitHub Pages en /dradanielabustos-page/).
 */
const base = process.env.BASE_PATH ?? '/'

/**
 * Fallback SPA para hosts estáticos que no leen `public/_redirects`.
 * Cloudflare Pages usa _redirects; GitHub Pages necesita este 404.html.
 */
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const raiz = dirname(fileURLToPath(import.meta.url))
      const dist = resolve(raiz, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), spaFallback()],
})
