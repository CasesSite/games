<template>
  <div class="inventory">
    <div class="container">
      <userHead />
      <Tabs />
      <div class="no-items">
        <div class="no-items-message">
          <Icon name="mdi:alert-circle" class="icon-warning" />
          <p>У ВАС НЕТ ПРЕДМЕТОВ</p>
          <span>Начните открывать кейсы</span>
        </div>
        <button class="btn-open">ОТКРЫТЬ</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userHead from "~/components/head/user-head.vue";
import Tabs from "~/components/ui/Tabs.vue";
</script>

<style scoped lang="scss"></style>
