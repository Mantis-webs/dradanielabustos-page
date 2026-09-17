import { useGhlEmbed } from '../hooks/useGhlEmbed'

const FORM_ID = 'i5J4FVtDg6IGXxDinIBS'

/**
 * Formulario de la guía gratuita (lead magnet), embebido desde Go High Level.
 * Código de embed oficial de GHL — el script `form_embed.js` que lo redimensiona
 * lo carga `useGhlEmbed`. Tag automático en GHL: `lead-guia`.
 *
 * La APARIENCIA del formulario no se controla desde acá: el iframe es
 * cross-origin, así que el CSS de esta página no lo alcanza. Los estilos que
 * lo dejan igual que el prototipo se pegan en el Custom CSS del builder de
 * GHL — están en `docs/ghl-form-estilos.css`. Ese CSS deja el fondo del
 * formulario transparente, para que se apoye directamente sobre el blush de
 * la sección, sin tarjeta, igual que en el prototipo.
 *
 * El formulario pide únicamente Correo más el checkbox de consentimiento de
 * privacidad (decisión final del 2026-09-16, README punto 4). Por eso el alto
 * reservado es bajo: el resizer de GHL ajusta el valor real al montar.
 *
 * Los campos se configuran en GHL, no acá.
 */
export default function FormularioLeadMagnet() {
  useGhlEmbed()

  return (
    /*
      GHL marca el iframe con `data-initial-iframe-hidden` y lo saca del flujo
      (position: absolute) hasta que el formulario de dentro avisa que está
      listo. Sin este contenedor con alto reservado, la sección se colapsa y el
      contenido salta cuando el form aparece.
    */
    <div className="min-h-[150px] w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        className="block h-[150px] w-full border-none"
        id={`inline-${FORM_ID}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Formulario - Lead Magnet - Page"
        data-height="593"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Formulario - Lead Magnet - Page"
      />
    </div>
  )
}
