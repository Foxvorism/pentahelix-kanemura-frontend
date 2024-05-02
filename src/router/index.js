import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    // Main View
    {
      path: '/',
      name: 'home',
      component: () => import('../views/main_view/Home.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/main_view/About.vue')
    },

    // Authentication page
    {
      path: '/auth',
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
