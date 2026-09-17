import { Link } from 'react-router-dom'
import logoWordmark from '../../assets/img/logo-wordmark-blanco.png'
import { AGENCIA, CORREO, INSTAGRAM, LINKEDIN } from '../../data/enlaces'
import RamaFooter from '../decor/RamaFooter'
import type { EnlaceNav } from './Header'

const ENLACE = 'text-blush/82 hover:text-rose'

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
              className="text-sm font-light text-blush/86 hover:text-rose"
            >
              Instagram @dra.danielabustos
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-blush/86 hover:text-rose"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CORREO}`}
              className="text-sm font-light text-blush/86 hover:text-rose"
            >
              {CORREO}
            </a>
            <p className="m-0 mt-0.5 text-[10.5px] font-light tracking-[0.02em] text-blush/50">
              Pendiente · confirmar correo real
            </p>
          </div>
        </div>

        <div className="mt-[clamp(36px,4vw,56px)] flex flex-wrap justify-between gap-x-7 gap-y-[14px] border-t border-rose/22 pt-6 text-[11.5px] font-light text-blush/60">
          <p className="m-0">
            © 2026 Dra. Daniela Bustos Riquelme. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-[14px]">
            <span>Powered by</span>
            <a
              href={AGENCIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[3px] border border-dashed border-rose/40 px-[14px] py-[7px] font-label text-[10.5px] tracking-[0.12em] text-blush/82 uppercase hover:border-rose hover:text-rose"
            >
              Logo Zabroso
            </a>
            {/* TODO: la agencia no entregó el enlace ni el logo real. */}
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[3px] border border-dashed border-rose/40 px-[14px] py-[7px] font-label text-[10.5px] tracking-[0.12em] text-blush/82 uppercase hover:border-rose hover:text-rose"
            >
              Logo MK Agencia
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
