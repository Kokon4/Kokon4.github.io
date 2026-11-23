<script setup>
// Línea temporal de aprendizaje. TODO: ajustar fechas y centro si hace falta.
const timeline = [
  { when: 'Inicio', title: 'Fundamentos con Java', text: 'Algoritmia, POO, herencia, interfaces, excepciones y acceso a bases de datos.', tag: 'java' },
  { when: 'DAW · 1º', title: 'La web por dentro', text: 'HTML, CSS y JavaScript sin frameworks: DOM, eventos, fetch y consumo de APIs.', tag: 'js' },
  { when: 'DAW · 2º', title: 'Backend con Laravel', text: 'MVC, Eloquent, migraciones, autenticación, Livewire y APIs REST con Sanctum.', tag: 'laravel' },
  { when: 'DAW · 2º', title: 'Frontend moderno con Vue', text: 'Componentes, Composition API, Pinia, Vue Router y tests con Vitest.', tag: 'vue' },
  { when: 'DAW · 2º', title: 'Despliegue y DevOps', text: 'Docker, Nginx, Deployer y GitHub Actions: llevar el código a producción.', tag: 'devops' },
  { when: 'Ahora', title: 'Proyectos propios', text: 'MTG Collector: una app full stack completa, diseñada y construida de cero.', tag: 'vue' },
]
</script>

<template>
  <section id="aprendizaje">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="kicker">// 05. aprendizaje</span>
        <h2>git log de mi formación</h2>
        <p>Cómo he ido construyendo mi stack, commit a commit.</p>
      </div>

      <ol class="timeline">
        <li v-for="(t, i) in timeline" :key="t.title" v-reveal class="item">
          <span class="hash">{{ (0xa1f3 + i * 0x1b7).toString(16) }}</span>
          <div class="card body">
            <span class="when">{{ t.when }}</span>
            <h3>{{ t.title }}</h3>
            <p>{{ t.text }}</p>
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
.hash {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: #febc2e;
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
