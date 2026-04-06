import { createRouter, createWebHistory } from 'vue-router'
import StartschermView from '@/views/StartschermView.vue'
import SpelView from '@/views/SpelView.vue'
import PrivacybeleidView from '@/views/PrivacybeleidView.vue'
import DisclaimerView from '@/views/DisclaimerView.vue'
import NietGevondenView from '@/views/NietGevondenView.vue'

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
    {
      path: '/privacybeleid',
      component: PrivacybeleidView,
    },
    {
      path: '/disclaimer',
      component: DisclaimerView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NietGevondenView,
    },
  ],
})

export default router
