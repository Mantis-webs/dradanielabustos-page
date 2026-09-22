import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SelectorColores from './components/ui/SelectorColores'
import Curso from './routes/Curso'
import Home from './routes/Home'

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
  return (
    <>
      <ScrollAlCambiarDeRuta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SelectorColores />
    </>
  )
}
