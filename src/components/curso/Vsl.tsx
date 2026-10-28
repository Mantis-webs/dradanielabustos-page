import { lazy, Suspense } from 'react'

import { COMPRA_CURSO } from '../../data/enlaces'
import { useMontado } from '../../hooks/useMontado'
import BotonCta from '../ui/BotonCta'
import Kicker from '../ui/Kicker'

const ReproductorVsl = lazy(() => import('./ReproductorVsl'))

const TEMAS = [
  'Inflamación vs. distensión abdominal',
  'Factores alimenticios que inflaman',
  'Hábitos que inflaman',
  '¿Por dónde empezar? Hábitos, alimentación, suplementación',
]

const MATERIAL = [
  'Cuestionario: ¿cómo está tu salud digestiva hoy?',
  'Recetario: empezar desde la cocina',
  '10 tips para cuidar tu salud digestiva',
  'Guía de suplementos para cuidar tu salud digestiva',
]

/**
 * Reproductor del VSL en formato vertical (reel / short, 9:16) y la
 * descripción del curso.
 *
 * El video se sirve desde YouTube y se envuelve con Vidstack para que los
 * controles usen la paleta de la Dra. y no la de YouTube. El id vive en
 * `data/enlaces.ts` junto al resto de los datos que dependen de la clienta.
 * El reproductor monta solo en el navegador; el prerender deja la caja 9:16
 * reservada para que el texto no salte cuando aparece.
 * Copy del documento de la clienta "pagina curso.pdf".
 */
export default function Vsl() {
  const montado = useMontado()

  return (
    <section
      id="video"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,100px)]"
    >
      <div className="relative mx-auto grid max-w-[980px] items-center gap-[clamp(32px,5vw,72px)] md:grid-cols-[minmax(0,380px)_1fr]">
        <div className="mx-auto w-full max-w-[380px] md:mx-0">
          <div className="aspect-[9/16] w-full bg-wine-footer/40">
            {montado && (
              <Suspense fallback={null}>
                <ReproductorVsl />
              </Suspense>
            )}
          </div>
        </div>

        <div className="text-center md:text-left">
          <Kicker tono="oscuro" className="mb-4">
            Curso online · Dra. Daniela Bustos
          </Kicker>
          <h2 className="m-0 max-w-[18ch] font-display text-[clamp(26px,3vw,40px)] leading-[1.16] font-normal text-pretty text-white max-md:mx-auto">
            Conoce más: ¿por qué me inflamo?
          </h2>
          <p className="mt-5 mb-0 max-w-[52ch] text-[15px] leading-[1.76] font-light text-pretty text-white/85 max-md:mx-auto">
            Si has cambiado tu alimentación y sigues sintiéndote hinchada, este
            curso es para ti. En cuatro cápsulas divididas en 6 videos, te
            explicaré de forma clara cómo se relacionan tu digestión, la
            microbiota, el estrés y tus hábitos, para que puedas tomar
            decisiones informadas sobre tu salud digestiva.
          </p>

          <div className="mt-7 text-left max-md:mx-auto max-md:max-w-[52ch]">
            <p className="m-0 font-display text-[19px] text-white">
              ¿Qué incluye el curso?
            </p>
            <ul className="mt-3 mb-0 list-disc space-y-2 pl-5 text-[14.5px] leading-[1.65] font-light text-white/85 marker:text-rose">
              <li>
                98 minutos de grabación: 4 cápsulas divididas en 6 videos.
                <p className="mt-2 mb-1 text-white">Temas:</p>
                <ul className="m-0 list-[circle] space-y-1 pl-5">
                  {TEMAS.map((tema) => (
                    <li key={tema}>{tema}</li>
                  ))}
                </ul>
              </li>
              {MATERIAL.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-[clamp(28px,3.5vw,40px)] flex justify-center md:justify-start">
            <BotonCta
              variante="claro"
              href={COMPRA_CURSO}
              flecha
              className="px-8 py-[17px] text-xs font-medium tracking-[0.16em]"
            >
              Comprar curso
            </BotonCta>
          </div>
        </div>
      </div>
    </section>
  )
}
