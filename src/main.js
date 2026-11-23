import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import { reveal } from './directives/reveal.js'

createApp(App).directive('reveal', reveal).mount('#app')
