import { defineStore, storeToRefs } from "pinia";
import { useNuxtApp, useCookie } from "#app";

export const useGlobalStore = defineStore("main", {
  state: () => ({
    load: false as boolean,
    page: {} as any,
    isAuthorizedUser: false,
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
      const tokenCookie = useCookie("authToken");
      this.isAuthorizedUser = !!tokenCookie.value;
    },
    logout() {
      const tokenCookie = useCookie("authToken");
      tokenCookie.value = null;
      this.isAuthorizedUser = false;
    },
  },
  persist: true,
});

export const useGlobalStoreRefs = () => storeToRefs(useGlobalStore());
