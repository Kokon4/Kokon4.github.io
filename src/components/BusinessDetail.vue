<script setup>
import { t, tr } from '../i18n.js'
defineProps({ c: { type: Object, required: true } })
</script>

<template>
  <article class="case">
    <div class="top">
      <span class="chip sector">{{ tr(c.sector) }}</span>
      <span :class="['chip', 'status', c.status]">{{ t(`status.${c.status}`) }}</span>
    </div>
    <h3>{{ tr(c.title) }}</h3>

    <p class="label">{{ t('ai.problem') }}</p>
    <p class="text">{{ tr(c.problem) }}</p>
    <p class="label">{{ t('ai.solution') }}</p>
    <p class="text">{{ tr(c.solution) }}</p>

    <p class="label">{{ c.status === 'terminado' ? t('ai.impact') : t('ai.impactExpected') }}</p>
    <ul class="impact">
      <li v-for="(i, n) in c.impact" :key="n">{{ tr(i) }}</li>
    </ul>

    <div class="split">
      <div>
        <span class="who me">{{ t('ai.me') }}</span>
        <p>{{ tr(c.me) }}</p>
      </div>
      <div>
        <span class="who ai">{{ t('ai.ai') }}</span>
        <p>{{ tr(c.ai) }}</p>
      </div>
    </div>

    <div class="chips">
      <span v-for="(s, n) in c.stack" :key="n" class="chip">{{ tr(s) }}</span>
    </div>

    <div v-if="c.demo || c.repo" class="links">
      <a v-if="c.repo" :href="c.repo" target="_blank" rel="noopener" class="btn">{{ t('ai.code') }}</a>
      <a v-if="c.demo" :href="c.demo" target="_blank" rel="noopener" class="btn primary">demo ↗</a>
    </div>
  </article>
</template>

<style scoped>
.case {
  display: flex;
  flex-direction: column;
}
.chips {
  margin-top: 4px;
}
.top {
  padding-right: 44px;
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
</style>
