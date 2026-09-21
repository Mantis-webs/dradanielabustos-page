# CLAUDE.md — Sitio Dra. Daniela Bustos Riquelme

Landing de página única para captar inscripciones a una masterclass gratuita.
Prototipo navegable, no un sitio en producción.

## Estructura

```
index.html      toda la página: markup, estilos y lógica
support.js      runtime que renderiza index.html — NO EDITAR
assets/         fotos y logos
```

## Cómo está construido — léelo antes de tocar nada

`index.html` no es HTML plano. Usa un runtime propio (`support.js`) con esta
anatomía:

- `<x-dc>…</x-dc>` envuelve todo el markup de la página.
- `<helmet>…</helmet>`, al inicio del markup, contiene los `<link>` de fuentes
  y el único `<style>` permitido (resets de body, `scroll-behavior`, estilos de
  `a` y de `::placeholder`).
- `<script type="text/x-dc" data-dc-script>` al final contiene
  `class Component extends DCLogic { … }`. Ahí vive toda la lógica.
  `renderVals()` devuelve los valores que el markup consume.
- En el markup, `{{ nombre }}` es un hueco que se resuelve con lo que
  `renderVals()` devolvió. Solo admite nombres y rutas con punto —
  **nunca expresiones**: `{{ a + b }}`, `{{ !x }}` y `{{ fn() }}` fallan en
  silencio. Calcula en `renderVals()` y expón el resultado ya listo.
- `<sc-if value="{{ flag }}">` y `<sc-for list="{{ items }}" as="item">`
  son el condicional y el bucle.
- Los eventos van en camelCase de JSX: `onClick="{{ handler }}"`,
  `onSubmit="{{ handler }}"`.
- `style-hover`, `style-focus` y `style-active` reemplazan a los pseudo-estados
  de CSS.

## Reglas de estilo

- **Todo el CSS va inline**, en el atributo `style` de cada elemento. No hay
  hoja de estilos, no hay clases, no se agregan. La única excepción es el
  `<style>` dentro de `<helmet>`.
- Sin frameworks, sin build, sin npm. React se carga desde CDN vía `support.js`.
- Layout con flex y grid usando `gap`. No espaciar con márgenes por elemento ni
  con espacios en blanco entre etiquetas.
- Fluido, no fijo: `max-width` en vez de `width`, `clamp()` para tipografía y
  espaciados, `minmax(0, 1fr)` en las columnas.

## Marca

| Rol | Hex | Uso |
|---|---|---|
| Wine | `#6B1F30` | Color dominante: títulos, botones, texto de marca |
| Wine oscuro | `#4A121F` | Fondos del hero, VSL y CTA de cierre |
| Wine footer | `#350D16` | Solo el footer |
| Rose | `#D89AA8` | Acento **solo sobre fondos oscuros** |
| Rose oscuro | `#8A4356` | Texto pequeño de acento sobre fondos claros |
| Rose trazo | `#C1798C` | Ramas decorativas sobre fondos claros |
| Blush | `#F7E8EC` | Fondo general |
| Blush oscuro | `#EFD9DF` | Fondo de secciones alternas |

Nunca uses rose `#D89AA8` como texto sobre fondo claro: no alcanza contraste.
El teal de los logos originales está descartado y no debe aparecer en ninguna
parte.

Tipografía: **Playfair Display** en H1/H2, citas y la firma de la doctora.
**Montserrat Light** en etiquetas, botones y texto en versalitas.
**Inter** en cuerpo de texto.

## Orden de las secciones

`#inicio` hero · validación emocional · `#motivos` · `#enfoque` presentación y
cita · `#comparativa` · `#proceso` · `#testimonios` · `#masterclass` VSL ·
`#inscripcion` · `#faq` · `#guia` lead magnet · `#cierre` · footer.

La navegación son anclas dentro de la misma página. No hay páginas separadas y
no deben crearse.

## Estado y comportamiento

- `unlocked` — el video del VSL está bloqueado hasta que se envía cualquiera de
  los formularios de la masterclass.
- `modalOpen` — pop-up de captura de datos.
- `openFaq` — índice de la pregunta abierta en el acordeón.
- `guiaSent` — envío del formulario de la guía.
- El parallax del hero usa tres refs y un listener de scroll con
  `requestAnimationFrame`.

## Lo que está pendiente

- Los cuatro formularios **no envían nada**. Los handlers `onSubmit` y `onGuia`
  solo cambian el estado. El punto de conexión al proveedor de correo está
  comentado en cada uno.
- El marco 16:9 de `#masterclass` es un placeholder: falta el reproductor real.
- El enlace "política de privacidad" de los checkboxes apunta a un ancla vacía.
- Los testimonios son textos de ejemplo, marcados como tales en la interfaz.
- Los logos de `assets/` son un recolor de PNG, no vectores limpios.
- Falta el menú hamburguesa y una revisión responsive de móvil.
- Los datos de la FAQ (duración, modalidad de consulta) no están confirmados
  por la clienta.

## Al hacer cambios

- No inventes contenido médico ni afirmaciones clínicas nuevas.
- No agregues secciones, CTAs ni copy sin que te lo pidan: el objetivo de
  conversión es uno solo, la inscripción a la masterclass.
- No menciones ni insinúes la venta de un producto dentro de la masterclass.
- Sin emojis. Sin gradientes decorativos. Sin iconografía de spa: loto,
  mandalas, manos en meditación. El tono es cálido con autoridad clínica.
- Si te piden un cambio puntual, cambia solo eso.
