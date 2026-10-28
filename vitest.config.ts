import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

/**
 * Dos niveles (ver README, "Pruebas antes de subir a producción"):
 *
 * - `npm test`: pruebas sin build (prerender, hidratación, SEO).
 * - `npm run test:build`: hace el build y revisa el `dist/` real. Va aparte
 *   porque depende de que el build esté recién hecho.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['tests/**/*.test.{ts,tsx}'],
    exclude: process.env.VERIFICAR_BUILD ? [] : ['tests/build/**'],
    environment: 'node',
  },
})
