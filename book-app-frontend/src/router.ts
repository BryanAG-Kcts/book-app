import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/HomePage.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
