<template>
  <div class="drum-item">
    <NuxtImg src="/assets/img/drum/drum-item.png" alt="drum" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.drum-item {
  max-width: 224px;
  width: 100%;
  height: 236px;
  border: 7px solid;
  background: $drum-gradient;
  border-radius: 50%;
  display: flex;
}
</style>
