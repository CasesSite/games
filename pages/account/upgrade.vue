<template>
  <div class="inventory">
    <div class="container">
      <userHead />
      <Tabs />
      <div class="upgrades-grid">
        <div
          class="upgrade-card"
          v-for="(upgrade, index) in upgrades"
          :key="index"
        >
          <div class="card-header">
            <p>Ваша ставка</p>
            <p>Апгрейд</p>
          </div>

          <div class="card-content">
            <img :src="upgrade.image" :alt="upgrade.name" class="item-image" />
            <div class="item-details">
              <p class="item-name">{{ upgrade.name }}</p>
              <p class="item-price">{{ upgrade.price }} Р</p>
            </div>
          </div>

          <div class="card-footer">
            <p class="chance">
              Шанс: <span>{{ upgrade.chance }}%</span>
            </p>
            <button :class="upgrade.status === 'win' ? 'btn-win' : 'btn-lose'">
              {{ upgrade.status === "win" ? "ВЫИГРЫШ" : "ПРОИГРЫШ" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userHead from "~/components/head/user-head.vue";
import Tabs from "~/components/ui/Tabs.vue";

const upgrades = [
  {
    name: "Melinor Starned Corbem",
    price: 980,
    chance: 93.5,
    status: "lose",
    image: "@/assets/item-1.jpg",
  },
  {
    name: "Melinor Starned Corbem",
    price: 980,
    chance: 93.5,
    status: "win",
    image: "@/assets/item-2.jpg",
  },
  {
    name: "Melinor Starned Corbem",
    price: 980,
    chance: 93.5,
    status: "lose",
    image: "@/assets/item-1.jpg",
  },
];
</script>

<style scoped lang="scss"></style>
