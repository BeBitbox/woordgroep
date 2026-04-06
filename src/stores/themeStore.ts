import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Thema = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const thema = ref<Thema>('light')

  function laadThema(): void {
    const opgeslagen = localStorage.getItem('woordgroep-thema') as Thema | null
    if (opgeslagen === 'dark' || opgeslagen === 'light') {
      thema.value = opgeslagen
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      thema.value = 'dark'
    }
    pasThemaToe()
  }

  function wisselThema(): void {
    thema.value = thema.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('woordgroep-thema', thema.value)
    pasThemaToe()
  }

  function pasThemaToe(): void {
    document.documentElement.setAttribute('data-theme', thema.value)
  }

  return { thema, laadThema, wisselThema }
})
