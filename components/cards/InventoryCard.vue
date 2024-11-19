<template>
  <div
    class="inventory-item"
    :class="itemClass"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="inventory-item__head">
      <div class="inventory-item__payment">
        <img :src="paymentIcon" alt="Payment Icon" />
      </div>
      <div class="inventory-item__rate">
        {{ price }}
        <img src="/assets/img/profile/star.svg" alt="Star" />
      </div>
    </div>
    <div class="inventory-item__img">
      <img :src="image" alt="Item Image" />
    </div>
    <div class="inventory-item__kind">{{ kind }}</div>
    <div class="inventory-item__name">{{ name }}</div>
    <div class="inventory-item__cover" v-if="hover">
      <button class="but-sell" @click="sell">Продать</button>
      <button class="but-out" @click="withdraw">Вывести</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  kind: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  itemClass: { type: String, default: "inventory-item_usual" },
  paymentIcon: { type: String, default: "/public/assets/img/profile/card.svg" },
});

const emit = defineEmits(["sell", "withdraw"]);

const hover = ref(false);

const sell = () => emit("sell", { name: props.name });
const withdraw = () => emit("withdraw", { name: props.name });
</script>

<style scoped>
.inventory-item {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.inventory-item:hover {
  transform: translateY(-5px);
}

.inventory-item__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}

.inventory-item__rate {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
}

.inventory-item__img img {
  width: 100%;
}

.inventory-item__kind {
  color: #a0bcfa;
  font-size: 1.4rem;
}

.inventory-item__name {
  font-size: 1.4rem;
  color: #fff;
}

.inventory-item__cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.inventory-item:hover .inventory-item__cover {
  opacity: 1;
}

.but-sell {
  background-color: #ff5e5e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.but-out {
  background-color: #56d3ff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
