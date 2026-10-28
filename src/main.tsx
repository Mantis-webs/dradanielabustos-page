import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { METADATOS } from './data/seo'
import './index.css'

const raiz = document.getElementById('root')!

const app = (
  <StrictMode>
    {/*
      basename sale de la config de Vite: '/' en Cloudflare Pages, o el subpath
      si alguna vez se publica bajo uno (BASE_PATH en vite.config.ts).
    */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// En producción el HTML de cada ruta viene prerenderizado
// (scripts/prerender.mjs) y se hidrata. Se renderiza de cero en desarrollo
// (#root vacío) y en rutas inexistentes, donde Pages sirve el HTML de la home
// y el router redirige: hidratarlo daría un desajuste.
const ruta = window.location.pathname.slice(import.meta.env.BASE_URL.length - 1) || '/'
if (raiz.hasChildNodes() && ruta in METADATOS) hydrateRoot(raiz, app)
else createRoot(raiz).render(app)
