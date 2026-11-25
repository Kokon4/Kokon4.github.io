<script setup>
import { lang, toggleLang, t } from '../i18n.js'
</script>

<template>
  <!-- Botón fijo en el lateral derecho: sigue a la página al hacer scroll -->
  <button class="lang card" :aria-label="t('lang.switch')" :title="t('lang.switch')" @click="toggleLang">
    <span :class="{ on: lang === 'es' }">ES</span>
    <span :class="{ on: lang === 'en' }">EN</span>
  </button>
</template>

<style scoped>
.lang {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px;
  border-radius: 12px;
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--muted);
  cursor: pointer;
}
.lang:hover {
  border-color: var(--accent);
}
.lang span {
  padding: 6px 8px;
  border-radius: 8px;
  transition: background 0.15s, color 0.15s;
}
.lang span.on {
  background: var(--accent);
  color: var(--accent-ink);
}
@media (max-width: 640px) {
  /* En móvil se coloca abajo a la derecha para no tapar el contenido */
  .lang {
    right: 12px;
    top: auto;
    bottom: 16px;
    transform: none;
    font-size: 0.7rem;
    box-shadow: var(--shadow);
  }
  .lang span {
    padding: 5px 6px;
  }
}
</style>
