<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { href: '#soluciones', label: 'Proyectos IA' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#retos', label: 'Retos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#aprendizaje', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
]

const open = ref(false)
const scrolled = ref(false)
const theme = ref('dark')

function readStoredTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

function applyTheme(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  try {
    localStorage.setItem('theme', value)
  } catch {
    /* almacenamiento no disponible: no pasa nada */
  }
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

const onScroll = () => (scrolled.value = window.scrollY > 10)

onMounted(() => {
  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches
  applyTheme(readStoredTheme() ?? (prefersLight ? 'light' : 'dark'))
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['nav', { scrolled }]">
    <div class="container nav-inner">
      <a href="#inicio" class="logo" @click="open = false"><span class="prompt">&gt;_</span> kico.dev</a>

      <nav :class="['links', { open }]" aria-label="Principal">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">
          {{ l.label }}
        </a>
      </nav>

      <div class="actions">
        <button class="icon-btn" :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'" @click="toggleTheme">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <button class="icon-btn burger" aria-label="Abrir menú" :aria-expanded="open" @click="open = !open">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path v-if="!open" d="M3 6h18M3 12h18M3 18h18"/><path v-else d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.2s, border-color 0.2s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 16px;
}
.logo {
  font-family: var(--mono);
  font-weight: 700;
  color: var(--text);
}
.logo:hover {
  text-decoration: none;
}
.prompt {
  color: var(--accent);
}
.links {
  display: flex;
  gap: 22px;
}
.links a {
  font-family: var(--mono);
  font-size: 0.88rem;
  color: var(--muted);
}
.links a:hover {
  color: var(--text);
  text-decoration: none;
}
.hash {
  color: var(--accent);
}
.actions {
  display: flex;
  gap: 8px;
}
.icon-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
}
.icon-btn:hover {
  border-color: var(--accent);
}
.burger {
  display: none;
}
@media (max-width: 820px) {
  .burger {
    display: grid;
  }
  .links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    display: none;
  }
  .links.open {
    display: flex;
  }
  .links a {
    padding: 14px 16px;
    border-top: 1px solid var(--border);
  }
}
</style>
