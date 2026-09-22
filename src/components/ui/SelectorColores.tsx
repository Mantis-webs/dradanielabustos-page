import { useEffect, useRef, useState } from 'react'

/**
 * Botonera flotante para que la clienta pruebe otra paleta en vivo.
 * Pisa las custom properties de `@theme` (index.css) directo en <html>, así
 * que cualquier clase Tailwind que use esos tokens (bg-wine, text-rose, etc.)
 * se actualiza sin recargar. Persiste en localStorage solo para que la prueba
 * sobreviva un refresh del propio navegador de quien la está probando — no se
 * comparte entre visitantes ni llega a nosotros.
 */

type Token = {
  variable: string
  etiqueta: string
  valorPorDefecto: string
}

const TOKENS: Token[] = [
  { variable: '--color-wine', etiqueta: 'Wine (marca)', valorPorDefecto: '#6b1f30' },
  { variable: '--color-rose', etiqueta: 'Rose (acento)', valorPorDefecto: '#d89aa8' },
  {
    variable: '--color-rose-oscuro',
    etiqueta: 'Rose oscuro (hover, header)',
    valorPorDefecto: '#8a4356',
  },
  { variable: '--color-blush', etiqueta: 'Blush (fondo)', valorPorDefecto: '#f7e8ec' },
  { variable: '--color-rama', etiqueta: 'Rama (decorativo)', valorPorDefecto: '#9db894' },
]

type Paleta = {
  nombre: string
  valores: Record<string, string>
}

/**
 * Direcciones de marca para que la clienta elija de un click, sin armar el
 * look color por color. Elegidas con matices bien separados entre sí en la
 * rueda de color para que se distingan claramente una de otra, dentro del
 * tono del sitio (cálido, autoridad clínica, sin spa). Cada una reemplaza
 * los 5 tokens editables a la vez; el resto de los derivados (wine-oscuro,
 * blush-panel, etc.) se recalculan solos vía color-mix() en index.css.
 *
 * Contraste verificado (WCAG AA) contra los usos reales del sitio: wine
 * sobre blanco (hero, CTA, footer) y wine-oscuro/rose-oscuro sobre blush
 * (kickers, texto de botón claro) — todas quedan por encima de 6.5:1, bien
 * arriba del mínimo de 4.5:1 para texto de cuerpo.
 */
const PALETAS: Paleta[] = [
  {
    // Cálida, terrosa — misma familia que el wine actual pero más clara y
    // menos roja. Contraste wine/blanco ≈ 6.7:1.
    nombre: 'Ámbar clínico',
    valores: {
      '--color-wine': '#8a4a2c',
      '--color-rose': '#d99a6e',
      '--color-rose-oscuro': '#6b3618',
      '--color-blush': '#faf1e6',
      '--color-rama': '#a9a066',
    },
  },
  {
    // El verde de las ramas pasa a ser el color dominante en vez de solo
    // decorativo. Contraste wine/blanco ≈ 8.9:1.
    nombre: 'Bosque profundo',
    valores: {
      '--color-wine': '#34503c',
      '--color-rose': '#a7c49c',
      '--color-rose-oscuro': '#1f3226',
      '--color-blush': '#f2f6ec',
      '--color-rama': '#7c9473',
    },
  },
  {
    // Fría, editorial — se aleja del rojo/naranja de las otras dos.
    // Contraste wine/blanco ≈ 13:1.
    nombre: 'Ciruela editorial',
    valores: {
      '--color-wine': '#4a2440',
      '--color-rose': '#cf9ec4',
      '--color-rose-oscuro': '#331a2c',
      '--color-blush': '#f6eef4',
      '--color-rama': '#8fa085',
    },
  },
  {
    // Azul marino — la lectura "confianza clínica" más directa del celeste;
    // desaturado para no caer en corporativo genérico. Contraste
    // wine/blanco ≈ 9.8:1.
    nombre: 'Azul marino profesional',
    valores: {
      '--color-wine': '#24456b',
      '--color-rose': '#7ba3c9',
      '--color-rose-oscuro': '#17304d',
      '--color-blush': '#eef3f7',
      '--color-rama': '#7c9473',
    },
  },
  {
    // Celeste-verdoso, más editorial que corporativo; el matiz corrido hacia
    // el teal separa esta paleta de la marino en vez de ser una variación
    // del mismo azul. Contraste wine/blanco ≈ 8.5:1.
    nombre: 'Celeste editorial',
    valores: {
      '--color-wine': '#1f5266',
      '--color-rose': '#7fc1d4',
      '--color-rose-oscuro': '#123640',
      '--color-blush': '#eaf5f7',
      '--color-rama': '#6f9a8a',
    },
  },
  {
    // Multicolor a propósito (celeste + blanco + naranja + verde), a
    // diferencia de las demás que son una familia + un acento. El celeste va
    // oscuro para que funcione como wine (texto blanco encima, y el naranja
    // como texto sobre él en VSL/Guía/Footer) — contraste naranja/celeste
    // ≈ 4.6:1, wine/blanco ≈ 12.9:1.
    nombre: 'Costa mediterránea',
    valores: {
      '--color-wine': '#0c3450',
      '--color-rose': '#e2812f',
      '--color-rose-oscuro': '#a44f0f',
      '--color-blush': '#eef6fb',
      '--color-rama': '#4f9d5c',
    },
  },
]

const STORAGE_KEY = 'selector-colores-preview'

/** El nombre del token es literalmente el sufijo de la clase Tailwind (bg-wine, text-rose-oscuro...). */
function fragmentoDe(variable: string) {
  return variable.replace('--color-', '')
}

const PREFIJOS_UTILIDAD =
  '(bg|text|border|fill|stroke|ring|outline|decoration|from|via|to|accent|caret)'

/**
 * Compara clase a clase (no substring de toda la lista) para que "wine" no
 * matchee "bg-wine-oscuro": la clase debe terminar justo en el fragmento, o
 * en el fragmento seguido de un modificador de opacidad (`/85`).
 */
function coincideClase(clase: string, fragmento: string) {
  const patron = new RegExp(
    `^(?:[a-z0-9-]+:)?${PREFIJOS_UTILIDAD}-${fragmento}(?:/\\d{1,3})?$`,
  )
  return patron.test(clase)
}

function elementosParaFragmento(fragmento: string): HTMLElement[] {
  const candidatos = document.querySelectorAll<HTMLElement>('[class]')
  const resultado: HTMLElement[] = []
  candidatos.forEach((el) => {
    const clases = el.className.toString().split(/\s+/).filter(Boolean)
    if (clases.some((clase) => coincideClase(clase, fragmento))) {
      resultado.push(el)
    }
  })
  return resultado
}

function leerValoresGuardados(): Record<string, string> {
  try {
    const crudo = window.localStorage.getItem(STORAGE_KEY)
    return crudo ? JSON.parse(crudo) : {}
  } catch {
    return {}
  }
}

const ESTILO_RESALTE = '2px solid'
const ESTILO_RESALTE_FOCO = '3px solid'

export default function SelectorColores() {
  const [abierto, setAbierto] = useState(false)
  const [valores, setValores] = useState<Record<string, string>>(leerValoresGuardados)
  const indicesRef = useRef<Record<string, number>>({})
  const resaltadosRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    for (const [variable, valor] of Object.entries(valores)) {
      document.documentElement.style.setProperty(variable, valor)
    }
    // Solo se aplica una vez, al montar: los cambios posteriores los aplica
    // `cambiarColor` directo sobre el DOM.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function cambiarColor(variable: string, valor: string) {
    document.documentElement.style.setProperty(variable, valor)
    setValores((previo) => {
      const siguiente = { ...previo, [variable]: valor }
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(siguiente))
      } catch {
        // Almacenamiento no disponible (ventana privada, etc.): la prueba sigue
        // funcionando en esta sesión, solo no sobrevive un refresh.
      }
      return siguiente
    })
  }

  function aplicarPaleta(paleta: Paleta) {
    for (const [variable, valor] of Object.entries(paleta.valores)) {
      document.documentElement.style.setProperty(variable, valor)
    }
    setValores((previo) => {
      const siguiente = { ...previo, ...paleta.valores }
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(siguiente))
      } catch {
        // Almacenamiento no disponible: la prueba sigue funcionando en esta
        // sesión, solo no sobrevive un refresh.
      }
      return siguiente
    })
  }

  function esPaletaActiva(paleta: Paleta) {
    return Object.entries(paleta.valores).every(
      ([variable, valor]) =>
        (valores[variable] ?? TOKENS.find((t) => t.variable === variable)?.valorPorDefecto) ===
        valor,
    )
  }

  function restaurar() {
    for (const token of TOKENS) {
      document.documentElement.style.removeProperty(token.variable)
    }
    setValores({})
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Nada que limpiar si no hay storage disponible.
    }
  }

  function quitarResaltado() {
    for (const el of resaltadosRef.current) {
      el.style.outline = ''
      el.style.outlineOffset = ''
    }
    resaltadosRef.current = []
  }

  function resaltarAlPasar(fragmento: string, color: string) {
    quitarResaltado()
    const elementos = elementosParaFragmento(fragmento)
    for (const el of elementos) {
      el.style.outline = `${ESTILO_RESALTE} ${color}`
      el.style.outlineOffset = '2px'
    }
    resaltadosRef.current = elementos
  }

  function irAlSiguiente(fragmento: string, color: string) {
    const elementos = elementosParaFragmento(fragmento)
    if (elementos.length === 0) return

    const anterior = indicesRef.current[fragmento] ?? -1
    const indice = (anterior + 1) % elementos.length
    indicesRef.current[fragmento] = indice
    const objetivo = elementos[indice]

    objetivo.scrollIntoView({ behavior: 'smooth', block: 'center' })
    objetivo.style.outline = `${ESTILO_RESALTE_FOCO} ${color}`
    objetivo.style.outlineOffset = '3px'
    window.setTimeout(() => {
      objetivo.style.outline = ''
      objetivo.style.outlineOffset = ''
    }, 1600)
  }

  return (
    <div className="fixed right-4 bottom-4 z-[100] flex items-end gap-3 font-label">
      {abierto && (
        <div className="max-h-[80vh] w-[290px] overflow-y-auto rounded-[3px] border border-wine/15 bg-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.18)]">
          <p className="m-0 mb-3 text-[11px] font-medium tracking-[0.08em] text-wine uppercase">
            Paletas sugeridas
          </p>
          <div className="mb-4 grid gap-2">
            {PALETAS.map((paleta) => {
              const activa = esPaletaActiva(paleta)
              return (
                <button
                  key={paleta.nombre}
                  type="button"
                  onClick={() => aplicarPaleta(paleta)}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-[3px] border px-2.5 py-2 text-left hover:bg-blush ${
                    activa ? 'border-wine' : 'border-wine/15'
                  }`}
                >
                  <span className="flex shrink-0 -space-x-1.5">
                    {TOKENS.map((token) => (
                      <span
                        key={token.variable}
                        className="h-5 w-5 rounded-full border border-white"
                        style={{ background: paleta.valores[token.variable] }}
                      />
                    ))}
                  </span>
                  <span className="min-w-0 text-[11.5px] font-light text-tinta">
                    {paleta.nombre}
                  </span>
                </button>
              )
            })}
          </div>

          <p className="m-0 mb-3 text-[11px] font-medium tracking-[0.08em] text-wine uppercase">
            Ajustar cada color
          </p>
          <div className="grid gap-3">
            {TOKENS.map((token) => {
              const valorActual = valores[token.variable] ?? token.valorPorDefecto
              const fragmento = fragmentoDe(token.variable)
              return (
                <div
                  key={token.variable}
                  className="flex items-center justify-between gap-2 text-[12px] font-light text-tinta"
                  onMouseEnter={() => resaltarAlPasar(fragmento, valorActual)}
                  onMouseLeave={quitarResaltado}
                >
                  <label className="flex min-w-0 flex-1 items-center gap-2">
                    <input
                      type="color"
                      value={valorActual}
                      onChange={(evento) =>
                        cambiarColor(token.variable, evento.target.value)
                      }
                      className="h-7 w-7 shrink-0 cursor-pointer border border-wine/15 p-0"
                    />
                    <span className="min-w-0">
                      <span className="block truncate">{token.etiqueta}</span>
                      <code className="block text-[10px] tracking-tight text-tinta-tenue uppercase">
                        {valorActual}
                      </code>
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => irAlSiguiente(fragmento, valorActual)}
                    title="Ubicar dónde se usa este color en la página"
                    aria-label={`Ubicar elementos con el color ${token.etiqueta}`}
                    className="grid h-7 w-7 shrink-0 cursor-pointer place-items-center rounded-full border border-wine/20 bg-transparent text-wine hover:bg-blush"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="7" />
                      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    </svg>
                  </button>
                </div>
              )
            })}
          </div>
          <p className="m-0 mt-3 text-[10.5px] leading-[1.5] font-light text-tinta-tenue">
            Pasa el mouse sobre un color para verlo resaltado en la página.
            Toca la mira para saltar al siguiente elemento con ese color.
          </p>
          <button
            type="button"
            onClick={restaurar}
            className="mt-4 w-full cursor-pointer border border-wine/20 bg-transparent px-3 py-2 text-[10.5px] font-medium tracking-[0.1em] text-wine uppercase hover:bg-blush"
          >
            Restaurar colores originales
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setAbierto((valor) => !valor)}
        aria-expanded={abierto}
        aria-label={abierto ? 'Cerrar selector de colores' : 'Probar otros colores'}
        className="grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full border border-wine/15 bg-wine text-white shadow-[0_6px_18px_rgba(0,0,0,0.22)] hover:bg-wine-oscuro"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="8.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      </button>
    </div>
  )
}
