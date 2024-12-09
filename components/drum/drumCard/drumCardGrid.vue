<template>
  <section>
    <div class="drum-grid-top">
      Новый бонус будет заменять предыдущий, если тот не был использован ранее.
      Бонусы выпавшие из колеса, не суммируются с промокодами для пополнения
      баланса.
    </div>
    <div class="container">
      <drum-card
        v-for="(card, index) in cards"
        :key="index"
        class="drum-card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import DrumCard from "~/components/drum/drumCard/drumCard.vue";

const cards = Array.from({ length: 20 });
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}
.drum-grid-top {
  color: #90c0ff;
  background: $drum-card-gradient-top;
  text-align: center;
  margin: 40px 60px;
}
.drum-card {
  @include flex-center;
}
</style>
