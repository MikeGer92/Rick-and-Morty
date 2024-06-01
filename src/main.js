import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { Axios } from 'axios'

createApp(App).use(createPinia()).mount('#app')
