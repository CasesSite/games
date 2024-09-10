<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero_main">
          <div class="hero_socials">
            <Socials />
          </div>
          <div class="hero_btn"><NuxtLink to="/"> Попробовать </NuxtLink></div>
        </div>
      </div>
    </section>
    <section class="popular">
      <sectionHead
        title="ПОПУЛЯРНЫЕ КЕЙСЫ"
        subtitle="Забери AWP Asimov за минуту"
      />
      <ul class="card_product__lis">
        <li v-for="(item, i) in 5" :key="'popular-item-' + i">
          <CardProduct />
        </li>
      </ul>
    </section>
    <section class="popular">
      <sectionHead
        title="ГЕРОИЧЕСКИЕ НАБОРЫ"
        subtitle="Забери AWP Asimov за минуту"
      />
      <ul class="card_product__lis">
        <li v-for="(item, i) in 10" :key="'popular-item-' + i">
          <CardProduct />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import sectionHead from "~/components/head/section-head.vue";
import CardProduct from "~/components/cards/CardProduct.vue";
import Socials from "~/components/shared/Socials.vue";
</script>

<style scoped lang="scss"></style>
