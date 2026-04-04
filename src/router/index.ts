import { createRouter, createWebHistory } from 'vue-router'
import StartschermView from '@/views/StartschermView.vue'
import SpelView from '@/views/SpelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: StartschermView,
    },
    {
      path: '/spel/:moeilijkheid',
      component: SpelView,
    },
  ],
})

export default router
