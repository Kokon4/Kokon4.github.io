<script setup>
import { ref } from 'vue'
import { stack } from '../data/stack.js'

const props = defineProps({ project: { type: Object, required: true } })
const open = ref(false)

const colors = props.project.tags.map((t) => stack.find((s) => s.id === t)?.color).filter(Boolean)
const accent = colors[0] ?? 'var(--accent)'
</script>

<template>
  <article class="card project" :style="{ '--c': accent }">
    <div class="top">
      <div class="dots">
        <span v-for="c in colors" :key="c" class="dot" :style="{ background: c }"></span>
      </div>
      <span v-if="project.featured" class="chip star">★ destacado</span>
    </div>

    <h3>{{ project.title }}</h3>
    <p class="subtitle">{{ project.subtitle }}</p>

    <!-- Mini diagrama de arquitectura -->
    <div class="arch" aria-label="Arquitectura">
      <template v-for="(node, i) in project.arch" :key="node">
        <span class="node">{{ node }}</span>
        <span v-if="i < project.arch.length - 1" class="link" aria-hidden="true">
          <span class="packet"></span>
        </span>
      </template>
    </div>

    <p class="label">Problema</p>
    <p class="text">{{ project.problem }}</p>
    <p class="label">Solución</p>
    <p class="text">{{ project.solution }}</p>

    <div class="chips">
      <span v-for="t in project.tech" :key="t" class="chip">{{ t }}</span>
    </div>

    <button class="toggle" :aria-expanded="open" @click="open = !open">
      <span class="caret" :class="{ rot: open }">▸</span> cómo funciona
    </button>

    <div v-show="open" class="more">
      <p class="label">Decisiones técnicas</p>
      <ul>
        <li v-for="d in project.decisions" :key="d">{{ d }}</li>
      </ul>
      <p class="label">Qué aprendí</p>
      <p class="text">{{ project.learned }}</p>
    </div>

    <div class="links">
      <a v-for="r in project.repos" :key="r.url" :href="r.url" target="_blank" rel="noopener" class="btn">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
        {{ r.label }}
      </a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="btn primary">demo ↗</a>
    </div>
  </article>
</template>

<style scoped>
.project {
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}
.project::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, var(--c), transparent);
}
.project:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--c) 60%, var(--border));
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dots {
  display: flex;
  gap: 6px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.star {
  color: var(--accent);
}
h3 {
  font-family: var(--mono);
  font-size: 1.3rem;
  margin: 14px 0 2px;
}
.subtitle {
  color: var(--muted);
  margin: 0 0 18px;
}
.arch {
  display: flex;
  align-items: center;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px dashed var(--border);
}
.node {
  flex-shrink: 0;
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 6px 9px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  text-align: center;
}
.link {
  flex: 1;
  min-width: 18px;
  height: 2px;
  background: var(--border);
  position: relative;
  overflow: hidden;
}
.packet {
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100%;
  background: var(--c);
  animation: travel 2.2s linear infinite;
}
@keyframes travel {
  to {
    left: 100%;
  }
}
.label {
  font-weight: 600;
  font-size: 0.85rem;
  margin: 0 0 2px;
}
.text {
  color: var(--muted);
  margin: 0 0 12px;
  font-size: 0.95rem;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0;
}
.toggle {
  font-family: var(--mono);
  font-size: 0.88rem;
  background: none;
  border: none;
  color: var(--accent);
  padding: 0;
  cursor: pointer;
}
.caret {
  display: inline-block;
  transition: transform 0.2s;
}
.caret.rot {
  transform: rotate(90deg);
}
.more {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}
ul {
  margin: 4px 0 14px;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.93rem;
}
li {
  margin-bottom: 6px;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
@media (prefers-reduced-motion: reduce) {
  .packet {
    animation: none;
    left: 35%;
  }
}
@media (max-width: 420px) {
  .node {
    font-size: 0.68rem;
    padding: 5px 6px;
  }
}
</style>
