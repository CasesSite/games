<template>
  <div class="balance-success">
    <h2 class="status-message">
      <Icon name="mdi:check-circle" class="status-icon" />
      БАЛАНС УСПЕШНО ПОПОЛНЕН
    </h2>

    <div class="options">
      <div class="option-card" v-for="(option, index) in options" :key="index">
        <Icon :name="option.icon" class="option-icon" />
        <p class="option-text">{{ option.text }}</p>
      </div>
    </div>

    <div class="buttons">
      <button class="btn-main">На главную</button>
      <button class="btn-inventory">Перейти к инвентарю</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const options = [
  {
    icon: "mdi:crown",
    text: "Отлично! Теперь вперёд выбирать крутой дроп!",
  },
  {
    icon: "mdi:tools",
    text: "Открывай кейсы! Создавай контракты и апгрейды!",
  },
  {
    icon: "mdi:axe",
    text: "Не забывай участвовать в ивентах и кейсбатлах!",
  },
];
</script>

<style scoped lang="scss"></style>
