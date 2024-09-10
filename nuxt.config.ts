export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ["~/assets/scss/style.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          `,
        },
      },
    },
  },

  modules: [
    "@nuxt/icon",
    "nuxt-swiper",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons",
      },
    ],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "thumbs"],
  },

  build: {
    transpile: ["vue-toastification"],
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  compatibilityDate: "2024-09-01",
});
