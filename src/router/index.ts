import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayoutVue from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayoutVue,
      children: [
        {
          path: '',
          component: HomeView,
        },
        { path: 'typography', component: () => import('../views/Typography.vue') },
        { path: 'colors', component: () => import('../views/Colors.vue') },
        { path: 'spacing', component: () => import('../views/Spacing.vue') },
        { path: 'breakpoints', component: () => import('../views/BreakPoints.vue') },
        {
          path: 'classes-variables',
          component: () => import('../views/ClassesVariables.vue'),
        },
        {
          path: 'flex-grid',
          component: () => import('../views/FlexGrid.vue'),
        },
        {
          path: 'instagram',
          component: () => import('../views/Instagram.vue'),
        },
        {
          path: 'youtube',
          name: 'youtube',
          component: () => import('../views/Youtube.vue'),
        },
      ],
    },
  ],
})

export default router
