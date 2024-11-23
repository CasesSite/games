<template>
  <main class="container inventory-wrapper">
    <userHead />
    <Tabs />
  </main>
</template>

<script setup lang="ts">
import userHead from "~/components/head/user-head.vue";
import Tabs from "~/components/ui/Tabs.vue";

const items = [
  {
    id: 1,
    name: "Melinor",
    description: "Starned Corbem",
    price: 980,
    image: "@/assets/img/item-1.jpg",
  },
  {
    id: 2,
    name: "Melinor",
    description: "Starned Corbem",
    price: 980,
    image: "@/assets/img/item-2.jpg",
  },
  {
    id: 3,
    name: "Melinor",
    description: "Starned Corbem",
    price: 980,
    image: "@/assets/img/item-3.jpg",
  },
];
</script>

<style scoped lang="scss">
.inventory-wrapper {
  padding: 85px 230px 20px;
  @include bp($point_0) {
    padding: 65px 80px 20px;
  }
  @include bp($point_2) {
    padding: 20px 10px;
  }
}
.inventory-empty {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(24, 27, 87, 0.3) 0%,
    rgba(137, 86, 111, 0.6) 100%
  );
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 4.2rem 3rem 5.1rem 5.4rem;
}
.inventory-empty__info {
  display: flex;
  align-items: center;
}
.inventory-empty__icon {
  width: 5.6rem;
  height: 5.6rem;
  margin-right: 2.7rem;
}
.inventory-empty__icon img {
  width: 100%;
}
.inventory-empty__text h3 {
  font-family: "Exo2-bold";
  font-size: 2.3rem;
  line-height: 2.9rem;
}
.inventory-empty__text p {
  font-family: "Exo2-medium";
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: #b0b3e2;
}
.inventory-empty button {
  height: 5rem;
  width: 291px;
  font-size: 1.9rem;
  line-height: 1.9rem;
  position: relative;
}
.inventory-empty button:after {
  content: "›";
  position: absolute;
  font-size: 1.8rem;
  line-height: 2rem;
  top: 1.4rem;
  right: 9rem;
  transition: all 0.2s ease-in-out;
}
.inventory-empty button:hover:after {
  right: 8rem;
}
</style>
