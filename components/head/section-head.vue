<template>
  <div class="section-head">
    <div class="section_head__main">
      <div class="section_title">
        <h3>{{ title }}</h3>
      </div>
      <p>{{ subtitle }}</p>
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-item" v-for="item in menuItems" :key="item.label">
      <img :src="item.icon" :alt="item.label" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
import caseIcon from "/assets/img/header/case-icon.svg";
import crashIcon from "/assets/img/header/crash-icon.svg";
import bonusIcon from "/assets/img/header/bonus-icon.svg";
import wheelIcon from "/assets/img/header/wheel-icon.svg";
import menuIcon from "/assets/img/header/menu.svg";

const menuItems = ref([
  { label: "КЕЙСЫ", icon: caseIcon },
  { label: "КРАШ", icon: crashIcon },
  { label: "БОНУСЫ", icon: bonusIcon },
  { label: "БАРАБАН", icon: wheelIcon },
  { label: "МЕНЮ", icon: menuIcon },
]);
</script>

<style scoped lang="scss">
.menu-bar {
  display: none;
  @include bp($point_5) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 26px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9;
  }
}
.menu-bar:before {
  backdrop-filter: blur(4px);
  background-color: #090d31d4;
  opacity: 0.8;
  content: "";
  inset: 0;
  position: absolute;
  z-index: -1;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  gap: 2px;
  > span {
    font-family: $font_6;
    font-size: 10px;
    font-weight: 800;
    line-height: 17px;
    color: #c2c3d0;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
.section-head {
  position: relative;
  // height: 28.9rem;
  @include flex-center;
  flex-direction: column;
  z-index: 2;
  text-align: center;
  gap: 1.5rem;
  margin-bottom: 5rem;
  @include bp($point_5) {
    gap: 10px;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 3.8rem;
    color: $white;
    font-family: $font_5;
    line-height: 3.6rem;
    @include bp($point_5) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  p {
    font-size: 1.9rem;
    font-family: $font_4;
    color: #a7acee;
    @include bp($point_5) {
      font-size: 16px;
    }
  }
}

.section_head__main {
  @include flex-center;
  flex-direction: column;
  z-index: 2;
  text-align: center;
  gap: 1.5rem;
}
</style>
