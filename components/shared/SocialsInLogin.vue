<template>
  <div class="socials">
    <NuxtLink href="/" class="socials-links">
      <img src="@/assets/img/modal/tg.svg" alt="tg" />
    </NuxtLink>
    <NuxtLink href="/" class="socials-links">
      <img src="@/assets/img/modal/vk.svg" alt="vk" />
    </NuxtLink>
    <NuxtLink href="/" class="socials-links">
      <img src="@/assets/img/modal/yandex.svg" alt="yandex" />
    </NuxtLink>
    <NuxtLink href="/" class="socials-links">
      <img src="@/assets/img/modal/in.svg" alt="in" />
    </NuxtLink>
    <NuxtLink href="/" class="socials-links">
      <img src="@/assets/img/modal/google.svg" alt="google" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.socials {
  @include flex-start;
  gap: 15px;
  &-links {
    @include flex-center;
    width: 49px;
    height: 49px;
    border-radius: 10px;
    background-color: $blue-bg;
  }
}
</style>
<script setup lang="ts"></script>
