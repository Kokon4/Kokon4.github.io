<script setup>
import { profile } from '../data/profile.js'

const facts = [
  { k: 'rol', v: profile.role },
  { k: 'ubicación', v: profile.location },
  { k: 'formación', v: 'Técnico Superior en DAW' },
  { k: 'idiomas', v: 'Castellano · Valencià · English' }, // TODO: confirmar
  { k: 'busco', v: 'Primer/siguiente empleo en desarrollo web' },
]
</script>

<template>
  <section id="sobre-mi">
    <div class="container grid">
      <div v-reveal>
        <div class="section-head">
          <span class="kicker">// 01. sobre mí</span>
          <h2>Del modelo de datos al píxel</h2>
        </div>
        <p v-for="(p, i) in profile.about" :key="i" class="para">{{ p }}</p>
      </div>

      <div v-reveal class="card code">
        <div class="file">about.json</div>
        <pre><code><span class="p">{</span>
<template v-for="(f, i) in facts" :key="f.k">  <span class="k">"{{ f.k }}"</span><span class="p">:</span> <span class="s">"{{ f.v }}"</span><span class="p">{{ i < facts.length - 1 ? ',' : '' }}</span>
</template><span class="p">}</span></code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: start;
}
.para {
  color: var(--muted);
  font-size: 1.04rem;
}
.code {
  overflow: hidden;
}
.file {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  padding: 10px 16px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
}
pre {
  margin: 0;
  padding: 18px;
  font-family: var(--mono);
  font-size: 0.88rem;
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;
}
.k { color: var(--accent-2); }
.s { color: var(--accent); }
.p { color: var(--muted); }
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
