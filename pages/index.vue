<template>
  <div class="home">
    <section class="hero">
      <div class="hero_main">
        <div class="hero_img"></div>
        <div class="hero-try"></div>
        <div class="hero_btn">
          <div class="rounde"></div>
          <NuxtLink to="/"> Попробовать </NuxtLink>
        </div>
      </div>
    </section>
    <section class="popular first">
      <sectionHead
        class="small-title"
        title="ПОПУЛЯРНЫЕ КЕЙСЫ"
        subtitle="Забери AWP Asimov за минуту"
      />
      <ul class="card_product__list">
        <li v-for="(item, i) in cards" :key="'popular-item-' + i">
          <CardProduct :card="item" />
        </li>
      </ul>
    </section>
    <section class="popular">
      <sectionHead
        title="ГЕРОИЧЕСКИЕ НАБОРЫ"
        subtitle="Забери AWP Asimov за минуту"
      />
      <ul class="card_product__list">
        <li v-for="(item, i) in doubledCards" :key="'popular-item-' + i">
          <CardProduct :card="item" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import sectionHead from "~/components/head/section-head.vue";
import CardProduct from "~/components/cards/CardProduct.vue";

const cards = ref([
  {
    img: "/assets/img/card-1.png",
    name: "Мрачный ронин",
    price: "9000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-2.png",
    name: "Мрачный ронин",
    price: "9000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-3.png",
    name: "Мрачный ронин",
    price: "9000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-4.png",
    name: "Мрачный ронин",
    price: "9000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-5.png",
    name: "Мрачный ронин",
    price: "9000",
    oldprice: "55000",
  },
]);

const doubledCards = ref([...cards.value, ...cards.value]);
</script>

<style scoped lang="scss">
.hero_main {
  position: relative;
  min-height: 88.5rem;
  z-index: 1;
  margin-bottom: -17.4rem;
  @include bp($point_5) {
    min-height: 400px;
    margin-bottom: -45px;
    margin-top: -30px;
  }
}
.hero {
  position: relative;
  overflow: hidden;
}
.hero_socials {
  position: absolute;
  top: 3rem;
  right: 5.2rem;
  height: 100%;
  z-index: 99;
}
.hero_img {
  width: 100%;
  height: 100%;
  top: -11rem;
  position: absolute;
  z-index: -1;
  object-fit: cover;
  content: url("@/assets/img/hero/hero.png");

  @include bp($point_5) {
    top: 0;
    content: url("@/assets/img/hero/hero-mobile.png");
  }
}

.hero-try {
  position: absolute;
  width: 90%;
  top: 20%;
  z-index: 2;
  content: url("@/assets/img/hero/hero-try.png");
  @include bp($point_5) {
    left: 10%;
    top: 16%;
    transform: translateX(5%);
    content: url("@/assets/img/hero/hero-try-mobile.png");
  }
}

.hero_btn {
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 0.4rem solid rgb(254, 128, 255);
  border-radius: 2.5rem;
  z-index: 2;
  min-width: 28.9rem;
  background: linear-gradient(180deg, #e171e3 0%, #8332ed 100%);
  font-size: 3rem;
  font-family: $font_5;
  text-transform: uppercase;
  a {
    padding: 1.6rem 3.6rem 1.8rem 3.6rem;
    @include flex-center;
  }
  @include bp($point_5) {
    border-radius: 20px;
    min-width: 0;
    height: 55px;
    font-size: 18px;
    top: 58%;
    a {
      height: 52px;
      padding: 1.65rem 3.6rem 1.8rem 3.65rem;
    }
  }
}

.rounde {
  position: absolute;
  border-radius: 3.9rem;
  top: 50%;
  left: 50%;
  border: 1.5rem solid rgba(255, 255, 255, 0.31);
  transform: translate(-50%, -50%);
  width: 31.7rem;
  height: 10rem;
  @include bp($point_5) {
    width: 219px;
    height: 71px;
    border: 10px solid rgba(255, 255, 255, 0.31);
    border-radius: 29px;
  }
}

.popular {
  position: relative;
  margin-bottom: 14rem;
  @include bp($point_5) {
    margin-bottom: 40px;
  }
  &.first {
    margin-bottom: 10rem;
    @include bp($point_5) {
      margin-bottom: 40px;
    }
  }
}

.card_product__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17%, 1fr));
  grid-gap: 4.4rem;
  padding: 0 5rem;
  max-width: 182.1rem;
  margin: 0 auto;
  @include bp($point_5) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    padding: 0;
    grid-gap: 10px;
  }
}
</style>
