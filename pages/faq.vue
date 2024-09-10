<template>
  <div class="faq-container">
    <h2 class="faq-title">ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
    <div class="accordion">
      <div
        class="accordion-item"
        v-for="(question, index) in faqItems"
        :key="index"
      >
        <div class="accordion-header" @click="toggleAccordion(index)">
          <p>{{ question.title }}</p>
          <Icon name="mdi:chevron-down" class="accordion-icon" />
        </div>
        <div v-if="activeIndex === index" class="accordion-body">
          <p>{{ question.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref<number | null>(null);

const faqItems = [
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
];

const toggleAccordion = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

<style scoped lang="scss">
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1c1c3a;
  border-radius: 10px;
}

.faq-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-item {
  background-color: #292952;
  border-radius: 10px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background-color: #373a6d;
  border-radius: 10px;
}

.accordion-header p {
  margin: 0;
  color: #fff;
}

.accordion-icon {
  color: #fff;
  font-size: 20px;
}

.accordion-body {
  padding: 15px;
  background-color: #1c1c3a;
  border-radius: 0 0 10px 10px;
  color: #ccc;
}
</style>
