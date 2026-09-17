import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcono from '../../assets/img/logo-icono-wine.png'
import BotonCta from '../ui/BotonCta'
import MenuMovil from './MenuMovil'

export type EnlaceNav = {
  label: string
  /** Ancla dentro de la página. */
  href?: string
  /** Ruta interna de react-router. */
  to?: string
  /** El enlace a la masterclass va en rose oscuro en la home. */
  destacado?: boolean
}

export type EnlaceCta = {
  label: string
  href: string
  externo?: boolean
}

const ENLACE = 'text-wine hover:text-rose-oscuro'

/**
 * Header sticky compartido. La variante `home` lleva el lockup completo con la
 * bajada "Medicina Integrativa"; la variante `curso` solo el nombre.
 */
export default function Header({
  variante,
  enlaces,
  cta,
}: {
  variante: 'home' | 'curso'
  enlaces: EnlaceNav[]
  cta: EnlaceCta
}) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const esHome = variante === 'home'

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-wine/10 bg-blush/92 px-[clamp(20px,5vw,72px)] py-4 backdrop-blur-[10px]">
        {esHome ? (
          <a href="#inicio" className="flex shrink-0 items-center gap-3">
            <img src={logoIcono} alt="" className="block h-10 w-10" />
            <span className="block leading-none">
              <span className="block font-display text-[19px] font-medium tracking-[0.04em] text-wine">
                Dra. Daniela Bustos
              </span>
              <span className="mt-[5px] block font-label text-[9.5px] font-light tracking-[0.3em] text-rose-oscuro uppercase">
                Medicina Integrativa
              </span>
            </span>
          </a>
        ) : (
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img src={logoIcono} alt="" className="block h-[34px] w-[34px]" />
            <span className="font-display text-[17px] font-medium tracking-[0.02em] text-wine">
              Dra. Daniela Bustos
            </span>
          </Link>
        )}

        {/* Nav de escritorio */}
        <nav className="hidden items-center justify-end gap-[clamp(13px,1.8vw,26px)] font-label text-[11px] font-light tracking-[0.15em] text-nowrap text-wine uppercase lg:flex">
          {enlaces.map((enlace) =>
            enlace.to ? (
              <Link
                key={enlace.label}
                to={enlace.to}
                className={
                  enlace.destacado
                    ? 'font-normal text-rose-oscuro hover:text-wine'
                    : ENLACE
                }
              >
                {enlace.label}
              </Link>
            ) : (
              <a
                key={enlace.label}
                href={enlace.href}
                className={
                  enlace.destacado
                    ? 'font-normal text-rose-oscuro hover:text-wine'
                    : ENLACE
                }
              >
                {enlace.label}
              </a>
            ),
          )}
          <BotonCta
            variante="wine"
            href={cta.href}
            externo={cta.externo}
            className="px-6 py-[13px] text-[11px] font-medium tracking-[0.14em]"
          >
            {cta.label}
          </BotonCta>
        </nav>

        {/* Disparador del menú móvil */}
        <button
          type="button"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          className="relative z-50 -mr-2 grid h-11 w-11 shrink-0 cursor-pointer place-items-center border-none bg-transparent lg:hidden"
        >
          <span className="grid h-[14px] w-6 items-center">
            <span
              className={`col-start-1 row-start-1 h-px w-full bg-wine transition-transform ${
                menuAbierto ? 'rotate-45' : '-translate-y-[6px]'
              }`}
            />
            <span
              className={`col-start-1 row-start-1 h-px w-full bg-wine transition-opacity ${
                menuAbierto ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`col-start-1 row-start-1 h-px w-full bg-wine transition-transform ${
                menuAbierto ? '-rotate-45' : 'translate-y-[6px]'
              }`}
            />
          </span>
        </button>
      </header>

      <MenuMovil
        abierto={menuAbierto}
        onCerrar={() => setMenuAbierto(false)}
        enlaces={enlaces}
        cta={cta}
      />
    </>
  )
}
