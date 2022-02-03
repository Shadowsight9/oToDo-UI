import { createRouter, createWebHistory } from 'vue-router'

// 引入组件
import Login from '@/views/login/index.vue'
import Main from '@/views/main/index.vue'

//配置路由映射关系
const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  // 指定模式
  /*
   createWebHashHistory 带 # 号
   createWebHistory 不带 # 号
   */
  history: createWebHistory(),
  // 等同于 routes: routes,
  routes,
})

export default router
