import { useEffect, useState } from 'react'
import { TESTIMONIOS_FALLBACK, type Resena } from '../../data/contenido'
import { AGENDAMIENTO } from '../../data/enlaces'
import Kicker from '../ui/Kicker'

export default function Testimonios() {
  const [resenas, setResenas] = useState<Resena[]>(TESTIMONIOS_FALLBACK)

  useEffect(() => {
    let cancelado = false

    fetch('/api/resenas')
      .then((respuesta) => (respuesta.ok ? respuesta.json() : null))
      .then((datos: { resenas: Resena[] } | null) => {
        if (!cancelado && datos && datos.resenas.length > 0) {
          setResenas(datos.resenas)
        }
      })
      .catch(() => {
        // Se mantiene TESTIMONIOS_FALLBACK
      })

    return () => {
      cancelado = true
    }
  }, [])

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-blush-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <div className="relative mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[620px] text-center">
          <Kicker className="mb-4">Reseñas verificadas</Kicker>
          <h2 className="m-0 font-display text-[clamp(27px,3.2vw,44px)] leading-[1.14] font-normal text-pretty text-wine">
            Historias reales, cambios que se sienten.
          </h2>
        </div>

        <div className="mt-[clamp(36px,4.5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {resenas.map((resena) => (
            <figure
              key={resena.autor + resena.texto}
              className="m-0 grid gap-5 rounded-[3px] border border-wine/10 bg-white px-7 py-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-[40px] leading-[0.6] text-rose"
              >
                “
              </span>
              <blockquote className="m-0 text-[14.5px] leading-[1.75] font-light text-pretty text-tinta">
                {resena.texto}
              </blockquote>
              <div className="flex items-center justify-between gap-3">
                <span
                  aria-label={`${resena.rating} de 5 estrellas`}
                  className="text-[13px] tracking-[2px] text-rose"
                >
                  <span aria-hidden="true">{'★'.repeat(resena.rating)}</span>
                  <span aria-hidden="true" className="text-wine/15">
                    {'★'.repeat(5 - resena.rating)}
                  </span>
                </span>
                {resena.fecha && (
                  <span className="font-label text-[10px] font-light tracking-[0.08em] text-tinta/55 uppercase">
                    {resena.fecha}
                  </span>
                )}
              </div>
              <figcaption className="font-label text-[10.5px] font-medium tracking-[0.16em] text-rose-oscuro uppercase">
                {resena.autor}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-5 mb-0 font-label text-[13px] font-light text-[#1A1A1A]">
          reseñas de{' '}
          <a
            href={AGENDAMIENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#1A1A1A] underline underline-offset-[3px]"
          >
            Encuadrado
          </a>{' '}
          — ver todas las reseñas
        </p>
      </div>
    </section>
  )
}
