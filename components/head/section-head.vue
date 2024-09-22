<template>
  <div class="section-head">
    <div class="section_head__main">
      <div class="section_title">
        <h3>{{ title }}</h3>
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
  // height: 28.9rem;
  @include flex-center;
  flex-direction: column;
  z-index: 2;
  text-align: center;
  gap: 1.5rem;
  margin-bottom: 5rem;

  h3 {
    font-size: 3.8rem;
    color: $white;
    font-family: $font_5;
    line-height: 3.6rem;
  }

  p {
    font-size: 1.9rem;
    font-family: $font_4;
    color: #a7acee;
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
