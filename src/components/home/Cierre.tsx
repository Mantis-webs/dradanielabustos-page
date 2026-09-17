import logoIconoBlanco from '../../assets/img/logo-icono-blanco.png'
import { AGENDAMIENTO } from '../../data/enlaces'
import BotonCta from '../ui/BotonCta'
import Kicker from '../ui/Kicker'

export default function Cierre() {
  return (
    <section
      id="cierre"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(76px,10vw,128px)]"
    >
      <img
        src={logoIconoBlanco}
        alt=""
        className="pointer-events-none absolute top-[-60px] right-[-70px] w-[min(36vw,340px)] opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-[760px] text-center">
        <Kicker tono="oscuro" className="mb-[18px]">
          Consulta de medicina integrativa
        </Kicker>
        <h2 className="m-0 font-display text-[clamp(29px,3.6vw,48px)] leading-[1.12] font-normal text-pretty text-white">
          Empieza por entender qué le está pasando a tu cuerpo.
        </h2>
        <p className="mx-auto mt-6 mb-0 max-w-[46ch] text-[15.5px] leading-[1.76] font-light text-pretty text-white/84">
          Una primera consulta para revisar tu historia completa: síntomas,
          exámenes, alimentación, sueño y contexto de vida.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-4">
          <BotonCta
            variante="claro"
            href={AGENDAMIENTO}
            externo
            flecha
            className="px-9 py-[18px] text-xs font-medium tracking-[0.16em]"
          >
            Agendar consulta
          </BotonCta>
          <BotonCta
            variante="contorno"
            to="/curso"
            className="px-8 py-[17px] text-xs font-normal tracking-[0.16em]"
          >
            Masterclass gratuita
          </BotonCta>
        </div>
        <p className="mt-[22px] mb-0 font-label text-[11px] font-light tracking-[0.14em] text-rose/85 uppercase">
          Agenda gestionada en encuadrado.com
        </p>
      </div>
    </section>
  )
}
