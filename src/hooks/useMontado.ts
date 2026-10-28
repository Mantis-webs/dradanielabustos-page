import { useSyncExternalStore } from 'react'

const sinSuscripcion = () => () => {}

/**
 * `false` en el prerender y durante la hidratación; `true` desde el primer
 * render en el navegador. Para lo que depende de APIs del navegador
 * (localStorage, reproductores) y no debe ir en el HTML estático: así el HTML
 * del servidor y el primer render del cliente coinciden.
 */
export function useMontado() {
  return useSyncExternalStore(
    sinSuscripcion,
    () => true,
    () => false,
  )
}
