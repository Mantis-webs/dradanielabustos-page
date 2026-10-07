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
              Motivos de consulta que casi nunca vienen solos.
            </h2>
          </div>
          <div className="grid gap-3 text-[15px] leading-[1.76] font-light text-pretty text-tinta-suave">
            <p className="m-0">
              Suelen aparecer juntos, y ahí está la clave: no son cinco problemas
              distintos, son un mismo sistema desregulado.{' '}
              <strong className="font-semibold text-tinta">
                No se trata de encontrar una única causa para todo.
              </strong>
            </p>
            <p className="m-0">
              Se trata de entender el contexto completo y priorizar aquellos
              factores que podemos modificar.
            </p>
          </div>
        </div>

        {/*
          Rejilla de 6 columnas: 3 + 2 en escritorio (las dos últimas más
          anchas), 2 columnas en tablet y 1 en móvil. Con 5 tarjetas en una
          sola fila cada una quedaba en ~200px y el texto largo se apretaba.
        */}
        <div className="relative mt-[clamp(36px,4.5vw,56px)] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-6">
          {MOTIVOS.map((motivo, i) => (
            <article
              key={motivo.titulo}
              className={`flex flex-col rounded-[3px] border border-wine/10 border-t-2 border-t-rose bg-white px-7 py-8 ${
                i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              } ${i === MOTIVOS.length - 1 ? 'sm:col-span-2' : ''}`}
            >
              <div
                aria-hidden="true"
                className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-blush-pastilla text-[26px] leading-none"
              >
                {motivo.icono}
              </div>
              <h3 className="m-0 mb-3 font-display text-[22px] leading-[1.2] font-medium text-wine">
                {motivo.titulo}
              </h3>
              <p className="m-0 max-w-[48ch] text-[14.5px] leading-[1.7] font-light text-pretty text-tinta-suave">
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
