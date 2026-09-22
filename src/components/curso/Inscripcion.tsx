import FormularioMasterclass from '../FormularioMasterclass'
import { RamaInscripcion } from '../decor/RamasCurso'
import Kicker from '../ui/Kicker'

/**
 * Inscripción a la masterclass.
 *
 * Mismo patrón que `#guia` de la home: argumento a la izquierda, formulario en
 * tarjeta blanca a la derecha. El <form> nativo del prototipo se reemplaza por
 * el embed real de GHL (form id 4OGCGkVkd06S7iChG3Ws, README punto 3).
 *
 * La apariencia del formulario se controla desde el builder de GHL, no desde
 * acá: ver `docs/ghl-form-estilos.css`.
 */
export default function Inscripcion() {
  return (
    <section
      id="inscripcion"
      className="relative overflow-hidden bg-blush-oscuro px-[clamp(20px,5vw,72px)] py-[clamp(72px,10vw,124px)]"
    >
      <RamaInscripcion />
      <div className="relative z-10 mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-[clamp(32px,5vw,64px)] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0">
          <Kicker className="mb-4">Curso</Kicker>
          <h2 className="m-0 font-display text-[clamp(27px,3.4vw,44px)] leading-[1.14] font-normal text-pretty text-wine">
            Inscríbete y recibe el acceso en tu correo.
          </h2>
          <p className="mt-[22px] mb-0 max-w-[42ch] text-[15px] leading-[1.76] font-light text-pretty text-tinta-suave">
            Deja tus datos y te enviamos el enlace junto con el material
            complementario de la clase.
          </p>
          <p className="mt-[26px] mb-0 text-[11.5px] leading-[1.6] font-light text-tinta-tenue">
            Usamos tus datos solo para darte acceso a la clase. Sin spam.
          </p>
        </div>

        {/* La columna derecha es solo el formulario. */}
        <div className="mx-auto w-full max-w-[520px] min-w-0 rounded-[3px] border border-wine/10 bg-white p-[clamp(24px,3vw,36px)] min-[900px]:mx-0 min-[900px]:max-w-none">
          <FormularioMasterclass />
        </div>
      </div>
    </section>
  )
}
