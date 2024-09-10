<template>
  <div class="bonuses-container">
    <button class="back-btn">Назад</button>
    <h1 class="bonuses-title">БОНУСЫ BRAWLHUB</h1>

    <div class="bonuses-grid">
      <div class="bonus-card">
        <h3 class="bonus-title">ЕЖЕДНЕВНЫЙ БОНУС</h3>
        <p>Ежедневный бонус от 1 до 2500 рублей каждые 24 часа</p>
        <button class="btn-open">ОТКРЫТЬ</button>
      </div>
      <div class="bonus-card">
        <h3 class="bonus-title">РАЗОВЫЙ БОНУС</h3>
        <p>Разовый бонус дается за выполнение списка заявок</p>
        <button class="btn-open">ОТКРЫТЬ</button>
      </div>
      <div class="bonus-card">
        <h3 class="bonus-title">БОНУС "РОЗЫГРЫШ"</h3>
        <p>Розыгрыш бонуса от 100 до 500 бонусов</p>
        <button class="btn-open">ОТКРЫТЬ</button>
      </div>
    </div>

    <h2 class="faq-title">Как это работает?</h2>
    <div class="faq-accordion">
      <div v-for="(faq, index) in faqItems" :key="index" class="faq-item">
        <div class="faq-header" @click="toggleFaq(index)">
          <p>{{ faq.question }}</p>
          <Icon name="mdi:chevron-down" class="accordion-icon" />
        </div>
        <div v-if="activeFaq === index" class="faq-body">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeFaq = ref<number | null>(null);

const faqItems = [
  {
    question:
      "Вероятность успешного апгрейда зависит от соотношения стоимости твоего предмета?",
    answer: "Да, вероятность зависит от соотношения стоимости предметов.",
  },
  {
    question: "Как получить ежедневный бонус?",
    answer: "Ежедневный бонус можно получить один раз каждые 24 часа.",
  },
  {
    question: "Как работают разовые бонусы?",
    answer: "Разовые бонусы выдаются за выполнение специальных условий.",
  },
  {
    question: "Что такое бонус 'Розыгрыш'?",
    answer: "Бонус 'Розыгрыш' дает случайное количество бонусов от 100 до 500.",
  },
];

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<style scoped lang="scss"></style>
