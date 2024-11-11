<template>
  <div class="home">
    <section class="hero">
      <div class="hero_main">
        <div class="hero_img">
          <img src="../assets/img/hero/hero.png" alt="hero" />
        </div>
        <img src="../assets/img/hero/hero-try.png" alt="hero-try" class="hero-try" />
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
    price: "53000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-2.png",
    name: "Мрачный ронин",
    price: "53000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-3.png",
    name: "Мрачный ронин",
    price: "53000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-4.png",
    name: "Мрачный ронин",
    price: "53000",
    oldprice: "55000",
  },
  {
    img: "/assets/img/card-5.png",
    name: "Мрачный ронин",
    price: "53000",
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
  height: 113.5rem;
  top: -11rem;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.hero-try{
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  min-width: 1289px;
}
.hero_btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 0.4rem solid rgb(254, 128, 255);
  border-radius: 2.5rem;
  z-index: 2;
  min-width: 28.9rem;
  background: linear-gradient(180deg, #E171E3 0%, #8332ED 100%);
  font-size: 3rem;
  font-family: $font_5;
  text-transform: uppercase;
  a {
    padding: 1.6rem 3.6rem 1.8rem 3.6rem;
    @include flex-center;
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
}

.popular {
  position: relative;
  margin-bottom: 14rem;

  &.first {
    margin-bottom: 10rem;
  }
}

.card_product__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17%, 1fr));
  grid-gap: 4.4rem;
  padding: 0 5rem;
  max-width: 182.1rem;
  margin: 0 auto;
}
</style>
