<template>
  <div class="card">
      <img :src="img" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  img: string;
}>();


</script>

<style scoped lang="scss">
.card {
  height: 220px;
  width: 100%;

  img {
    width: auto;
    height: 220px;
  }
}

</style>
