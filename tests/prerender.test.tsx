// @vitest-environment jsdom
import { StrictMode, act } from 'react'
import { hydrateRoot, type Root } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../src/App'
import { METADATOS, type Ruta } from '../src/data/seo'
import { render } from '../src/entry-server'

/*
 * Vidstack no corre en jsdom (ni en Node). En producción tampoco entra al
 * prerender: monta en el navegador después de hidratar. Acá se reemplaza por
 * un marcador para poder comprobar justamente eso.
 */
vi.mock('../src/components/curso/ReproductorVsl', () => ({
  default: () => <div data-testid="reproductor-vsl" />,
}))

const RUTAS = Object.keys(METADATOS) as Ruta[]

/** Texto que tiene que estar en el HTML prerenderizado de cada ruta. */
const CONTENIDO: Record<Ruta, string[]> = {
  '/': ['Medicina con evidencia, personas en el centro.', 'Psiconeuroinmunología Clínica'],
  '/curso': ['¿Por qué me inflamo?', '98 minutos de grabación', 'Comprar curso'],
  '/privacidad': ['Política de privacidad', 'Tus derechos', 'dra.dbustosr@gmail.com'],
}

let raiz: Root | null = null
let errores: unknown[] = []

beforeAll(() => {
  ;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true
})

beforeEach(() => {
  errores = []
  // APIs del navegador que jsdom no trae y que la app usa en efectos.
  window.matchMedia = vi.fn().mockReturnValue({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
  globalThis.fetch = vi.fn().mockRejectedValue(new Error('sin red en tests'))
  vi.spyOn(console, 'error').mockImplementation((...args) => {
    errores.push(args.join(' '))
  })
})

afterEach(() => {
  act(() => raiz?.unmount())
  raiz = null
  vi.restoreAllMocks()
  document.body.innerHTML = ''
})

/** Monta el HTML del servidor y lo hidrata como lo hace main.tsx en producción. */
async function hidratar(htmlServidor: string, rutaNavegador: Ruta) {
  window.history.replaceState({}, '', rutaNavegador)
  document.body.innerHTML = `<div id="root">${htmlServidor}</div>`
  const contenedor = document.getElementById('root')!
  await act(async () => {
    raiz = hydrateRoot(
      contenedor,
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>,
      { onRecoverableError: (error) => errores.push(error) },
    )
  })
  return contenedor
}

describe('prerender', () => {
  it.each(RUTAS)('%s: el HTML trae el contenido, no un #root vacío', (ruta) => {
    const html = render(ruta)
    for (const texto of CONTENIDO[ruta]) expect(html).toContain(texto)
  })

  it.each(RUTAS)('%s: el contenido va dentro de <main>', (ruta) => {
    expect(render(ruta)).toMatch(/<main[\s>]/)
  })

  it('/curso: el reproductor NO va en el HTML estático, pero su caja 9:16 sí', () => {
    const html = render('/curso')
    expect(html).not.toContain('reproductor-vsl')
    expect(html).toContain('aspect-[9/16]')
  })

  it('no deja avisos de "Pendiente" en ninguna ruta', () => {
    for (const ruta of RUTAS) expect(render(ruta)).not.toContain('Pendiente ·')
  })
})

describe('hidratación', () => {
  it.each(RUTAS)('%s: hidrata sin desajustes ni errores en consola', async (ruta) => {
    await hidratar(render(ruta), ruta)
    expect(errores).toEqual([])
  })

  it('/curso: después de hidratar, el reproductor monta en el navegador', async () => {
    const contenedor = await hidratar(render('/curso'), '/curso')
    await vi.waitFor(() => {
      expect(contenedor.querySelector('[data-testid="reproductor-vsl"]')).not.toBeNull()
    })
  })

  // Control de la propia prueba: si el HTML no corresponde a la ruta, la red
  // TIENE que detectarlo. Si esto pasa en verde sin errores, la red no sirve.
  it('detecta un desajuste real (HTML de la home hidratado en /curso)', async () => {
    await hidratar(render('/'), '/curso')
    expect(errores.length).toBeGreaterThan(0)
  })
})
