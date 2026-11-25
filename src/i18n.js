import { ref, watchEffect } from 'vue'

// Idioma de la web: 'es' o 'en'. Se recuerda en localStorage.
function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* almacenamiento no disponible */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const lang = ref(initialLang())

watchEffect(() => {
  document.documentElement.lang = lang.value
  try {
    localStorage.setItem('lang', lang.value)
  } catch {
    /* almacenamiento no disponible */
  }
})

export function toggleLang() {
  lang.value = lang.value === 'es' ? 'en' : 'es'
}

// tr({ es, en }) devuelve el texto en el idioma activo. Un texto plano se devuelve tal cual.
export function tr(value) {
  if (value && typeof value === 'object' && !Array.isArray(value) && 'es' in value) return value[lang.value]
  if (Array.isArray(value)) return value.map(tr)
  return value
}

// Textos de la interfaz
const ui = {
  'nav.ai': { es: 'Proyectos IA', en: 'AI projects' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.challenges': { es: 'Retos', en: 'Challenges' },
  'nav.about': { es: 'Sobre mí', en: 'About' },
  'nav.stack': { es: 'Stack', en: 'Stack' },
  'nav.education': { es: 'Formación', en: 'Education' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.menu': { es: 'Abrir menú', en: 'Open menu' },
  'nav.light': { es: 'Cambiar a modo claro', en: 'Switch to light mode' },
  'nav.dark': { es: 'Cambiar a modo oscuro', en: 'Switch to dark mode' },
  'lang.switch': { es: 'Switch to English', en: 'Cambiar a español' },

  'hero.available': { es: 'Disponible para trabajar', en: 'Open to work' },
  'hero.role1': { es: 'Desarrollador', en: 'Full stack' },
  'hero.role2': { es: 'web full stack', en: 'web developer' },
  'hero.cta': { es: 'ver proyectos →', en: 'see projects →' },
  'hero.cv': { es: 'descargar CV', en: 'download CV' },
  'hero.terminal': { es: 'Terminal de presentación', en: 'Intro terminal' },

  'ai.title': { es: 'Proyectos con IA', en: 'AI projects' },
  'ai.intro': {
    es: 'Casos de uso para empresas, desarrollados con asistencia de IA. Pulsa una tarjeta para ver el detalle.',
    en: 'Business use cases, built with AI assistance. Click a card to see the details.',
  },
  'ai.problem': { es: 'Problema', en: 'Problem' },
  'ai.solution': { es: 'Solución', en: 'Solution' },
  'ai.impact': { es: 'Impacto', en: 'Impact' },
  'ai.impactExpected': { es: 'Impacto esperado', en: 'Expected impact' },
  'ai.me': { es: 'yo', en: 'me' },
  'ai.ai': { es: 'IA', en: 'AI' },
  'ai.code': { es: 'código', en: 'code' },
  'status.idea': { es: 'pendiente', en: 'planned' },
  'status.en-desarrollo': { es: 'en desarrollo', en: 'in progress' },
  'status.terminado': { es: 'terminado', en: 'done' },

  'projects.title': { es: 'Proyectos personales', en: 'Personal projects' },
  'projects.intro': {
    es: 'Desarrollados sin IA. Pulsa un proyecto para ver el detalle.',
    en: 'Built without AI. Click a project to see the details.',
  },
  'projects.filter': { es: 'Filtrar por tecnología', en: 'Filter by technology' },
  'projects.all': { es: 'Todos', en: 'All' },
  'projects.featured': { es: '★ destacado', en: '★ featured' },
  'projects.empty': { es: 'No hay proyectos con este filtro.', en: 'No projects match this filter.' },
  'projects.exercises': { es: 'Otras prácticas de clase', en: 'Other class exercises' },
  'projects.architecture': { es: 'Arquitectura', en: 'Architecture' },
  'projects.problem': { es: 'Problema', en: 'Problem' },
  'projects.solution': { es: 'Solución', en: 'Solution' },
  'projects.decisions': { es: 'Decisiones técnicas', en: 'Technical decisions' },
  'projects.learned': { es: 'Qué aprendí', en: 'What I learned' },
  'tile.more': { es: 'ver detalles', en: 'see details' },
  'modal.close': { es: 'Cerrar', en: 'Close' },

  'challenges.title': { es: 'Retos de programación', en: 'Coding challenges' },
  'challenges.intro': {
    es: 'Soluciones a retos de algoritmos y maquetación.',
    en: 'Solutions to algorithm and front-end challenges.',
  },
  'challenges.notStarted': { es: 'sin empezar', en: 'not started' },
  'challenges.solved': { es: 'resueltos', en: 'solved' },
  'challenges.profile': { es: 'ver perfil ↗', en: 'view profile ↗' },
  'challenges.highlights': { es: 'Soluciones destacadas', en: 'Featured solutions' },
  'challenges.none': { es: 'Todavía no hay soluciones publicadas.', en: 'No solutions published yet.' },
  'challenges.all': { es: 'ver todas las soluciones', en: 'see all solutions' },

  'about.title': { es: 'Sobre mí', en: 'About me' },
  'stack.title': { es: 'Mi stack', en: 'My stack' },
  'stack.intro': {
    es: 'Tecnologías que uso. Abierto a aprender otras nuevas.',
    en: 'Technologies I use. Open to learning new ones.',
  },
  'stack.what': { es: '¿Qué es?', en: 'What is it?' },
  'stack.how': { es: '¿Cómo lo uso?', en: 'How I use it' },
  'education.title': { es: 'Formación', en: 'Education' },

  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.intro': {
    es: 'Disponible para trabajar como desarrollador web.',
    en: 'Available to work as a web developer.',
  },
  'contact.copy': { es: 'copiar email', en: 'copy email' },
  'contact.copied': { es: '✓ copiado', en: '✓ copied' },

  'footer.built': {
    es: 'Hecho con Vue 3 + Vite · desplegado con GitHub Actions',
    en: 'Built with Vue 3 + Vite · deployed with GitHub Actions',
  },
}

export function t(key) {
  const entry = ui[key]
  if (!entry) return key
  return entry[lang.value]
}
