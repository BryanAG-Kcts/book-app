import { createApp } from 'vue'
import './style.css'
import MainLayout from './templates/MainLayout.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import { router } from './router'

const pinia = createPinia()
const app = createApp(MainLayout)

app.use(router)
app.use(pinia)
app.use(PrimeVue, {
  theme: {
    preset: Material
  }
})
app.mount('#app')
