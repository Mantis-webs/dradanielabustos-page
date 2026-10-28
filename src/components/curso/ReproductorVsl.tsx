import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default'

import { VSL_VIDEO_ID } from '../../data/enlaces'

/**
 * El reproductor en sí, separado de `Vsl` para cargarlo con `lazy`: Vidstack
 * no corre en el prerender (Node) y es buena parte del peso del bundle, así
 * que solo se descarga en /curso y ya en el navegador.
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
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}
