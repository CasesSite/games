<template>
  <div class="case-container">
    <h2 class="case-title">Мрачный ронин</h2>
    <p class="case-subtitle">Кейс</p>
    <div class="case-info">
      <img src="@/assets/ronin-case.jpg" alt="Case Image" class="case-image" />
      <div class="auth-message">
        <p>ВЫ НЕ АВТОРИЗОВАНЫ!</p>
        <p>Авторизируйтесь, чтобы открыть кейс</p>
        <button class="btn-auth">ВОЙТИ</button>
      </div>
    </div>
    <h3 class="case-content-title">СОДЕРЖИМОЕ КЕЙСА</h3>
    <div class="case-content-grid">
      <div class="case-item" v-for="(item, index) in caseItems" :key="index">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <p class="item-name">{{ item.name }}</p>
        <p class="item-category">{{ item.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const caseItems = [
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
  { name: "Space Blaster", category: "М16", image: "@/assets/item-1.jpg" },
];
</script>

<style scoped lang="scss"></style>
