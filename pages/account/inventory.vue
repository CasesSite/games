<template>
  <div class="wrapper">
    <div class="inventory">
      <userHead />
        <Tabs />
        <div class="inventory_main">
          <!-- Навигация -->
          <!-- <div class="inventory-nav">
            <button>Мой инвентарь</button>
            <button>Апгрейды</button>
            <button>Контракты</button>
            <button>Crash</button>
            <div>
              <label>Можно продать</label>
              <input type="checkbox" />
            </div>
            <button>ВЫВЕСТИ</button>
            <button>ПРОДАТЬ ВСЕ</button>
          </div> -->

          <!-- Контент инвентаря -->
          <div class="inventory-content">
            <div class="inventory-item" v-for="item in items" :key="item.id">
              <div class="item-image">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="item-details">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-description">{{ item.description }}</p>
              </div>
              <div class="item-actions">
                <p class="item-price">{{ item.price }} Р</p>
                <button>Продать</button>
                <button>Вывести</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
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

<style scoped lang="scss"></style>
