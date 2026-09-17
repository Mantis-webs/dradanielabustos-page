import { useGhlEmbed } from '../hooks/useGhlEmbed'

const FORM_ID = '4OGCGkVkd06S7iChG3Ws'

/**
 * Formulario de inscripción a la masterclass, embebido desde Go High Level.
 * Tag automático en GHL: `lead-masterclass`.
 *
 * La APARIENCIA del formulario no se controla desde acá: el iframe es
 * cross-origin, así que el CSS de esta página no lo alcanza. Los estilos que
 * lo dejan igual que el prototipo se pegan en el Custom CSS del builder de
 * GHL — están en `docs/ghl-form-estilos.css`. Ese CSS deja el fondo del
 * formulario transparente, así que la tarjeta la pone la página.
 *
 * Los campos definidos en el README (Nombre, Apellido, Correo, WhatsApp
 * OBLIGATORIO y checkbox de consentimiento) se configuran en GHL, no acá.
 *
 * TODO (README punto 4, bloqueante): el checkbox de consentimiento enlaza a la
 * política de privacidad, que todavía no existe como página. Hay que crearla
 * antes de pedir ese consentimiento en serio.
 */
export default function FormularioMasterclass() {
  useGhlEmbed()

  return (
    /*
      GHL marca el iframe con `data-initial-iframe-hidden` y lo saca del flujo
      (position: absolute) hasta que el formulario de dentro avisa que está
      listo. Sin este contenedor con alto reservado, la sección se colapsa y el
      contenido salta cuando el form aparece.
    */
    <div className="min-h-[560px] w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        className="block h-[560px] w-full border-none"
        id={`inline-${FORM_ID}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Formulario - Masterclass"
        data-height="593"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Formulario de inscripción a la masterclass"
      />
    </div>
  )
}
