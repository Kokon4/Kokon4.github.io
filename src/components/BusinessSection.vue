<script setup>
import { ref, computed } from 'vue'
import { t, tr } from '../i18n.js'
import { aiPrinciples, businessCases } from '../data/business.js'
import ProjectTile from './ProjectTile.vue'
import ModalDialog from './ModalDialog.vue'
import BusinessDetail from './BusinessDetail.vue'

const selectedId = ref(null)
const selected = computed(() => businessCases.find((c) => c.id === selectedId.value))
</script>

<template>
  <section id="soluciones">
    <div class="container">
      <div v-reveal class="section-head">
        <h2>{{ t('ai.title') }}</h2>
        <p>{{ t('ai.intro') }}</p>
      </div>

      <ul v-reveal class="principles">
        <li v-for="p in aiPrinciples" :key="p.es">{{ tr(p) }}</li>
      </ul>

      <div class="tiles">
        <ProjectTile
          v-for="c in businessCases"
          :key="c.id"
          v-reveal
          :title="tr(c.title)"
          :subtitle="tr(c.sector)"
          :badge="t(`status.${c.status}`)"
          :badge-class="c.status"
          :tags="tr(c.stack)"
          :colors="['#a78bfa']"
          gradient="linear-gradient(90deg, #a78bfa, var(--accent-2))"
          @open="selectedId = c.id"
        />
      </div>
    </div>

    <ModalDialog :open="!!selected" :label="tr(selected?.title)" @close="selectedId = null">
      <BusinessDetail v-if="selected" :c="selected" />
    </ModalDialog>
  </section>
</template>

<style scoped>
.principles {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.principles li {
  font-family: var(--mono);
  font-size: 0.82rem;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
}
.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 14px;
}
</style>
