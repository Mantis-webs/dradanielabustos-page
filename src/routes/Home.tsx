import Cierre from '../components/home/Cierre'
import Comparativa from '../components/home/Comparativa'
import Enfoque from '../components/home/Enfoque'
import Guia from '../components/home/Guia'
import Hero from '../components/home/Hero'
import Motivos from '../components/home/Motivos'
import Proceso from '../components/home/Proceso'
import Testimonios from '../components/home/Testimonios'
import ValidacionEmocional from '../components/home/ValidacionEmocional'
import Footer from '../components/layout/Footer'
import Header, { type EnlaceCta, type EnlaceNav } from '../components/layout/Header'
import { AGENDAMIENTO } from '../data/enlaces'

/**
 * Orden de secciones tomado de site/index.html.
 *
 * La sección #faq del prototipo queda fuera por decisión explícita: no se porta
 * ni se enlaza desde la navegación. Su markup sigue disponible en
 * site/index.html si se decide reincorporarla.
 */

const NAV: EnlaceNav[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quién soy', href: '#enfoque' },
  { label: 'Enfoque', href: '#comparativa' },
  { label: 'Reseñas', href: '#testimonios' },
  { label: 'Masterclass', to: '/curso', destacado: true },
]

const CTA: EnlaceCta = {
  label: 'Agendar consulta',
  href: AGENDAMIENTO,
  externo: true,
}

const NAV_FOOTER: EnlaceNav[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quién soy', href: '#enfoque' },
  { label: 'Reseñas', href: '#testimonios' },
  { label: 'Masterclass', to: '/curso' },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-blush font-sans text-tinta">
      <Header variante="home" enlaces={NAV} cta={CTA} />
      <Hero />
      <ValidacionEmocional />
      <Motivos />
      <Enfoque />
      <Comparativa />
      <Proceso />
      <Testimonios />
      <Guia />
      <Cierre />
      <Footer enlaces={NAV_FOOTER} />
    </div>
  )
}
