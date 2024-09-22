<template>
  <div class="socials">
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/tg.svg" alt="" />
    </a>
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/vk.svg" alt="" />
    </a>
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/twitch.svg" alt="" />
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.socials {
  @include flex-start;
  gap: 1.7rem;
  a {
    width: 4.3rem;
    height: 4.3rem;
    @include flex-center;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 4px 0px rgba(77, 59, 187, 1);

    &:nth-child(1) {
      border-radius: 1rem;
      background: linear-gradient(180deg, #3fb6d1 0%, #1e78cd 100%);
    }
    &:nth-child(2) {
      border-radius: 1rem;

      background: linear-gradient(180deg, #3c69ff 0%, #4e6af5 100%);
    }
    &:nth-child(3) {
      border-radius: 1rem;
      background: linear-gradient(180deg, #a384ff 0%, #702afd 100%);
    }
    // &:hover {
    //   transform: rotate(5deg);
    // }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
