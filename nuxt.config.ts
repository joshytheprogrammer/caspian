// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'blur', mode: 'out-in' }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    'vue3-carousel-nuxt',
    'nuxt-icon',
    '@nuxtjs/device',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt'
  ],
  device: {
    refreshOnResize: true
  }
})