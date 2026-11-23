// Retos de programación. Para activar una plataforma, rellena `profile`
// y actualiza `solved`. Para destacar una solución, añádela a `highlights`.
export const platforms = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    color: '#ffa116',
    focus: 'Algoritmos y estructuras de datos',
    why: 'El estándar de las entrevistas técnicas: arrays, strings, hash maps, recursión…',
    profile: '', // p. ej. 'https://leetcode.com/u/kokon4/'
    solved: 0,
  },
  {
    id: 'frontendmentor',
    name: 'Frontend Mentor',
    color: '#3e54a3',
    focus: 'Maquetación y UI reales',
    why: 'Retos con diseños profesionales: HTML, CSS, JS y Vue. Lo más visual para un portfolio web.',
    profile: '',
    solved: 0,
  },
  {
    id: 'codewars',
    name: 'Codewars',
    color: '#b1361e',
    focus: 'Katas en JS, PHP y Java',
    why: 'Ejercicios cortos por niveles (kyu) en los mismos lenguajes que uso en el día a día.',
    profile: '',
    solved: 0,
  },
  {
    id: 'aoc',
    name: 'Advent of Code',
    color: '#00cc00',
    focus: 'Puzzles de lógica cada diciembre',
    why: '25 retos navideños, uno por día. Ideal para practicar un lenguaje nuevo.',
    profile: '',
    solved: 0,
  },
]

// Soluciones destacadas: { title, platform, difficulty, lang, url, idea }
export const highlights = []

// Repositorio donde se guardan las soluciones
export const solutionsRepo = '' // p. ej. 'https://github.com/Kokon4/retos'
