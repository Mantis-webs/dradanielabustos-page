import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default'

import { VSL_ES_PLACEHOLDER, VSL_VIDEO_ID } from '../../data/enlaces'
import { RamaVslDerecha, RamaVslIzquierda } from '../decor/RamasCurso'
import BotonCta from '../ui/BotonCta'
import EtiquetaPendiente from '../ui/EtiquetaPendiente'

/**
 * Reproductor del VSL.
 *
 * El video se sirve desde YouTube (no listado) y se envuelve con Vidstack para
 * que los controles usen la paleta de la Dra. y no la de YouTube. Cambiar de
 * proveedor más adelante es cambiar el `src`: Vidstack también acepta MP4 y HLS.
 *
 * El id del video vive en `data/enlaces.ts` junto al resto de los datos que
 * dependen de la clienta. Hoy es un relleno con licencia CC-BY — ver el TODO
 * de `VSL_VIDEO_ID`.
 *
 * Nota: el prototipo NO bloquea este video detrás de un formulario. El estado
 * `unlocked` que describe site/CLAUDE.md no existe en el markup ni en la lógica
 * de site/curso/index.html, así que no se porta nada de eso.
 */
export default function Vsl() {
  return (
    <section
      id="video"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,100px)]"
    >
      <RamaVslIzquierda />
      <RamaVslDerecha />

      <div className="relative mx-auto max-w-[980px] text-center">
        <p className="m-0 mb-4 font-label text-[11px] font-light tracking-[0.28em] text-rose uppercase">
          Masterclass gratuita · 40 minutos
        </p>
        <h2 className="mx-auto my-0 max-w-[22ch] font-display text-[clamp(26px,3vw,40px)] leading-[1.16] font-normal text-pretty text-white">
          Mira la clase antes de decidir si quieres consultar.
        </h2>

        <MediaPlayer
          className="vsl-player mt-[clamp(30px,4vw,46px)] w-full overflow-hidden"
          title="Masterclass de la Dra. Daniela Bustos"
          src={`youtube/${VSL_VIDEO_ID}`}
          aspectRatio="16/9"
          playsInline
          load="visible"
          posterLoad="visible"
        >
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>

        {VSL_ES_PLACEHOLDER && (
          <EtiquetaPendiente tono="rose" className="mt-5">
            Pendiente · video de relleno, falta el VSL real
          </EtiquetaPendiente>
        )}

        <div className="mt-[clamp(28px,3.5vw,40px)] flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <BotonCta
            variante="claro"
            href="#inscripcion"
            flecha
            className="px-8 py-[17px] text-xs font-medium tracking-[0.16em]"
          >
            Quiero el material completo
          </BotonCta>
          <span className="font-label text-[11px] font-light tracking-[0.14em] text-rose/90 uppercase">
            Sin costo · Sin compromiso
          </span>
        </div>
      </div>
    </section>
  )
}
