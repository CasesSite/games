export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
  '~/assets/scss/style.scss' 
],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          `
        }
      }
    }
  },

  modules: ["@nuxt/icon", "nuxt-swiper", "@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt'],

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons'
      },
    ],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'thumbs'], 
  },

  build:{
      transpile: ['vue-toastification'],
  },

  runtimeConfig: {
    public: {
      BASE_URL: 'https://api.artel-semchenko.ru/wp-json/wp/v2',
      ACF_URL: 'https://api.artel-semchenko.ru/wp-json/acf/v3',
      COMMERCE_URL: 'https://api.artel-semchenko.ru/wp-json/wc/v3',
      CONSUMER_KEY: 'ck_a0388256b8c8fd94175fb1eb761dd8b31175b983',
      CONSUMER_SECRET: 'cs_c513222cffe93f3ef13bb57160ff467195890c25',
      DOMAIN: 'https://api.artel-semchenko.ru/'
    },
  },

  // router: {
  //   middleware: ['changeLoad']
  // },
  server: {
    port: 3000, 
    host: '0.0.0.0', 
  },

  compatibilityDate: '2024-09-01'
})