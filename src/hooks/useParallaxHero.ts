import { useEffect, useRef } from 'react'

/**
 * Parallax del hero. Port directo del `onScroll` de site/index.html:
 * tres refs movidas por un listener de scroll pasivo, encoladas con
 * requestAnimationFrame para no escribir el DOM más de una vez por frame.
 *
 * Los coeficientes son los del prototipo, no se ajustaron:
 *   hoja    dy = y * 0.16   dx = y * -0.03
 *   ramas   dy = y * -0.09  dx = y * 0.05
 *   puntos  dy = y * 0.26   scale = 1 + min(y, 800) * 0.00006
 *
 * Añadido respecto del prototipo: si el usuario pide menos movimiento
 * (prefers-reduced-motion), el efecto no se engancha.
 */
export function useParallaxHero() {
  const hojaRef = useRef<HTMLDivElement>(null)
  const ramasRef = useRef<SVGSVGElement>(null)
  const puntosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame: number | null = null

    const mover = (
      el: Element | null,
      dy: number,
      dx: number,
      escala?: number,
    ) => {
      if (!(el instanceof HTMLElement) && !(el instanceof SVGElement)) return
      el.style.transform =
        `translate3d(${dx}px, ${dy}px, 0)` +
        (escala ? ` scale(${escala})` : '')
    }

    const onScroll = () => {
      if (frame !== null) return
      frame = requestAnimationFrame(() => {
        frame = null
        const y = window.scrollY || 0
        mover(hojaRef.current, y * 0.16, y * -0.03)
        mover(ramasRef.current, y * -0.09, y * 0.05)
        mover(puntosRef.current, y * 0.26, 0, 1 + Math.min(y, 800) * 0.00006)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return { hojaRef, ramasRef, puntosRef }
}
