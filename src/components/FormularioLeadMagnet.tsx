import { useEffect } from 'react'

function FormularioLeadMagnet() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section
      id="form-container"
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/i5J4FVtDg6IGXxDinIBS"
        style={{
          width: "100%",
          minHeight: "593px",
          height: "593px",
          border: "none",
          borderRadius: "8px",
          display: "block",
        }}
        id="inline-i5J4FVtDg6IGXxDinIBS"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Formulario - Lead Magnet - Page"
        data-height="593"
        data-layout-iframe-id="inline-i5J4FVtDg6IGXxDinIBS"
        data-form-id="i5J4FVtDg6IGXxDinIBS"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Formulario - Lead Magnet - Page"
      />
    </section>
  );
}

export default FormularioLeadMagnet;
