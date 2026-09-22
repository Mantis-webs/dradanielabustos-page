import logoIconoBlanco from '../../assets/img/logo-icono-blanco.png'
import { AGENDAMIENTO } from '../../data/enlaces'
import { useParallaxHero } from '../../hooks/useParallaxHero'
import { PuntosHero, RamasHero } from '../decor/RamasHome'
import BotonCta from '../ui/BotonCta'

const PROMESAS = ['Más energía', 'Mejor equilibrio', 'Una vida plena']

export default function Hero() {
  const { hojaRef, ramasRef, puntosRef } = useParallaxHero()

  return (
    <section
      id="inicio"
      className="hero-fondo relative isolate overflow-hidden px-[clamp(20px,5vw,72px)] pt-[clamp(72px,11vh,132px)] pb-[clamp(84px,12vh,140px)]"
    >
      <div
        ref={hojaRef}
        className="pointer-events-none absolute top-[-6%] right-[-8%] w-[min(52vw,620px)] opacity-[0.09] will-change-transform"
      >
        <img
          src={logoIconoBlanco}
          alt=""
          className="block w-full rotate-[14deg]"
        />
      </div>

      <RamasHero ref={ramasRef} />
      <PuntosHero ref={puntosRef} />

      <div className="relative z-[2] mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-[clamp(32px,6vw,84px)] lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <p className="m-0 mb-[22px] font-label text-xs font-light tracking-[0.28em] text-rose uppercase">
            Medicina integrativa · Psiconeuroinmunología clínica
          </p>
          <h1 className="m-0 font-display text-[clamp(38px,5.4vw,74px)] leading-[1.06] font-normal tracking-[-0.015em] text-pretty text-white">
            Cuando tu cuerpo no responde y nadie te explica por qué.
          </h1>
          <p className="mt-[30px] mb-0 max-w-[46ch] text-[clamp(15px,1.2vw,17px)] leading-[1.72] font-light text-pretty text-white/86">
            Fatiga que no se va, digestión alterada, inflamación, ansiedad, sueño
            roto. No son síntomas sueltos: son un sistema pidiendo atención.
            Conecto sistema nervioso, inmunidad, hábitos y contexto de vida para
            llegar a la causa raíz.
          </p>
          <div className="mt-[42px] flex flex-wrap items-center gap-x-5 gap-y-4">
            <BotonCta
              variante="claro"
              href={AGENDAMIENTO}
              externo
              flecha
              className="px-8 py-[17px] text-xs font-medium tracking-[0.16em]"
            >
              Agendar consulta
            </BotonCta>
            <BotonCta
              variante="contorno"
              to="/curso"
              className="px-[30px] py-4 text-xs font-normal tracking-[0.16em]"
            >
              Curso
            </BotonCta>
          </div>
        </div>

        <div className="mt-[clamp(8px,3vw,58px)] min-w-0 border-l border-rose/42 pl-[clamp(20px,3vw,40px)]">
          <ul className="m-0 grid list-none gap-4 p-0 font-label text-[clamp(12px,1vw,13px)] font-light tracking-[0.2em] text-white/90 uppercase">
            {PROMESAS.map((promesa) => (
              <li key={promesa}>{promesa}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
