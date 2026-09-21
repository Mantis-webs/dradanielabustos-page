# Dra. Daniela Bustos Riquelme — repositorio

Ver `CLAUDE.md` para la descripción del repo: una sola app en `src/`
(producto final). El prototipo original quedó deprecado en
`deprecated/site/` (2026-09-21), solo como referencia histórica. Este README
concentra los pendientes activos del proyecto.

## Datos reales del cliente (referencia)

Esta información es de la clienta real. Es la fuente de verdad para conectar
analítica/GHL y para el contenido de `src/`.

| Dato | Valor | Estado |
|---|---|---|
| Instagram | https://www.instagram.com/dra.danielabustos/ | Confirmado por la clienta (2026-09-16) |
| LinkedIn | https://www.linkedin.com/in/dra-daniela-bustos/ | Confirmado por la clienta (2026-09-16) |
| Agendamiento (Encuadrado) | https://p.encuadrado.com/p/dra-danielabustosriquelme | Confirmado por la clienta (2026-09-16). Sin `utm_*`/`fbclid` — esos parámetros son solo para el link de la bio de Instagram, no para el sitio |
| Correo de contacto | dra.dbustosr@gmail.com | Confirmado por la clienta (2026-09-21) |
| Dominio de producción | dradanielabustos.com | Confirmado por la clienta (2026-09-21) |
| Google Search Console | — | Pendiente de acceso/credenciales |
| Google Analytics | — | Pendiente de acceso/credenciales |
| Microsoft Clarity | — | Pendiente de acceso/credenciales |
| Meta Pixel | — | Pendiente de ID/credenciales |
| Go High Level (cuenta/API) | — | Pendiente de acceso |
| GHL form ID — Lead Magnet (Guía gratuita) | `i5J4FVtDg6IGXxDinIBS` | Creado en GHL, embebido en `src/components/FormularioLeadMagnet.tsx` (2026-09-16) |
| GHL form ID — Masterclass | `4OGCGkVkd06S7iChG3Ws` | Creado en GHL y embebido en `src/components/FormularioMasterclass.tsx` (2026-09-16) |

A medida que lleguen más accesos o enlaces, se agregan filas a esta tabla.

## Pendientes

Los enlaces y accesos de conexión (Google, GHL, etc.) se van a ir entregando y
se documentan acá a medida que lleguen. El repo es público; se decidió
conscientemente no preocuparse por eso.

### 1. Migración de tecnología — RESUELTO

`deprecated/site/index.html` y `deprecated/site/curso/index.html` (ver punto
14) fueron portados a `src/` con React 19, TypeScript, Tailwind 4 y Vite
(2026-09-16). Se mantuvo React; Astro quedó descartado. Ruteo con
`react-router-dom` entre `/` y `/curso`.

Desvíos deliberados respecto del prototipo, documentados en el código:

- **La sección `#faq` no se portó**, aunque la clienta la devolvió al
  prototipo. Su markup sigue en `deprecated/site/index.html` por si se decide
  recuperarla.
- No se portaron tres medidas fijas heredadas del canvas de Claude Design que
  rompen el layout (ver `src/components/home/Enfoque.tsx`).
- Se resolvió el menú hamburguesa, que en el prototipo estaba pendiente.

### 2. Agendamiento en la página principal (`/`) — RESUELTO, no hay form de GHL

**Corregido 2026-09-16**: se aclaró la ambigüedad de este punto. El form con
id `i5J4FVtDg6IGXxDinIBS` (antes en `src/components/Formulario.tsx`, ahora
renombrado a `src/components/FormularioLeadMagnet.tsx`) **no es** un form de
agendamiento — es el mismo form de la Lead Magnet / Guía gratuita (punto 4).
El agendamiento **no tiene form propio en GHL**: sigue siendo el link externo
"Agendar consulta" → `https://p.encuadrado.com/p/dra-danielabustosriquelme`
(gestionado por Encuadrado, fuera de GHL). No hay nada pendiente de crear acá
a menos que se decida más adelante meter un form de precalificación antes del
link — no se ha pedido.

### 3. Form de inscripción a la masterclass (`/curso`) — embebido

El form se creó en GHL con id `4OGCGkVkd06S7iChG3Ws` y **ya está embebido**
en `src/components/FormularioMasterclass.tsx`, montado en
`src/components/curso/Inscripcion.tsx` (2026-09-16). Campos definidos:

- Nombre (requerido)
- Apellido (requerido — separado de Nombre)
- Correo electrónico (requerido)
- WhatsApp / Teléfono — **requerido** (hoy está como opcional en el
  placeholder de `deprecated/site/curso/index.html`; se define como obligatorio para
  poder hacer seguimiento por WhatsApp antes/después de la clase)
- Checkbox de consentimiento de datos (ya existe en el placeholder —
  corregido 2026-09-16, antes decía por error que no existía. Texto actual:
  "Acepto la política de privacidad y el uso de mis datos para recibir el
  acceso a la clase.")
- Tag automático en GHL: `lead-masterclass`

El contenido de la página sigue pendiente: el reproductor del VSL ya está
montado pero con un video de relleno, y el copy del hero es placeholder. Ver
punto 13.

### 4. Form de la guía gratuita (home, sección `#guia`) — campos cerrados

Form id `i5J4FVtDg6IGXxDinIBS`, embebido en el producto
(`src/components/FormularioLeadMagnet.tsx`, montado en
`src/components/home/Guia.tsx`) con el código de embed oficial, que incluye el
script `https://link.msgsndr.com/js/form_embed.js` requerido por GHL para
redimensionar el iframe.

**Decisión final del 2026-09-16 — el form pide solo dos cosas:**

- Correo (obligatorio)
- Checkbox de consentimiento de la política de privacidad (obligatorio)
- Tag automático en GHL: `lead-guia`

Se descartaron Nombre, Apellido y Teléfono, que llegaron a estar configurados.
La captura de la guía vuelve a ser la de una sola línea: cuanto menos fricción,
más leads en un recurso gratuito. Los datos de contacto ricos se piden en el
form de la masterclass (punto 3), que es el paso de mayor intención.

**También se descartó el checkbox de newsletter.** Motivo técnico: el elemento
"Terms & Conditions" de GHL es un campo de sistema, así que dos casillas
escriben en el mismo campo `terms_and_conditions` y no se pueden distinguir en
la ficha del contacto. Un opt-in de marketing que no se puede leer no se puede
honrar. Si más adelante se quiere newsletter, hay que crear un **campo
personalizado** de tipo checkbox en GHL (Settings → Custom Fields) en vez de un
segundo "Terms & Conditions": ese sí tiene clave propia y se puede segmentar.

**Sigue bloqueante**: el enlace a la política de privacidad no apunta a ninguna
parte, porque esa página no existe. En el producto es la constante
`POLITICA_PRIVACIDAD` de `src/data/enlaces.ts`, hoy en `'#'`. Hace falta la
página real antes de poder pedir este consentimiento en serio.

### 5. Deploy — RESUELTO

**Confirmado 2026-09-21**: el deploy en Cloudflare Pages ya está funcionando
correctamente. No hay nada pendiente acá.

### 6. Analítica y tracking

- Alta en Google Search Console
- Conectar Google Analytics
- Conectar Microsoft Clarity
- Instalar Meta Pixel

### 7. Tags de Go High Level para métricas

Instalar tracking tag/pixel de GHL para poder ver métricas de la página desde
GHL (no solo conversiones de formulario). Tags de lead ya definidos arriba:
`lead-guia`, `lead-masterclass` (falta el de agendamiento, ver punto 2).

### 8. Auditoría SEO

Correr la skill de auditoría SEO instalada globalmente (`claude-seo-ai:audit`)
sobre el sitio.

### 9. Reseñas — reemplazar Trustpilot por scraping de Encuadrado — RESUELTO

**Resuelto 2026-09-21.** Se descartó Trustpilot para la sección de
testimonios. Implementado:

- `functions/api/resenas.ts` — Cloudflare Pages Function. La página de
  Encuadrado (`p.encuadrado.com/p/dra-danielabustosriquelme`) es Next.js con
  SSR: el HTML que devuelve ya trae el texto de las reseñas embebido, así que
  no hace falta browser headless ni SSR propio — alcanza con `fetch` +
  parseo por regex de los bloques `data-slot="card-content"`.
- El resultado se cachea con la Cache API de Cloudflare (`caches.default`,
  24h) para no pegarle a Encuadrado en cada visita. Solo funciona en el
  dominio custom de producción, no en previews `*.pages.dev` — ahí simplemente
  no cachea. Plan free de Cloudflare: 100.000 requests/día en Pages
  Functions, muy por encima del tráfico esperado.
- `src/components/home/Testimonios.tsx` hace `fetch('/api/resenas')` al
  montar y reemplaza el contenido si hay respuesta; si falla (Encuadrado
  caído, cambio de markup, o `vite dev` donde la Function no corre) usa
  `TESTIMONIOS_FALLBACK` en `src/data/contenido.ts` — las 3 reseñas reales
  tomadas de Encuadrado el 2026-09-21, no un placeholder inventado.
- Se quitó el aviso "Pendiente · reemplazar por reseñas reales de
  Trustpilot" y el link a Trustpilot; el footer de la sección ahora enlaza a
  Encuadrado.
- **Riesgo conocido**: el parseo depende del markup actual de Encuadrado
  (clases Tailwind tipo `line-clamp-2`, `font-semibold`, etc.). Si Encuadrado
  cambia su HTML, el regex deja de matchear y el sitio cae al fallback
  estático sin romperse — pero las reseñas dejan de actualizarse hasta
  ajustar el parser.

### 10. Links tras la migración — RESUELTOS en el producto

Los links reales están aplicados en `src/`, centralizados en
`src/data/enlaces.ts` (2026-09-16):

- "Agendar consulta" → `https://p.encuadrado.com/p/dra-danielabustosriquelme`
  (sin `utm_*`/`fbclid`)
- Instagram → `https://www.instagram.com/dra.danielabustos/`
- LinkedIn → `https://www.linkedin.com/in/dra-daniela-bustos/`

`site/` **no** los tiene: la versión que entregó la clienta trae
`encuadrada.com` (un dominio distinto del real), `linkedin.com/in/PENDIENTE` e
Instagram sin `www`. Eso es correcto y no hay que arreglarlo ahí: el prototipo
es de revisión de contenido, y el producto es el que va a producción.

### 11. Desincronizaciones de documentación — CERRADO

**Cerrado 2026-09-21**: ya se conversó con la clienta el tema de las ramas
decorativas (rose vs. verde salvia) y las secciones/estados que
`deprecated/site/CLAUDE.md` menciona sin correspondencia en el markup actual. No requiere
más acción de nuestro lado. Queda documentado acá solo como registro
histórico.

### 12. Estilos de los formularios de GHL — RESUELTO

El formulario es un `<iframe>` de otro origen: su apariencia **no se puede
controlar desde `src/`**, porque el CSS no cruza esa frontera. Se controla
pegando `docs/ghl-form-estilos.css` en el Custom CSS del builder de GHL.

- Bloques 1 a 7 → los dos formularios.
- Bloque 8 → **solo** el de la guía, que al tener un único campo recupera la
  línea de correo más botón del prototipo.

**Confirmado 2026-09-21**: se verificó en un navegador real. El alto de los
contenedores de los iframes (`150px` la guía, `560px` la masterclass) funciona
bien. No hay nada pendiente acá.

### 13. VSL y copy de `/curso` — pendiente

La página de la masterclass está montada y navegable, pero su contenido es
placeholder. Son dos huecos distintos, los dos visibles en la interfaz con su
etiqueta "Pendiente":

**El reproductor del VSL.** El reproductor YA está montado:
`src/components/curso/Vsl.tsx` usa [Vidstack](https://vidstack.io)
(`@vidstack/react`, MIT) sobre un video de YouTube, con los controles teñidos
con la paleta de la Dra. Lo que falta es el video real.

- **Falta el video de la masterclass.** Hoy `VSL_VIDEO_ID` en
  `src/data/enlaces.ts` apunta a `YE7VzlLtp-4` — "Big Buck Bunny" del canal
  oficial de Blender Foundation, licencia CC-BY 3.0. Es un relleno para poder
  revisar el reproductor; **no tiene ninguna relación con el contenido de la
  clase**. Para cerrar el punto: pedirle el video a la clienta, subirlo a
  YouTube como **no listado** desde su cuenta, reemplazar `VSL_VIDEO_ID` y
  poner `VSL_ES_PLACEHOLDER` en `false` para que desaparezca el aviso de la
  página.
- Confirmar la duración: el texto dice "Masterclass gratuita · 40 minutos" y
  ese dato viene del prototipo, sin confirmar con la clienta.
- Cookies de terceros: el embed de YouTube engancha con la política de
  privacidad del punto 4. Vidstack acepta URLs de `youtube-nocookie.com`, así
  que la variante sin cookies es un cambio de `src`, no de arquitectura.
- Decidir si el video se bloquea detrás del formulario. **Hoy no se bloquea, y
  eso es fiel al prototipo**: `deprecated/site/CLAUDE.md` describe un estado `unlocked`
  para ese fin, pero no existe ni en el markup ni en la lógica de
  `deprecated/site/curso/index.html`. Si se quiere el video bloqueado, es una
  funcionalidad nueva que hay que pedir, no algo que se haya perdido al portar.

Si más adelante se quiere salir de YouTube, Vidstack también reproduce MP4 y
HLS: cambia el `src`, no el componente.

**El copy del hero.** `src/components/curso/HeroCurso.tsx` muestra "Titular de
la masterclass" y una bajada que empieza con "Bajada pendiente". Falta el
titular y la promesa reales: qué se lleva quien ve la clase y por qué le sirve
antes de cualquier consulta.

Mientras los dos huecos sigan abiertos, `/curso` no se le puede mostrar a nadie
que no sea la clienta.

### 14. Prototipo `site/` deprecado — RESUELTO

**2026-09-21**: el repo dejó de ser dos tracks. `site/` se movió a
`deprecated/site/` y se eliminó `.github/workflows/deploy-pages.yml` (ya no
hay nada de GitHub Pages que publicar). Ahora es una sola app: `src/`. El
contenido de `deprecated/site/` se conserva solo como referencia histórica —
no se edita ni se vuelve a publicar. Ver `CLAUDE.md` actualizado.
