<script setup>
// Tarjeta compacta: muestra lo esencial y al pulsarla se abre el detalle completo.
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  colors: { type: Array, default: () => [] },
  badge: { type: String, default: '' },
  badgeClass: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  gradient: { type: String, default: '' },
})
defineEmits(['open'])
import { t } from '../i18n.js'
</script>

<template>
  <button
    class="tile card"
    :style="{ '--c': colors[0] ?? 'var(--accent)', '--g': gradient || `linear-gradient(90deg, ${colors[0] ?? 'var(--accent)'}, transparent)` }"
    @click="$emit('open')"
  >
    <div class="top">
      <div class="dots">
        <span v-for="c in colors" :key="c" class="dot" :style="{ background: c }"></span>
      </div>
      <span v-if="badge" :class="['chip', badgeClass]">{{ badge }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    <div class="chips">
      <span v-for="tag in tags.slice(0, 3)" :key="tag" class="chip">{{ tag }}</span>
      <span v-if="tags.length > 3" class="chip">+{{ tags.length - 3 }}</span>
    </div>
    <span class="more">{{ t('tile.more') }} <span aria-hidden="true">↗</span></span>
  </button>
</template>

<style scoped>
.tile {
  text-align: left;
  font: inherit;
  color: var(--text);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.18s, border-color 0.18s, box-shadow 0.18s;
}
.tile::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: var(--g);
}
.tile:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--c) 60%, var(--border));
  box-shadow: var(--shadow), 0 0 24px color-mix(in srgb, var(--c) 18%, transparent);
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  min-height: 24px;
}
.dots {
  display: flex;
  gap: 5px;
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
h3 {
  font-family: var(--mono);
  font-size: 1rem;
  line-height: 1.3;
  margin: 4px 0 0;
}
.subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
  padding-top: 8px;
}
.chips .chip {
  font-size: 0.7rem;
  padding: 2px 7px;
}
.more {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  margin-top: 4px;
}
.chip.idea {
  color: #febc2e;
}
.chip.en-desarrollo {
  color: var(--accent-2);
}
.chip.terminado,
.chip.star {
  color: var(--accent);
}
</style>
