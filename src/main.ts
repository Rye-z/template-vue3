import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import '@/assets/styles/normalize.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const store = createPinia()

for (const key of Object.keys(ElementPlusIconsVue))
  app.component(key, ElementPlusIconsVue[key])

app.use(store)
  .use(router)
  .mount('#app')
