import logoIconoBlanco from '../../assets/img/logo-icono-blanco.png'
import { BULLETS_GUIA } from '../../data/contenido'
import FormularioLeadMagnet from '../FormularioLeadMagnet'
import Kicker from '../ui/Kicker'

/**
 * Lead magnet. Layout del prototipo: argumento y formulario a la izquierda,
 * mockup de portada a la derecha, y el formulario desnudo sobre el fondo blush
 * —sin tarjeta— en una sola línea de correo más botón.
 *
 * El formulario pide únicamente el correo y el consentimiento de privacidad
 * (decisión final del 2026-09-16, ver README punto 4). Al ser un solo campo
 * vuelve a caber en la línea del prototipo; el CSS que lo consigue está en
 * `docs/ghl-form-estilos.css`, bloque 8, y se pega SOLO en este formulario.
 */
export default function Guia() {
  return (
    <section
      id="guia"
      className="relative overflow-hidden bg-blush px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)]"
    >
      <div className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0">
          <Kicker className="mb-4">Guía gratuita</Kicker>
          <h2 className="m-0 font-display text-[clamp(26px,3.2vw,42px)] leading-[1.14] font-normal text-pretty text-wine">
            Empieza a ordenar tu caso, hoy.
          </h2>
          <p className="mt-[22px] mb-0 max-w-[44ch] text-[15px] leading-[1.76] font-light text-pretty text-tinta-suave">
            Una guía breve para llegar a tu próxima consulta —conmigo o con quien
            te trate— con la información ordenada y las preguntas correctas.
          </p>
          <ul className="mt-[26px] mb-0 grid list-none gap-3 p-0 text-sm leading-[1.6] font-light text-tinta-suave">
            {BULLETS_GUIA.map((bullet) => (
              <li key={bullet} className="flex items-baseline gap-3">
                <span aria-hidden="true" className="text-rose-oscuro">
                  —
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-[18px] max-w-[460px]">
            <FormularioLeadMagnet />
          </div>

          <p className="mt-[14px] mb-0 text-[11.5px] font-light text-tinta-tenue">
            Un correo, la guía y nada más. Sin spam.
          </p>
        </div>

        <div className="grid min-w-0 place-items-center">
          <div className="grid aspect-3/4 w-full max-w-[320px] content-between rounded-[2px] bg-wine-oscuro p-[clamp(24px,3vw,36px)] shadow-[0_30px_70px_-40px_rgba(74,18,31,0.75)]">
            <div className="grid justify-items-start gap-[18px]">
              <img
                src={logoIconoBlanco}
                alt=""
                className="block h-[46px] w-[46px] opacity-90"
              />
              <p className="m-0 font-label text-[9.5px] font-light tracking-[0.26em] text-rose uppercase">
                Guía para pacientes
              </p>
              <p className="m-0 font-display text-[clamp(22px,2.2vw,28px)] leading-[1.2] font-normal text-pretty text-white">
                Cómo preparar tu próxima consulta médica
              </p>
            </div>
            <div className="grid gap-3">
              <span className="h-px bg-rose/40" />
              <p className="m-0 font-label text-[9.5px] font-light tracking-[0.2em] text-blush/70 uppercase">
                Dra. Daniela Bustos Riquelme
              </p>
            </div>
          </div>
          <p className="mt-4 mb-0 font-label text-[9.5px] font-normal tracking-[0.18em] text-rose-oscuro uppercase">
            Portada de ejemplo
          </p>
        </div>
      </div>
    </section>
  )
}
