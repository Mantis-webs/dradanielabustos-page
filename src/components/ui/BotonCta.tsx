import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variante = 'wine' | 'claro' | 'contorno'

const VARIANTES: Record<Variante, string> = {
  /** Sólido wine sobre fondos claros. */
  wine: 'bg-wine text-white hover:bg-wine-oscuro hover:text-white',
  /** Blush sobre fondos wine: el CTA principal del hero y del cierre. */
  claro: 'bg-blush text-wine hover:bg-rose hover:text-wine-oscuro',
  /** Contorno rose sobre fondos wine: el CTA secundario. */
  contorno:
    'border border-rose/75 text-blush hover:bg-rose/15 hover:text-white',
}

const BASE =
  'inline-flex items-center justify-center gap-3 rounded-full font-label uppercase transition-colors'

type Props = {
  children: ReactNode
  variante: Variante
  /** Enlace externo o ancla; usa <a>. */
  href?: string
  /** Ruta interna; usa <Link> de react-router. */
  to?: string
  /** Abre en pestaña nueva y añade rel="noopener noreferrer". */
  externo?: boolean
  /** La flecha → que acompaña a los CTA de agendamiento. */
  flecha?: boolean
  /** Padding y tipografía, que varían por sección en el prototipo. */
  className?: string
}

export default function BotonCta({
  children,
  variante,
  href,
  to,
  externo = false,
  flecha = false,
  className = '',
}: Props) {
  const clases = `${BASE} ${VARIANTES[variante]} ${className}`
  const contenido = (
    <>
      {children}
      {flecha ? (
        <span aria-hidden="true" className="text-[15px] leading-none">
          &#8594;
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={clases}>
        {contenido}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={clases}
      {...(externo
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {contenido}
    </a>
  )
}
