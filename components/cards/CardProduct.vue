<template>
  <div class="product">
    <NuxtLink :to="`/case/${card.id}`" class="product__link">
      <div class="product__img">
        <img :src="card.img" alt="" />
        <div class="product_count">
          <span>{{ currentValue }}/{{ maxValue }}</span>
          <div
            class="product_count__progress"
            :style="{ width: `${percentage}%` }"
          ></div>
        </div>
      </div>

      <h3 class="product__title">Мрачный ронин</h3>

      <div class="product_price">
        <div class="product_price__btn">
          <div class="product_old__price">
            <span>{{ card.oldPrice }}</span>
            <img src="@/assets/img/header/logo.png" alt="icon" />
          </div>
          <span>{{ card.price }}</span>
          <img src="@/assets/icons/logo.svg" alt="icon" />
          <!--          <Icon name="custom:logo" size="24" style="z-index: 1" />-->
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  card: any;
}>();

const currentValue = ref<number>(8700);
const maxValue = ref<number>(98800);
const percentage = (currentValue.value / maxValue.value) * 100;
</script>

<style scoped lang="scss">
.product__img {
  @include flex-center;
  max-width: 32.8rem;
  margin-bottom: 0.6rem;
  position: relative;
  @include bp($point_5) {
    max-width: 190px;
    scale: 1.1;
  }

  img {
    width: 100%;
    display: block;
    transition: transform 0.3s;
  }

  img:hover {
    transform: translateY(-10px);
  }
}

.product {
  text-align: center;
  position: relative;
  @include bp($point_5) {
    @include flex-center;
    @include flex-col;
  }
}

.product_count {
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-bottom: 2rem;
  border: 0.1rem solid rgb(89, 96, 186);
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-family: $font_5;
  height: 3.2rem;
  padding: 1rem 2rem;
  background: rgba(26, 34, 84, 1);
  @include bp($point_5) {
    > span {
      font-family: $font_6;
      font-size: 10px;
      font-weight: 700;
      text-align: center;
    }
    width: 81px;
    height: 22px;
  }

  .product_count__progress {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1%;
    width: 50% !important;
    height: 110%;
    box-sizing: border-box;
    border-bottom: 0.1rem solid rgb(197, 110, 119);
    border-left: 0.1rem solid rgb(197, 110, 119);
    border-top: 0.1rem solid rgb(197, 110, 119);
    border-radius: 1rem 0 0 1rem;
    z-index: 22;
    background: linear-gradient(
      270deg,
      rgba(195, 108, 121, 0.23) 0%,
      rgba(18, 25, 71, 0.23) 100%
    );
    @include bp($point_5) {
      width: 40px !important;
      height: 22px;
    }
  }
}

.product__title {
  margin-bottom: 2rem;
  @include bp($point_5) {
    margin-bottom: 5px;
  }
  h3 {
    font-size: 1.8rem;
    font-family: $font_6;
    @include bp($point_5) {
      font-size: 16px;
      font-weight: 700;
      line-height: 12.24px;
    }
  }
}

.product_price {
  position: relative;
  display: inline-flex;
}

.product_price__btn {
  padding: 1rem;
  font-size: 2.1rem;
  font-family: $font_5;
  @include flex-center;
  gap: 0.2rem;
  position: relative;
  z-index: 2;
  background: $lrose;
  border-radius: 1rem;
  @include bp($point_5) {
    width: 80px;
    height: 29px;
    border-radius: 6.8px;
    font-size: 16px;

    opacity: 1;
  }
}

.product_old__price {
  height: 3.4rem;
  font-size: 1.4rem;
  font-family: $font_5;
  border: 0.1rem solid $rose;
  border-radius: 1rem;
  @include flex-center;
  display: inline-flex;
  padding: 0.7rem 1.1rem 0.5rem 1.1rem;
  position: absolute;
  top: -1.5rem;
  right: -6.5rem;
  background: rgba(22, 26, 81, 0.56);
  &:before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    content: "";
    border-bottom: 0.2rem solid $rose;
    width: 88%;
  }
  @include bp($point_5) {
    display: none;
  }
}
</style>
