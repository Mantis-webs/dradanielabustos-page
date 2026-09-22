/**
 * Ramas decorativas de /curso. Transcritas de site/curso/index.html.
 */

const OSCURO = 'var(--color-rama-oscura)' // sobre fondos claros
const CLARO = 'var(--color-rama)' // sobre fondos wine

/** Hero de la masterclass: rama vertical del borde derecho. */
export function RamaHeroCurso() {
  return (
    <svg
      viewBox="0 0 300 700"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMin meet"
      className="pointer-events-none absolute top-0 right-0 z-0 h-[min(96%,620px)] w-auto opacity-55"
    >
      <g fill="none" stroke={CLARO} strokeLinecap="round">
        <path d="M300 18 C 252 46, 218 86, 196 136" strokeWidth="3.5" />
        <path d="M196 136 C 170 194, 158 256, 152 320" strokeWidth="2.19" />
        <path d="M152 320 C 146 388, 142 452, 130 512" strokeWidth="1.24" />
        <path d="M130 512 C 118 574, 96 624, 68 664" strokeWidth="1.04" />
        <path
          d="M152 320 C 182 310, 206 316, 218 338 C 192 353, 164 346, 152 320 Z"
          strokeWidth="1.04"
          strokeLinejoin="round"
        />
        <path
          d="M148 404 C 118 398, 96 378, 88 352 C 117 346, 141 368, 148 404 Z"
          strokeWidth="1.04"
          strokeLinejoin="round"
        />
        <path
          d="M138 486 C 168 474, 195 480, 206 502 C 180 517, 152 510, 138 486 Z"
          strokeWidth="1.04"
          strokeLinejoin="round"
        />
        <path
          d="M196 136 C 222 120, 250 124, 260 146 C 234 162, 208 157, 196 136 Z"
          strokeWidth="1.04"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="68" cy="666" r="2.4" fill={CLARO} />
      <circle cx="98" cy="612" r="1.6" fill={CLARO} />
      <circle cx="172" cy="244" r="1.7" fill={CLARO} />
    </svg>
  )
}

/** VSL: rama del borde izquierdo. */
export function RamaVslIzquierda() {
  return (
    <svg
      viewBox="0 0 300 180"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
      className="pointer-events-none absolute top-[8%] left-0 h-auto w-[min(24vw,290px)] opacity-65"
    >
      <g fill="none" stroke={CLARO} strokeLinecap="round">
        <path d="M0 34 C 68 40, 128 62, 194 100" strokeWidth="3.15" />
        <path d="M194 100 C 230 120, 258 132, 288 138" strokeWidth="0.94" />
        <path d="M194 100 C 196 82, 202 68, 212 56" strokeWidth="2.25" />
      </g>
      <circle cx="212" cy="56" r="1.6" fill={CLARO} />
      <circle cx="288" cy="138" r="2.2" fill={CLARO} />
      <circle cx="96" cy="56" r="1.2" fill={CLARO} />
    </svg>
  )
}

/** VSL: rama del borde derecho. */
export function RamaVslDerecha() {
  return (
    <svg
      viewBox="0 0 320 200"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid meet"
      className="pointer-events-none absolute right-0 bottom-[6%] h-auto w-[min(28vw,320px)] opacity-70"
    >
      <g fill="none" stroke={CLARO} strokeLinecap="round">
        <path d="M320 168 C 250 164, 190 142, 140 108" strokeWidth="3.85" />
        <path d="M140 108 C 104 84, 74 72, 40 66" strokeWidth="1.14" />
        <path d="M190 142 C 184 122, 184 106, 190 90" strokeWidth="2.07" />
        <path
          d="M190 90 C 182 84, 181 71, 190 64 C 199 71, 198 84, 190 90 Z"
          strokeWidth="1.14"
          strokeLinejoin="round"
        />
        <path d="M140 108 C 132 124, 130 140, 134 156" strokeWidth="1.78" />
        <path
          d="M134 156 C 141 161, 143 172, 137 180 C 128 175, 127 165, 134 156 Z"
          strokeWidth="1.14"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="40" cy="66" r="2.4" fill={CLARO} />
    </svg>
  )
}

/** Inscripción: rama del borde izquierdo. */
export function RamaInscripcion() {
  return (
    <svg
      viewBox="0 0 400 200"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
      className="pointer-events-none absolute top-[8%] left-0 z-0 h-auto w-[min(30vw,360px)] opacity-85"
    >
      <g fill="none" stroke={OSCURO} strokeLinecap="round">
        <path d="M0 30 C 66 42, 122 74, 168 118" strokeWidth="3.33" />
        <path d="M168 118 C 204 152, 244 176, 292 186" strokeWidth="0.99" />
        <path
          d="M168 118 C 186 96, 210 86, 234 90 C 226 116, 198 128, 168 118 Z"
          strokeWidth="0.99"
          strokeLinejoin="round"
        />
        <path
          d="M104 66 C 100 42, 108 20, 128 8 C 138 32, 126 56, 104 66 Z"
          strokeWidth="0.99"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="292" cy="186" r="2.3" fill={OSCURO} />
      <circle cx="242" cy="168" r="1.5" fill={OSCURO} />
    </svg>
  )
}
