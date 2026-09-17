import { useEffect } from 'react'

const SRC = 'https://link.msgsndr.com/js/form_embed.js'

/**
 * Carga el script de embed de Go High Level una sola vez por documento.
 *
 * GHL lo necesita para redimensionar el iframe según la altura real del
 * formulario. Los dos formularios del sitio (guía y masterclass) pueden estar
 * montados a la vez en el futuro, así que se lleva la cuenta de consumidores en
 * vez de insertar y borrar el <script> en cada montaje.
 */
let consumidores = 0

export function useGhlEmbed() {
  useEffect(() => {
    consumidores += 1

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SRC}"]`,
    )
    if (!script) {
      script = document.createElement('script')
      script.src = SRC
      script.async = true
      document.body.appendChild(script)
    }

    return () => {
      consumidores -= 1
      if (consumidores === 0) script?.remove()
    }
  }, [])
}
