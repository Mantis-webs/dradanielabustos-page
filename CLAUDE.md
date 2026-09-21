# CLAUDE.md — Repositorio Dra. Daniela Bustos Riquelme

Este repositorio es **una sola app**: el producto final en `src/`, reconstruido
desde el prototipo original. El prototipo ya cumplió su función y quedó
deprecado.

## El producto — `src/`

- Vite + React 19 + TypeScript. Scripts en `package.json`: `dev`, `build`,
  `lint`, `preview`.
- Tailwind CSS 4 vía `@tailwindcss/vite`.
- Ruteo con `react-router-dom` entre `/` y `/curso`.
- Componentes en `src/components/`, datos centralizados en `src/data/`.
- `index.html` de la raíz es el entry point de Vite.
- Dominio de producción: `dradanielabustos.com`. Deploy en Cloudflare Pages
  (configurado en el dashboard, no versionado en el repo).

## El prototipo deprecado — `deprecated/site/`

Prototipo navegable original hecho con Claude Design (HTML + `support.js`,
sin build, sin npm). Se usó para validar contenido y diseño con la clienta;
esa etapa ya cerró (2026-09-21). Se conserva solo como referencia histórica —
**no se edita, no se publica**. El workflow de GitHub Pages que lo publicaba
(`deploy-pages.yml`) fue eliminado.

- `deprecated/site/CLAUDE.md` documenta las reglas que aplicaban a esa etapa
  (paleta, tipografía, runtime `support.js`). Puede tener desincronizaciones
  con el markup final — no se corrigen, es material archivado.

## Reglas generales

- Responder siempre en el idioma del usuario.
- Conventional commits. Sin atribución de IA en los mensajes.
- Cambio puntual pedido → cambiar solo eso.
- No inventar contenido médico ni afirmaciones clínicas.
- Sin emojis, sin gradientes decorativos, sin iconografía de spa. Tono cálido
  con autoridad clínica.
