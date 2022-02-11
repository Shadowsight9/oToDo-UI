import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
// 雪碧图
import 'virtual:svg-icons-register'

import { lmbDirective } from '@/utils/menu'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

app.directive('lmbMenu', lmbDirective)
