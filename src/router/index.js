import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },

    // Admin Dashboard
    {
      path: '/admin-dashboard/user',
      name: 'ad-user',
      component: () => import('../views/admin_dashboard/D-User.vue')
    }
  ]
})

export default router
