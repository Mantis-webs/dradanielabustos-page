/**
 * IDs de analítica y publicidad (README punto 6).
 *
 * Mientras un ID esté vacío, su script no se carga. Si todos están vacíos,
 * tampoco aparece el aviso de cookies: no hay nada que consentir. Con al menos
 * uno configurado, los scripts cargan SOLO después de que la persona acepta en
 * el aviso (Ley 21.719 y RGPD; ver la política en /privacidad).
 *
 * Son identificadores públicos (viajan en el HTML de cualquier sitio que los
 * use), así que pueden vivir en el repo.
 *
 * Google Search Console no va acá: se verifica la propiedad de dominio con un
 * registro TXT en el DNS de Cloudflare.
 */

/** Google Analytics 4, formato `G-XXXXXXXXXX`. */
export const GA4_ID = ''

/** Microsoft Clarity, id del proyecto (10 caracteres). */
export const CLARITY_ID = ''

/** Meta Pixel, id numérico del dataset. */
export const META_PIXEL_ID = ''

export const HAY_ANALITICA = Boolean(GA4_ID || CLARITY_ID || META_PIXEL_ID)

/** Evento de window que reabre el aviso de cookies (lo dispara el footer). */
export const EVENTO_ABRIR_COOKIES = 'abrir-preferencias-cookies'
