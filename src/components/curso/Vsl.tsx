import { RamaVslDerecha, RamaVslIzquierda } from '../decor/RamasCurso'
import BotonCta from '../ui/BotonCta'

/**
 * TODO (site/CLAUDE.md, "Lo que está pendiente"): el marco 16:9 es un
 * placeholder. Falta el reproductor real del VSL.
 *
 * Nota: el prototipo NO bloquea este video detrás de un formulario. El estado
 * `unlocked` que describe site/CLAUDE.md no existe en el markup ni en la lógica
 * de site/curso/index.html, así que no se porta nada de eso.
 */
export default function Vsl() {
  return (
    <section
      id="video"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,100px)]"
    >
      <RamaVslIzquierda />
      <RamaVslDerecha />

      <div className="relative mx-auto max-w-[980px] text-center">
        <p className="m-0 mb-4 font-label text-[11px] font-light tracking-[0.28em] text-rose uppercase">
          Masterclass gratuita · 40 minutos
        </p>
        <h2 className="mx-auto my-0 max-w-[22ch] font-display text-[clamp(26px,3vw,40px)] leading-[1.16] font-normal text-pretty text-white">
          Mira la clase antes de decidir si quieres consultar.
        </h2>

        <div className="mt-[clamp(30px,4vw,46px)] grid aspect-video content-center justify-items-center gap-[18px] overflow-hidden rounded-[3px] border border-rose/32 bg-wine-footer p-6">
          <span className="grid h-[78px] w-[78px] place-items-center rounded-full border border-rose/60 bg-rose/15">
            <span
              aria-hidden="true"
              className="ml-[5px] h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-blush"
            />
          </span>
          <span className="font-label text-[11px] font-normal tracking-[0.22em] text-blush uppercase">
            Pendiente · insertar reproductor del VSL
          </span>
        </div>

        <div className="mt-[clamp(28px,3.5vw,40px)] flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <BotonCta
            variante="claro"
            href="#inscripcion"
            flecha
            className="px-8 py-[17px] text-xs font-medium tracking-[0.16em]"
          >
            Quiero el material completo
          </BotonCta>
          <span className="font-label text-[11px] font-light tracking-[0.14em] text-rose/90 uppercase">
            Sin costo · Sin compromiso
          </span>
        </div>
      </div>
    </section>
  )
}
