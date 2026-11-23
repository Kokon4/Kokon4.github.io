<script setup>
import { ref, computed } from 'vue'
import { projects, filters } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'

const active = ref('all')
const visible = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.tags.includes(active.value)),
)
</script>

<template>
  <section id="proyectos">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="kicker">// 03. proyectos</span>
        <h2>Lo que he construido</h2>
        <p>Cada proyecto explica el problema, la arquitectura, las decisiones técnicas y lo que aprendí. Abre “cómo funciona” para ver los detalles.</p>
      </div>

      <div v-reveal class="filters" role="group" aria-label="Filtrar por tecnología">
        <button
          v-for="f in filters"
          :key="f.id"
          :class="['filter', { on: active === f.id }]"
          :aria-pressed="active === f.id"
          @click="active = f.id"
        >
          {{ f.label }}
        </button>
      </div>

      <TransitionGroup name="list" tag="div" class="grid">
        <ProjectCard v-for="p in visible" :key="p.id" :project="p" />
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.filter {
  font-family: var(--mono);
  font-size: 0.85rem;
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
}
.filter:hover {
  color: var(--text);
}
.filter.on {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  align-items: start;
}
.list-enter-active,
.list-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
.list-leave-active {
  position: absolute;
}
@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
