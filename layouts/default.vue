<!-- @format -->

<template>
  <main class="main">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Footer from "~/components/shared/Footer.vue";
import Header from "~/components/shared/Header.vue";
</script>

<style scoped lang="scss">
.content {
}

.main {
  background-color: $body_bg;
  color: $white;
}
</style>
