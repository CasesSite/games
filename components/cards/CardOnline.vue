<template>
  <div class="online">
    <div class="online_icon">
      <Icon name="custom:wifi" :size="20" />
    </div>
    <div class="online__txt">
      <p>2500</p>
      <span>Online</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.online {
  border-radius: 1rem;
  box-shadow: 0 1rem 0.86rem -3rem rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(1rem);
  background: rgba(126, 135, 143, 0.5);
  @include flex-start;
  gap: 1rem;
  padding: 1.1rem 1.6rem;
  font-family: $font_5;
  p {
    font-size: 1.5rem;
    margin-bottom: -0.6rem;
  }
  span {
    font-size: 1.1rem;
    opacity: 0.8;
  }
}

.online_icon {
  @include flex-center;
}
</style>
