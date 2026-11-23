# kokon4.github.io

Portfolio personal de **Kico**, desarrollador web full stack (Laravel · PHP · Vue · JavaScript · MySQL · Java).

🔗 **https://kokon4.github.io**

## Stack

- [Vue 3](https://vuejs.org/) con Composition API
- [Vite](https://vite.dev/) como bundler
- CSS propio con variables (modo oscuro / claro), sin frameworks
- Despliegue automático en GitHub Pages con GitHub Actions

## Estructura

```
src/
├── data/          # contenido editable: perfil, stack y proyectos
├── components/    # una sección de la web por componente
├── directives/    # v-reveal: animación al hacer scroll
└── styles/        # estilos globales y tokens de color
```

Para añadir o editar un proyecto basta con tocar `src/data/projects.js`.

## Desarrollo local

```sh
npm install
npm run dev      # servidor de desarrollo
npm run build    # compila a dist/
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila el proyecto y lo publica en GitHub Pages.
En **Settings → Pages**, la fuente debe estar en **GitHub Actions**.
