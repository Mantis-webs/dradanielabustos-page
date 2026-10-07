/**
 * Copy de las secciones que son listas repetitivas. Transcrito literal desde
 * el documento de textos de la clienta ("texto pagina web.pdf") — no se agrega
 * ni se reformula nada, salvo erratas evidentes.
 */

export const MOTIVOS = [
  {
    icono: '🦠',
    titulo: 'Salud intestinal y digestiva',
    texto:
      'Distensión abdominal, estreñimiento, diarrea, reflujo, síndrome de intestino irritable, SIBO, alteraciones de la microbiota.',
  },
  {
    icono: '🩸',
    titulo: 'Salud metabólica',
    texto:
      'Resistencia a la insulina, síndrome metabólico, inflamación metabólica y dificultades en la regulación del peso.',
  },
  {
    icono: '🧠',
    titulo: 'Estrés, sueño y energía',
    texto:
      'Fatiga persistente, alteraciones del sueño, estrés sostenido, dificultades de recuperación y problemas en la regulación del sistema nervioso.',
  },
  {
    icono: '🌸',
    titulo: 'Salud de la mujer',
    texto:
      'Salud hormonal, ciclo menstrual, metabolismo y acompañamiento nutricional y de estilo de vida en distintas etapas de la vida.',
  },
  {
    icono: '🥗',
    titulo: 'Nutrición y estilo de vida',
    texto:
      'Alimentación, ejercicio, sueño, hábitos y otros factores que pueden influir en nuestra salud.',
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
  'Rangos de laboratorios amplios, indican presencia o no de patología.',
]

export const INTEGRATIVO = [
  'Conecta sistema nervioso, digestivo, inmune, hábito y contexto de vida.',
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
