<template>
  <div class="prefooter container">
    <div class="prefooter_main">
      <div
        class="prefooter_item"
        v-for="(item, i) in prefooter"
        :key="'prefootert-item-' + i"
      >
        <div class="prefooter_item__img">
          <img :src="item.img" alt="info" />
        </div>
        <div class="prefooter_item__content">
          <h6>{{ item.title }}</h6>
          <p>{{ item.txt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prefooter = ref<any>([
  {
    img: "/assets/img/prefooter/prefooter-4.svg",
    title: "9.780",
    txt: "Всего открыто кейсов",
  },
  {
    img: "/assets/img/prefooter/prefooter-1.svg",
    title: "10.450",
    txt: "Всего открыто кейсов",
  },
  {
    img: "/assets/img/prefooter/prefooter-2.svg",
    title: "179.345",
    txt: "Сделано апгрейдов",
  },
  {
    img: "/assets/img/prefooter/prefooter-3.svg",
    title: "20.851",
    txt: "Создано контрактов",
  },
]);
</script>

<style scoped lang="scss">
.prefooter {
  position: relative;
  top: -5rem;
}
.prefooter_main {
  @include flex-space;
  gap: 7.6rem;
  @include bp($point_2) {
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.prefooter_item {
  background: $button-gradient-blu-button;
  border-radius: 2rem;
  @include flex-start;
  gap: 3rem;
  padding: 2rem 4rem;
  height: 14.1rem;
  @include bp($point_0) {
    padding: 1rem 2rem;
    height: 10rem;
  }
  @include bp($point_2) {
    padding: 11px;
    gap: 2px;
    height: 62px;
    border-radius: 5px;
  }
}

.prefooter_item__img {
  > img {
    @include bp($point_0) {
      width: 60px;
    }
    @include bp($point_2) {
      width: 40px;
    }
  }
}

.prefooter_item__content {
  h6 {
    font-size: 4.4rem;
    font-family: $font_5;
    @include bp($point_2) {
      font-size: 18px;
    }
  }
  p {
    color: $light;
    font-size: 1.7rem;
    font-family: $font_4;
    @include bp($point_2) {
      font-size: 10px;
    }
  }
}
</style>
