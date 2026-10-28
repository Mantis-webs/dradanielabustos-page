import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AvisoCookies from './components/ui/AvisoCookies'
import SelectorColores from './components/ui/SelectorColores'
import { useMontado } from './hooks/useMontado'
import Curso from './routes/Curso'
import Home from './routes/Home'
import Privacidad from './routes/Privacidad'

/**
 * El prototipo son dos documentos HTML separados, así que cambiar de vista
 * siempre aterriza arriba. Con un router de cliente hay que reproducirlo a mano,
 * salvo cuando la URL trae un ancla: ahí manda el ancla.
 */
function ScrollAlCambiarDeRuta() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  // El selector lee la paleta guardada en localStorage: solo en el navegador.
  const montado = useMontado()

  return (
    <>
      <ScrollAlCambiarDeRuta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Después de <Routes>: la página vista se registra con el título ya actualizado. */}
      <AvisoCookies />
      {montado && <SelectorColores />}
    </>
  )
}
