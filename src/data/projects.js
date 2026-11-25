// Proyectos hechos a mano. Textos traducibles: { es, en }.
// `category`: 'personal' (proyectos propios) o 'clase' (proyectos del ciclo DAW).
export const projects = [
  {
    id: 'mtg',
    category: 'personal',
    title: 'MTG Collector',
    subtitle: {
      es: 'Gestor de colecciones y mazos de Magic: The Gathering',
      en: 'Collection and deck manager for Magic: The Gathering',
    },
    featured: true,
    tags: ['laravel', 'vue', 'mysql', 'devops'],
    tech: ['Laravel 12', 'Sanctum', 'Swagger', 'Vue 3', 'Pinia', 'Vue Router', 'Vitest', 'Docker'],
    problem: {
      es: 'Los jugadores de formatos clásicos (Premodern) necesitan consultar cartas por edición y montar mazos sin hojas de cálculo.',
      en: 'Players of classic formats (Premodern) need to browse cards by set and build decks without spreadsheets.',
    },
    solution: {
      es: 'Una aplicación full stack separada en dos repos: una API REST en Laravel y una SPA en Vue que la consume.',
      en: 'A full stack application split into two repos: a Laravel REST API and a Vue SPA that consumes it.',
    },
    decisions: [
      {
        es: 'Autenticación por token con Laravel Sanctum: rutas públicas para cartas y ediciones, privadas para los mazos.',
        en: 'Token authentication with Laravel Sanctum: public routes for cards and sets, private routes for decks.',
      },
      {
        es: 'Relación N:M entre mazos y cartas con cantidad en la tabla pivote y endpoint de inserción masiva (bulk).',
        en: 'Many-to-many relation between decks and cards, with quantity on the pivot table and a bulk insert endpoint.',
      },
      {
        es: 'API documentada con Swagger (L5-Swagger) para poder probarla sin el frontend.',
        en: 'API documented with Swagger (L5-Swagger) so it can be tested without the frontend.',
      },
      {
        es: 'Frontend con stores de Pinia por dominio (auth, cards, decks, sets) y filtros con debounce en un composable.',
        en: 'Frontend with one Pinia store per domain (auth, cards, decks, sets) and debounced filters in a composable.',
      },
    ],
    learned: {
      es: 'Diseñar una API pensando en quien la consume, y separar responsabilidades entre frontend y backend.',
      en: 'Designing an API around its consumer, and separating frontend and backend responsibilities.',
    },
    arch: ['Vue 3 SPA', 'Laravel API', 'MySQL'],
    repos: [
      { label: 'API', url: 'https://github.com/Kokon4/API-MTG-COLLECTOR' },
      { label: 'Frontend', url: 'https://github.com/Kokon4/Vue-mtg-collector' },
    ],
    demo: '',
  },
  {
    id: 'futbol',
    category: 'clase',
    title: 'Fútbol Femení',
    subtitle: { es: 'Gestión de una liga de fútbol femenino', en: "Women's football league management" },
    featured: true,
    tags: ['laravel', 'php', 'mysql'],
    tech: ['Laravel 11', 'Livewire 3', 'Breeze', 'Tailwind', 'MySQL', 'i18n'],
    problem: {
      es: 'Gestionar equipos, jugadoras, estadios y partidos de una liga, con permisos distintos según el usuario.',
      en: 'Managing the teams, players, stadiums and matches of a league, with different permissions per user.',
    },
    solution: {
      es: 'Aplicación Laravel con Livewire para la interactividad, autenticación con Breeze y roles (administrador, gestor de equipo).',
      en: 'Laravel application with Livewire for interactivity, Breeze authentication and roles (admin, team manager).',
    },
    decisions: [
      {
        es: 'Modelo relacional: Equip → Jugadores, Equip ↔ Estadi, Partit con equipo local y visitante.',
        en: 'Relational model: Team → Players, Team ↔ Stadium, Match with home and away teams.',
      },
      {
        es: 'Roles en la tabla users para restringir qué puede editar cada usuario.',
        en: 'Roles on the users table to restrict what each user can edit.',
      },
      {
        es: 'Traducciones en catalán, castellano e inglés con los ficheros lang de Laravel.',
        en: 'Catalan, Spanish and English translations using Laravel lang files.',
      },
      {
        es: 'Migraciones incrementales que reflejan la evolución real del esquema.',
        en: 'Incremental migrations that follow how the schema actually evolved.',
      },
    ],
    learned: {
      es: 'Modelar un dominio real en Eloquent y mantener la base de datos evolucionando con migraciones.',
      en: 'Modelling a real domain in Eloquent and evolving the database with migrations.',
    },
    arch: ['Blade + Livewire', 'Laravel', 'MySQL'],
    repos: [{ label: { es: 'Código', en: 'Code' }, url: 'https://github.com/Kokon4/futbolfemeniauto' }],
    demo: '',
  },
  {
    id: 'deploy',
    category: 'clase',
    title: { es: 'Despliegue automatizado', en: 'Automated deployment' },
    subtitle: {
      es: 'Despliegue con Nginx, Deployer y GitHub Actions',
      en: 'Deployment with Nginx, Deployer and GitHub Actions',
    },
    featured: false,
    tags: ['devops', 'laravel'],
    tech: ['Nginx', 'PHP-FPM', 'Deployer', 'GitHub Actions', 'Docker', 'SSH'],
    problem: {
      es: 'Desplegar a mano por FTP o SSH es lento y da errores.',
      en: 'Deploying by hand over FTP or SSH is slow and error-prone.',
    },
    solution: {
      es: 'Servidor Nginx con virtual hosts para un backoffice Laravel y un frontend estático, desplegados con Deployer desde GitHub Actions.',
      en: 'Nginx server with virtual hosts for a Laravel back office and a static frontend, deployed with Deployer from GitHub Actions.',
    },
    decisions: [
      {
        es: 'Usuario "deployer" sin privilegios de root y acceso solo por clave SSH.',
        en: 'A "deployer" user without root privileges and SSH key access only.',
      },
      {
        es: 'Releases atómicas de Deployer: si algo falla, se vuelve a la versión anterior.',
        en: 'Atomic Deployer releases: if something fails, it rolls back to the previous version.',
      },
      {
        es: 'Workflow de GitHub Actions que despliega en cada push a main.',
        en: 'GitHub Actions workflow that deploys on every push to main.',
      },
    ],
    learned: {
      es: 'Configuración de un servidor web, automatización del despliegue y permisos mínimos.',
      en: 'Web server configuration, deployment automation and least privilege.',
    },
    arch: ['GitHub Actions', 'Deployer · SSH', 'Nginx + PHP'],
    repos: [
      { label: 'laravelDeploy', url: 'https://github.com/Kokon4/laravelDeploy' },
      { label: 'deployAutomatic', url: 'https://github.com/Kokon4/deployAutomatic' },
    ],
    demo: '',
  },
  {
    id: 'java',
    category: 'clase',
    title: { es: 'Apunts de Java', en: 'Java notes' },
    subtitle: { es: 'Apuntes y ejercicios de Java', en: 'Java notes and exercises' },
    featured: false,
    tags: ['java'],
    tech: ['Java', { es: 'POO', en: 'OOP' }, 'JDBC'],
    problem: { es: 'Apuntes de la asignatura de Programación.', en: 'Notes from the Programming course.' },
    solution: {
      es: 'Repositorio organizado por unidades: bucles, strings, arrays, objetos, herencia, interfaces, excepciones y BD.',
      en: 'Repository organised by unit: loops, strings, arrays, objects, inheritance, interfaces, exceptions and databases.',
    },
    decisions: [
      {
        es: 'Una carpeta por unidad didáctica, de lo básico a lo avanzado.',
        en: 'One folder per unit, from basic to advanced.',
      },
      { es: 'Ejercicios prácticos en cada tema, no solo teoría.', en: 'Practical exercises for every topic, not just theory.' },
    ],
    learned: {
      es: 'Programación orientada a objetos, que después aplico en PHP y JavaScript.',
      en: 'Object-oriented programming, which I now apply in PHP and JavaScript.',
    },
    arch: ['Java', 'JDBC', { es: 'Base de datos', en: 'Database' }],
    repos: [{ label: { es: 'Apuntes', en: 'Notes' }, url: 'https://github.com/Kokon4/Apunts-Java' }],
    demo: '',
  },
]

// Otros ejercicios y prácticas de clase: se muestran en una lista compacta.
export const classExercises = [
  { name: { es: 'Biblioteca (JS)', en: 'Library (JS)' }, tech: 'JavaScript', url: 'https://github.com/Kokon4/RepasRecuBiblioJS' },
  { name: { es: 'Videojocs (JS)', en: 'Video games (JS)' }, tech: 'JavaScript', url: 'https://github.com/Kokon4/recuJSvideojocs' },
  { name: { es: 'Cursos (JS)', en: 'Courses (JS)' }, tech: 'JavaScript', url: 'https://github.com/Kokon4/RecuRepasCourses' },
  { name: { es: 'Videojocs (Vue)', en: 'Video games (Vue)' }, tech: 'Vue', url: 'https://github.com/Kokon4/videojocsExamenRepas' },
  { name: { es: 'Teleassistència', en: 'Telecare' }, tech: 'Vue', url: 'https://github.com/Kokon4/teleasistenciaRepasRecu' },
  { name: { es: 'Centres educatius', en: 'Schools' }, tech: 'Vue', url: 'https://github.com/Kokon4/ExamenRepasCentros' },
  { name: 'Odin Recipes', tech: 'HTML · CSS', url: 'https://github.com/Kokon4/odin-recipes' },
  { name: 'Gelateria Batoi', tech: { es: 'Inicios', en: 'First project' }, url: 'https://github.com/Kokon4/Treball-Gelateria-Batoi' },
]

export const groups = [
  { id: 'personal', title: { es: 'Personales', en: 'Personal' } },
  { id: 'clase', title: { es: 'De clase (DAW)', en: 'Coursework (DAW)' } },
]

export const filters = [
  { id: 'all', label: { es: 'Todos', en: 'All' } },
  { id: 'laravel', label: 'Laravel' },
  { id: 'vue', label: 'Vue' },
  { id: 'mysql', label: 'MySQL' },
  { id: 'devops', label: 'DevOps' },
  { id: 'java', label: 'Java' },
]
