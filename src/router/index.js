import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    // Main View
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/main_view/Home.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/main_view/About.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/main_view/Menu.vue')
    },
    {
      path: '/menu/:id/:category',
      name: 'menu-by-category',
      component: () => import('@/views/main_view/MenuByCategory.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/main_view/Order.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('@/views/main_view/Contact.vue')
    },

    // Authentication page
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/Auth.vue')
    },

    // Admin Dashboard
    {
      path: '/admin-dashboard/user',
      name: 'ad-user',
      component: () => import('@/views/admin_dashboard/D-User.vue')
    },
    {
      path: '/admin-dashboard/category',
      name: 'ad-category',
      component: () => import('@/views/admin_dashboard/D-Category.vue')
    },
    {
      path: '/admin-dashboard/donburi',
      name: 'ad-donburi',
      component: () => import('@/views/admin_dashboard/D-Donburi.vue')
    },
    {
      path: '/admin-dashboard/soupramen',
      name: 'ad-soup ramen',
      component: () => import('@/views/admin_dashboard/D-SoupRamen.vue')
    },
    {
      path: '/admin-dashboard/dryramen',
      name: 'ad-dry ramen',
      component: () => import('@/views/admin_dashboard/D-DryRamen.vue')
    },
    {
      path: '/admin-dashboard/alacarte',
      name: 'ad-a la carte',
      component: () => import('@/views/admin_dashboard/D-AlaCarte.vue')
    },
    {
      path: '/admin-dashboard/snack',
      name: 'ad-snack',
      component: () => import('@/views/admin_dashboard/D-Snack.vue')
    },
    {
      path: '/admin-dashboard/special',
      name: 'ad-special menu',
      component: () => import('@/views/admin_dashboard/D-Special.vue')
    },
    {
      path: '/admin-dashboard/additional',
      name: 'ad-additional',
      component: () => import('@/views/admin_dashboard/D-Additional.vue')
    },
  ]
})

export default router
