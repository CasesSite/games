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
  display: flex;
  justify-content: center;
  align-items: center;
  //@include bp($point_5) {
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //}

  img {
    //width: auto;
    //height: 220px;
    height: 100%;
    width: auto;
    max-height: 220px;
    max-width: 100%;

    @include bp($point_5) {
      //width: 100%;
      height: auto;
    }
  }
}

</style>
