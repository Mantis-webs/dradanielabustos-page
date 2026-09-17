import { MOTIVOS } from '../../data/contenido'
import { RamaMotivos } from '../decor/RamasHome'
import Kicker from '../ui/Kicker'

export default function Motivos() {
  return (
    <section
      id="motivos"
      className="relative overflow-hidden bg-blush-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <div className="relative z-10 mx-auto max-w-[1080px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-end gap-[clamp(28px,4vw,56px)]">
          <div>
            <Kicker className="mb-4">Por qué vienen mis pacientes</Kicker>
            <h2 className="m-0 font-display text-[clamp(27px,3.2vw,44px)] leading-[1.14] font-normal text-pretty text-wine">
              Cinco motivos que casi nunca vienen solos.
            </h2>
          </div>
          <p className="m-0 text-[15px] leading-[1.76] font-light text-pretty text-tinta-suave">
            Suelen aparecer juntos, y ahí está la pista: no son cinco problemas
            distintos, son un mismo sistema desregulado mostrándose por donde
            puede.
          </p>
        </div>

        <div className="relative mt-[clamp(36px,4.5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[18px]">
          {MOTIVOS.map((motivo) => (
            <article
              key={motivo.titulo}
              className="rounded-[3px] border border-wine/10 bg-white px-6 py-7"
            >
              <h3 className="m-0 mb-3 font-display text-xl font-medium text-wine">
                {motivo.titulo}
              </h3>
              <p className="m-0 text-sm leading-[1.7] font-light text-tinta-suave">
                {motivo.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
      <RamaMotivos />
    </section>
  )
}
