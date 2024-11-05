<template>
  <div class="home">
    <section class="hero">
      <div class="hero_main">
        <div class="hero_img">
          <img src="../assets/img/hero.png" alt="" />
        </div>
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
  top: -25rem;
  position: absolute;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero_btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: 0.4rem solid rgb(254, 128, 255);
  border-radius: 5rem;
  z-index: 2;
  min-width: 28.9rem;

  background: linear-gradient(
    180deg,
    rgb(225, 113, 227),
    rgb(131, 50, 237) 100%
  );
  font-size: 3rem;
  font-family: $font_5;
  text-transform: uppercase;
  a {
    padding: 1.6rem 3.6rem 1.8rem 3.6rem;
    @include flex-center;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/decorator/hero-btn.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    content: "";
    pointer-events: none;
  }
}

.rounde {
  position: absolute;
  top: calc(50% - 0.2rem);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30.7rem;
  height: 8.8rem;
  background-color: rgba(255, 255, 255, 0.31);
  border-radius: 10rem;
  z-index: -1;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32.4rem;
    height: 10.3rem;
    content: "";
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 10rem;
  }
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
