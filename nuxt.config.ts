// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxtjs/color-mode'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/main.css'],
  nitro: {
    preset: 'github-pages'
  },
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'ayu-light',
        },
      }
    }
  },
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in', duration: 500 }
  }
})
