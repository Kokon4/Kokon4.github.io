// Retos de programación. Para activar una plataforma, rellena `profile`
// y actualiza `solved`. Para destacar una solución, añádela a `highlights`.
// Textos traducibles: { es, en }.
export const platforms = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    color: '#ffa116',
    focus: { es: 'Algoritmos y estructuras de datos', en: 'Algorithms and data structures' },
    why: { es: 'Problemas habituales en entrevistas técnicas.', en: 'Common technical interview problems.' },
    profile: '', // p. ej. 'https://leetcode.com/u/kokon4/'
    solved: 0,
  },
  {
    id: 'frontendmentor',
    name: 'Frontend Mentor',
    color: '#3e54a3',
    focus: { es: 'Maquetación y UI reales', en: 'Real-world layouts and UI' },
    why: {
      es: 'Maquetación de diseños con HTML, CSS, JavaScript y Vue.',
      en: 'Building designs with HTML, CSS, JavaScript and Vue.',
    },
    profile: '',
    solved: 0,
  },
  {
    id: 'codewars',
    name: 'Codewars',
    color: '#b1361e',
    focus: { es: 'Katas en JS, PHP y Java', en: 'Katas in JS, PHP and Java' },
    why: { es: 'Ejercicios cortos por niveles.', en: 'Short exercises by level.' },
    profile: '',
    solved: 0,
  },
  {
    id: 'aoc',
    name: 'Advent of Code',
    color: '#00cc00',
    focus: { es: 'Problemas de lógica', en: 'Logic puzzles' },
    why: { es: '25 problemas, uno por día en diciembre.', en: '25 puzzles, one per day in December.' },
    profile: '',
    solved: 0,
  },
]

// Soluciones destacadas: { title, platform, difficulty, lang, url, idea }
export const highlights = []

// Repositorio donde se guardan las soluciones
export const solutionsRepo = '' // p. ej. 'https://github.com/Kokon4/retos'
