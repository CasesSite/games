import { defineStore, storeToRefs } from "pinia";

export const useCaseStore = defineStore("cases", {
  state: () => ({
    cases: [] as any[],
  }),
  actions: {
    async getCases() {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get("/cases");
        this.cases = response.data;
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
    },
  },
});

export const useCaseStoreRefs = () => storeToRefs(useCaseStore());
