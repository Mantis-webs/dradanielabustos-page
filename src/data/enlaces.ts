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

export const CORREO = 'dra.dbustosr@gmail.com'

/**
 * TODO (README punto 4, bloqueante): la página de política de privacidad no
 * existe. En el prototipo el checkbox de consentimiento apunta a un ancla
 * vacía; mantenemos el mismo estado pendiente en vez de inventar contenido
 * legal. Reemplazar por la ruta real cuando exista.
 */
export const POLITICA_PRIVACIDAD = '#'

export const AGENCIA = 'https://zabroso.cl'

/**
 * TODO (README punto 13, bloqueante): el reel / short real NO existe todavía.
 *
 * `pU6_t5tU3hQ` es un Short de las Bibliothèques UdeM, usado solo como relleno
 * para montar y revisar el reproductor 9:16; su licencia no está verificada,
 * así que NO se debe publicar con él.
 *
 * Para publicar hay que:
 *   1. Pedirle a la clienta el reel / short real.
 *   2. Subirlo a YouTube (Short o NO LISTADO) desde la cuenta de la Dra.
 *      Vidstack no reproduce Instagram.
 *   3. Reemplazar VSL_VIDEO_ID por el id de ese video.
 *   4. Poner VSL_ES_PLACEHOLDER en false para que desaparezca el aviso en la
 *      página.
 */
export const VSL_VIDEO_ID = 'pU6_t5tU3hQ'

/** Mientras sea `true`, /curso muestra el aviso de que el video es de relleno. */
export const VSL_ES_PLACEHOLDER = true
