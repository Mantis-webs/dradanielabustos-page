import logoIconoBlanco from '../../assets/img/logo-icono-blanco.png'
import { BULLETS_GUIA } from '../../data/contenido'
import FormularioLeadMagnet from '../FormularioLeadMagnet'
import Kicker from '../ui/Kicker'

/**
 * Lead magnet.
 *
 * Dos columnas: a la izquierda el argumento —kicker, título, párrafo, bullets—
 * con el mockup de portada al pie; a la derecha el formulario en tarjeta blanca.
 * Es el mismo patrón que `#inscripcion` de /curso, para que las dos capturas del
 * sitio se lean igual.
 *
 * Difiere del prototipo, que captura solo el correo en una línea. El formulario
 * real pide Nombre, Apellido, Correo y Teléfono (README punto 4): cuatro campos
 * apilados necesitan su propia columna, y esos datos valen más para el funnel
 * que ahorrar una línea de diseño.
 *
 * La apariencia del formulario se controla desde el builder de GHL, no desde
 * acá: ver `docs/ghl-form-estilos.css`.
 */
export default function Guia() {
  return (
    <section
      id="guia"
      className="relative overflow-hidden bg-blush px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,120px)]"
    >
      <div className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-[clamp(32px,5vw,64px)] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
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

          <p className="mt-[18px] mb-0 text-[11.5px] leading-[1.6] font-light text-tinta-tenue">
            Un correo, la guía y nada más. Sin spam.
          </p>

          <div className="mt-[clamp(32px,4vw,44px)] grid justify-items-start gap-4">
            <div className="grid aspect-3/4 w-full max-w-[232px] content-between rounded-[2px] bg-wine-oscuro p-6 shadow-[0_26px_58px_-36px_rgba(74,18,31,0.75)]">
              <div className="grid justify-items-start gap-4">
                <img
                  src={logoIconoBlanco}
                  alt=""
                  className="block h-10 w-10 opacity-90"
                />
                <p className="m-0 font-label text-[8.5px] font-light tracking-[0.24em] text-rose uppercase">
                  Guía para pacientes
                </p>
                <p className="m-0 font-display text-[20px] leading-[1.2] font-normal text-pretty text-white">
                  Cómo preparar tu próxima consulta médica
                </p>
              </div>
              <div className="grid gap-2.5">
                <span className="h-px bg-rose/40" />
                <p className="m-0 font-label text-[8px] font-light tracking-[0.18em] text-blush/70 uppercase">
                  Dra. Daniela Bustos Riquelme
                </p>
              </div>
            </div>
            <p className="m-0 font-label text-[9.5px] font-normal tracking-[0.18em] text-rose-oscuro uppercase">
              Portada de ejemplo
            </p>
          </div>
        </div>

        {/* La columna derecha es solo el formulario. */}
        <div className="mx-auto w-full max-w-[520px] min-w-0 rounded-[3px] border border-wine/10 bg-white p-[clamp(24px,3vw,36px)] min-[900px]:mx-0 min-[900px]:max-w-none">
          <FormularioLeadMagnet />
        </div>
      </div>
    </section>
  )
}
