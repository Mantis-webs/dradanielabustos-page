/** Rama del footer. Compartida por / y /curso. */
export default function RamaFooter() {
  return (
    <svg
      viewBox="0 0 300 150"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid meet"
      className="pointer-events-none absolute right-0 bottom-0 h-auto w-[min(26vw,300px)] opacity-55"
    >
      <path
        d="M300 120 C 236 118, 182 100, 130 70"
        fill="none"
        stroke="#9DB894"
        strokeWidth="2.98"
        strokeLinecap="round"
      />
      <path
        d="M130 70 C 100 52, 74 44, 44 40"
        fill="none"
        stroke="#9DB894"
        strokeWidth="0.88"
        strokeLinecap="round"
      />
      <circle cx="44" cy="40" r="2.2" fill="#9DB894" />
      <circle cx="130" cy="70" r="1.5" fill="#9DB894" />
      <circle cx="214" cy="108" r="1.1" fill="#9DB894" />
    </svg>
  )
}
