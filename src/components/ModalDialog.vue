<script setup>
import { watch, onBeforeUnmount, ref, nextTick } from 'vue'

// Ventana que "agranda" una tarjeta: se cierra con Esc, con la X o pulsando fuera.
const props = defineProps({ open: Boolean, label: { type: String, default: 'Detalle' } })
const emit = defineEmits(['close'])
const panel = ref(null)

const onKey = (e) => e.key === 'Escape' && emit('close')

watch(
  () => props.open,
  async (isOpen) => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      window.addEventListener('keydown', onKey)
      await nextTick()
      panel.value?.focus()
    } else {
      window.removeEventListener('keydown', onKey)
    }
  },
)
onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="backdrop" @click.self="emit('close')">
        <div ref="panel" class="panel card" role="dialog" aria-modal="true" :aria-label="label" tabindex="-1">
          <button class="close" aria-label="Cerrar" @click="emit('close')">✕</button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(5, 8, 12, 0.7);
  backdrop-filter: blur(6px);
}
.panel {
  position: relative;
  width: min(760px, 100%);
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 28px;
  outline: none;
}
.close {
  position: sticky;
  top: 0;
  float: right;
  margin: -8px -8px 0 12px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
  z-index: 1;
}
.close:hover {
  border-color: var(--accent);
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
.modal-enter-active .panel,
.modal-leave-active .panel {
  transition: transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.2);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .panel,
.modal-leave-to .panel {
  transform: scale(0.85);
}
@media (max-width: 560px) {
  .panel {
    padding: 20px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .modal-enter-active .panel,
  .modal-leave-active .panel {
    transition: none;
  }
}
</style>
