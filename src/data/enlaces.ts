/**
 * Enlaces reales de la clienta.
 *
 * El prototipo (`site/`) trae placeholders — `https://encuadrada.com`,
 * `linkedin.com/in/PENDIENTE` — porque la versión que entregó la clienta no
 * incorporó las correcciones. Estos son los valores confirmados el 2026-09-16,
 * documentados en la tabla "Datos reales del cliente" del README de la raíz.
 * Aplicarlos acá es el punto 10 de los pendientes.
 */
export const AGENDAMIENTO =
  'https://p.encuadrado.com/p/dra-danielabustosriquelme'

export const INSTAGRAM = 'https://www.instagram.com/dra.danielabustos/'

export const LINKEDIN = 'https://www.linkedin.com/in/dra-daniela-bustos/'

/** TODO: sin confirmar por la clienta (README, "Correo de contacto"). */
export const CORREO = 'contacto@dradanielabustos.com'

/**
 * TODO (README punto 4, bloqueante): la página de política de privacidad no
 * existe. En el prototipo el checkbox de consentimiento apunta a un ancla
 * vacía; mantenemos el mismo estado pendiente en vez de inventar contenido
 * legal. Reemplazar por la ruta real cuando exista.
 */
export const POLITICA_PRIVACIDAD = '#'

export const AGENCIA = 'https://zabroso.cl'

/**
 * TODO (README punto 13, bloqueante): el VSL real NO existe todavía.
 *
 * `YE7VzlLtp-4` es "Big Buck Bunny" del canal oficial de Blender Foundation,
 * licencia CC-BY 3.0. Es un relleno para poder montar y revisar el reproductor;
 * no tiene ninguna relación con el contenido de la masterclass.
 *
 * Para publicar hay que:
 *   1. Pedirle a la clienta el video real de la masterclass (~40 min).
 *   2. Subirlo a YouTube como NO LISTADO desde la cuenta de la Dra.
 *   3. Reemplazar VSL_VIDEO_ID por el id de ese video.
 *   4. Poner VSL_ES_PLACEHOLDER en false para que desaparezca el aviso en la
 *      página.
 */
export const VSL_VIDEO_ID = 'YE7VzlLtp-4'

/** Mientras sea `true`, /curso muestra el aviso de que el video es de relleno. */
export const VSL_ES_PLACEHOLDER = true
