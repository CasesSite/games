import type {CaseBaseDataType} from "~/common/commonTypes";
import { createApp, h } from "vue";
import SlotCard from "~/components/cards/SlotCard.vue";
import EmptySlot from "~/components/cards/EmptySlot.vue";

export function createSlotElement(item: CaseBaseDataType) {
  const container = document.createElement("div"); // Create a placeholder DOM element

  // Dynamically mount the Vue component
  const app = createApp(h(SlotCard, {
    img: item.image,
    rarity: item.rarity,
    name: item.name,
    game: item.game
  }));
  app.mount(container);

  return container.firstElementChild as HTMLDivElement;
}

export function createEmptyElement(img: string) {
  const container = document.createElement("div"); // Create a placeholder DOM element

  const app = createApp(h(EmptySlot, {
    img: img
  }));
  app.mount(container);

  return container.firstElementChild as HTMLDivElement;
}