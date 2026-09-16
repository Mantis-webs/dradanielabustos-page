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

A medida que lleguen más accesos o enlaces, se agregan filas a esta tabla —no
se pierden aunque cambie `site/`.

## Pendientes

**IMPORTANTE**: el cliente va a subir una versión nueva de `site/index.html` y
`site/curso/index.html` — la que está actualmente en el repo no es la
definitiva. No aplicar los cambios de formularios/campos descritos abajo hasta
tener esa versión nueva. Los enlaces y accesos de conexión (Google, GHL, etc.)
se van a ir entregando y se documentan acá a medida que lleguen. El repo es
público; se decidió conscientemente no preocuparse por eso.

### 1. Migración de tecnología

Portar `site/index.html` y `site/curso/index.html` (HTML plano + `support.js`)
al stack final del producto en `src/` (React + Vite ya scaffolded; evaluar si
se mantiene React o se cambia a Astro).

### 2. Form de agendamiento en la página principal (`/`)

El form ya existe en Go High Level. Falta el embed — pendiente de aclarar:

- En `site/index.html`, el CTA "Agendar consulta" redirige externamente a
  `https://p.encuadrado.com/p/dra-danielabustosriquelme`, no a un form
  embebido.
- Ya existe un form armado en `src/components/Formulario.tsx` (iframe GHL,
  id `i5J4FVtDg6IGXxDinIBS`, staged sin commitear) cuyo rol no está definido:
  ¿reemplaza el link externo al migrar a React, es un form de precalificación
  previo al agendamiento, o es otra cosa? No se le pueden definir campos hasta
  aclarar esto.

### 3. Form de inscripción a la masterclass (`/curso`)

El form **no existe todavía** en GHL, hay que crearlo. Campos definidos:

- Nombre (requerido)
- Apellido (requerido — separado de Nombre)
- Correo electrónico (requerido)
- WhatsApp / Teléfono — **requerido** (hoy está como opcional en el
  placeholder de `site/curso/index.html`; se define como obligatorio para
  poder hacer seguimiento por WhatsApp antes/después de la clase)
- Checkbox de consentimiento de datos (nuevo — hoy no existe en este form)
- Tag automático en GHL: `lead-masterclass`

También falta levantar el contenido real de `site/curso/index.html`: hero sin
copy definitivo, VSL sin insertar.

### 4. Form de la guía gratuita (home, sección `#guia`)

Campos definidos:

- Nombre (nuevo — para poder personalizar el saludo del envío automático)
- Apellido (nuevo — separado de Nombre)
- Email (ya existe)
- Teléfono / número de contacto (nuevo — para poder contactar al lead
  directamente, no solo por correo)
- Checkbox "acepto política de privacidad" (ya existe — **bloqueante**: hoy
  linkea a un ancla vacía en `site/index.html`, hace falta la página de
  política de privacidad real antes de poder pedir este consentimiento en
  serio)
- Checkbox newsletter (ya existe, opt-in de marketing **separado** del
  anterior — no combinar ambos consentimientos en un solo checkbox)
- Tag automático en GHL: `lead-guia`

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

### 10. Corregir links tras la migración (NO están aplicados en la versión final)

Los links de abajo se corrigieron el 2026-09-16 en la versión de `site/`
**que va a ser reemplazada** por la que entregue la clienta — esa versión
nueva no trae ninguno de estos datos (ni Instagram, ni LinkedIn, ni el link de
agendamiento). Por lo tanto esto sigue pendiente: **después de recibir la
versión nueva y hacer la migración de tecnología (punto 1)**, hay que
agregar/corregir en el resultado final:

- "Agendar consulta" → `https://p.encuadrado.com/p/dra-danielabustosriquelme`
  (sin `utm_*`/`fbclid`)
- Instagram → `https://www.instagram.com/dra.danielabustos/`
- LinkedIn → `https://www.linkedin.com/in/dra-daniela-bustos/`

Los valores ya están confirmados por la clienta y documentados en la tabla de
"Datos reales del cliente" más arriba — no hace falta volver a pedirlos, solo
aplicarlos sobre la versión final.
