<template>
  <div>
    <div class="slotContainer">
      <div class="slot" :class="'slot-x' + boxCount" ref="slot1">
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 1" class="slot" :class="'slot-x' + boxCount" ref="slot2">
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 2" class="slot" :class="'slot-x' + boxCount" ref="slot3">
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 3" class="slot" :class="'slot-x' + boxCount" ref="slot4">
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 4" class="slot" :class="'slot-x' + boxCount" ref="slot5">
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>
    </div>

    <div class="case-info__actions">
      <div class="btn-wrapper">
        <span @click="handleChangeSlotCount(1)" class="x-btn" :class="{ 'active-btn': boxCount === 1 }">X1</span>
        <span @click="handleChangeSlotCount(2)" class="x-btn" :class="{ 'active-btn': boxCount === 2 }">X2</span>
        <span @click="handleChangeSlotCount(3)" class="x-btn" :class="{ 'active-btn': boxCount === 3 }">X3</span>
        <span @click="handleChangeSlotCount(4)" class="x-btn" :class="{ 'active-btn': boxCount === 4 }">X4</span>
        <span @click="handleChangeSlotCount(5)" class="x-btn" :class="{ 'active-btn': boxCount === 5 }">X5</span>
      </div>

      <button class="case-action-button sell-btn" @click="spin">
        ОТКРЫТЬ ЗА 980
        <img
            class="icon"
            src="@/assets/img/header/header-logo.svg"
            alt="Star Icon"
        />
      </button>
      <button class="case-action-button fast-sell-btn" @click="reset">
        <img
            class="icon lightning-icon"
            src="../../assets/img/header/lightning.svg"
            alt="Lightning Icon"
        />
        БЫСТРОЕ ОТКРЫТИЕ
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">

import {ref, onMounted, defineProps} from "vue";
import { CaseBaseDataType } from "~/common/commonTypes";
import { createEmptyElement, createSlotElement } from "~/components/CaseOpen/helpers";
import EmptySlot from "~/components/cards/EmptySlot.vue";

const props = defineProps<{
  caseImg: string;
  items: CaseBaseDataType[];
}>();

// const caseItems: CaseBaseDataType[] = [
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 2},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 2},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 5},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 2},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 2},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 4},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 6},
//   {name: "Space Blaster", game: "М16", image: "/assets/img/top-img.png", rarity: 1},
// ];

const caseItems: CaseBaseDataType[] = props.items;

// Refs to access slots
const slot1 = ref<HTMLDivElement | null>(null);
const slot2 = ref<HTMLDivElement | null>(null);
const slot3 = ref<HTMLDivElement | null>(null);
const slot4 = ref<HTMLDivElement | null>(null);
const slot5 = ref<HTMLDivElement | null>(null);

const spun = ref(false);

const boxCount = ref(2);

const slotItems = ref([
  [...caseItems],
  [...caseItems],
  [...caseItems],
  [...caseItems],
  [...caseItems],
]);

const handleChangeSlotCount = (count: number) => {
  boxCount.value = count;
  reset();
}

function spin() {
  if (spun.value) {
    reset();
  }

  const slots = [slot1.value, slot2.value, slot3.value, slot4.value, slot5.value];
  // if (!slots.every(slot => slot)) return;

  let completedSlots = 0;

  slots.filter(slot => !!slot).forEach((slot, index) => {
    const symbols = slot!.querySelector(".symbols") as HTMLDivElement;
    const symbolHeight = 220;

    const symbolCount = slotItems.value[index].length;

    // Reset symbols and add new ones
    symbols.innerHTML = "";

    symbols.appendChild(createEmptyElement(props.caseImg)); // Placeholder at start

    for (let i = 0; i < 3; i++) {
      slotItems.value[index].forEach((slotItem: CaseBaseDataType) => {
        symbols.appendChild(createSlotElement(slotItem));
      });
    }

    // const totalDistance = symbolCount * symbolHeight;
    const randomOffset =
        -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight;

    symbols.style.transition = "top 2s ease";
    symbols.style.top = `${randomOffset}px`;

    symbols.addEventListener(
        "transitionend",
        () => {
          completedSlots++;
          if (completedSlots === boxCount.value) {
            logDisplayedSymbols(slots);
          }
        },
        { once: true }
    );
  });
}

function reset() {
  const slots = [slot1.value, slot2.value, slot3.value, slot4.value, slot5.value];
  slots.forEach(slot => {
    if (!slot) return;
    const symbols = slot.querySelector(".symbols") as HTMLDivElement;
    symbols.style.transition = "none";
    symbols.style.top = "0";
    symbols.offsetHeight; // Trigger reflow
    symbols.style.transition = "";
  });
}

function logDisplayedSymbols(slots: (HTMLDivElement | null)[]) {
  const displayedSymbols: string[] = [];

  slots.forEach((slot, index) => {
    if (!slot) return;

    const symbols = slot.querySelector(".symbols") as HTMLDivElement;
    const topOffset = Math.abs(parseInt(symbols.style.top || "0", 10));
    const symbolHeight = symbols.querySelector(".symbol")?.clientHeight || 50;

    const symbolIndex =
        Math.floor(topOffset / symbolHeight) % slotItems.value[index].length;

    displayedSymbols.push(slotItems.value[index][symbolIndex]);
  });

  console.log(displayedSymbols); // Log the symbols
}

onMounted(() => {
  setTimeout(() => {
    spin();
  }, 100)
});

</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.slotContainer {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @include bp($point_5) {
    width: 100%;
    gap: 10px;
  }

}

.slot-x1 {
  max-width: 500px;
  flex: 1;

  @include bp($point_5) {
    max-width: 320px;
  }
}

.slot-x2 {
  flex: 1;
  max-width: 760px;
  min-width: 400px;

  @include bp($point_5) {
    max-width: 175px;
    min-width: auto;
  }
}

.slot-x3 {
  flex: 1;
  max-width: 500px;
  min-width: 500px;

  @include bp($point_5) {
    max-width: 115px;
    min-width: auto;
  }
}

.slot-x4 {
  flex: 1;
  max-width: 400px;
  min-width: 300px;

  @include bp($point_5) {
    max-width: fit-content;
    min-width: 160px;
  }
}

.slot-x5 {
  flex: 1;
  max-width: 300px;
  min-width: 270px;

  @include bp($point_5) {
    max-width: fit-content;
    min-width: 160px;
  }
}

.slot {
  flex: 1;
  width: 100%;
  height: 220px;
  border-radius: 20px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.slot .symbols {
  height: 220px;
  width: inherit;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  transition: top 5s;
}

.slot .symbol {
  width: 100px;
  height: 150px;
  font-size: 60px;
  line-height: 100px;
  display: block;
  text-align: center;
  padding-top: 25px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
}

.symbol {
  font-size: 50px;
}

.icon {
  width: 20px;
}

.case-info__actions {
  @include flex-center;
  gap: 35px;

  @include bp($point_5) {
    flex-direction: column;
    gap: 10px;
  }
}

.case-action-button {
  padding: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: $white;
  font-family: $font_2;
  font-size: 20px;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;

  @include bp($point_5) {
    width: 325px;
  }
}

.sell-btn {
  background: $out;
}

.fast-sell-btn {
  background: $sell;
}

.lightning-icon {
  margin-right: 10px;
  width: 15px;
  height: 24px;
}

.btn-wrapper {
  width: 240px;
  background: $dark-blue-button-bg;
  display: flex;
  padding: 12px 15px;
  gap: 6px;
  border-radius: 10px;
}

.x-btn {
  height: 34px;
  margin: 0;
  width: 37px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5760F0;
  font-size: 14px;
  font-family: $font_2;
  border-radius: 10px;
  color: $white;
  cursor: pointer;
  font-weight: 900;
  line-height: 14px;
}

.active-btn {
  background: $sell;
}

.case-image {
  max-width: 100%;
}

</style>
