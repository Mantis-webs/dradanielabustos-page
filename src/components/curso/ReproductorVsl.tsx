import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react'
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default'

import portadaVsl from '../../assets/img/vsl-portada.webp'
import { VSL_VIDEO_ID } from '../../data/enlaces'

/**
 * El reproductor en sí, separado de `Vsl` para cargarlo con `lazy`: Vidstack
 * no corre en el prerender (Node) y es buena parte del peso del bundle, así
 * que solo se descarga en /curso y ya en el navegador.
 *
 * El `<Poster>` es obligatorio con YouTube: Vidstack estira el iframe al 1000%
 * de alto para esconder la interfaz de YouTube, y sin carátula propia encima se
 * ve la miniatura de YouTube ampliada ~18× (pixelada). La portada es la
 * miniatura vertical del Short (`oar2`, 1080×1920); la que Vidstack busca sola
 * (`maxresdefault`) es horizontal y al recortarla a 9:16 queda borrosa.
 */
export default function ReproductorVsl() {
  return (
    <MediaPlayer
      className="vsl-player w-full overflow-hidden"
      title="¿Por qué me inflamo? · Curso de la Dra. Daniela Bustos"
      src={`youtube/${VSL_VIDEO_ID}`}
      aspectRatio="9/16"
      playsInline
      load="visible"
      posterLoad="visible"
      poster={portadaVsl}
    >
      <MediaProvider>
        <Poster className="vds-poster" alt="" />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}
