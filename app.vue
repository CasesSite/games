<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import axios from "axios";

onMounted(async () => {
  try {
    const response = await axios.get("https://dev.24cases.ru/v1/users/me", {
      withCredentials: true,
    });
    console.log(currentUser.value, "1111");
  } catch (error) {
    console.log("error", error);
  }
});
</script>

<style lang="scss">
.fixed {
  overflow: hidden;
  @include bp($point_5, $direction: min) {
    padding-right: 1.7rem;
  }
}

:root {
  --full-screen: calc(var(--vh, 1vh) * 100);
}

html {
  height: 100%;
  font: 400 calc(100vw / 1920 * 10) / 1.33 $font_1;

  @include bp($point_2) {
    font-size: 10px;
  }
  //   &::-webkit-scrollbar-track {
  //     background-color: $lbrown;
  //   }

  //   &::-webkit-scrollbar {
  //     width: 0.6rem;
  //     background-color: $lbrown;
  //   }

  //   &::-webkit-scrollbar-thumb {
  //     background-color: $brown;
  //   }
}

body {
  position: relative;
  display: flex;
  height: 100%;
  font-size: $font_size_base;
  color: $color_text_base;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $body_bg;
  overflow-x: hidden;
  color: $white;

  @supports (display: grid) {
    display: block;
  }
}

a {
  text-decoration: none;
  transition: all 0.3s ease;
  color: $white;

  &:hover,
  &:focus {
    text-decoration: none;
    transition: all 0.3s ease;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
