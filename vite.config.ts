import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * El destino del producto es Cloudflare Pages, que sirve el sitio en la raíz.
 * BASE_PATH queda parametrizable por si además se publica bajo un subpath
 * (por ejemplo GitHub Pages en /dradanielabustos-page/).
 */
const base = process.env.BASE_PATH ?? '/'

/*
 * OJO: no volver a emitir un `404.html` en la raíz de `dist/`. Si existe,
 * Cloudflare Pages desactiva el modo SPA y responde 404 en toda ruta que no
 * sea un archivo (pasó con /curso hasta 2026-10-27). El HTML de cada ruta lo
 * genera `scripts/prerender.mjs`.
 */

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
