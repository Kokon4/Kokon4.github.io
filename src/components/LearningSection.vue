<script setup>
import { t, tr } from '../i18n.js'

// Línea temporal de formación. Textos traducibles: { es, en }.
const timeline = [
  {
    when: { es: 'Inicio', en: 'Start' },
    title: 'Java',
    text: {
      es: 'POO, herencia, interfaces, excepciones y acceso a bases de datos.',
      en: 'OOP, inheritance, interfaces, exceptions and database access.',
    },
  },
  {
    when: { es: 'DAW · 1º', en: 'DAW · Year 1' },
    title: { es: 'HTML, CSS y JavaScript', en: 'HTML, CSS and JavaScript' },
    text: { es: 'DOM, eventos, fetch y consumo de APIs.', en: 'DOM, events, fetch and consuming APIs.' },
  },
  {
    when: { es: 'DAW · 2º', en: 'DAW · Year 2' },
    title: 'Laravel',
    text: {
      es: 'MVC, Eloquent, migraciones, autenticación, Livewire y APIs REST con Sanctum.',
      en: 'MVC, Eloquent, migrations, authentication, Livewire and REST APIs with Sanctum.',
    },
  },
  {
    when: { es: 'DAW · 2º', en: 'DAW · Year 2' },
    title: 'Vue',
    text: {
      es: 'Componentes, Composition API, Pinia, Vue Router y tests con Vitest.',
      en: 'Components, Composition API, Pinia, Vue Router and testing with Vitest.',
    },
  },
  {
    when: { es: 'DAW · 2º', en: 'DAW · Year 2' },
    title: { es: 'Despliegue', en: 'Deployment' },
    text: { es: 'Docker, Nginx, Deployer y GitHub Actions.', en: 'Docker, Nginx, Deployer and GitHub Actions.' },
  },
  {
    when: { es: 'Ahora', en: 'Now' },
    title: { es: 'Proyectos propios', en: 'Personal projects' },
    text: {
      es: 'MTG Collector: aplicación full stack con Laravel y Vue.',
      en: 'MTG Collector: full stack application with Laravel and Vue.',
    },
  },
]
</script>

<template>
  <section id="aprendizaje">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t('education.title') }}</h2>
      </div>

      <ol class="timeline">
        <li v-for="(item, i) in timeline" :key="i" v-reveal class="item">
          <div class="card body">
            <span class="when">{{ tr(item.when) }}</span>
            <h3>{{ tr(item.title) }}</h3>
            <p>{{ tr(item.text) }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 28px;
  border-left: 2px solid var(--border);
  display: grid;
  gap: 18px;
}
.item {
  position: relative;
}
.item::before {
  content: '';
  position: absolute;
  left: -36px;
  top: 22px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent);
}
.body {
  padding: 16px 20px;
  margin-top: 4px;
}
.when {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
}
h3 {
  margin: 4px 0;
  font-size: 1.05rem;
}
p {
  margin: 0;
  color: var(--muted);
}
</style>
