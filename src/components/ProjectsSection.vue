<script setup>
import { ref, computed } from 'vue'
import { projects, filters, groups, classExercises } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'

const active = ref('all')
const matches = (p) => active.value === 'all' || p.tags.includes(active.value)

// Proyectos agrupados en "personales" y "de clase", respetando el filtro activo
const grouped = computed(() =>
  groups.map((g) => ({ ...g, items: projects.filter((p) => p.category === g.id && matches(p)) })),
)
const total = computed(() => grouped.value.reduce((n, g) => n + g.items.length, 0))
</script>

<template>
  <section id="proyectos">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="kicker">// 04. hecho a mano</span>
        <h2>Proyectos personales, sin IA</h2>
        <p>Aquí no hay atajos: código escrito, depurado y entendido línea a línea. Es la base que me permite usar la IA con criterio. Abre “cómo funciona” para ver la arquitectura y las decisiones de cada proyecto.</p>
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

      <template v-for="g in grouped" :key="g.id">
        <div v-if="g.items.length" class="group">
          <div class="group-head">
            <h3><span class="folder">{{ g.id === 'personal' ? '~/a-mano/personal' : '~/a-mano/daw' }}</span> {{ g.title }}</h3>
            <p>{{ g.description }}</p>
          </div>
          <TransitionGroup name="list" tag="div" :class="['grid', { single: g.items.length === 1 }]">
            <ProjectCard v-for="p in g.items" :key="p.id" :project="p" />
          </TransitionGroup>
        </div>
      </template>

      <p v-if="!total" class="empty">No hay proyectos con este filtro.</p>

      <div v-if="active === 'all'" v-reveal class="card exercises">
        <div class="group-head">
          <h3><span class="folder">~/a-mano/daw/ejercicios</span> Otras prácticas de clase</h3>
          <p>Ejercicios y exámenes de repaso más pequeños.</p>
        </div>
        <ul>
          <li v-for="e in classExercises" :key="e.url">
            <a :href="e.url" target="_blank" rel="noopener">{{ e.name }}</a>
            <span class="chip">{{ e.tech }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
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
.group {
  margin-bottom: 48px;
}
.group-head h3 {
  font-size: 1.25rem;
  margin: 0 0 4px;
}
.group-head p {
  color: var(--muted);
  margin: 0 0 20px;
}
.folder {
  font-family: var(--mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  margin-right: 6px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  align-items: start;
  position: relative;
}
.grid.single {
  grid-template-columns: minmax(0, 720px);
}
.empty {
  color: var(--muted);
  font-family: var(--mono);
}
.exercises {
  padding: 24px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 10px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  font-size: 0.92rem;
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
