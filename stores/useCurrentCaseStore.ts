import { defineStore } from "pinia";
import { ref } from "vue";
import { CaseType } from "~/common/commonTypes"

export const useCurrentCaseStore = defineStore("caseStore", () => {
  const currentCase = ref(null);

  const setCaseData = (data: CaseType) => {
    currentCase.value = data;
  };

  return {
    currentCase,
    setCaseData,
  };
});
