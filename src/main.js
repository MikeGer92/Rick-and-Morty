import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { PaginationBar } from 'v-page'


const app = createApp(App);

app
  .use(PaginationBar, { border: true, align:'left'})
  .use(createPinia())
  .mount('#app')
 
  
 


