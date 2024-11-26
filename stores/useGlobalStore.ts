import { defineStore, storeToRefs } from "pinia";
import { useNuxtApp, useCookie } from "#app";
import { getCurrentUser } from "~/services/user";

export const useGlobalStore = defineStore("main", {
  state: () => ({
    load: false as boolean,
    page: {} as any,
    isAuthorizedUser: false,
    currentUser: null,
    accessToken: null,
    refreshToken: null,
  }),
  actions: {
    async getPages() {
      this.load = true;
      const { $main } = useNuxtApp();

      try {
        const response = await $main.get("/pages");
        this.page = response.data;
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.load = false;
      }
    },
    setAuthorized(status: boolean) {
      this.isAuthorizedUser = status;
    },
    checkAuthorization() {
      const tokenCookie = useCookie("AccessToken");
      this.isAuthorizedUser = !!tokenCookie.value;
    },
    logout() {
      const tokenCookie = useCookie("AccessToken");
      tokenCookie.value = null;
      this.isAuthorizedUser = false;
      this.currentUser = null;
    },
    setTokens({ accessToken, refreshToken }) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
    },
    clearTokens() {
      this.accessToken = null;
      this.refreshToken = null;
      this.isAuthorized = false;
    },
  },
  persist: true,
});

export const useGlobalStoreRefs = () => storeToRefs(useGlobalStore());
