import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import '@/styles/main.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const store = createPinia()

app.use(store)
  .use(router)
  .mount('#app')
