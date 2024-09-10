<template>
  <header>
    <div class="container">
      <div class="header_main">
        <div class="header_top__main">
          <div class="header_action">
            <div class="header_logo">
              <NuxtLink to="/"
                ><img src="@/assets/img/header-logo.png" alt=""
              /></NuxtLink>
            </div>
            <div class="header_btn__group">
              <button type="button" class="primary">
                <Icon name="custom:crown" />
                <p>топ</p>
              </button>
              <button type="button" class="secondary">
                <Icon name="custom:area" />
                <p>все</p>
              </button>
            </div>
          </div>
          <ul class="header_prize__list">
            <li v-for="(item, i) in list" :key="'mini-prize-' + i">
              <MiniPrize :card="item" />
            </li>
          </ul>
          <div class="header__online">
            <CardOnline />
          </div>
        </div>
        <div class="header_bottom__main">
          <nav class="header_nav">
            <NuxtLink
              to="/"
              v-for="(item, i) in nav"
              :key="'header-nav-item-' + i"
            >
              <div class="nav_icon">
                <Icon :name="'custom:' + item.icon" />
              </div>
              <p>{{ item.name }}</p>
            </NuxtLink>
          </nav>
          <LoginBtn />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CardOnline from "../cards/CardOnline.vue";
import MiniPrize from "../cards/MiniPrize.vue";
import LoginBtn from "../ui/LoginBtn.vue";

const list = ref<any>([
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
  { img: "/assets/img/top-img.png", name: "Dream Starter", link: "/" },
]);

const nav = ref<any>([
  { name: "Кейсы", icon: "nav-icon-1", link: "" },
  { name: "бонусы", icon: "nav-icon-2", link: "" },
  { name: "барабан", icon: "nav-icon-3", link: "" },
  { name: "апгрейд", icon: "nav-icon-4", link: "" },
  { name: "контракты", icon: "nav-icon-5", link: "" },
  { name: "квесты", icon: "nav-icon-6", link: "" },
  { name: "crash", icon: "nav-icon-7", link: "" },
]);
</script>

<style scoped lang="scss"></style>
