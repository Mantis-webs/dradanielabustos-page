import { RamaHeroCurso } from '../decor/RamasCurso'
import BotonCta from '../ui/BotonCta'
import EtiquetaPendiente from '../ui/EtiquetaPendiente'

/**
 * TODO (README punto 3): el copy del hero de la masterclass no está definido.
 * Se conserva el placeholder del prototipo y su aviso visible en vez de
 * inventar un titular.
 */
export default function HeroCurso() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] pt-[clamp(72px,11vw,132px)] pb-[clamp(64px,9vw,108px)]"
    >
      <RamaHeroCurso />
      <div className="relative z-10 mx-auto max-w-[820px] text-center">
        <EtiquetaPendiente tono="rose" className="mb-5">
          Pendiente · definir copy del hero
        </EtiquetaPendiente>
        <h1 className="m-0 font-display text-[clamp(34px,5.4vw,68px)] leading-[1.08] font-normal tracking-[-0.015em] text-pretty text-white">
          Titular del curso
        </h1>
        <p className="mx-auto mt-[26px] mb-0 max-w-[50ch] text-[clamp(15px,1.35vw,17px)] leading-[1.78] font-light text-pretty text-white/85">
          Bajada pendiente. Aquí va la promesa de la clase: qué se lleva quien la
          ve y por qué le sirve antes de cualquier consulta.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-4">
          <BotonCta
            variante="claro"
            href="#video"
            flecha
            className="px-9 py-[18px] text-xs font-medium tracking-[0.16em]"
          >
            Ver la clase
          </BotonCta>
        </div>
      </div>
    </section>
  )
}
