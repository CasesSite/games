<template>
  <section class="container no-items-wrapper">
    <div class="no-items__text">
      <img src="assets/img/inventory/no-items.svg" class="icon-warning" />
      <div class="no-items-message">
        <p>У ВАС НЕТ ПРЕДМЕТОВ</p>
        <span>Начните открывать кейсы</span>
      </div>
    </div>
    <button class="button">ОТКРЫТЬ</button>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.no-items-wrapper {
  @include flex-space;

  background: linear-gradient(
    0deg,
    rgba(24, 27, 87, 0.3) 0%,
    rgba(137, 86, 111, 0.6) 100%
  );
  width: 100%;
  height: 144px;
  border-radius: 0px 0px 20px 20px;
}
.no-items__text {
  @include flex-start;
  gap: 27px;
}
.no-items-message {
  > p {
    font-family: $font_5;
    font-weight: 900;
    font-size: 22px;
  }
  span {
    font-family: $font_5;
    font-weight: 600;
    font-size: 16px;
    color: #b0b3e2;
  }
}
</style>
