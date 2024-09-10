<template>
  <div class="section-head">
    <div class="section_head__main">
      <div class="section_title">
        <img :src="title" alt="" />
      </div>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped lang="scss">
.section-head {
  position: relative;
  height: 28.9rem;
  @include flex-center;
  flex-direction: column;
  z-index: 2;
  text-align: center;

  p {
    font-size: 1.9rem;
    font-family: $font_4;
    color: #a7acee;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 100%;
    transform: translateX(-50%);
    content: "";
    background-image: url("../../assets/img/decorator/sections-top.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    z-index: -1;
  }
}

.small-title {
  img {
    max-width: 42rem;
    margin-bottom: 1.5rem;
  }
}
.big-title {
  img {
    max-width: 44rem;
    margin-bottom: 1.5rem;
  }
}
</style>
