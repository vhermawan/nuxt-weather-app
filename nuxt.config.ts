// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  devtools: { enabled: true },
  modules: ["nuxt-ark-ui",'nuxt-icon'],
  css: ['~/assets/css/main.css']
})
