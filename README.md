# Dra. Daniela Bustos Riquelme — repositorio

Ver `CLAUDE.md` para la descripción de los dos tracks del repo (`site/` prototipo
vs `src/` producto). Este README concentra los pendientes activos del proyecto.

## Datos reales del cliente (referencia — no depende del contenido de site/)

Esta información es de la clienta real, no contenido de prototipo. **Se
mantiene acá aunque el contenido de `site/` se reemplace por una versión
nueva** — es la fuente de verdad para cuando se haga la migración a `src/` y
para conectar analítica/GHL más adelante.

| Dato | Valor | Estado |
|---|---|---|
| Instagram | https://www.instagram.com/dra.danielabustos/ | Confirmado por la clienta (2026-09-16) |
| LinkedIn | https://www.linkedin.com/in/dra-daniela-bustos/ | Confirmado por la clienta (2026-09-16) |
| Agendamiento (Encuadrado) | https://p.encuadrado.com/p/dra-danielabustosriquelme | Confirmado por la clienta (2026-09-16). Sin `utm_*`/`fbclid` — esos parámetros son solo para el link de la bio de Instagram, no para el sitio |
| Correo de contacto | contacto@dradanielabustos.com | **Sin confirmar** — es un placeholder puesto en el prototipo, falta que la clienta lo confirme o entregue el real |
| Dominio de producción | — | **Pendiente** — no se ha definido/entregado el dominio final del sitio |
| Google Search Console | — | Pendiente de acceso/credenciales |
| Google Analytics | — | Pendiente de acceso/credenciales |
| Microsoft Clarity | — | Pendiente de acceso/credenciales |
| Meta Pixel | — | Pendiente de ID/credenciales |
| Go High Level (cuenta/API) | — | Pendiente de acceso |
| GHL form ID — Lead Magnet (Guía gratuita) | `i5J4FVtDg6IGXxDinIBS` | Creado en GHL, embebido en `src/components/FormularioLeadMagnet.tsx` (2026-09-16) |
| GHL form ID — Masterclass | `4OGCGkVkd06S7iChG3Ws` | Creado en GHL y embebido en `src/components/FormularioMasterclass.tsx` (2026-09-16) |

A medida que lleguen más accesos o enlaces, se agregan filas a esta tabla —no
se pierden aunque cambie `site/`.

## Pendientes

La versión nueva de `site/` que anticipaba este README **ya llegó** y está en
el repo (2026-09-16). Los enlaces y accesos de conexión (Google, GHL, etc.) se
van a ir entregando y se documentan acá a medida que lleguen. El repo es
público; se decidió conscientemente no preocuparse por eso.

### 1. Migración de tecnología — RESUELTO

`site/index.html` y `site/curso/index.html` están portados a `src/` con React
19, TypeScript, Tailwind 4 y Vite (2026-09-16). Se mantuvo React; Astro quedó
descartado. Ruteo con `react-router-dom` entre `/` y `/curso`, con fallback SPA
cubierto para los dos hosts posibles: `public/_redirects` para Cloudflare Pages
y un `dist/404.html` generado en build para GitHub Pages.

Desvíos deliberados respecto del prototipo, documentados en el código:

- **La sección `#faq` no se portó**, aunque la clienta la devolvió al
  prototipo. Su markup sigue en `site/index.html` por si se decide recuperarla.
- No se portaron tres medidas fijas heredadas del canvas de Claude Design que
  rompen el layout (ver `src/components/home/Enfoque.tsx`).
- Se resolvió el menú hamburguesa, que en el prototipo estaba pendiente.

**Ojo**: `site/CLAUDE.md` describe estados (`unlocked` para bloquear el VSL,
`modalOpen` para un pop-up) que no existen en el markup ni en la lógica de
ninguna de las dos vistas. No se portaron porque no hay nada que portar.

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
  placeholder de `site/curso/index.html`; se define como obligatorio para
  poder hacer seguimiento por WhatsApp antes/después de la clase)
- Checkbox de consentimiento de datos (ya existe en el placeholder —
  corregido 2026-09-16, antes decía por error que no existía. Texto actual:
  "Acepto la política de privacidad y el uso de mis datos para recibir el
  acceso a la clase.")
- Tag automático en GHL: `lead-masterclass`

También falta levantar el contenido real de `site/curso/index.html`: hero sin
copy definitivo, VSL sin insertar.

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

### 5. Deploy — verificar Cloudflare Pages

El repo está conectado a Cloudflare Pages además del workflow
`.github/workflows/deploy-pages.yml` (GitHub Pages). Nada de Cloudflare está
versionado en el repo (config vive solo en el dashboard). Revisar la config de
build ahí para que no se rompa con la migración a React/Astro, y definir
destino final del deploy (Cloudflare, GitHub Pages, o ambos en paralelo
prototipo/producto).

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

### 9. Reseñas — reemplazar Trustpilot por scraping de Encuadrado

Se descarta la idea de usar Trustpilot para la sección de testimonios (hoy
marcada en `site/index.html` como "pendiente · reemplazar por reseñas reales
de Trustpilot"). En su lugar:

- Traer los últimos 3 comentarios que aparecen en el header de
  `p.encuadrado.com/p/dra-danielabustosriquelme` mediante algún scraper.
- El scraper extrae esos comentarios y reemplaza los testimonios placeholder
  actuales de la página.
- **Duda técnica abierta**: esto probablemente requiere un servidor
  SSR/función serverless para hacer el scraping en el momento de renderizar
  (o cacheado) — a revisar cómo resolverlo sin depender de un SSR completo.
  Cloudflare (donde ya está conectado el repo, ver punto 5) podría resolverlo
  vía Cloudflare Workers/Functions con un cron de refresco, pero no está
  claro todavía — queda a investigar antes de decidir la arquitectura.

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

### 11. Desincronizaciones de documentación pendientes

- `site/CLAUDE.md` describe las ramas decorativas en rose (`#D89AA8`,
  `#C1798C`), pero la versión nueva del prototipo las trae en verde salvia
  (`#9DB894` sobre fondos oscuros, `#6E8A63` sobre claros) con grosores de
  trazo variables. El producto sigue al markup, no a la tabla. Falta decidir si
  se actualiza la tabla de marca o si el verde fue un accidente de la entrega.
- `site/CLAUDE.md` también lista `#masterclass`, `#inscripcion`, `unlocked`,
  `modalOpen` y `openFaq` en secciones y estados que no se corresponden con el
  markup actual de `site/`.

### 12. Estilos de los formularios de GHL

El formulario es un `<iframe>` de otro origen: su apariencia **no se puede
controlar desde `src/`**, porque el CSS no cruza esa frontera. Se controla
pegando `docs/ghl-form-estilos.css` en el Custom CSS del builder de GHL.

- Bloques 1 a 7 → los dos formularios.
- Bloque 8 → **solo** el de la guía, que al tener un único campo recupera la
  línea de correo más botón del prototipo.

Pendiente de verificar en un navegador real: el alto que reservan los
contenedores de los iframes (`150px` la guía, `560px` la masterclass) es una
estimación. Los formularios llevan Cloudflare Turnstile, que impide
comprobarlos en un navegador headless.
