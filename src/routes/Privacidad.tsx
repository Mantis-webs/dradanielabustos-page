import type { ReactNode } from 'react'
import Footer from '../components/layout/Footer'
import Header, { type EnlaceCta, type EnlaceNav } from '../components/layout/Header'
import Kicker from '../components/ui/Kicker'
import { AGENDAMIENTO, CORREO } from '../data/enlaces'
import { useMetadatos } from '../hooks/useMetadatos'

const NAV: EnlaceNav[] = [
  { label: 'Volver al inicio', to: '/' },
  { label: 'Curso', to: '/curso' },
]

const CTA: EnlaceCta = {
  label: 'Agendar consulta',
  href: AGENDAMIENTO,
  externo: true,
}

const NAV_FOOTER: EnlaceNav[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Curso', to: '/curso' },
  { label: 'Agendar consulta', href: AGENDAMIENTO },
]

const ACTUALIZACION = '27 de octubre de 2026'

function Seccion({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="m-0 font-display text-[clamp(21px,2.2vw,26px)] leading-[1.25] font-normal text-wine">
        {titulo}
      </h2>
      <div className="mt-4 grid gap-4 text-[15px] leading-[1.76] font-light text-tinta-suave [&_li]:mt-2 [&_strong]:font-medium [&_strong]:text-tinta [&_ul]:m-0 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

const Correo = () => (
  <a href={`mailto:${CORREO}`} className="text-wine underline underline-offset-2">
    {CORREO}
  </a>
)

/**
 * Política de privacidad (README punto 4).
 *
 * Redactada para un sitio de captación: los datos de los formularios se usan
 * también con fines comerciales y de marketing, con consentimiento. Marco:
 * Ley 19.628 y Ley 21.719 (Chile, vigente desde el 1 de diciembre de 2026) y
 * RGPD, porque la Dra. atiende también desde Barcelona.
 *
 * Borrador hecho por la agencia, sin revisión legal: conviene que lo revise un
 * abogado antes de darlo por definitivo.
 */
export default function Privacidad() {
  useMetadatos('/privacidad')

  return (
    <div className="bg-blush font-sans text-tinta">
      <Header variante="curso" enlaces={NAV} cta={CTA} />

      <main className="px-[clamp(20px,5vw,72px)] pt-[clamp(56px,8vw,96px)] pb-[clamp(72px,10vw,120px)]">
        <article className="mx-auto max-w-[760px]">
          <Kicker className="mb-4">Legal</Kicker>
          <h1 className="m-0 font-display text-[clamp(32px,4.4vw,52px)] leading-[1.1] font-normal text-pretty text-wine">
            Política de privacidad
          </h1>
          <p className="mt-5 mb-0 text-[13px] font-light text-tinta-tenue">
            Última actualización: {ACTUALIZACION}
          </p>
          <p className="mt-8 mb-0 text-[16px] leading-[1.78] font-light text-tinta-suave">
            En esta política te explico qué datos personales recopilo cuando
            visitas dradanielabustos.com, para qué los uso, con quién los
            comparto y cómo puedes ejercer tus derechos. Al completar un
            formulario o aceptar las cookies, consientes el tratamiento que se
            describe aquí para las finalidades que correspondan.
          </p>

          <Seccion titulo="1. Responsable del tratamiento">
            <p className="m-0">
              La responsable de tus datos es la{' '}
              <strong>Dra. Daniela Bustos Riquelme</strong>, médica, que
              presta servicios de medicina integrativa de forma online entre
              Chile y España. Para cualquier consulta sobre esta política o
              sobre tus datos, escribe a <Correo />.
            </p>
          </Seccion>

          <Seccion titulo="2. Qué datos recopilo">
            <p className="m-0">
              <strong>Datos que tú me entregas:</strong>
            </p>
            <ul>
              <li>
                Al descargar la guía gratuita: tu correo electrónico.
              </li>
              <li>
                Al inscribirte o comprar el curso: nombre, apellido, correo
                electrónico y número de teléfono o WhatsApp.
              </li>
              <li>
                Al comprar el curso: los datos de facturación y pago los
                procesa directamente la plataforma de pago. Nunca recibo ni
                guardo los datos de tu tarjeta.
              </li>
              <li>
                Al escribirme por correo, Instagram o WhatsApp: los datos y el
                contenido de tus mensajes.
              </li>
            </ul>
            <p className="m-0">
              <strong>Datos que se recogen automáticamente:</strong> dirección
              IP, tipo de dispositivo y navegador, páginas visitadas, tiempo de
              permanencia, la fuente de la visita (por ejemplo, un anuncio o un
              enlace de Instagram) y tus interacciones con el sitio y con mis
              correos (aperturas y clics). Parte de estos datos se obtiene con
              cookies; ver la sección 7.
            </p>
            <p className="m-0">
              <strong>Datos de salud:</strong> este sitio no te pide
              información médica. Por favor, no la incluyas en los
              formularios. La agenda de consultas se gestiona en Encuadrado y
              la información clínica de las consultas se rige por la
              normativa de derechos del paciente y ficha clínica (Ley 20.584),
              no por esta política.
            </p>
          </Seccion>

          <Seccion titulo="3. Para qué uso tus datos">
            <ul>
              <li>
                <strong>Entregarte lo que pediste:</strong> enviarte la guía,
                darte acceso al curso y a sus materiales, y atender tus
                consultas.
              </li>
              <li>
                <strong>Comunicaciones comerciales y de marketing:</strong>{' '}
                enviarte por correo electrónico, WhatsApp o SMS contenido
                educativo, novedades, invitaciones, promociones y ofertas de
                cursos, talleres, programas y consultas de la Dra. Daniela
                Bustos.
              </li>
              <li>
                <strong>Seguimiento personalizado:</strong> contactarte por
                WhatsApp o teléfono en relación con el curso, programa o
                servicio por el que mostraste interés.
              </li>
              <li>
                <strong>Segmentación:</strong> clasificar los contactos según
                sus intereses y su interacción con el sitio y los correos, para
                enviarte contenido y ofertas relevantes. Esta segmentación no
                produce decisiones con efectos jurídicos ni similares sobre ti.
              </li>
              <li>
                <strong>Publicidad personalizada:</strong> mostrarte anuncios en
                Instagram, Facebook y Google, y crear audiencias personalizadas
                y similares con tu correo o teléfono en formato cifrado (hash).
                También medir el rendimiento de esas campañas.
              </li>
              <li>
                <strong>Analítica y mejora del sitio:</strong> entender cómo se
                usa el sitio para mejorar sus contenidos y su funcionamiento.
              </li>
              <li>
                <strong>Obligaciones legales:</strong> cumplir obligaciones
                tributarias, contables y de protección al consumidor.
              </li>
            </ul>
          </Seccion>

          <Seccion titulo="4. Base legal">
            <ul>
              <li>
                <strong>Tu consentimiento</strong>, para las comunicaciones
                comerciales, la publicidad personalizada, la segmentación y
                las cookies de analítica y publicidad. Puedes retirarlo en
                cualquier momento, sin que eso afecte lo ya realizado.
              </li>
              <li>
                <strong>La ejecución de un contrato</strong>, cuando compras
                el curso y necesito tus datos para darte acceso.
              </li>
              <li>
                <strong>Una obligación legal</strong>, para la facturación y
                los registros tributarios.
              </li>
              <li>
                <strong>Interés legítimo</strong>, para la seguridad del sitio
                y la prevención de fraudes.
              </li>
            </ul>
          </Seccion>

          <Seccion titulo="5. Con quién comparto tus datos">
            <p className="m-0">
              <strong>No vendo tus datos.</strong> Los comparto solo con
              proveedores que me prestan servicios y que los tratan por cuenta
              mía, bajo contrato y con medidas de seguridad:
            </p>
            <ul>
              <li>
                <strong>HighLevel</strong> (LeadConnector): CRM, formularios y
                envío de correos, WhatsApp y SMS.
              </li>
              <li>
                <strong>Meta Platforms</strong>: Meta Pixel, publicidad en
                Instagram y Facebook, y WhatsApp Business.
              </li>
              <li>
                <strong>Google</strong>: Google Analytics, publicidad y
                YouTube (reproducción del video del curso).
              </li>
              <li>
                <strong>Microsoft</strong>: Microsoft Clarity (analítica de uso
                del sitio).
              </li>
              <li>
                <strong>Cloudflare</strong>: alojamiento y seguridad del sitio.
              </li>
              <li>
                <strong>Encuadrado</strong>: agenda de consultas.
              </li>
              <li>
                <strong>Plataforma de pago</strong>: procesamiento de la compra
                del curso.
              </li>
            </ul>
            <p className="m-0">
              También puedo comunicar datos a autoridades cuando una ley o una
              resolución judicial lo exija.
            </p>
          </Seccion>

          <Seccion titulo="6. Transferencias internacionales">
            <p className="m-0">
              Varios de estos proveedores están en Estados Unidos o en otros
              países fuera de Chile y de la Unión Europea. Esas transferencias
              se hacen con las garantías que exige la ley, como cláusulas
              contractuales tipo o mecanismos de adecuación equivalentes.
            </p>
          </Seccion>

          <Seccion titulo="7. Cookies y tecnologías similares">
            <ul>
              <li>
                <strong>Necesarias:</strong> las que usa Cloudflare para
                seguridad y entrega del sitio, y la que guarda tu decisión
                sobre cookies. No requieren consentimiento.
              </li>
              <li>
                <strong>Atribución de formularios:</strong> el script de
                seguimiento de HighLevel registra la página y la fuente de la
                visita para saber desde dónde llega cada inscripción.
              </li>
              <li>
                <strong>Analítica</strong> (Google Analytics y Microsoft
                Clarity) y <strong>publicidad</strong> (Meta Pixel): solo se
                activan si las aceptas en el aviso de cookies.
              </li>
              <li>
                <strong>Video:</strong> el video del curso se reproduce desde
                youtube-nocookie.com, el modo de privacidad mejorada de
                YouTube, que no guarda cookies de seguimiento hasta que
                reproduces el video.
              </li>
            </ul>
            <p className="m-0">
              Puedes cambiar tu decisión cuando quieras desde "Preferencias de
              cookies", en el pie de página, o borrando las cookies de tu
              navegador.
            </p>
          </Seccion>

          <Seccion titulo="8. Cuánto tiempo conservo tus datos">
            <ul>
              <li>
                <strong>Datos de contacto para marketing:</strong> mientras no
                retires tu consentimiento, y como máximo 3 años desde tu
                última interacción (abrir un correo, responder un mensaje o
                comprar).
              </li>
              <li>
                <strong>Datos de compra:</strong> durante el plazo que exige la
                normativa tributaria (6 años).
              </li>
              <li>
                <strong>Datos de analítica:</strong> según la configuración de
                cada herramienta, como máximo 14 meses.
              </li>
            </ul>
            <p className="m-0">
              Cumplidos esos plazos, los datos se eliminan o se anonimizan.
            </p>
          </Seccion>

          <Seccion titulo="9. Tus derechos">
            <p className="m-0">Puedes ejercer en cualquier momento tus derechos de:</p>
            <ul>
              <li><strong>Acceso:</strong> saber qué datos tuyos trato.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
              <li><strong>Supresión:</strong> pedir que se eliminen.</li>
              <li>
                <strong>Oposición:</strong> oponerte a un tratamiento, en
                especial al marketing y a la segmentación.
              </li>
              <li>
                <strong>Portabilidad:</strong> recibir tus datos en un formato
                de uso común.
              </li>
              <li>
                <strong>Bloqueo o limitación:</strong> suspender
                temporalmente su tratamiento.
              </li>
              <li>
                <strong>Retirar tu consentimiento</strong> sin necesidad de
                dar explicaciones.
              </li>
            </ul>
            <p className="m-0">
              Para ejercerlos, escribe a <Correo /> con el asunto "Protección
              de datos", indicando tu nombre y el derecho que quieres ejercer.
              Te responderé en un plazo máximo de 30 días. Para dejar de
              recibir comunicaciones también puedes usar el enlace "darse de
              baja" de cualquier correo o responder "BAJA" por WhatsApp.
            </p>
            <p className="m-0">
              Si consideras que tus derechos no fueron respetados, puedes
              reclamar ante la Agencia de Protección de Datos Personales de
              Chile o, si resides en la Unión Europea, ante la autoridad de
              protección de datos de tu país (en España, la Agencia Española
              de Protección de Datos).
            </p>
          </Seccion>

          <Seccion titulo="10. Seguridad">
            <p className="m-0">
              Aplico medidas técnicas y organizativas razonables para proteger
              tus datos: conexión cifrada (HTTPS), acceso restringido a las
              cuentas de los proveedores y verificación en dos pasos. Ningún
              sistema es infalible; si ocurriera una vulneración que afecte
              tus datos, te lo comunicaré y lo informaré a la autoridad cuando
              la ley lo exija.
            </p>
          </Seccion>

          <Seccion titulo="11. Menores de edad">
            <p className="m-0">
              Este sitio y sus servicios están dirigidos a personas mayores de
              18 años. No recopilo a sabiendas datos de menores. Si crees que
              un menor me entregó sus datos, escríbeme y los eliminaré.
            </p>
          </Seccion>

          <Seccion titulo="12. Cambios en esta política">
            <p className="m-0">
              Puedo actualizar esta política para reflejar cambios legales o
              en mis servicios. La fecha de la última actualización está al
              inicio de la página. Si el cambio es relevante, te avisaré por
              correo.
            </p>
          </Seccion>
        </article>
      </main>

      <Footer enlaces={NAV_FOOTER} />
    </div>
  )
}
