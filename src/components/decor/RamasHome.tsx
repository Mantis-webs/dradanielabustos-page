import type { Ref } from 'react'

/**
 * Ramas decorativas de la home. Trazos transcritos de site/index.html sin
 * alterar: los tramos de tronco engordaron y el color pasó a verde salvia en la
 * versión del prototipo del 2026-09-16.
 */

const OSCURO = 'var(--color-rama-oscura)' // sobre fondos claros
const CLARO = 'var(--color-rama)' // sobre fondos wine

/** Hero: rama grande de la esquina inferior derecha. Se mueve con el parallax. */
export function RamasHero({ ref }: { ref: Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 780 340"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid meet"
      className="pointer-events-none absolute right-0 bottom-0 h-auto w-[min(68vw,800px)] opacity-85 will-change-transform"
    >
      <g fill="none" stroke={CLARO} strokeLinecap="round" strokeLinejoin="round">
        <path d="M780 296 C 690 292, 616 270, 548 234" strokeWidth="4.55" />
        <path d="M548 234 C 470 192, 404 166, 334 158" strokeWidth="2" />
        <path d="M334 158 C 268 150, 210 158, 148 178" strokeWidth="1.35" />
        <path d="M700 286 C 696 266, 700 250, 708 236" strokeWidth="1.61" />
        <path
          d="M708 236 C 699 230, 697 216, 708 208 C 719 216, 717 230, 708 236 Z"
          strokeWidth="1.35"
        />
        <path d="M616 270 C 610 244, 612 220, 620 198" strokeWidth="2.17" />
        <path
          d="M620 198 C 610 191, 608 175, 620 166 C 632 175, 630 191, 620 198 Z"
          strokeWidth="1.35"
        />
        <path d="M548 234 C 556 258, 568 278, 584 294" strokeWidth="1.88" />
        <path
          d="M584 294 C 594 298, 600 310, 594 320 C 582 316, 577 304, 584 294 Z"
          strokeWidth="1.35"
        />
        <path d="M470 192 C 452 178, 432 170, 410 166" strokeWidth="1.61" />
        <path d="M412 165 C 402 144, 400 126, 406 108" strokeWidth="1.61" />
        <path
          d="M406 108 C 396 101, 394 86, 406 77 C 418 86, 416 101, 406 108 Z"
          strokeWidth="1.35"
        />
        <path d="M334 158 C 314 176, 300 198, 292 222" strokeWidth="1.61" />
        <path
          d="M292 222 C 283 228, 270 226, 264 216 C 273 208, 285 212, 292 222 Z"
          strokeWidth="1.35"
        />
        <path d="M238 154 C 232 138, 232 124, 238 110" strokeWidth="1.61" />
        <path
          d="M238 110 C 229 104, 228 91, 238 84 C 248 91, 247 104, 238 110 Z"
          strokeWidth="1.35"
        />
      </g>
      <circle cx="410" cy="166" r="2" fill={CLARO} />
      <circle cx="148" cy="178" r="2.8" fill={CLARO} />
      <circle cx="512" cy="214" r="1.6" fill={CLARO} opacity="0.75" />
      <circle cx="660" cy="278" r="1.4" fill={CLARO} opacity="0.7" />
    </svg>
  )
}

/** Hero: capa de puntos rose que hace zoom con el scroll. */
export function PuntosHero({ ref }: { ref: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 will-change-transform"
    >
      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        className="block h-full w-full"
      >
        <g fill="var(--color-rose)">
          <circle cx="120" cy="120" r="2.4" opacity="0.4" />
          <circle cx="286" cy="58" r="1.8" opacity="0.3" />
          <circle cx="64" cy="430" r="2" opacity="0.28" />
          <circle cx="820" cy="612" r="2.2" opacity="0.3" />
          <circle cx="980" cy="238" r="1.8" opacity="0.26" />
          <circle cx="430" cy="640" r="2" opacity="0.24" />
        </g>
      </svg>
    </div>
  )
}

/** Motivos de consulta: rama de la esquina inferior derecha. */
export function RamaMotivos() {
  return (
    <svg
      viewBox="0 0 520 240"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid meet"
      className="pointer-events-none absolute right-0 bottom-[6%] z-0 h-auto w-[min(52vw,560px)] opacity-95"
    >
      <g fill="none" stroke={OSCURO} strokeLinecap="round">
        <path d="M520 196 C 432 192, 356 168, 288 130" strokeWidth="4.38" />
        <path d="M288 130 C 232 98, 186 78, 132 68" strokeWidth="1.3" />
        <path d="M356 168 C 348 146, 348 126, 354 106" strokeWidth="2" />
        <path
          d="M354 106 C 345 100, 344 86, 354 78 C 364 86, 363 100, 354 106 Z"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M288 130 C 293 152, 301 170, 313 186" strokeWidth="1.7" />
        <path
          d="M313 186 C 321 190, 325 200, 320 209 C 310 206, 306 196, 313 186 Z"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M232 98 C 217 87, 201 81, 184 79" strokeWidth="1.55" />
        <path d="M186 78 C 178 60, 176 46, 180 32" strokeWidth="1.55" />
        <path
          d="M180 32 C 172 26, 171 14, 180 7 C 189 14, 188 26, 180 32 Z"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="184" cy="79" r="1.8" fill={OSCURO} />
      <circle cx="132" cy="68" r="2.6" fill={OSCURO} />
    </svg>
  )
}

/** Presentación: rama vertical del borde derecho. */
export function RamaEnfoqueDerecha() {
  return (
    <svg
      viewBox="0 0 300 860"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMin meet"
      className="pointer-events-none absolute top-[4%] right-0 z-0 h-[min(60%,640px)] w-auto opacity-85"
    >
      <g fill="none" stroke={OSCURO} strokeLinecap="round" strokeLinejoin="round">
        <path d="M300 22 C 250 44, 214 80, 190 128" strokeWidth="3.68" />
        <path d="M190 128 C 162 184, 148 246, 142 312" strokeWidth="2.64" />
        <path d="M142 312 C 136 382, 134 452, 126 520" strokeWidth="1.63" />
        <path d="M126 520 C 118 592, 102 656, 78 714" strokeWidth="1.09" />
        <path d="M78 714 C 62 752, 48 786, 38 816" strokeWidth="1.09" />
        <path
          d="M142 312 C 172 302, 196 308, 208 330 C 182 345, 154 338, 142 312 Z"
          strokeWidth="1.09"
        />
        <path
          d="M138 398 C 108 392, 86 372, 78 346 C 107 340, 131 362, 138 398 Z"
          strokeWidth="1.09"
        />
        <path
          d="M130 486 C 160 474, 187 480, 198 502 C 172 517, 144 510, 130 486 Z"
          strokeWidth="1.09"
        />
        <path
          d="M112 574 C 84 564, 66 542, 62 516 C 91 514, 111 538, 112 574 Z"
          strokeWidth="1.09"
        />
        <path
          d="M190 128 C 216 112, 244 116, 254 138 C 228 154, 202 149, 190 128 Z"
          strokeWidth="1.09"
        />
        <path
          d="M92 668 C 120 654, 148 660, 158 682 C 132 698, 104 691, 92 668 Z"
          strokeWidth="1.09"
        />
      </g>
      <circle cx="38" cy="818" r="2.6" fill={OSCURO} />
      <circle cx="58" cy="762" r="1.7" fill={OSCURO} />
      <circle cx="164" cy="240" r="1.9" fill={OSCURO} />
      <circle cx="124" cy="440" r="1.5" fill={OSCURO} />
    </svg>
  )
}

/** Presentación: rama vertical del borde izquierdo. */
export function RamaEnfoqueIzquierda() {
  return (
    <svg
      viewBox="0 0 300 920"
      aria-hidden="true"
      preserveAspectRatio="xMinYMax meet"
      className="pointer-events-none absolute bottom-[3%] left-0 z-0 hidden h-[min(66%,700px)] w-auto opacity-85 md:block"
    >
      <g fill="none" stroke={OSCURO} strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 902 C 52 884, 88 852, 112 806" strokeWidth="3.68" />
        <path d="M112 806 C 142 748, 156 682, 162 610" strokeWidth="2.64" />
        <path d="M162 610 C 168 534, 170 458, 178 384" strokeWidth="1.63" />
        <path d="M178 384 C 186 306, 202 234, 228 168" strokeWidth="1.09" />
        <path d="M228 168 C 244 128, 258 92, 266 58" strokeWidth="1.09" />
        <path
          d="M162 610 C 132 604, 108 586, 98 560 C 126 552, 152 574, 162 610 Z"
          strokeWidth="1.09"
        />
        <path
          d="M166 522 C 196 512, 222 518, 234 540 C 208 554, 180 546, 166 522 Z"
          strokeWidth="1.09"
        />
        <path
          d="M172 440 C 142 434, 120 414, 112 388 C 141 382, 165 404, 172 440 Z"
          strokeWidth="1.09"
        />
        <path
          d="M186 356 C 216 344, 243 350, 254 372 C 228 387, 200 380, 186 356 Z"
          strokeWidth="1.09"
        />
        <path
          d="M204 262 C 176 252, 158 230, 154 204 C 183 202, 203 226, 204 262 Z"
          strokeWidth="1.09"
        />
        <path
          d="M228 168 C 254 154, 280 158, 290 178 C 266 194, 240 189, 228 168 Z"
          strokeWidth="1.09"
        />
        <path
          d="M112 806 C 90 794, 76 774, 74 752 C 98 752, 112 774, 112 806 Z"
          strokeWidth="1.09"
        />
      </g>
      <circle cx="266" cy="58" r="2.6" fill={OSCURO} />
      <circle cx="248" cy="112" r="1.7" fill={OSCURO} />
      <circle cx="140" cy="686" r="1.9" fill={OSCURO} />
      <circle cx="196" cy="308" r="1.5" fill={OSCURO} />
    </svg>
  )
}

/** Comparativa: rama del borde izquierdo. */
export function RamaComparativaIzquierda() {
  return (
    <svg
      viewBox="0 0 400 200"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
      className="pointer-events-none absolute top-[6%] left-0 h-auto w-[min(34vw,400px)] opacity-90"
    >
      <g fill="none" stroke={OSCURO} strokeLinecap="round">
        <path d="M0 168 C 80 166, 150 142, 214 104" strokeWidth="4.2" />
        <path d="M214 104 C 262 76, 300 62, 344 56" strokeWidth="1.25" />
        <path d="M112 154 C 122 132, 128 116, 132 98" strokeWidth="1.82" />
        <path
          d="M132 98 C 124 92, 123 80, 132 72 C 141 80, 140 92, 132 98 Z"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M186 122 C 200 130, 210 142, 216 158" strokeWidth="1.52" />
        <path d="M262 76 C 274 62, 288 54, 304 50" strokeWidth="1.49" />
        <path
          d="M304 50 C 297 43, 299 31, 309 25 C 315 34, 312 45, 304 50 Z"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="216" cy="158" r="2" fill={OSCURO} />
      <circle cx="344" cy="56" r="2.4" fill={OSCURO} />
    </svg>
  )
}

/** Comparativa: rama del borde derecho. */
export function RamaComparativaDerecha() {
  return (
    <svg
      viewBox="0 0 300 160"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid meet"
      className="pointer-events-none absolute top-[4%] right-0 h-auto w-[min(26vw,300px)] opacity-85"
    >
      <g fill="none" stroke={OSCURO} strokeLinecap="round">
        <path d="M300 130 C 232 126, 176 104, 118 72" strokeWidth="3.15" />
        <path d="M118 72 C 84 54, 58 46, 26 42" strokeWidth="0.94" />
        <path d="M176 104 C 168 86, 166 72, 168 58" strokeWidth="2.25" />
      </g>
      <circle cx="168" cy="58" r="1.7" fill={OSCURO} />
      <circle cx="26" cy="42" r="2.2" fill={OSCURO} />
      <circle cx="240" cy="118" r="1.2" fill={OSCURO} />
    </svg>
  )
}
