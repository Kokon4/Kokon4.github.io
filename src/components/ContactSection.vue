<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile.js'

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <section id="contacto">
    <div class="container">
      <div v-reveal class="card box">
        <span class="kicker">// 05. contacto</span>
        <h2>¿Hablamos?</h2>
        <p>Estoy buscando mi siguiente oportunidad como desarrollador web. Si tienes un puesto, un proyecto o simplemente quieres comentar algo de código, escríbeme.</p>
        <div class="cta">
          <a v-if="profile.email" :href="`mailto:${profile.email}`" class="btn primary">✉ {{ profile.email }}</a>
          <button v-if="profile.email" class="btn" @click="copyEmail">{{ copied ? '✓ copiado' : 'copiar email' }}</button>
          <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener" class="btn">LinkedIn</a>
          <a :href="profile.github" target="_blank" rel="noopener" class="btn">GitHub</a>
          <a v-if="profile.cv" :href="profile.cv" class="btn" download>CV (PDF)</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box {
  padding: clamp(28px, 5vw, 56px);
  text-align: center;
  background: radial-gradient(circle at 50% 0%, var(--glow), transparent 60%), var(--surface);
}
.kicker {
  font-family: var(--mono);
  color: var(--accent);
  font-size: 0.85rem;
}
h2 {
  font-family: var(--mono);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin: 8px 0 12px;
}
p {
  color: var(--muted);
  max-width: 560px;
  margin: 0 auto;
}
.cta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
</style>
