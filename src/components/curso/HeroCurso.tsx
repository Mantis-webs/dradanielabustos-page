import { RamaHeroCurso } from '../decor/RamasCurso'
import Kicker from '../ui/Kicker'

/** Copy del documento de la clienta "pagina curso.pdf". */
export default function HeroCurso() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] pt-[clamp(72px,11vw,132px)] pb-[clamp(64px,9vw,108px)]"
    >
      <RamaHeroCurso />
      <div className="relative z-10 mx-auto max-w-[820px] text-center">
        <Kicker tono="oscuro" className="mb-5">
          Curso online · Dra. Daniela Bustos
        </Kicker>
        <h1 className="m-0 font-display text-[clamp(34px,5.4vw,68px)] leading-[1.08] font-normal tracking-[-0.015em] text-pretty text-white">
          ¿Por qué me inflamo?
        </h1>
        <p className="mx-auto mt-[26px] mb-0 max-w-[50ch] text-[clamp(15px,1.35vw,17px)] leading-[1.78] font-light text-pretty text-white/85">
          Entiende qué hay detrás de tu hinchazón y aprende por dónde empezar a
          cuidar tu salud digestiva.
        </p>
      </div>
    </section>
  )
}
