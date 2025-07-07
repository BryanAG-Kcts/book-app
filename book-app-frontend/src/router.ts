import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/libros',
    component: () => import('./templates/BookLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('./pages/BookListPage.vue')
      },
      {
        path: ':id',
        component: () => import('./pages/BookDetailPage.vue')
      },
      {
        path: 'nuevo',
        component: () => import('./pages/BookNewForm.vue')
      },
      {
        path: 'dashboard',
        component: () => import('./pages/BookChart.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/NotFoundPage.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
