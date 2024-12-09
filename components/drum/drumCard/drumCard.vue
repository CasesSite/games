<template>
  <div class="drum-card">
    <NuxtImg src="/assets/img/drum/card-img.png" alt="drum-card" width="170" />
    <div class="drum-card__text">
      2 бесплатных кейса после пополнения от 400
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.drum-card {
  max-width: 276px;
  width: 100%;
  height: 271px;
  border-radius: 15px;
  background: $drum-card-gradient;
  @include flex-center;
  @include flex-col;
}
.drum-card__text {
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
  max-width: 190px;
}
</style>
