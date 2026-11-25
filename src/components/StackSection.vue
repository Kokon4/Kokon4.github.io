<script setup>
import { ref, computed } from 'vue'
import { stack } from '../data/stack.js'
import { t, tr } from '../i18n.js'

const selected = ref(stack[0].id)
const current = computed(() => stack.find((t) => t.id === selected.value))

</script>

<template>
  <section id="stack">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t('stack.title') }}</h2>
        <p>{{ t('stack.intro') }}</p>
      </div>

      <div v-reveal class="explorer">
        <div class="techs" role="tablist">
          <button
            v-for="tech in stack"
            :key="tech.id"
            role="tab"
            :aria-selected="selected === tech.id"
            :class="['tech', { active: selected === tech.id }]"
            :style="{ '--c': tech.color }"
            @click="selected = tech.id"
          >
            <span class="swatch"></span>
            <span class="tname">{{ tech.name }}</span>
            <span class="layer">{{ tr(tech.layer) }}</span>
          </button>
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="current.id" class="card detail" :style="{ '--c': current.color }" role="tabpanel">
            <span class="chip">{{ tr(current.layer) }}</span>
            <h3>{{ current.name }}</h3>
            <p class="label">{{ t('stack.what') }}</p>
            <p>{{ tr(current.what) }}</p>
            <p class="label">{{ t('stack.how') }}</p>
            <p>{{ tr(current.how) }}</p>
          </div>
        </Transition>
      </div>

    </div>
  </section>
</template>

<style scoped>
.explorer {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
}
.techs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 12px;
}
.tech {
  text-align: left;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 10px;
  align-items: center;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
}
.tech:hover {
  transform: translateY(-2px);
}
.tech.active {
  border-color: var(--c);
  box-shadow: 0 0 0 1px var(--c), 0 0 24px color-mix(in srgb, var(--c) 25%, transparent);
}
.swatch {
  grid-row: span 2;
  width: 10px;
  height: 34px;
  border-radius: 4px;
  background: var(--c);
}
.tname {
  font-family: var(--mono);
  font-weight: 600;
  font-size: 0.92rem;
}
.layer {
  font-size: 0.75rem;
  color: var(--muted);
}
.detail {
  padding: 24px;
  border-top: 3px solid var(--c);
}
.detail h3 {
  font-family: var(--mono);
  margin: 10px 0 8px;
}
.detail p {
  margin: 0 0 12px;
  color: var(--muted);
}
.detail .label {
  color: var(--text);
  font-weight: 600;
  margin-bottom: 2px;
  font-size: 0.9rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
@media (max-width: 900px) {
  .explorer {
    grid-template-columns: 1fr;
  }
}
</style>
