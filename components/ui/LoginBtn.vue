<template>
  <div class="login-btn">
    <div class="login-btn__w">
      <Icon name="custom:print" :size="25" />
      <p>ВОЙТИ</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login-btn__w {
  @include flex-start;
  gap: 1.4rem;
  padding: 1.6rem 1.9rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;

  p {
    font-size: 1.9rem;
    text-transform: uppercase;
    font-family: $font_5;
    text-shadow: 0px 0.2rem 0px rgba(255, 255, 255, 0.158);
  }
}

.login-btn {
  border-radius: 1rem;
  background: linear-gradient(180deg, #f18d72 0%, #c744a3 100%);
  box-shadow: 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset;

  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.25),
      0 1.33rem 1.33rem 0 rgba(0, 0, 0, 0.15);
  }
}
</style>
