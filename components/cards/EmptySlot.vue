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
  height: 310px;
  width: 310px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @include bp($point_5) {
    height: 210px;
    width: auto;
  }

  img {
    height: 100%;
    width: 310px;

    @include bp($point_5) {
      height: auto;
      width: -webkit-fill-available;
      max-width: 250px;
    }
  }
}

</style>
