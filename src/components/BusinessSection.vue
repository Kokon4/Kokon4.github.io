<script setup>
import { aiPrinciples, businessCases } from '../data/business.js'

const statusLabel = { idea: 'próximamente', 'en-desarrollo': 'en desarrollo', terminado: 'terminado' }
</script>

<template>
  <section id="soluciones">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="kicker">// 03. soluciones para empresas</span>
        <h2>Problemas reales, resueltos con IA</h2>
        <p>Casos que cualquier empresa reconoce, desarrollados con asistencia de IA. En cada uno explico el problema de negocio, la solución, el impacto y qué parte hice yo y qué parte la IA.</p>
      </div>

      <div v-reveal class="principles">
        <div v-for="p in aiPrinciples" :key="p.title" class="principle card">
          <span class="icon" aria-hidden="true">{{ p.icon }}</span>
          <div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </div>
      </div>

      <div class="grid">
        <article v-for="c in businessCases" :key="c.id" v-reveal class="card case">
          <div class="top">
            <span class="chip sector">{{ c.sector }}</span>
            <span :class="['chip', 'status', c.status]">{{ statusLabel[c.status] }}</span>
          </div>
          <h3>{{ c.title }}</h3>

          <p class="label">🏢 El problema</p>
          <p class="text">{{ c.problem }}</p>
          <p class="label">💡 La solución</p>
          <p class="text">{{ c.solution }}</p>

          <p class="label">📈 Impacto {{ c.status === 'terminado' ? '' : 'esperado' }}</p>
          <ul class="impact">
            <li v-for="i in c.impact" :key="i">{{ i }}</li>
          </ul>

          <div class="split">
            <div>
              <span class="who me">yo</span>
              <p>{{ c.me }}</p>
            </div>
            <div>
              <span class="who ai">IA</span>
              <p>{{ c.ai }}</p>
            </div>
          </div>

          <div class="chips">
            <span v-for="t in c.stack" :key="t" class="chip">{{ t }}</span>
          </div>

          <div v-if="c.demo || c.repo" class="links">
            <a v-if="c.repo" :href="c.repo" target="_blank" rel="noopener" class="btn">código</a>
            <a v-if="c.demo" :href="c.demo" target="_blank" rel="noopener" class="btn primary">demo ↗</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}
.principle {
  display: flex;
  gap: 14px;
  padding: 18px;
}
.icon {
  font-size: 1.5rem;
  line-height: 1;
}
.principle h3 {
  font-family: var(--mono);
  font-size: 0.95rem;
  margin: 0 0 4px;
}
.principle p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
.case {
  padding: 22px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.case::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, #a78bfa, var(--accent-2));
}
.top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
.sector {
  color: var(--accent-2);
}
.status.idea {
  color: #febc2e;
}
.status.en-desarrollo {
  color: var(--accent-2);
}
.status.terminado {
  color: var(--accent);
}
h3 {
  font-size: 1.1rem;
  margin: 14px 0 14px;
  line-height: 1.35;
}
.label {
  font-weight: 600;
  font-size: 0.85rem;
  margin: 0 0 2px;
}
.text {
  color: var(--muted);
  font-size: 0.93rem;
  margin: 0 0 12px;
}
.impact {
  margin: 2px 0 14px;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.92rem;
}
.split {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  margin-bottom: 14px;
}
.split div {
  display: flex;
  gap: 10px;
  align-items: baseline;
}
.split p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
}
.who {
  flex-shrink: 0;
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  min-width: 34px;
  text-align: center;
}
.who.me {
  background: var(--accent);
  color: var(--accent-ink);
}
.who.ai {
  background: #a78bfa;
  color: #1e1240;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.links {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}
@media (max-width: 860px) {
  .principles {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
