import { TESTIMONIOS } from '../../data/contenido'
import EtiquetaPendiente from '../ui/EtiquetaPendiente'
import Kicker from '../ui/Kicker'

/**
 * TODO (README punto 9): los tres testimonios son placeholders. Se decidió
 * descartar Trustpilot y traer las últimas reseñas de Encuadrado por scraping,
 * pero la arquitectura (Worker con cron, SSR, o cacheado) está sin definir.
 * Hasta entonces se conserva el aviso "Pendiente" visible del prototipo.
 */
export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-blush-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <div className="relative mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[620px] text-center">
          <Kicker className="mb-4">Reseñas verificadas</Kicker>
          <h2 className="m-0 font-display text-[clamp(27px,3.2vw,44px)] leading-[1.14] font-normal text-pretty text-wine">
            Historias reales, cambios que se sienten.
          </h2>
          <EtiquetaPendiente className="mt-[18px]">
            Pendiente · reemplazar por reseñas reales de Trustpilot
          </EtiquetaPendiente>
        </div>

        <div className="mt-[clamp(36px,4.5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {TESTIMONIOS.map((texto) => (
            <figure
              key={texto}
              className="m-0 grid gap-5 rounded-[3px] border border-wine/10 bg-white px-7 py-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] leading-[0.6] text-rose"
              >
                “
              </span>
              <blockquote className="m-0 text-[14.5px] leading-[1.75] font-light text-pretty text-tinta">
                {texto}
              </blockquote>
              <figcaption className="font-label text-[10.5px] font-medium tracking-[0.16em] text-rose-oscuro uppercase">
                Placeholder · Paciente
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-5 mb-0 font-label text-[13px] font-light text-[#1A1A1A]">
          powered by{' '}
          <a
            href="https://www.trustpilot.com/review/PENDIENTE-perfil-real"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#1A1A1A] underline underline-offset-[3px]"
          >
            Trustpilot
          </a>{' '}
          — ver todas las reseñas
        </p>
      </div>
    </section>
  )
}
