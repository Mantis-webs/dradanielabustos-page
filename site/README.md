# Sitio — Dra. Daniela Bustos Riquelme

Landing de página única para la masterclass gratuita. HTML, CSS y JavaScript, sin build.

## Publicar en GitHub Pages

Sube el contenido de esta carpeta a la raíz del repositorio y activa Pages en `Settings → Pages`, rama `main`, carpeta `/ (root)`.

```
index.html
support.js
assets/
```

## Qué falta antes de producción

- Conectar los formularios al proveedor de correo. Hoy solo cambian de estado en pantalla; el punto de conexión está comentado en el bloque `<script data-dc-script>` (`onSubmit` y `onGuia`).
- Insertar el reproductor real del VSL en el marco 16:9 de la sección `#masterclass`.
- Página de política de privacidad: los checkboxes de consentimiento apuntan a un ancla vacía.
- Logo en vector limpio. Los PNG de `assets/` son un recolor de los archivos originales en teal.
- Revisión responsive de móvil y menú hamburguesa.
- Reemplazar los testimonios de ejemplo y confirmar los datos de la FAQ (duración, modalidad).

## Dependencias externas

- Google Fonts: Playfair Display, Montserrat, Inter.
- React 18 desde unpkg, cargado por `support.js`.
