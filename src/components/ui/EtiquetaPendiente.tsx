import type { ReactNode } from 'react'

const TONOS = {
  /** Píldora sólida wine sobre fondos claros. */
  wine: 'bg-wine text-white font-medium',
  /** Píldora translúcida sobre fondos wine (hero de /curso). */
  rose: 'bg-rose/15 text-rose font-medium',
} as const

/**
 * Píldora que el prototipo usa para marcar lo que aún no está conectado.
 * Se conserva tal cual: es información para la clienta, no decoración.
 */
export default function EtiquetaPendiente({
  children,
  tono = 'wine',
  className = '',
}: {
  children: ReactNode
  tono?: keyof typeof TONOS
  className?: string
}) {
  return (
    <p
      className={`m-0 inline-block rounded-full px-[15px] py-[7px] font-label text-[10px] tracking-[0.18em] uppercase ${TONOS[tono]} ${className}`}
    >
      {children}
    </p>
  )
}
