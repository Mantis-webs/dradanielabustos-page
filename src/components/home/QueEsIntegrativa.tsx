import logoIconoBlanco from '../../assets/img/logo-icono-blanco.png'

/**
 * Banda oscura entre Proceso y Reseñas: corta el ritmo de fondos claros y
 * repite el lenguaje de Hero y Cierre. Se lee en una sola columna, de arriba
 * a abajo: encabezado centrado con la definición, dos tarjetas blancas lado a
 * lado (qué no es / qué sí es) y la frase de cierre en tipografía de cita.
 */
export default function QueEsIntegrativa() {
  return (
    <section
      id="medicina-integrativa"
      className="relative isolate overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <img
        src={logoIconoBlanco}
        alt=""
        className="pointer-events-none absolute right-[-90px] bottom-[-80px] -z-10 w-[min(42vw,420px)] rotate-[14deg] opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-[880px]">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="m-0 font-display text-[clamp(28px,3.4vw,46px)] leading-[1.12] font-normal text-pretty text-white">
            ¿Qué es la Medicina Integrativa?
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-[clamp(48px,6vw,84px)] bg-rose/60"
          />
          <p className="mx-auto mt-6 mb-0 max-w-[54ch] text-[clamp(15px,1.2vw,17px)] leading-[1.76] font-light text-pretty text-white/86">
            La Medicina Integrativa busca combinar la medicina convencional con
            herramientas de nutrición, ejercicio, sueño, manejo del estrés y
            otros factores del estilo de vida, siempre considerando la evidencia
            científica y las características individuales de cada persona.
          </p>
        </div>

        <div className="mt-[clamp(36px,5vw,56px)] grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-center gap-5 rounded-[3px] border-t-2 border-t-rose bg-white px-7 py-8">
            <span
              aria-hidden="true"
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blush-pastilla text-[26px] leading-none"
            >
              ❌
            </span>
            <p className="m-0 text-[clamp(16px,1.3vw,18px)] leading-[1.6] font-light text-pretty text-wine-oscuro">
              No significa reemplazar la medicina convencional.
            </p>
          </div>
          <div className="flex items-center gap-5 rounded-[3px] border-t-2 border-t-rose bg-white px-7 py-8">
            <span
              aria-hidden="true"
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blush-pastilla text-[26px] leading-none"
            >
              ✅
            </span>
            <p className="m-0 text-[clamp(16px,1.3vw,18px)] leading-[1.6] font-light text-pretty text-wine-oscuro">
              Significa{' '}
              <strong className="font-semibold">ampliar la mirada</strong> para
              comprender mejor la interacción entre los distintos sistemas del
              organismo y abordar la salud de una manera más completa.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-[clamp(44px,6vw,80px)] mb-0 max-w-[34ch] border-t border-rose/25 pt-[clamp(28px,4vw,44px)] text-center font-display text-[clamp(20px,2.3vw,30px)] leading-[1.4] text-pretty text-white italic">
          Porque dos personas con el mismo diagnóstico no necesariamente tienen
          la misma historia ni necesitan exactamente la misma estrategia.
        </p>
      </div>
    </section>
  )
}
