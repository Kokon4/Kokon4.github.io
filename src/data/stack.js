// Tecnologías del stack. Textos traducibles: { es, en }.
export const stack = [
  {
    id: 'vue',
    name: 'Vue 3',
    layer: 'Frontend',
    color: '#42b883',
    what: {
      es: 'Framework de JavaScript para construir interfaces reactivas a base de componentes.',
      en: 'JavaScript framework for building reactive, component-based interfaces.',
    },
    how: {
      es: 'Composition API, Pinia para el estado global y Vue Router.',
      en: 'Composition API, Pinia for global state and Vue Router.',
    },
  },
  {
    id: 'js',
    name: 'JavaScript',
    layer: 'Frontend',
    color: '#f7df1e',
    what: { es: 'Lenguaje de programación del navegador.', en: 'The programming language of the browser.' },
    how: {
      es: 'ES6+, módulos, fetch/axios para consumir APIs y manipulación del DOM sin frameworks.',
      en: 'ES6+, modules, fetch/axios to consume APIs, and DOM manipulation without frameworks.',
    },
  },
  {
    id: 'laravel',
    name: 'Laravel',
    layer: 'Backend',
    color: '#ff2d20',
    what: {
      es: 'Framework PHP que organiza el backend en rutas, controladores, modelos y migraciones (MVC).',
      en: 'PHP framework that organises the backend into routes, controllers, models and migrations (MVC).',
    },
    how: {
      es: 'APIs REST con Sanctum, Eloquent ORM, validación con Form Requests, Livewire y documentación Swagger.',
      en: 'REST APIs with Sanctum, Eloquent ORM, Form Request validation, Livewire and Swagger docs.',
    },
  },
  {
    id: 'php',
    name: 'PHP',
    layer: 'Backend',
    color: '#777bb4',
    what: { es: 'Lenguaje del lado del servidor sobre el que se apoya Laravel.', en: 'Server-side language Laravel is built on.' },
    how: {
      es: 'PHP 8.2+: tipado, POO, Composer para dependencias y PHPUnit para tests.',
      en: 'PHP 8.2+: types, OOP, Composer for dependencies and PHPUnit for tests.',
    },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    layer: { es: 'Datos', en: 'Data' },
    color: '#4479a1',
    what: { es: 'Base de datos relacional.', en: 'Relational database.' },
    how: {
      es: 'Diseño de modelos entidad-relación, claves foráneas, relaciones N:M y migraciones versionadas.',
      en: 'Entity-relationship modelling, foreign keys, many-to-many relations and versioned migrations.',
    },
  },
  {
    id: 'java',
    name: 'Java',
    layer: { es: 'Fundamentos', en: 'Fundamentals' },
    color: '#f89820',
    what: { es: 'Lenguaje orientado a objetos.', en: 'Object-oriented language.' },
    how: {
      es: 'POO, herencia, interfaces, excepciones, estructuras dinámicas y acceso a BD con JDBC.',
      en: 'OOP, inheritance, interfaces, exceptions, dynamic data structures and database access with JDBC.',
    },
  },
  {
    id: 'devops',
    name: 'Docker · Nginx · CI/CD',
    layer: { es: 'Despliegue', en: 'Deployment' },
    color: '#2496ed',
    what: { es: 'Herramientas para desplegar aplicaciones en servidores.', en: 'Tools to deploy applications to servers.' },
    how: {
      es: 'docker-compose para entornos, virtual hosts en Nginx, Deployer y GitHub Actions para desplegar con cada push.',
      en: 'docker-compose for environments, Nginx virtual hosts, Deployer and GitHub Actions to deploy on every push.',
    },
  },
]
