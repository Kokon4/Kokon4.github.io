<script setup>
import { ref, computed } from 'vue'
import { projects, filters, groups, classExercises } from '../data/projects.js'
import { stack } from '../data/stack.js'
import ProjectTile from './ProjectTile.vue'
import ModalDialog from './ModalDialog.vue'
import ProjectDetail from './ProjectDetail.vue'

const active = ref('all')
const matches = (p) => active.value === 'all' || p.tags.includes(active.value)
const colorsOf = (p) => p.tags.map((t) => stack.find((s) => s.id === t)?.color).filter(Boolean)

// Proyectos agrupados en "personales" y "de clase", respetando el filtro activo
const grouped = computed(() =>
  groups.map((g) => ({ ...g, items: projects.filter((p) => p.category === g.id && matches(p)) })),
)
const total = computed(() => grouped.value.reduce((n, g) => n + g.items.length, 0))

const selectedId = ref(null)
const selected = computed(() => projects.find((p) => p.id === selectedId.value))
</script>

<template>
  <section id="proyectos">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="kicker">// 02. hecho a mano</span>
        <h2>Proyectos personales, sin IA</h2>
        <p>Código escrito, depurado y entendido línea a línea: la base que me permite usar la IA con criterio. Pulsa un proyecto para ver su arquitectura y decisiones.</p>
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

      <div class="groups">
        <template v-for="g in grouped" :key="g.id">
          <div v-if="g.items.length" class="group">
            <h3 class="group-title">
              <span class="folder">{{ g.id === 'personal' ? '~/a-mano/personal' : '~/a-mano/daw' }}</span>
              {{ g.title }}
            </h3>
            <div class="tiles">
              <ProjectTile
                v-for="p in g.items"
                :key="p.id"
                :title="p.title"
                :subtitle="p.subtitle"
                :colors="colorsOf(p)"
                :badge="p.featured ? '★ destacado' : ''"
                badge-class="star"
                :tags="p.tech"
                @open="selectedId = p.id"
              />
            </div>
          </div>
        </template>
      </div>

      <p v-if="!total" class="empty">No hay proyectos con este filtro.</p>

      <details v-if="active === 'all'" class="exercises card">
        <summary>
          <span class="folder">~/a-mano/daw/ejercicios</span> Otras prácticas de clase ({{ classExercises.length }})
        </summary>
        <ul>
          <li v-for="e in classExercises" :key="e.url">
            <a :href="e.url" target="_blank" rel="noopener">{{ e.name }}</a>
            <span class="chip">{{ e.tech }}</span>
          </li>
        </ul>
      </details>
    </div>

    <ModalDialog :open="!!selected" :label="selected?.title" @close="selectedId = null">
      <ProjectDetail v-if="selected" :project="selected" />
    </ModalDialog>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
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
.groups {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
}
.group:only-child {
  grid-column: 1 / -1;
}
.group-title {
  font-size: 1rem;
  margin: 0 0 12px;
}
.folder {
  display: block;
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
}
.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 14px;
}
.empty {
  color: var(--muted);
  font-family: var(--mono);
}
.exercises {
  margin-top: 24px;
  padding: 14px 18px;
}
summary {
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
}
summary .folder {
  display: inline;
  margin-right: 6px;
}
ul {
  list-style: none;
  margin: 14px 0 0;
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
@media (max-width: 860px) {
  .groups {
    grid-template-columns: 1fr;
  }
}
</style>
