import Kicker from '../ui/Kicker'

/**
 * Los tres iconos son la misma rama ganando hojas en cada paso: una, dos, y
 * dos más el brote superior. Se define una sola vez y se recortan los trazos
 * según el paso, igual que en el prototipo.
 */
const TRAZOS = {
  tallo: 'M30 54 V32',
  talloLargo: 'M30 54 V22',
  hojaIzquierda: 'M30 34 C 19 34, 13 28, 13 19 C 24 19, 30 25, 30 34 Z',
  hojaDerecha: 'M30 34 C 41 34, 47 28, 47 19 C 36 19, 30 25, 30 34 Z',
  brote: 'M30 22 C 24 17, 24 9, 30 4 C 36 9, 36 17, 30 22 Z',
}

const PASOS: {
  trazos: string[]
  titulo: string
  texto: string
  cita?: string
}[] = [
  {
    trazos: [TRAZOS.tallo, TRAZOS.hojaIzquierda],
    titulo: '01 · Escucho tu historia',
    texto:
      'Tus síntomas, alimentación, sueño, estrés, actividad física, hábitos y contexto personal.',
    cita: 'Porque tu historia clínica no es solamente una lista de síntomas.',
  },
  {
    trazos: [TRAZOS.tallo, TRAZOS.hojaIzquierda, TRAZOS.hojaDerecha],
    titulo: '02 · Integración de la información',
    texto:
      'Tus antecedentes, diagnósticos, medicamentos, suplementos y exámenes: identificamos patrones y factores de riesgo.',
  },
  {
    trazos: [
      TRAZOS.talloLargo,
      TRAZOS.hojaIzquierda,
      TRAZOS.hojaDerecha,
      TRAZOS.brote,
    ],
    titulo: '03 · Diseñamos estrategia personalizada',
    texto:
      'Definimos objetivos y herramientas adaptadas a tu situación, priorizando intervenciones con respaldo científico y que sean realmente aplicables a tu vida.',
  },
]

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-blush px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <div className="relative mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[620px] text-center">
          <Kicker className="mb-4">¿Cómo trabajo?</Kicker>
          <h2 className="m-0 font-display text-[clamp(27px,3.2vw,44px)] leading-[1.14] font-normal text-pretty text-wine">
            Un camino clínico, en tres pasos.
          </h2>
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(28px,4vw,52px)] text-center">
          {PASOS.map((paso) => (
            <div key={paso.titulo}>
              <svg
                viewBox="0 0 60 60"
                aria-hidden="true"
                className="mx-auto mb-[22px] block h-14 w-14"
              >
                <g
                  className="stroke-wine"
                  fill="none"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {paso.trazos.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
              </svg>
              <p className="m-0 mb-3 font-label text-[11px] font-medium tracking-[0.22em] text-wine uppercase">
                {paso.titulo}
              </p>
              <p className="mx-auto my-0 max-w-[34ch] text-[14.5px] leading-[1.7] font-light text-pretty text-tinta-suave">
                {paso.texto}
              </p>
              {paso.cita && (
                <p className="mx-auto mt-4 mb-0 max-w-[30ch] font-display text-base leading-[1.5] text-pretty text-rose-oscuro italic">
                  “{paso.cita}”
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-[clamp(36px,4.5vw,56px)] mb-0 max-w-[40ch] text-center font-display text-[clamp(18px,1.8vw,24px)] leading-[1.4] text-pretty text-wine">
          Trabajamos en cambios sostenibles.
        </p>
      </div>
    </section>
  )
}
