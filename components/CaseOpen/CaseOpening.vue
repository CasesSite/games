<template>
  <div>
    <div class="case-top">
      <h2 class="case-title">{{ props.data?.name }}</h2>
      <p class="case-subtitle">Кейс</p>
    </div>

    <div class="slotContainer">
      <div class="slot" :class="'slot-x' + boxCount" ref="slot1">
        <div v-if="fastOpenCaseData?.length" key="slot-card" class="fast-open-wrapper">
          <SlotCard
              :name="fastOpenCaseData[0].name"
              :game="fastOpenCaseData[0].game"
              :rarity="fastOpenCaseData[0].rarity"
              :img="fastOpenCaseData[0].image"
          />
        </div>
        <div class="symbols" :class="{ 'symbols-x': boxCount === 1 }">
          <EmptySlot key="empty-slot" :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 1" class="slot" :class="'slot-x' + boxCount" ref="slot2">
        <div v-if="fastOpenCaseData?.length > 1" key="slot-card" class="fast-open-wrapper">
          <SlotCard
              :name="fastOpenCaseData[1].name"
              :game="fastOpenCaseData[1].game"
              :rarity="fastOpenCaseData[1].rarity"
              :img="fastOpenCaseData[1].image"
          />
        </div>
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 2" class="slot" :class="'slot-x' + boxCount" ref="slot3">
        <div v-if="fastOpenCaseData?.length > 2" key="slot-card" class="fast-open-wrapper">
          <SlotCard
              :name="fastOpenCaseData[2].name"
              :game="fastOpenCaseData[2].game"
              :rarity="fastOpenCaseData[2].rarity"
              :img="fastOpenCaseData[2].image"
          />
        </div>
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 3" class="slot" :class="'slot-x' + boxCount" ref="slot4">
        <div v-if="fastOpenCaseData?.length > 3" key="slot-card" class="fast-open-wrapper">
          <SlotCard
              :name="fastOpenCaseData[3].name"
              :game="fastOpenCaseData[3].game"
              :rarity="fastOpenCaseData[3].rarity"
              :img="fastOpenCaseData[3].image"
          />
        </div>
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>

      <div v-if="boxCount > 4" class="slot" :class="'slot-x' + boxCount" ref="slot5">
        <div v-if="fastOpenCaseData?.length > 4" key="slot-card" class="fast-open-wrapper">
          <SlotCard
              :name="fastOpenCaseData[4].name"
              :game="fastOpenCaseData[4].game"
              :rarity="fastOpenCaseData[4].rarity"
              :img="fastOpenCaseData[4].image"
          />
        </div>
        <div class="symbols">
          <EmptySlot :img="caseImg" />
        </div>
      </div>
    </div>

    <CaseOpenActions
      :on-count-change="handleChangeSlotCount"
      :on-spin="spin"
      :fast-open="fastOpen"
      :disabled="isPlaying"
      :box-count="boxCount"
      :price="props.data?.price"
    />
  </div>
</template>


<script setup lang="ts">

import { ref, onMounted, defineProps } from "vue";
import { CaseBaseDataType, type CaseType } from "~/common/commonTypes";
import { createEmptyElement, createSlotElement } from "~/components/CaseOpen/helpers";
import EmptySlot from "~/components/cards/EmptySlot.vue";
import {useGlobalStoreRefs} from "~/stores/useGlobalStore";
import {openCase, openCases} from "~/services/cases";
import SlotCard from "~/components/cards/SlotCard.vue";


const props = defineProps<{
  data: CaseType;
  caseImg: string;
  items: CaseBaseDataType[];
  caseId: string;
}>();

const { currentUser } = useGlobalStoreRefs();

const { isMobile } = useDevice();

const caseItems: CaseBaseDataType[] = props.items;

// Refs to access slots
const slot1 = ref<HTMLDivElement | null>(null);
const slot2 = ref<HTMLDivElement | null>(null);
const slot3 = ref<HTMLDivElement | null>(null);
const slot4 = ref<HTMLDivElement | null>(null);
const slot5 = ref<HTMLDivElement | null>(null);

const spun = ref(false);
const isPlaying = ref(false);
const fastOpenCaseData = ref(null);
const slotIsPlaying = ref(false);

const boxCount = ref(1);

const slotItems = ref([
  [...caseItems],
  [...caseItems],
  [...caseItems],
  [...caseItems],
  [...caseItems],
]);

const handleChangeSlotCount = (count: number) => {
  fastOpenCaseData.value = null;
  boxCount.value = count;
  initSlots();
  reset();
}

async function spin() {
  fastOpenCaseData.value = null;
  isPlaying.value = true;
  // if (spun.value) {
    reset();
  // }

  const winItemsIds = [];

  if(boxCount.value === 1) {
    const response = await openCase({ caseId: props.caseId, userId: currentUser?.value?.result?.id });
    winItemsIds.push(response.result);
  } else {
    const response = await openCases({
      caseId: props.caseId,
      userId: currentUser?.value?.result?.id,
      quantity: boxCount.value,
    });
    winItemsIds.push(...response.result);
  }

  const slots = [slot1.value, slot2.value, slot3.value, slot4.value, slot5.value];

  let completedSlots = 0;

  slots.filter(slot => !!slot).forEach((slot, index) => {
    const symbols = slot!.querySelector(".symbols") as HTMLDivElement;
    const symbolHeight = isMobile ? 210 : 310;
    const symbolWidth = isMobile ? 250: 310;

    if (boxCount.value === 1) {
      const offset = -(caseItems.findIndex(caseItem => caseItem.id === winItemsIds[index]) + 1) * symbolWidth;
      symbols.style.transition = "transform 2s ease";
      symbols.style.transform = `translateX(${offset}px)`;
    } else {
      const offset = -(caseItems.findIndex(caseItem => caseItem.id === winItemsIds[index]) + 1) * symbolHeight;
      symbols.style.transition = "top 2s ease";
      symbols.style.top = `${offset}px`;
    }
    slotIsPlaying.value = true;


    symbols.addEventListener(
        "transitionend",
        () => {
          isPlaying.value = false;
          slotIsPlaying.value = false;
          completedSlots++;
          if (completedSlots === boxCount.value) {
            logDisplayedSymbols(slots);
          }
        },
        { once: true }
    );
  });
}

function initSlots () {
  setTimeout(() => {
    const slots = [slot1.value, slot2.value, slot3.value, slot4.value, slot5.value];

    slots.filter(slot => !!slot).forEach((slot, index) => {
      const symbols = slot!.querySelector(".symbols") as HTMLDivElement;
      symbols.innerHTML = "";
      symbols.appendChild(createEmptyElement(props.caseImg)); // Placeholder at start

      for (let i = 0; i < 3; i++) {
        slotItems.value[index].forEach((slotItem: CaseBaseDataType) => {
          symbols.appendChild(createSlotElement(slotItem));
        });
      }

    });
  }, 100)
}

async function fastOpen() {
  reset();
  isPlaying.value = true;
  fastOpenCaseData.value = null;

  if(boxCount.value === 1) {
    const response = await openCase({ caseId: props.caseId, userId: currentUser?.value?.result?.id });
    const openedItem = props.data.items.find(caseItem => caseItem.id === response.result)
    fastOpenCaseData.value = [openedItem as CaseType];
  } else {
    const response = await openCases({
      caseId: props.caseId,
      userId: currentUser?.value?.result?.id,
      quantity: boxCount.value,
    });

    const openedItems = props.data.items.filter(caseItem => response.result.includes(caseItem.id))
    fastOpenCaseData.value = openedItems as CaseType[];
  }

  isPlaying.value = false;
}

function reset() {
  const slots = [slot1.value, slot2.value, slot3.value, slot4.value, slot5.value];
  slots.forEach(slot => {
    if (!slot) return;
    const symbols = slot.querySelector(".symbols") as HTMLDivElement;
    symbols.style.transition = "none";
    symbols.style.top = "0";
    symbols.style.transform = "none";
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

onMounted(async () => {
  initSlots();
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

.case-top {
  @include flex-center;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 20px;
}

.case-title {
  text-align: center;
  font-size: 37px;
  font-family: $font_2;
  font-weight: 900;
}

.case-subtitle {
  text-align: center;
  font-family: $font_2;
  font-size: 16px;
  color: $grey-text;
}

.case-info__message {
  background: linear-gradient(0deg, #362F69 0%, #9E6171 100%);
  width: 396px;
  text-align: center;
  padding: 1.6rem 3.6rem 1.8rem 3.6rem;
  border-radius: 10px;
  margin-bottom: 10px;

  .message-title {
    font-family: $font_2;
    font-size: 20px;
    font-weight: 900;
  }
  .message-desc {
    font-family: $font_2;
  }

  @include bp($point_5) {
    width: 325px;
  }
}

.hero_btn {
  cursor: pointer;
  width: 396px;
  border-top: 0.4rem solid rgb(254, 128, 255);
  border-radius: 10px;
  background: linear-gradient(180deg, #F18D72 0%, #C744A3 100%);
  font-size: 20px;
  font-family: $font_5;
  text-transform: uppercase;
  a {
    padding: 1.6rem 3.6rem 1.8rem 3.6rem;
    @include flex-center;
  }

  @include bp($point_5) {
    width: 325px;
  }
}

.fast-open-wrapper {
  position: absolute;
  width: 100%;
  z-index: 4;
  border-radius: 10px;
  overflow: hidden;
}

.slotContainer {
  position: relative;
  width: 100vw;
  padding: 20px 0;
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
  max-width: 310px;
  flex: 1;

  @include bp($point_5) {
    max-width: 250px;
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
  height: 310px;
  border-radius: 20px;
  display: inline-block;
  overflow: hidden;
  position: relative;

  @include bp($point_5) {
    height: 210px;
  }
}

.slot .symbols {
  height: 310px;
  width: inherit;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  transition: top 5s;

  @include bp($point_5) {
    height: 210px;
  }
}

.slot .symbols-x {
  display: flex;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
}

.case-image {
  max-width: 100%;
}

.arrow-icon {
  position: absolute;
}

.arrow-top {
  left: 50%;
  transform: translateX(-50%);
  top: -10px;
  z-index: 2;
}

.arrow-bottom {
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  bottom: -10px;
}

.arrow-left {
  left: 0;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-right {
  z-index: 2;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
