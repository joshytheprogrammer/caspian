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
    '@formkit/auto-animate',
    'vue3-carousel-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@nuxtjs/device',
    '@vueuse/motion/nuxt'
  ],
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
    }
  },
  device: {
    refreshOnResize: true
  }
})