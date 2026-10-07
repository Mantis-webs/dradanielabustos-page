import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default'

import { VSL_ES_PLACEHOLDER, VSL_VIDEO_ID } from '../../data/enlaces'
import BotonCta from '../ui/BotonCta'
import EtiquetaPendiente from '../ui/EtiquetaPendiente'

/**
 * Reproductor del VSL en formato vertical (reel / short, 9:16).
 *
 * El video se sirve desde YouTube y se envuelve con Vidstack para que los
 * controles usen la paleta de la Dra. y no la de YouTube. El id vive en
 * `data/enlaces.ts` junto al resto de los datos que dependen de la clienta.
 */
export default function Vsl() {
  return (
    <section
      id="video"
      className="relative overflow-hidden bg-wine-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,100px)]"
    >
      <div className="relative mx-auto grid max-w-[980px] items-center gap-[clamp(32px,5vw,72px)] md:grid-cols-[minmax(0,380px)_1fr]">
        <div className="mx-auto w-full max-w-[380px] md:mx-0">
          <MediaPlayer
            className="vsl-player w-full overflow-hidden"
            title="Curso de la Dra. Daniela Bustos"
            src={`youtube/${VSL_VIDEO_ID}`}
            aspectRatio="9/16"
            playsInline
            load="visible"
            posterLoad="visible"
          >
            <MediaProvider />
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>

        <div className="text-center md:text-left">
          <p className="m-0 mb-4 font-label text-[11px] font-light tracking-[0.28em] text-rose uppercase">
            Curso · clase breve
          </p>
          <h2 className="m-0 max-w-[18ch] font-display text-[clamp(26px,3vw,40px)] leading-[1.16] font-normal text-pretty text-white max-md:mx-auto">
            Mira la clase antes de decidir si quieres consultar.
          </h2>

          {VSL_ES_PLACEHOLDER && (
            <EtiquetaPendiente tono="rose" className="mt-5">
              Pendiente · video de relleno, falta el reel real
            </EtiquetaPendiente>
          )}

          <div className="mt-[clamp(28px,3.5vw,40px)] flex justify-center md:justify-start">
            <BotonCta
              variante="claro"
              href="#inscripcion"
              flecha
              className="px-8 py-[17px] text-xs font-medium tracking-[0.16em]"
            >
              Quiero el material completo
            </BotonCta>
          </div>
        </div>
      </div>
    </section>
  )
}
