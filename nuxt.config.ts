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
    "@nuxt/image-edge",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
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
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    include: "**/*.js",
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  compatibilityDate: "2024-09-01",
  pinia: {
    storesDirs: ["./stores/**"],
  },
  router: {
    middleware: ["auth"],
  },
});