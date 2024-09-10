import { defineStore, storeToRefs } from "pinia";
import { useNuxtApp } from "#app";

export const useGlobalStore = defineStore("main", {
  state: () => ({
    load: false as boolean,
    page: {} as any,
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
  },
  persist: true,
});

export const useGlobalStoreRefs = () => storeToRefs(useGlobalStore());
