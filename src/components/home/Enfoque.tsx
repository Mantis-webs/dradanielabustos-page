import fotoNatural from '../../assets/img/foto-natural-01.jpg'
import fotoRetrato from '../../assets/img/foto-estudio-01-retrato.jpg'
import logoIconoWine from '../../assets/img/logo-icono-wine.png'
import { CHIPS_ENFOQUE } from '../../data/contenido'
import { AGENDAMIENTO } from '../../data/enlaces'
import {
  RamaEnfoqueDerecha,
  RamaEnfoqueIzquierda,
} from '../decor/RamasHome'
import BotonCta from '../ui/BotonCta'
import Kicker from '../ui/Kicker'

/**
 * Presentación de la doctora + la cita con su retrato.
 *
 * Nota de fidelidad: el prototipo trae tres medidas fijas heredadas del canvas
 * de Claude Design (`height: 67px` en el primer párrafo, `width: 1001px;
 * height: 522px` en la figura de la cita y `width: 306px; height: 24px` en su
 * figcaption). No se portan: son artefactos de edición que rompen el layout en
 * cuanto cambia el ancho o el largo del texto.
 */
export default function Enfoque() {
  return (
    <section
      id="enfoque"
      className="relative bg-blush px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,132px)]"
    >
      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-stretch gap-[clamp(28px,4.5vw,64px)] md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.85fr)]">
        <figure className="relative m-0 min-w-0 self-stretch">
          {/*
            El techo de alto es para cuando la sección apila en una columna: sin
            él, `h-full object-cover` a ancho completo convierte el retrato en un
            bloque de más de mil píxeles que se come la página.
          */}
          <img
            src={fotoNatural}
            alt="La Dra. Daniela Bustos Riquelme en el huerto"
            className="block h-full max-h-[440px] min-h-[380px] w-full rounded-[2px] object-cover object-[50%_42%] md:max-h-none"
          />
          <img
            src={logoIconoWine}
            alt=""
            className="absolute right-[-18px] bottom-[-22px] w-[74px] opacity-90"
          />
        </figure>

        <div className="min-w-0 pt-[clamp(0px,2vw,22px)]">
          <Kicker className="mb-[18px]">Tu salud en buenas manos</Kicker>
          <h2 className="m-0 font-display text-[clamp(29px,3.4vw,46px)] leading-[1.14] font-normal tracking-[-0.01em] text-pretty text-wine">
            Medicina con evidencia, personas en el centro.
          </h2>
          <div className="mt-7 grid max-w-[54ch] gap-[18px] text-[15px] leading-[1.78] font-light text-tinta-suave">
            <p className="m-0">
              Soy la Dra. Daniela Bustos Riquelme, médica especializada en
              medicina integrativa con enfoque en psiconeuroinmunología clínica.
              Trabajo entre Barcelona y Chile.
            </p>
            <p className="m-0">
              La mayoría de mis pacientes llega después de años de exámenes
              normales y respuestas parciales. Cada síntoma se trató por
              separado, y ninguno se fue. Mi trabajo es leerlos juntos: qué le
              está pasando a tu sistema nervioso, a tu inmunidad, a tus hábitos y
              al momento de vida que estás atravesando.
            </p>
            <p className="m-0">
              De ahí sale un plan que se sostiene en el tiempo, no un alivio que
              dura mientras dura el tratamiento.
            </p>
          </div>

          <div className="mt-[30px] flex flex-wrap gap-2.5">
            {CHIPS_ENFOQUE.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-blush-pastilla px-4 py-2 font-label text-[10.5px] font-medium tracking-[0.14em] text-wine-pastilla uppercase"
              >
                {chip}
              </span>
            ))}
          </div>

          <BotonCta
            variante="wine"
            href={AGENDAMIENTO}
            externo
            flecha
            className="mt-[34px] px-[30px] py-4 text-xs font-medium tracking-[0.16em]"
          >
            Agendar consulta
          </BotonCta>
        </div>
      </div>

      <figure className="relative z-10 mx-auto mt-[clamp(52px,6.5vw,88px)] grid max-w-[1180px] grid-cols-1 items-center gap-[clamp(28px,5vw,80px)] p-0 md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
        <div className="relative grid min-w-0 justify-items-start gap-[clamp(16px,1.8vw,24px)] pl-[clamp(0px,3vw,48px)]">
          <span
            aria-hidden="true"
            className="font-display text-[clamp(46px,5vw,72px)] leading-[0.5] font-bold text-wine"
          >
            “
          </span>
          <blockquote className="m-0 max-w-[22ch] font-display text-[clamp(24px,2.9vw,40px)] leading-[1.26] font-normal tracking-[-0.01em] text-pretty text-wine italic">
            “No es que esté todo en tu cabeza.
            <br />
            Es que nadie había mirado tu cuerpo completo.”
          </blockquote>
          <figcaption className="mt-1.5 flex items-center gap-4 font-display text-[clamp(17px,1.5vw,22px)] font-medium tracking-[0.04em] text-wine">
            <span className="h-px w-[clamp(30px,4vw,54px)] bg-wine/40" />
            Dra. Daniela Bustos
          </figcaption>
        </div>

        <img
          src={fotoRetrato}
          alt="Retrato de la Dra. Daniela Bustos Riquelme"
          className="relative block aspect-square w-full rounded-2xl object-cover object-[50%_16%] shadow-[0_30px_70px_-44px_rgba(74,18,31,0.55)]"
        />
      </figure>

      <RamaEnfoqueDerecha />
      <RamaEnfoqueIzquierda />
    </section>
  )
}
