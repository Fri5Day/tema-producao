import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/app/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'production-dashboard',
          component: () =>
            import('@/modules/production/pages/ProductionDashboardPage.vue'),
        },
      ],
    },
  ],
})

export default router
