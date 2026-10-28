import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EVENTO_ABRIR_COOKIES, HAY_ANALITICA } from '../../data/analitica'
import { useAnalitica } from '../../hooks/useAnalitica'
import { useMontado } from '../../hooks/useMontado'

type Decision = 'aceptado' | 'rechazado'

const CLAVE = 'consentimiento-cookies'

function leer(): Decision | null {
  try {
    const valor = localStorage.getItem(CLAVE)
    return valor === 'aceptado' || valor === 'rechazado' ? valor : null
  } catch {
    return null
  }
}

function guardar(decision: Decision) {
  try {
    localStorage.setItem(CLAVE, decision)
  } catch {
    // Sin almacenamiento la decisión vale solo para esta visita.
  }
}

const BOTON =
  'cursor-pointer rounded-full px-5 py-[11px] font-label text-[10.5px] font-medium tracking-[0.14em] uppercase transition-colors'

/**
 * Aviso de cookies con opt-in previo: GA4, Clarity y Meta Pixel no cargan
 * hasta que la persona acepta. Rechazar es tan fácil como aceptar (mismo
 * peso visual), y la decisión se puede cambiar desde el footer.
 *
 * Si no hay ningún ID de analítica configurado, no se monta nada.
 */
export default function AvisoCookies() {
  const montado = useMontado()
  const [decision, setDecision] = useState<Decision | null>(leer)
  const [abierto, setAbierto] = useState(() => HAY_ANALITICA && leer() === null)

  useAnalitica(HAY_ANALITICA && decision === 'aceptado')

  useEffect(() => {
    const abrir = () => setAbierto(true)
    window.addEventListener(EVENTO_ABRIR_COOKIES, abrir)
    return () => window.removeEventListener(EVENTO_ABRIR_COOKIES, abrir)
  }, [])

  // Fuera del prerender: depende de localStorage.
  if (!montado || !HAY_ANALITICA || !abierto) return null

  const decidir = (nueva: Decision) => {
    guardar(nueva)
    setAbierto(false)
    // Retirar el consentimiento tiene que descargar los scripts ya cargados,
    // y la única forma confiable es recargar.
    if (decision === 'aceptado' && nueva === 'rechazado') {
      window.location.reload()
      return
    }
    setDecision(nueva)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-4 bottom-4 z-[90] max-w-[440px] rounded-[3px] border border-wine/12 bg-white p-6 text-tinta shadow-[0_12px_40px_rgba(60,20,30,0.18)] sm:right-auto"
    >
      <p className="m-0 text-[13.5px] leading-[1.65] font-light text-tinta-suave">
        Usamos cookies de analítica y publicidad (Google Analytics, Microsoft
        Clarity y Meta) para entender cómo se usa el sitio y mostrarte
        contenido relevante. Solo se activan si aceptas. Más detalle en la{' '}
        <Link to="/privacidad" className="text-wine underline underline-offset-2">
          política de privacidad
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => decidir('aceptado')}
          className={`${BOTON} border border-wine bg-wine text-white hover:bg-wine-oscuro`}
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => decidir('rechazado')}
          className={`${BOTON} border border-wine text-wine hover:bg-wine/8`}
        >
          Rechazar
        </button>
      </div>
    </div>
  )
}
