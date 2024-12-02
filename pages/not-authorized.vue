<script setup lang="ts">
import LoginModal from "~/components/modals/LoginModal.vue";
import { ref } from "vue";
const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <section class="container">
    <div class="not-auth-container">
      <img
        src="../assets/img/inventory/not-auth.png"
        alt="not-auth"
        class="not-auth-img"
      />
      <h1>Требуется авторизация</h1>
      <h3>Для получения доступа к странице</h3>
      <button class="login-btn-main" @click="openModal">
        <p>ВОЙТИ</p>
      </button>
    </div>

    <LoginModal v-if="isModalOpen" @close="closeModal" />
  </section>
</template>

<style scoped lang="scss">
.not-auth-container {
  padding: 6rem 0;
  @include flex-col;
  @include flex-center;
  gap: 3rem;
  @include bp($point_3) {
    gap: 1rem;
  }
  .login-btn-main {
    max-width: 370px;
  }
}
h1 {
  font-family: $font_2;
  font-size: 70px;
  font-weight: 800;
  line-height: 77px;
  text-align: center;
  @include bp($point_3) {
    font-size: 24px;
    line-height: 27px;
  }
}
h3 {
  font-family: $font_2;
  font-size: 30px;
  font-weight: 300;
  line-height: 36px;
  text-align: center;
  color: #787dac;
  @include bp($point_3) {
    font-size: 16px;
    line-height: 20px;
  }
}
.not-auth-img {
  margin: auto;
  @include bp($point_3) {
    max-width: 300px;
  }
}
</style>
