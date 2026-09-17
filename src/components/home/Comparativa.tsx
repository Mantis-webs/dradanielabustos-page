import { CONVENCIONAL, INTEGRATIVO } from '../../data/contenido'
import {
  RamaComparativaDerecha,
  RamaComparativaIzquierda,
} from '../decor/RamasHome'
import Kicker from '../ui/Kicker'

export default function Comparativa() {
  return (
    <section
      id="comparativa"
      className="relative overflow-hidden bg-blush-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <RamaComparativaIzquierda />
      <RamaComparativaDerecha />

      <div className="relative mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[660px] text-center">
          <Kicker className="mb-4">Dos enfoques, una gran diferencia</Kicker>
          <h2 className="m-0 font-display text-[clamp(27px,3.2vw,44px)] leading-[1.14] font-normal text-pretty text-wine">
            No solo tratamos síntomas, abordamos el origen.
          </h2>
        </div>

        <div className="mt-[clamp(36px,4.5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-0.5 overflow-hidden rounded-[3px] border border-wine/15 bg-wine/15">
          <div className="bg-blush-panel p-[clamp(26px,3.4vw,42px)]">
            <p className="m-0 mb-6 font-label text-[11px] font-medium tracking-[0.22em] text-tinta-tenue uppercase">
              Enfoque convencional
            </p>
            <ul className="m-0 grid list-none gap-[18px] p-0 text-[14.5px] leading-[1.6] font-light text-tinta-suave">
              {CONVENCIONAL.map((item) => (
                <li key={item} className="flex items-start gap-[14px]">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-wine/28 text-[11px] text-tinta-tenue"
                  >
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blush-panel-claro p-[clamp(26px,3.4vw,42px)]">
            <p className="m-0 mb-6 font-label text-[11px] font-medium tracking-[0.22em] text-wine uppercase">
              Enfoque integrativo
            </p>
            <ul className="m-0 grid list-none gap-[18px] p-0 text-[14.5px] leading-[1.6] font-light text-tinta">
              {INTEGRATIVO.map((item) => (
                <li key={item} className="flex items-start gap-[14px]">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wine text-[11px] text-white"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 mb-0 text-center text-[13px] font-light text-tinta-tenue">
          La medicina integrativa no reemplaza a tu médico tratante: se suma a
          él.
        </p>
      </div>
    </section>
  )
}
