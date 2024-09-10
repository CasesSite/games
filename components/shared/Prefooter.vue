<template>
  <div class="prefooter">
    <div class="container">
      <div class="prefooter_main">
        <div
          class="prefooter_item"
          v-for="(item, i) in prefooter"
          :key="'prefootert-item-' + i"
        >
          <div class="prefooter_item__img">
            <img :src="item.img" />
          </div>
          <div class="prefooter_item__content">
            <h6>{{ item.title }}</h6>
            <p>{{ item.txt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prefooter = ref<any>([
  {
    img: "/assets/img/prefooter/pre-1.png",
    title: "9.780",
    txt: "Всего открыто кейсов",
  },
  {
    img: "/assets/img/prefooter/pre-2.png",
    title: "10.450",
    txt: "Всего открыто кейсов",
  },
  {
    img: "/assets/img/prefooter/pre-3.png",
    title: "179.345",
    txt: "Сделано апгрейдов",
  },
  {
    img: "/assets/img/prefooter/pre-4.png",
    title: "20.851",
    txt: "Создано контрактов",
  },
]);
</script>

<style scoped lang="scss"></style>
