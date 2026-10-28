import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { CLARITY_ID, GA4_ID, META_PIXEL_ID } from '../data/analitica'

type Cola = ((...args: unknown[]) => void) & { q?: unknown[][] }

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: Cola
    fbq?: Cola & { callMethod?: (...args: unknown[]) => void; queue?: unknown[][] }
    _fbq?: unknown
  }
}

function cargarScript(src: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

/**
 * Snippets oficiales de GA4, Clarity y Meta Pixel, reescritos sin el
 * minificado. Cada uno deja una cola global para que los eventos llamados
 * antes de que cargue el script no se pierdan.
 */
function iniciar() {
  if (GA4_ID) {
    window.dataLayer = window.dataLayer ?? []
    window.gtag = function gtag() {
      // gtag exige el objeto `arguments`, no un array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    // Las páginas vistas se mandan a mano en cada cambio de ruta.
    window.gtag('config', GA4_ID, { send_page_view: false })
    cargarScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`)
  }

  if (CLARITY_ID) {
    const clarity: Cola = (...args) => {
      ;(clarity.q = clarity.q ?? []).push(args)
    }
    window.clarity = window.clarity ?? clarity
    cargarScript(`https://www.clarity.ms/tag/${CLARITY_ID}`)
  }

  if (META_PIXEL_ID && !window.fbq) {
    const fbq: NonNullable<Window['fbq']> = (...args) => {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue!.push(args)
    }
    fbq.queue = []
    window.fbq = fbq
    window._fbq = fbq
    Object.assign(fbq, { push: fbq, loaded: true, version: '2.0' })
    cargarScript('https://connect.facebook.net/en_US/fbevents.js')
    fbq('init', META_PIXEL_ID)
  }
}

/**
 * Carga la analítica cuando hay consentimiento y registra una página vista por
 * cada cambio de ruta (la SPA no recarga, así que los scripts no lo detectan
 * solos).
 */
export function useAnalitica(consentida: boolean) {
  const { pathname } = useLocation()
  const iniciada = useRef(false)

  useEffect(() => {
    if (!consentida) return
    if (!iniciada.current) {
      iniciar()
      iniciada.current = true
    }
    window.gtag?.('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
    window.fbq?.('track', 'PageView')
  }, [consentida, pathname])
}
