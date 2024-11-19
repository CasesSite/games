<template>
  <div class="faq-container">
    <p class="faq-top">
      <button @click="goBack">
        <Icon
          name="mdi:chevron-down"
          style="transform: rotate(90deg); padding-top: 2px"
        />
        Назад
      </button>
      <img src="/assets/img/prefooter/wave.svg" alt="wave" />
    </p>
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
import { useRouter } from "vue-router";

const router = useRouter(); // Initialize router instance
const activeIndex = ref<number | null>(null);

const faqItems = [
  {
    title:
      "Вероятность успешного апгрейда зависит от соотношения стоимости твоего предмета?",
    answer:
      'В некоторых вещах существуют такие ячейки как "атака", "оборона", "полезность", "усиление оружия", "усиление доспехов". В них можно вставить камни для получения бонуса \n' +
      "к параметрам или для приобретения дополнительных свойств. По уровню редкости могут быть: обычные, необычные, редкие, эпические.",
  },
  {
    title: "Как построить здание и не разрушить его сразу?",
    answer: "Ответ на этот вопрос.",
  },
  {
    title:
      "Вероятность успешного апгрейда зависит от соотношения стоимости твоего предмета?",
    answer:
      'В некоторых вещах существуют такие ячейки как "атака", "оборона", "полезность", "усиление оружия", "усиление доспехов". В них можно вставить камни для получения бонуса \n' +
      "к параметрам или для приобретения дополнительных свойств. По уровню редкости могут быть: обычные, необычные, редкие, эпические.",
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

const goBack = () => {
  router.go(-1); // Go back to the previous page
};
</script>

<style scoped lang="scss">
.faq-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 10px;
  border-radius: 10px;
}
.faq-top {
  @include flex-space;
  padding: 20px 0;
  width: 100%;
  > button {
    @include flex-center;
    cursor: pointer;
    align-items: center;
    width: 155px;
    height: 50px;
    border-radius: 13px;
    color: $white;
    background-color: #fefefe0d;
    font-family: $font_2;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }
}
.faq-title {
  margin-bottom: 20px;
  color: $white;
  font-family: $font_2;
  font-size: 24px;
  font-weight: 900;
  line-height: 37px;
  text-align: center;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-item {
  background: linear-gradient(180deg, #293b99 0%, #292862 100%);
  border-radius: 10px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  font-family: $font_2;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
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
  border-radius: 0 0 10px 10px;
  color: $white;
  padding: 0 15px 15px;
}
</style>
