<template>
  <div class="cardPrize" :class="isColor">
    <div class="cardPrize__img">
      <img :src="card.img" />
    </div>
    <div class="cardPrize__txt">{{ card.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  card: any;
}>();

const isColor = computed(() => {
  switch (props.card.color) {
    case "violet":
      return "color_violet";
    case "green":
      return "color_green";
    case "blue":
      return "color_blue";
    case "rose":
      return "color_rose";
  }
});
</script>

<style scoped lang="scss"></style>
