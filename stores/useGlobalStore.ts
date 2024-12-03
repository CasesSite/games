import { defineStore } from "pinia";
import { useNuxtApp, useCookie } from "#app";

export const useGlobalStore = defineStore("main", {
  state: () => ({
    load: false,
    page: {},
    isAuthorizedUser: false,
    accessToken: null,
    refreshToken: null,
    currentUser: null,
  }),
  actions: {
    async getPages() {
      this.load = true;
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get("/pages");
        this.page = response.data;
      } catch (error) {
        console.error("Error loading pages:", error);
      } finally {
        this.load = false;
      }
    },
    setAuthorized(status) {
      this.isAuthorizedUser = status;
    },
    checkAuthorization() {
      const tokenCookie = useCookie("AccessToken");
      this.setAuthorized(!!tokenCookie.value);
    },
    logout() {
      const tokenCookie = useCookie("AccessToken");
      tokenCookie.value = null;
      this.clearTokens();
      this.currentUser = null;
    },
    setTokens({ accessToken, refreshToken }) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.setAuthorized(!!accessToken);
    },
    clearTokens() {
      this.accessToken = null;
      this.refreshToken = null;
      this.setAuthorized(false);
    },
    setCurrentUser(user) {
      this.currentUser = user;
    },
  },
  persist: true,
});

export const useGlobalStoreRefs = () => storeToRefs(useGlobalStore());
