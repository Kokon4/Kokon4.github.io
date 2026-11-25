// Retos de programación. Para activar una plataforma, rellena `profile`
// y actualiza `solved`. Para destacar una solución, añádela a `highlights`.
export const platforms = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    color: '#ffa116',
    focus: 'Algoritmos y estructuras de datos',
    why: 'Problemas habituales en entrevistas técnicas.',
    profile: '', // p. ej. 'https://leetcode.com/u/kokon4/'
    solved: 0,
  },
  {
    id: 'frontendmentor',
    name: 'Frontend Mentor',
    color: '#3e54a3',
    focus: 'Maquetación y UI reales',
    why: 'Maquetación de diseños con HTML, CSS, JavaScript y Vue.',
    profile: '',
    solved: 0,
  },
  {
    id: 'codewars',
    name: 'Codewars',
    color: '#b1361e',
    focus: 'Katas en JS, PHP y Java',
    why: 'Ejercicios cortos por niveles.',
    profile: '',
    solved: 0,
  },
  {
    id: 'aoc',
    name: 'Advent of Code',
    color: '#00cc00',
    focus: 'Problemas de lógica',
    why: '25 problemas, uno por día en diciembre.',
    profile: '',
    solved: 0,
  },
]

// Soluciones destacadas: { title, platform, difficulty, lang, url, idea }
export const highlights = []

// Repositorio donde se guardan las soluciones
export const solutionsRepo = '' // p. ej. 'https://github.com/Kokon4/retos'
