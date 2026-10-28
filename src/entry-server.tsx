/* eslint-disable react-refresh/only-export-components -- entrada del prerender en Node, no pasa por fast refresh */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import type { Ruta } from './data/seo'

export { METADATOS, bloqueMetadatos } from './data/seo'

/**
 * Entrada del prerender (`scripts/prerender.mjs`): el mismo árbol que
 * `main.tsx`, pero con StaticRouter y renderizado a string en Node.
 */
export function render(ruta: Ruta) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={ruta} basename={import.meta.env.BASE_URL}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
