<template>
  <div class="news-container">
    <h2>ПОПУЛЯРНЫЕ НОВОСТИ О ПРОЕКТЕ</h2>
    <div class="news-grid">
      <div class="news-card" v-for="(news, index) in newsItems" :key="index">
        <img :src="news.image" alt="News Image" class="news-image" />
        <div class="news-content">
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>
          <button class="btn-details">ПОДРОБНЕЕ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const newsItems = [
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
  {
    title: "Глобальное обновление режима",
    description:
      "Составные произведения, представляющие собой совокупность информации, текстов...",
    image: "@/assets/news-image.jpg",
  },
];
</script>

<style scoped lang="scss"></style>
