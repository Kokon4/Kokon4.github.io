<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StackSection from './components/StackSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import LearningSection from './components/LearningSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <StackSection />
    <ProjectsSection />
    <LearningSection />
    <ContactSection />
  </main>
  <footer class="footer">
    <div class="container">
      <span>Hecho con Vue 3 + Vite · desplegado con GitHub Actions</span>
      <span class="mono">© {{ new Date().getFullYear() }} Kico</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
  color: var(--muted);
  font-size: 0.85rem;
}
.footer .container {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.mono {
  font-family: var(--mono);
}
</style>
