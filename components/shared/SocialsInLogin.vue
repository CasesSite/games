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
  gap: 1rem;
  &-links {
    @include flex-center;
    > img > path {
      width: 3rem;
      height: 3rem;
      @media (max-width: 480px) {
        width: 2rem;
        height: 2rem;
      }
    }
    border-radius: 10px;
    background-color: $blue-bg;
    width: 5rem;
    height: 5rem;
    @media (max-width: 480px) {
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>
<script setup lang="ts"></script>
