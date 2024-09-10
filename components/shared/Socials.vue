<template>
  <div class="socials">
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/tg.png" alt="" />
    </a>
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/vk.png" alt="" />
    </a>
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/twitch.png" alt="" />
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

    &:nth-child(1) {
      border-top: 0.1rem solid rgb(113, 217, 255);
      border-radius: 1rem;

      box-shadow: inset 0 -0.1rem 0 0 rgba(0, 0, 0, 0.25),
        0 1.3rem 0.81rem -0.7rem rgba(0, 0, 0, 0.1);
      background: linear-gradient(
        180deg,
        rgb(63, 182, 209),
        rgb(30, 120, 205) 100%
      );
      opacity: 0.8;
    }
    &:nth-child(2) {
      border-top: 0.1rem solid rgb(82, 180, 241);
      border-radius: 1rem;

      box-shadow: inset 0 -0.1rem 0 0 rgba(0, 0, 0, 0.25),
        0 1.3rem 0.81rem -0.7rem rgba(0, 0, 0, 0.1);
      background: linear-gradient(
        180deg,
        rgb(60, 105, 255),
        rgb(78, 106, 245) 100%
      );
      opacity: 0.8;
    }
    &:nth-child(3) {
      border-top: 0.1rem solid rgb(202, 152, 255);
      border-radius: 1rem;

      box-shadow: inset 0 0.1rem 0 0 rgba(0, 0, 0, 0.25),
        0 1.3rem 0.81rem -0.7rem rgba(0, 0, 0, 0.1);
      background: linear-gradient(
        180deg,
        rgb(163, 132, 255),
        rgb(112, 42, 253) 100%
      );
      opacity: 0.8;
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
