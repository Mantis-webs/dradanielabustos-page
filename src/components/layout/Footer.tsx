import { Link } from 'react-router-dom'
import logoWordmark from '../../assets/img/logo-wordmark-blanco.png'
import { CORREO, INSTAGRAM, LINKEDIN } from '../../data/enlaces'
import RamaFooter from '../decor/RamaFooter'
import type { EnlaceNav } from './Header'

const ENLACE = 'text-blush/82 hover:text-rose'

function IconoInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function IconoLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="8.5" r="1.1" fill="currentColor" />
      <path d="M8 11.5v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 17.5v-3.6c0-1.3 1-2.4 2.2-2.4s2 1 2 2.3v3.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11.5v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconoCorreo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 6.5l8 6.2 8-6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Footer compartido. Solo cambia la columna de navegación entre / y /curso.
 */
export default function Footer({ enlaces }: { enlaces: EnlaceNav[] }) {
  return (
    <footer className="relative overflow-hidden bg-wine-footer px-[clamp(20px,5vw,72px)] pt-[clamp(48px,6vw,72px)] pb-8 text-blush/80">
      <RamaFooter />
      <div className="relative mx-auto max-w-[1080px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-start gap-[clamp(28px,4vw,56px)]">
          <div className="grid justify-items-start gap-4">
            <img
              src={logoWordmark}
              alt="Dra. Daniela Bustos — Medicina Integrativa"
              className="block w-full max-w-[240px]"
            />
            <p className="m-0 max-w-[30ch] text-[13.5px] leading-[1.7] font-light text-blush/70">
              Medicina integrativa y psiconeuroinmunología clínica. Consulta
              online entre Barcelona y Chile.
            </p>
          </div>

          <nav className="grid gap-3 font-label text-[11px] font-light tracking-[0.18em] uppercase">
            {enlaces.map((enlace) =>
              enlace.to ? (
                <Link key={enlace.label} to={enlace.to} className={ENLACE}>
                  {enlace.label}
                </Link>
              ) : (
                <a
                  key={enlace.label}
                  href={enlace.href}
                  {...(enlace.href?.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={ENLACE}
                >
                  {enlace.label}
                </a>
              ),
            )}
          </nav>

          <div className="grid gap-3">
            <p className="m-0 font-label text-[10.5px] font-normal tracking-[0.22em] text-rose uppercase">
              Contacto
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light text-blush/86 hover:text-rose"
            >
              <IconoInstagram className="size-4 shrink-0" />
              Instagram @dra.danielabustos
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light text-blush/86 hover:text-rose"
            >
              <IconoLinkedIn className="size-4 shrink-0" />
              LinkedIn
            </a>
            <a
              href={`mailto:${CORREO}`}
              className="inline-flex items-center gap-2 text-sm font-light text-blush/86 hover:text-rose"
            >
              <IconoCorreo className="size-4 shrink-0" />
              {CORREO}
            </a>
          </div>
        </div>

        <div className="mt-[clamp(36px,4vw,56px)] flex flex-wrap justify-between gap-x-7 gap-y-[14px] border-t border-rose/22 pt-6 text-[11.5px] font-light text-blush/60">
          <p className="m-0">
            © 2026 Dra. Daniela Bustos Riquelme. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-[6px]">
            <span>Powered by</span>
            {/* TODO: la agencia no entregó el enlace real de MK Agencia. */}
            <a
              href="#"
              className="text-blush/82 hover:text-rose"
            >
              MK Agencia.cl
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
