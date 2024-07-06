// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Kwotes App',
      meta: [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      ]
    }
  },

  css: ['~/assets/styles/main.css'],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-svgo", "@nuxt/image", "@nuxt/icon"],
  compatibilityDate: '2024-07-06',
})