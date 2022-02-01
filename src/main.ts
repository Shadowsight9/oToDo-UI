import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
// 雪碧图
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(Store)
app.mount('#app')
