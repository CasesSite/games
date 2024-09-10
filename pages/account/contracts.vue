<template>
  <div class="inventory">
    <div class="container">
      <userHead />
      <Tabs />
      <div class="contracts">
        <div
          class="contract-card"
          v-for="(contract, index) in contracts"
          :key="index"
        >
          <div class="contract-info">
            <img
              :src="contract.image"
              :alt="contract.name"
              class="contract-item-image"
            />
            <div class="contract-item-details">
              <p class="item-name">{{ contract.name }}</p>
              <p class="item-price">{{ contract.price }} Р</p>
            </div>
          </div>

          <div class="contract-items">
            <div
              class="contract-item"
              v-for="(item, itemIndex) in contract.items"
              :key="itemIndex"
            >
              <img :src="item.image" :alt="item.name" class="item-image" />
            </div>
          </div>

          <div class="contract-footer">
            <p class="contract-cost">
              Стоимость контракта: <span>{{ contract.totalPrice }} Р</span>
            </p>
            <p class="contract-quantity">
              Количество предметов: <span>{{ contract.itemCount }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userHead from "~/components/head/user-head.vue";
import Tabs from "~/components/ui/Tabs.vue";

const contracts = [
  {
    name: "Melinor Starned Corbem",
    price: 980,
    totalPrice: 91750,
    itemCount: 10,
    image: "@/assets/item-1.jpg",
    items: [
      { name: "Space Blaster", image: "@/assets/item-1.jpg" },
      { name: "Space Blaster", image: "@/assets/item-2.jpg" },
      { name: "Space Blaster", image: "@/assets/item-3.jpg" },
      { name: "Space Blaster", image: "@/assets/item-4.jpg" },
      { name: "Space Blaster", image: "@/assets/item-5.jpg" },
      { name: "Space Blaster", image: "@/assets/item-6.jpg" },
      { name: "Space Blaster", image: "@/assets/item-7.jpg" },
      { name: "Space Blaster", image: "@/assets/item-8.jpg" },
      { name: "Space Blaster", image: "@/assets/item-9.jpg" },
      { name: "Space Blaster", image: "@/assets/item-10.jpg" },
    ],
  },
];
</script>

<style scoped lang="scss"></style>
