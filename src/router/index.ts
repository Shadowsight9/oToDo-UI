import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from '@/apis/user'
import { TokenTimer } from '@/apis/timer/tokenTimer'

import Login from '@/views/login/index.vue'
import Main from '@/views/main/index.vue'

const routes = [
  {
    path: '/',
    component: Main,
    name: 'main',
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH as string),
  routes,
})

router.beforeEach((to) => {
  // 此路由需要授权，请检查是否已登录
  if (to.meta.requiresAuth && !isLoggedIn()) {
    return {
      path: '/login',
      // 保存所在的位置
      query: { redirect: to.fullPath },
    }
    // 已登录但是在login页面: 停止刷新token
  } else if (!to.meta.requiresAuth) {
    TokenTimer.getInstance().stopTimer()
    // 已登录同时不在login页面: 开始刷新token
  } else {
    TokenTimer.getInstance().startTimer()
  }
})

export default router
