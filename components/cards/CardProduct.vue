<template>
  <div class="product">
    <NuxtLink to="/" class="product__link">
      <div class="product__img">
        <img :src="card.img" alt="" />
        <div class="product_count">
          <p>{{ currentValue }} / {{ maxValue }}</p>
          <div
            class="product_count__progress"
            :style="{ width: `${percentage}%` }"
          ></div>
        </div>
      </div>

      <div class="product__title"><h3>Мрачный ронин</h3></div>

      <div class="product_price">
        <div class="product_price__btn">
          <div class="product_old__price">
            <span>{{ card.oldprice }}</span> <Icon name="custom:logo" />
          </div>
          <span>{{ card.price }}</span> <Icon name="custom:logo" />
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

const currentValue = ref<number>(4700);
const maxValue = ref<number>(22780);
const percentage = (currentValue.value / maxValue.value) * 100;
</script>

<style scoped lang="scss">
.product__img {
  @include flex-center;
  max-width: 32.8rem;
  margin-bottom: 0.6rem;
  position: relative;
  @include bp($point_5) {
    max-width: 175px;
  }
  img {
    width: 100%;
    display: block;
  }
}

.product {
  text-align: center;
  position: relative;
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

  .product_count__progress {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1%;
    width: 100%;
    height: 110%;
    box-sizing: border-box;
    border-bottom: 0.1rem solid rgb(197, 110, 119);
    border-left: 0.1rem solid rgb(197, 110, 119);
    border-top: 0.1rem solid rgb(197, 110, 119);
    border-radius: 1rem 0px 0px 1rem;
    z-index: 22;

    background: linear-gradient(
      270deg,
      rgba(195, 108, 121, 0.23) 0%,
      rgba(18, 25, 71, 0.23) 100%
    );
  }
}

.product__title {
  margin-bottom: 2rem;
  h3 {
    font-size: 1.8rem;
    font-family: $font_5;
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
  // min-width: 14rem;
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
}
</style>
