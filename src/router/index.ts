import { createRouter, createWebHistory } from 'vue-router'
import SpelView from '@/views/SpelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SpelView,
    },
  ],
})

export default router
