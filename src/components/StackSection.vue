<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { stack, requestFlow } from '../data/stack.js'

const selected = ref(stack[0].id)
const current = computed(() => stack.find((t) => t.id === selected.value))

// Simulador del recorrido de una petición HTTP por el stack
const step = ref(0)
const playing = ref(false)
let timer = null

function play() {
  if (playing.value) return stop()
  playing.value = true
  step.value = 0
  timer = setInterval(() => {
    if (step.value < requestFlow.length - 1) step.value++
    else stop()
  }, 1400)
}
function stop() {
  playing.value = false
  clearInterval(timer)
}
const colorOf = (tech) => stack.find((t) => t.id === tech)?.color ?? 'var(--muted)'
onBeforeUnmount(stop)
</script>

<template>
  <section id="stack">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="kicker">// 02. mi stack</span>
        <h2>Cómo encajan las piezas</h2>
        <p>Pulsa una tecnología para ver qué es y cómo la uso. Debajo, sigue el viaje de una petición real por toda la aplicación.</p>
      </div>

      <div v-reveal class="explorer">
        <div class="techs" role="tablist">
          <button
            v-for="t in stack"
            :key="t.id"
            role="tab"
            :aria-selected="selected === t.id"
            :class="['tech', { active: selected === t.id }]"
            :style="{ '--c': t.color }"
            @click="selected = t.id"
          >
            <span class="swatch"></span>
            <span class="tname">{{ t.name }}</span>
            <span class="layer">{{ t.layer }}</span>
          </button>
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="current.id" class="card detail" :style="{ '--c': current.color }" role="tabpanel">
            <span class="chip">{{ current.layer }}</span>
            <h3>{{ current.name }}</h3>
            <p class="label">¿Qué es?</p>
            <p>{{ current.what }}</p>
            <p class="label">¿Cómo lo uso?</p>
            <p>{{ current.how }}</p>
          </div>
        </Transition>
      </div>

      <div v-reveal class="card flow">
        <div class="flow-head">
          <div>
            <h3>El viaje de una petición</h3>
            <p class="muted">Ejemplo real de MTG Collector: añadir una carta a un mazo.</p>
          </div>
          <button class="btn primary" @click="play">{{ playing ? '■ parar' : '▶ reproducir' }}</button>
        </div>

        <ol class="steps">
          <li
            v-for="(s, i) in requestFlow"
            :key="s.step"
            :class="{ active: i === step, done: i < step }"
            :style="{ '--c': colorOf(s.tech) }"
            @click="stop(); step = i"
          >
            <span class="num">{{ i + 1 }}</span>
            <span class="sname">{{ s.step }}</span>
            <span v-if="i < requestFlow.length - 1" class="arrow" aria-hidden="true"></span>
          </li>
        </ol>
        <p class="step-detail mono"><span class="ps">$</span> {{ requestFlow[step].detail }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.explorer {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  margin-bottom: 28px;
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
.flow {
  padding: 24px;
}
.flow-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.flow-head h3 {
  font-family: var(--mono);
  margin: 0;
}
.muted {
  color: var(--muted);
  margin: 4px 0 0;
}
.steps {
  list-style: none;
  padding: 0;
  margin: 28px 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
.steps li {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.num {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  font-family: var(--mono);
  font-weight: 700;
  border: 2px solid var(--border);
  background: var(--surface-2);
  color: var(--muted);
  z-index: 1;
  transition: all 0.3s;
}
.steps li.done .num {
  border-color: var(--c);
  color: var(--c);
}
.steps li.active .num {
  border-color: var(--c);
  background: var(--c);
  color: #0b0f14;
  transform: scale(1.12);
  box-shadow: 0 0 24px color-mix(in srgb, var(--c) 50%, transparent);
}
.sname {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--muted);
}
.steps li.active .sname {
  color: var(--text);
}
.arrow {
  position: absolute;
  top: 23px;
  left: calc(50% + 28px);
  right: calc(-50% + 28px);
  height: 2px;
  background: var(--border);
}
.steps li.done .arrow {
  background: var(--c);
}
.step-detail {
  margin: 0;
  padding: 14px 16px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  font-size: 0.9rem;
  min-height: 52px;
}
.mono {
  font-family: var(--mono);
}
.ps {
  color: var(--accent);
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
@media (max-width: 560px) {
  .num {
    width: 36px;
    height: 36px;
    font-size: 0.85rem;
  }
  .arrow {
    top: 18px;
    left: calc(50% + 22px);
    right: calc(-50% + 22px);
  }
  .sname {
    font-size: 0.68rem;
  }
}
</style>
