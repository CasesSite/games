import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabStore = defineStore("tabStore", () => {
  const tabs = ["Мой инвентарь", "Апгрейды", "Контракты", "Выводы"];
  const activeTab = ref(tabs[0]);

  const setActiveTab = (tab: string) => {
    if (tabs.includes(tab)) {
      activeTab.value = tab;
    } else {
      console.warn(`Invalid tab name: "${tab}"`);
    }
  };

  return {
    tabs,
    activeTab,
    setActiveTab,
  };
});
