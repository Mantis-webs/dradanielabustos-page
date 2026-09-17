import type { ReactNode } from 'react'

type Tono = 'claro' | 'oscuro'

/**
 * La versalita Montserrat que encabeza casi todas las secciones.
 * `claro` = sobre fondo blush (rose oscuro); `oscuro` = sobre fondo wine (rose).
 */
export default function Kicker({
  children,
  tono = 'claro',
  className = '',
}: {
  children: ReactNode
  tono?: Tono
  className?: string
}) {
  return (
    <p
      className={`m-0 font-label text-[11px] font-light tracking-[0.28em] uppercase ${
        tono === 'oscuro' ? 'text-rose' : 'text-rose-oscuro'
      } ${className}`}
    >
      {children}
    </p>
  )
}
