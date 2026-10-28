import { useEffect } from 'react'
import { METADATOS, urlCanonica, type Ruta } from '../data/seo'

function fijar(selector: string, atributo: string, valor: string) {
  document.querySelector(selector)?.setAttribute(atributo, valor)
}

/**
 * Sincroniza el <head> con la ruta al navegar sin recargar. El HTML estático
 * de cada ruta ya trae sus metadatos (lo genera el build); esto solo cubre el
 * cambio de vista dentro de la SPA. Actualiza las etiquetas existentes en vez
 * de agregar nuevas, para no duplicar description ni canonical.
 */
export function useMetadatos(ruta: Ruta) {
  useEffect(() => {
    const { titulo, descripcion } = METADATOS[ruta]
    const url = urlCanonica(ruta)
    document.title = titulo
    fijar('meta[name="description"]', 'content', descripcion)
    fijar('link[rel="canonical"]', 'href', url)
    fijar('meta[property="og:title"]', 'content', titulo)
    fijar('meta[property="og:description"]', 'content', descripcion)
    fijar('meta[property="og:url"]', 'content', url)
    fijar('meta[name="twitter:title"]', 'content', titulo)
    fijar('meta[name="twitter:description"]', 'content', descripcion)
  }, [ruta])
}
