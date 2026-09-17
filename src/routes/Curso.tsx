import HeroCurso from '../components/curso/HeroCurso'
import Inscripcion from '../components/curso/Inscripcion'
import Vsl from '../components/curso/Vsl'
import Footer from '../components/layout/Footer'
import Header, { type EnlaceCta, type EnlaceNav } from '../components/layout/Header'
import { AGENDAMIENTO } from '../data/enlaces'

const NAV: EnlaceNav[] = [
  { label: 'Volver al inicio', to: '/' },
  { label: 'La clase', href: '#video' },
]

const CTA: EnlaceCta = { label: 'Inscribirme', href: '#inscripcion' }

const NAV_FOOTER: EnlaceNav[] = [
  { label: 'Inicio', to: '/' },
  { label: 'La clase', href: '#video' },
  { label: 'Inscripción', href: '#inscripcion' },
  { label: 'Agendar consulta', href: AGENDAMIENTO },
]

export default function Curso() {
  return (
    <div className="bg-blush font-sans text-tinta">
      <Header variante="curso" enlaces={NAV} cta={CTA} />
      <HeroCurso />
      <Vsl />
      <Inscripcion />
      <Footer enlaces={NAV_FOOTER} />
    </div>
  )
}
