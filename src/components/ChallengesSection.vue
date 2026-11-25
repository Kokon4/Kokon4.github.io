<script setup>
import { platforms, highlights, solutionsRepo } from '../data/challenges.js'

</script>

<template>
  <section id="retos" class="sub">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>Retos de programación</h2>
        <p>Soluciones a retos de algoritmos y maquetación.</p>
      </div>

      <div class="grid">
        <article v-for="p in platforms" :key="p.id" v-reveal class="card platform" :style="{ '--c': p.color }">
          <div class="top">
            <h3>{{ p.name }}</h3>
            <span class="chip">{{ p.solved ? `${p.solved} resueltos` : 'sin empezar' }}</span>
          </div>
          <p class="focus">{{ p.focus }}</p>
          <p class="why">{{ p.why }}</p>
          <div class="bar"><span :style="{ width: Math.min(p.solved, 100) + '%' }"></span></div>
          <a v-if="p.profile" :href="p.profile" target="_blank" rel="noopener" class="link">ver perfil ↗</a>
        </article>
      </div>

      <div v-reveal class="card log">
        <div class="file">Soluciones destacadas</div>
        <div class="body">
          <template v-if="highlights.length">
            <div v-for="h in highlights" :key="h.url" class="entry">
              <span class="ok">✔</span>
              <a :href="h.url" target="_blank" rel="noopener">{{ h.title }}</a>
              <span class="chip">{{ h.platform }}</span>
              <span class="chip">{{ h.difficulty }}</span>
              <span class="chip">{{ h.lang }}</span>
              <p v-if="h.idea" class="idea">{{ h.idea }}</p>
            </div>
          </template>
          <p v-else class="empty">
            <span class="muted">Todavía no hay soluciones publicadas.</span>
          </p>
          <a v-if="solutionsRepo" :href="solutionsRepo" target="_blank" rel="noopener" class="btn">ver todas las soluciones</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sub {
  padding-top: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.platform {
  padding: 20px;
  border-top: 3px solid var(--c);
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
h3 {
  font-family: var(--mono);
  font-size: 1.05rem;
  margin: 0;
}
.focus {
  font-weight: 600;
  font-size: 0.9rem;
  margin: 12px 0 4px;
}
.why {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0 0 16px;
  flex: 1;
}
.bar {
  height: 6px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  overflow: hidden;
}
.bar span {
  display: block;
  height: 100%;
  background: var(--c);
}
.link {
  margin-top: 12px;
  font-family: var(--mono);
  font-size: 0.85rem;
}
.log {
  overflow: hidden;
}
.file {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
}
.body {
  padding: 18px;
  font-family: var(--mono);
  font-size: 0.9rem;
}
.entry {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.ok {
  color: var(--accent);
}
.idea {
  width: 100%;
  margin: 0 0 0 22px;
  color: var(--muted);
  font-family: var(--sans);
}
.empty {
  margin: 0;
  line-height: 1.8;
}
.muted {
  color: var(--muted);
}
</style>
