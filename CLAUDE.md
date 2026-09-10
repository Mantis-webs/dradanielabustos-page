# CLAUDE.md — Repositorio Dra. Daniela Bustos Riquelme

Este repositorio contiene DOS proyectos que conviven, con propósitos distintos.
Antes de tocar código, identifica en cuál estás trabajando.

## Los dos tracks

| Carpeta | Qué es | Stack | Estado |
|---|---|---|---|
| `site/` | **Prototipo navegable** hecho con Claude Design. Es lo que se le comparte a la clienta para revisar contenido y diseño. | HTML + `support.js` (runtime propio), sin build, sin npm | En iteración |
| `src/` | **Producto final**. La landing que irá a producción, reconstruida desde cero. | React 19 + TypeScript + Tailwind CSS 4 + Vite | Recién iniciado (scaffold de Vite) |

- El prototipo (`site/`) es la **fuente de verdad de contenido, marca y diseño**.
  El producto (`src/`) lo reimplementa con una base mantenible.
- Un cambio de copy o diseño se valida primero en `site/`; recién después se
  traslada a `src/`.
- No se mezclan: no se importa nada de `site/` dentro de `src/` ni al revés.

## Trabajar en el prototipo — `site/`

Lee **`site/CLAUDE.md`** antes de editar cualquier cosa ahí. Resumen:

- `site/index.html` no es HTML plano: usa el runtime `support.js` (NO EDITAR
  `support.js`). Markup dentro de `<x-dc>`, lógica en
  `<script type="text/x-dc" data-dc-script>`, interpolación `{{ nombre }}`.
- Todo el CSS va **inline** en el atributo `style`. Sin clases, sin hoja de
  estilos, sin frameworks.
- Paleta, tipografía, orden de secciones y reglas de contenido: en
  `site/CLAUDE.md`.
- Páginas: `site/index.html` (home / funnel a agendamiento) y
  `site/curso/index.html` (masterclass). Navegación por anclas; no se crean
  páginas nuevas sin pedirlo.

## Trabajar en el producto — `src/`

- Vite + React 19 + TypeScript. Scripts en `package.json`: `dev`, `build`,
  `lint`, `preview`.
- Tailwind CSS 4 vía `@tailwindcss/vite`.
- Componentes en `src/components/`.
- Al portar una sección desde `site/`, respeta la paleta y la tipografía
  definidas en `site/CLAUDE.md`. Traducir CSS inline a utilidades de Tailwind.
- `index.html` de la raíz es el entry point de Vite (no confundir con
  `site/index.html`).

## Publicación

- El prototipo se publica en **GitHub Pages** vía GitHub Actions:
  `.github/workflows/deploy-pages.yml` sube `site/` como artefacto en cada push
  a `main` que toque `site/**`.
- URL: https://mantis-webs.github.io/dradanielabustos-page/
- Pages sirve el sitio bajo el subpath `/dradanielabustos-page/`: todas las
  rutas dentro de `site/` deben ser **relativas** (`assets/...`, `curso/`,
  `../support.js`), nunca absolutas (`/assets/...`).
- El producto (`src/`) todavía no tiene pipeline de deploy.

## Reglas generales

- Responder siempre en el idioma del usuario.
- Conventional commits. Sin atribución de IA en los mensajes.
- Cambio puntual pedido → cambiar solo eso.
- No inventar contenido médico ni afirmaciones clínicas.
- Sin emojis, sin gradientes decorativos, sin iconografía de spa. Tono cálido
  con autoridad clínica.
