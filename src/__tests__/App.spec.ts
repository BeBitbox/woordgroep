import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from '../App.vue'
import SpelView from '../views/SpelView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', component: SpelView }],
})

describe('App', () => {
  it('rendert de RouterView', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, createPinia()],
      },
    })
    await router.isReady()
    expect(wrapper.html()).toBeTruthy()
  })
})
