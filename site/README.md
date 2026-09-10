# Sitio — Dra. Daniela Bustos Riquelme

Landing de página única para la masterclass gratuita. HTML, CSS y JavaScript, sin build.

## Publicar en GitHub Pages

Se publica solo: `.github/workflows/deploy-pages.yml` sube esta carpeta a GitHub Pages en cada push a `main` que toque `site/**`. URL: https://mantis-webs.github.io/dradanielabustos-page/ (subpath `/dradanielabustos-page/`, por eso todas las rutas van relativas).

```
index.html          home / funnel a agendamiento
curso/index.html    masterclass
support.js
assets/
```

## Qué falta antes de producción

- **Embeds de GoHighLevel** en los dos formularios: la guía gratuita (home) y la inscripción a la masterclass (/curso). Hoy solo cambian de estado en pantalla; el punto de conexión está marcado con un comentario en cada archivo.
- **Reproductor del VSL** en el marco 16:9 de `/curso`.
- **Reseñas reales de Trustpilot** y la URL del perfil (hoy apunta a un placeholder).
- **Copy del hero de /curso**: titular y bajada están marcados como pendientes.
- **Datos de contacto**: correo, Instagram y LinkedIn de Daniela.
- **Logos de Zabroso y MK Agencia** en el footer (hoy son cajas con borde punteado).
- **Guía gratuita**: falta el PDF y su entrega automática.
- Página de política de privacidad: los checkboxes apuntan a un ancla vacía.
- Logo en vector limpio. Los PNG de `assets/` son un recolor de los archivos originales en teal.
- Menú hamburguesa y revisión responsive de móvil.

## Dependencias externas

- Google Fonts: Playfair Display, Montserrat, Inter.
- React 18 desde unpkg, cargado por `support.js`.
