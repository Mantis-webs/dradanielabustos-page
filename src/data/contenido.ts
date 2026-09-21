/**
 * Copy de las secciones que son listas repetitivas. Transcrito literal desde
 * site/index.html — no se agrega ni se reformula nada.
 */

export const MOTIVOS = [
  {
    titulo: 'Fatiga persistente',
    texto:
      'Cansancio que no cede con descanso ni con vacaciones, y que ningún examen explica.',
  },
  {
    titulo: 'Digestión alterada',
    texto:
      'Hinchazón, tránsito irregular, intolerancias que aparecieron de un momento a otro.',
  },
  {
    titulo: 'Inflamación',
    texto:
      'Dolores difusos, retención, piel reactiva: señales de un sistema inmune en alerta.',
  },
  {
    titulo: 'Ansiedad',
    texto:
      'Un sistema nervioso que no logra bajar de revoluciones, aunque no pase nada afuera.',
  },
  {
    titulo: 'Sueño roto',
    texto: 'Cuesta dormir, o despiertas de madrugada y ya no vuelves a dormirte.',
  },
]

export const CHIPS_ENFOQUE = [
  'Fatiga persistente',
  'Digestión',
  'Inflamación',
  'Ansiedad',
  'Sueño',
]

export const CONVENCIONAL = [
  'Se enfoca en el síntoma, no en la causa.',
  'Cada especialista mira su órgano por separado.',
  'Rangos de laboratorio amplios: "normal" aunque no te sientas bien.',
  'Consultas cortas, poco espacio para tu historia.',
]

export const INTEGRATIVO = [
  'Busca la causa raíz de lo que estás sintiendo.',
  'Conecta sistema nervioso, inmunidad, hábitos y contexto de vida.',
  'Lee tus exámenes buscando el rango funcional óptimo.',
  'Plan personalizado con acompañamiento en el tiempo.',
]

export interface Resena {
  texto: string
  autor: string
  rating: number
  fecha: string
}

/**
 * Fallback si /api/resenas no responde (Encuadrado caído, cambio de markup,
 * etc.). Son las 3 reseñas reales tomadas de p.encuadrado.com el 2026-09-21,
 * no un placeholder inventado — ver README punto 9.
 */
export const TESTIMONIOS_FALLBACK: Resena[] = [
  {
    texto: 'Cómo siempre,! muy clara en la explicación,',
    autor: 'Usuario anónimo',
    rating: 5,
    fecha: '',
  },
  {
    texto:
      'Excelente disposición. La Dra. Es la mejor, explica detalladamente cada situacion y sus recomendaciones y consejos son los mejores. La recomiendo muchísimo.',
    autor: 'Anaiss I.',
    rating: 5,
    fecha: 'Agosto 2026',
  },
  {
    texto:
      'Excelente profesional, atiende con calma e integra diversos elementos en su evaluación y tratamiento.',
    autor: 'Victoria M.',
    rating: 5,
    fecha: 'Agosto 2026',
  },
]

export const BULLETS_GUIA = [
  'Cómo registrar tus síntomas para que digan algo',
  'Qué exámenes vale la pena tener a mano',
  'Las preguntas que casi nadie hace en la consulta',
]
