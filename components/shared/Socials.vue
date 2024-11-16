<template>
  <div class="socials">
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/tg.svg" alt="tg" />
    </a>
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/vk.svg" alt="vk" />
    </a>
    <a href="/" target="_blank">
      <img src="@/assets/img/socials/twitch.svg" alt="twitch" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
    default: "40px",
  },
  height: {
    type: String,
    default: "40px",
  },
});
</script>

<style scoped lang="scss">
.socials {
  @include flex-start;
  gap: 1.7rem;
  @include bp($point_3) {
    gap: 0.6rem;
  }
  @include bp($point_5) {
    gap: 8px;
  }
  a {
    width: v-bind(width);
    height: v-bind(height);
    @include flex-center;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 4px 0 rgba(77, 59, 187, 1);

    @include bp($point_5) {
      box-shadow: unset;
    }
    &:nth-child(1) {
      border-radius: 1rem;
      background: linear-gradient(180deg, #3fb6d1 0%, #1e78cd 100%);
      @include bp($point_5) {
        background: unset;
      }
    }
    &:nth-child(2) {
      border-radius: 1rem;
      background: linear-gradient(180deg, #3c69ff 0%, #4e6af5 100%);
      @include bp($point_5) {
        background: unset;
      }
    }
    &:nth-child(3) {
      border-radius: 1rem;
      background: linear-gradient(180deg, #a384ff 0%, #702afd 100%);
      @include bp($point_5) {
        background: unset;
      }
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
