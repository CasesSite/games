import { defineStore } from "pinia";
import { ref } from "vue";
import { CaseType } from "./useCurrentCaseStore"

export const useCasesStore = defineStore("casesStore", () => {
  const cases = ref(null);
  const casesCards = ref(null);

  const setCases = (data: CaseType[]) => {
    cases.value = data;
    casesCards.value = data.map(caseData => (
      {
        id: caseData.id,
        name: caseData.name,
        img: caseData.image,
        price: caseData.price,
        oldPrice: caseData.oldPrice,
      }
    ))
  };

  return {
    cases,
    casesCards,
    setCases,
  };
});
