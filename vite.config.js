import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Kokon4.github.io es una "user page": se sirve desde la raíz, por eso base = '/'
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
