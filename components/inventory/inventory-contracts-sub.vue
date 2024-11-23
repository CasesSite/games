<template>
  <div class="inventory-item__sub">
    <div class="inventory-item_usual inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_usual inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_violet inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_violet inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_usual inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_usual inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_usual inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_cyan inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_cyan inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
    <div class="inventory-item_usual inventory-item__sub-item">
      <img src="/public/assets/img/profile/inventory-item.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inventory-item__sub {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  @include bp($point_5) {
    column-gap: 2px;
  }
  &-item {
    position: relative;
    border-radius: 15px;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    @include flex-center;
    @include flex-col;
    > img {
      width: 55px;
      @include bp($point_5) {
        width: 36px;
      }
    }
    @include bp($point_5) {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
<script setup lang="ts"></script>
