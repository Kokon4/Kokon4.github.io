<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '../data/profile.js'

// Líneas de la "terminal" del hero. Se escriben carácter a carácter.
const script = [
  { cmd: 'whoami', out: `${profile.name} — ${profile.role}` },
  { cmd: 'cat stack.txt', out: 'Laravel · PHP · Vue · JavaScript · MySQL · Java' },
  { cmd: 'git log --oneline -1', out: 'feat: buscando nuevo reto como desarrollador web 🚀' },
]

const lines = ref([])
const typing = ref('')
let timers = []
const wait = (ms) => new Promise((r) => timers.push(setTimeout(r, ms)))

onMounted(async () => {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    lines.value = script.map((l) => ({ ...l }))
    return
  }
  for (const line of script) {
    for (const ch of line.cmd) {
      typing.value += ch
      await wait(55)
    }
    await wait(250)
    lines.value.push({ ...line })
    typing.value = ''
    await wait(400)
  }
})
onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<template>
  <section id="inicio" class="hero">
    <div class="container grid">
      <div class="intro">
        <span class="badge"><span class="dot"></span> Disponible para trabajar</span>
        <h1>
          Hola, soy <span class="name">{{ profile.name }}</span>.<br />
          Desarrollo <span class="grad">aplicaciones web</span> de principio a fin.
        </h1>
        <p class="tagline">{{ profile.tagline }}</p>
        <div class="cta">
          <a href="#proyectos" class="btn primary">ver proyectos →</a>
          <a :href="profile.github" target="_blank" rel="noopener" class="btn">github.com/Kokon4</a>
          <a v-if="profile.cv" :href="profile.cv" class="btn" download>descargar CV</a>
        </div>
      </div>

      <div class="terminal card" aria-label="Terminal de presentación">
        <div class="bar">
          <span class="d r"></span><span class="d y"></span><span class="d g"></span>
          <span class="title">kico@portfolio: ~</span>
        </div>
        <div class="body">
          <div v-for="(l, i) in lines" :key="i" class="line">
            <div><span class="ps">➜ ~</span> {{ l.cmd }}</div>
            <div class="out">{{ l.out }}</div>
          </div>
          <div v-if="lines.length < script.length" class="line">
            <span class="ps">➜ ~</span> {{ typing }}<span class="caret">▋</span>
          </div>
          <div v-else class="line"><span class="ps">➜ ~</span> <span class="caret">▋</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 72px;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
}
.grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.8rem;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--glow);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  50% {
    box-shadow: 0 0 0 8px transparent;
  }
}
h1 {
  font-size: clamp(2rem, 4.6vw, 3.3rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 20px 0 18px;
}
.name {
  font-family: var(--mono);
  color: var(--accent);
}
.grad {
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.tagline {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 540px;
}
.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.terminal {
  overflow: hidden;
  font-family: var(--mono);
  font-size: 0.9rem;
  box-shadow: var(--shadow), 0 0 60px var(--glow);
}
.bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 14px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
}
.d {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.r { background: #ff5f57; }
.y { background: #febc2e; }
.g { background: #28c840; }
.title {
  margin-left: 10px;
  color: var(--muted);
  font-size: 0.8rem;
}
.body {
  padding: 18px 18px 22px;
  min-height: 250px;
}
.line {
  margin-bottom: 10px;
  word-break: break-word;
}
.ps {
  color: var(--accent);
}
.out {
  color: var(--muted);
  padding-left: 2px;
}
.caret {
  color: var(--accent);
  animation: blink 1s steps(1) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .hero {
    min-height: auto;
  }
}
</style>
