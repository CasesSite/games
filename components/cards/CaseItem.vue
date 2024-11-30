<template>
  <div class="card" :class="isColor">
    <div class="card__img">
      <img :src="img" />
    </div>
    <div class="card__txt">{{ name }}</div>
    <div class="card__type">{{ game }}</div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {CaseItemRarity} from "~/common/commonTypes";

const props = defineProps<{
  name: string;
  game: string;
  rarity: CaseItemRarity;
  img: string;
}>();

const isColor = computed(() => {
  switch (props.rarity) {
    case CaseItemRarity.Primary:
      return "color_primary";
    case CaseItemRarity.Rare:
      return "color_rare";
    case CaseItemRarity.SuperRare:
      return "color_superRare";
    case CaseItemRarity.Epic:
      return "color_epic";
    case CaseItemRarity.Mif:
      return "color_mif";
    case CaseItemRarity.Legend:
      return "color_legend";
    default:
      return "color_primary";
  }
});
</script>

<style scoped lang="scss">
.card {
  width: 270px;
}

.card__img {
  width: 168px;
  height: auto;
  @include flex-center;
  margin-bottom: 0.25rem;
  @include bp($point_5) {
    width: 140px;
  }

  img {
    width: auto;
    height: 100%;
    max-height: 130px;
    transition: all 0.3s ease-in-out;

    @include bp($point_5) {
      max-width: 140px;
    }
  }
}

.card__txt {
  margin: 5px auto;
  text-align: center;
  max-width: 90%;
  font-size: 20px;
  font-family: $font_5;
  font-weight: 700;
  @include bp($point_5) {
    font-size: 14px;
  }
}

.card__type {
  font-size: 16px;
  font-family: $font_5;
  font-weight: 600;
  @include bp($point_5) {
    font-size: 14px;
  }
}

.card {
  position: relative;
  height: 220px;
  background: linear-gradient(180deg, #373E96 0%, #1B6ED2 100%);
  border-radius: 20px;
  @include flex-center;
  flex-direction: column;
  cursor: pointer;

  @include bp($point_5) {
    width: 165px;
  }

  &.color_primary {
    background: linear-gradient(180deg, #373A75 0%, #656D8D 100%);
  }
  &.color_rare {
    background: linear-gradient(180deg, #3A7A18 0%, #68B31E 100%);
  }
  &.color_superRare {
    background: linear-gradient(180deg, #373E96 0%, #2B80E6 100%);
  }
  &.color_epic {
    background: linear-gradient(180deg, #7715A6 0%, #B015EC 100%);
  }
  &.color_mif {
    background: linear-gradient(180deg, #66154F 0%, #D12A52 100%);
  }
  &.color_legend {
    background: linear-gradient(180deg, #B78A18 0%, #E6D11C 100%);
  }
}
</style>
