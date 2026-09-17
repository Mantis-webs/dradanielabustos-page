import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BotonCta from '../ui/BotonCta'
import type { EnlaceNav, EnlaceCta } from './Header'

/**
 * Drawer de navegación para móvil.
 *
 * No existe en el prototipo: ahí la nav es un flex-wrap que se desarma en
 * pantallas chicas y está anotado como pendiente ("Falta el menú hamburguesa y
 * una revisión responsive de móvil"). En el producto se resuelve.
 *
 * El corte es en `lg` (1024px), no en `md`: la nav de la home lleva cinco
 * enlaces más el botón de agendar, y por debajo de ese ancho el botón se
 * sale de la pantalla y "Quién soy" parte en dos líneas.
 */
export default function MenuMovil({
  abierto,
  onCerrar,
  enlaces,
  cta,
}: {
  abierto: boolean
  onCerrar: () => void
  enlaces: EnlaceNav[]
  cta: EnlaceCta
}) {
  useEffect(() => {
    if (!abierto) return

    const onTecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCerrar()
    }
    const overflowPrevio = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onTecla)

    return () => {
      document.body.style.overflow = overflowPrevio
      window.removeEventListener('keydown', onTecla)
    }
  }, [abierto, onCerrar])

  if (!abierto) return null

  return (
    <div
      id="menu-movil"
      className="fixed inset-0 z-40 flex flex-col bg-blush pt-[76px] lg:hidden"
    >
      <nav className="flex flex-col gap-1 px-[clamp(20px,5vw,72px)] py-8">
        {enlaces.map((enlace) =>
          enlace.to ? (
            <Link
              key={enlace.label}
              to={enlace.to}
              onClick={onCerrar}
              className="border-b border-wine/10 py-4 font-label text-sm font-light tracking-[0.15em] text-wine uppercase"
            >
              {enlace.label}
            </Link>
          ) : (
            <a
              key={enlace.label}
              href={enlace.href}
              onClick={onCerrar}
              className="border-b border-wine/10 py-4 font-label text-sm font-light tracking-[0.15em] text-wine uppercase"
            >
              {enlace.label}
            </a>
          ),
        )}
        <BotonCta
          variante="wine"
          href={cta.href}
          externo={cta.externo}
          className="mt-8 px-6 py-4 text-[11px] font-medium tracking-[0.14em]"
        >
          {cta.label}
        </BotonCta>
      </nav>
    </div>
  )
}
