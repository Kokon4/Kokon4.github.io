// Proyectos destacados. `arch` dibuja el mini diagrama de arquitectura de cada tarjeta.
export const projects = [
  {
    id: 'mtg',
    title: 'MTG Collector',
    subtitle: 'Gestor de colecciones y mazos de Magic: The Gathering',
    featured: true,
    tags: ['laravel', 'vue', 'mysql', 'devops'],
    tech: ['Laravel 12', 'Sanctum', 'Swagger', 'Vue 3', 'Pinia', 'Vue Router', 'Vitest', 'Docker'],
    problem:
      'Los jugadores de formatos clásicos (Premodern) necesitan consultar cartas por edición y montar mazos sin hojas de cálculo.',
    solution:
      'Una aplicación full stack separada en dos repos: una API REST en Laravel y una SPA en Vue que la consume.',
    decisions: [
      'Autenticación por token con Laravel Sanctum: rutas públicas para cartas y ediciones, privadas para los mazos.',
      'Relación N:M entre mazos y cartas con cantidad en la tabla pivote y endpoint de inserción masiva (bulk).',
      'API documentada con Swagger (L5-Swagger) para poder probarla sin el frontend.',
      'Frontend con stores de Pinia por dominio (auth, cards, decks, sets) y filtros con debounce en un composable.',
    ],
    learned: 'Diseñar una API pensando en quien la consume, y separar responsabilidades entre frontend y backend.',
    arch: ['Vue 3 SPA', 'API Laravel', 'MySQL'],
    repos: [
      { label: 'API', url: 'https://github.com/Kokon4/API-MTG-COLLECTOR' },
      { label: 'Frontend', url: 'https://github.com/Kokon4/Vue-mtg-collector' },
    ],
    demo: '', // TODO: URL de la demo si está desplegada
  },
  {
    id: 'futbol',
    title: 'Fútbol Femení',
    subtitle: 'Gestión de una liga de fútbol femenino',
    featured: true,
    tags: ['laravel', 'php', 'mysql'],
    tech: ['Laravel 11', 'Livewire 3', 'Breeze', 'Tailwind', 'MySQL', 'i18n'],
    problem: 'Gestionar equipos, jugadoras, estadios y partidos de una liga, con permisos distintos según el usuario.',
    solution:
      'Aplicación Laravel con Livewire para la interactividad, autenticación con Breeze y roles (administrador, gestor de equipo).',
    decisions: [
      'Modelo relacional: Equip → Jugadores, Equip ↔ Estadi, Partit con equipo local y visitante.',
      'Roles en la tabla users para restringir qué puede editar cada usuario.',
      'Traducciones en catalán, castellano e inglés con los ficheros lang de Laravel.',
      'Migraciones incrementales que reflejan la evolución real del esquema.',
    ],
    learned: 'Modelar un dominio real en Eloquent y mantener la base de datos evolucionando con migraciones.',
    arch: ['Blade + Livewire', 'Laravel', 'MySQL'],
    repos: [{ label: 'Código', url: 'https://github.com/Kokon4/futbolfemeniauto' }],
    demo: '',
  },
  {
    id: 'deploy',
    title: 'Despliegue automatizado',
    subtitle: 'De git push a producción sin tocar el servidor',
    featured: false,
    tags: ['devops', 'laravel'],
    tech: ['Nginx', 'PHP-FPM', 'Deployer', 'GitHub Actions', 'Docker', 'SSH'],
    problem: 'Desplegar a mano por FTP o SSH es lento y propenso a errores.',
    solution:
      'Servidor Nginx con virtual hosts para un backoffice Laravel y un frontend estático, desplegados con Deployer desde GitHub Actions.',
    decisions: [
      'Usuario "deployer" sin privilegios de root y acceso solo por clave SSH.',
      'Releases atómicas de Deployer: si algo falla, se vuelve a la versión anterior.',
      'Workflow de GitHub Actions que despliega en cada push a main.',
    ],
    learned: 'Cómo funciona un servidor web por dentro y la importancia de automatizar y mínimos privilegios.',
    arch: ['GitHub Actions', 'Deployer · SSH', 'Nginx + PHP'],
    repos: [
      { label: 'laravelDeploy', url: 'https://github.com/Kokon4/laravelDeploy' },
      { label: 'deployAutomatic', url: 'https://github.com/Kokon4/deployAutomatic' },
    ],
    demo: '',
  },
  {
    id: 'java',
    title: 'Apunts de Java',
    subtitle: 'Mis apuntes y ejercicios de programación',
    featured: false,
    tags: ['java'],
    tech: ['Java', 'POO', 'JDBC'],
    problem: 'Aprender los fundamentos de la programación de forma ordenada.',
    solution: 'Repositorio organizado por unidades: bucles, strings, arrays, objetos, herencia, interfaces, excepciones y BD.',
    decisions: [
      'Una carpeta por unidad didáctica, de lo básico a lo avanzado.',
      'Ejercicios prácticos en cada tema, no solo teoría.',
    ],
    learned: 'Bases sólidas de POO que luego aplico en PHP y JavaScript.',
    arch: ['Java', 'JDBC', 'Base de datos'],
    repos: [{ label: 'Apuntes', url: 'https://github.com/Kokon4/Apunts-Java' }],
    demo: '',
  },
]

export const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'laravel', label: 'Laravel' },
  { id: 'vue', label: 'Vue' },
  { id: 'mysql', label: 'MySQL' },
  { id: 'devops', label: 'DevOps' },
  { id: 'java', label: 'Java' },
]
