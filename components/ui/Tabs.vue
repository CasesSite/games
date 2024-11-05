<template>
  <div class="tabs-actions">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === tab }"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </button>
    </div>

    <div class="controls">
      <div class="sell-toggle">
        <label for="sell">Можно продать
        <input type="checkbox" id="sell" name="sell" v-model="canSell" />
        <span></span>
        </label>
      </div>

      <button class="but-out">ВЫВЕСТИ</button>
      <button class="but-sell">ПРОДАТЬ ВСЕ</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tabs = ["Мой инвентарь", "Апгрейды", "Контракты"];
const activeTab = ref(tabs[0]);
const canSell = ref(false);

const selectTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<style scoped lang="scss">
.tabs-actions {
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  background: #1B205A;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}

.tabs {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tabs button {
  background: #1B205A;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  height: 5rem;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease, padding .2s ease-in;
  padding: 1.5rem;
  font-family: "Exo2-bold",sans-serif;
  font-size: 1.6rem;
  line-height: 1.6rem;
}

.tabs button.active {
  background: linear-gradient(0deg, #362F69 0%, #9E6171 100%);
  padding: 1.7rem;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.controls button{
  height: 5.0rem;
}

.sell-toggle {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.4rem;
  font-family: "Exo2-medium";
  margin-right: 6rem;
}
.sell-toggle label {
  display: flex;
  align-items: center;
  cursor: pointer
}
.sell-toggle span {
  display: inline-block;
  width: 2.8rem;
  height: 1.8rem;
  background: #49386B;
  border-radius: 5rem;
  position: relative;
  margin-left: 0.5rem;
}
.sell-toggle input {
  display: none;
}
.sell-toggle input + span:after {
  position: absolute;
  content: '';
  width: 1rem;
  height: 1rem;
  top: 0.4rem;
  left: 0.4rem;
  border-radius: 50%;
  transition: left .3s ease-in-out;
  background: linear-gradient(180deg, #F18D74 0%, #CB4B9E 100%);
}
.sell-toggle input:checked + span:after {
  left: 1.4rem
}
// .sell-toggle label {
//   margin-right: 10px;
// }

// .btn-exit,
// .btn-sell {
//   padding: 10px 20px;
//   border: none;
//   border-radius: 10px;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }

// .btn-exit {
//   background: linear-gradient(90deg, #ff6f6f, #ff8c8c);
// }

// .btn-sell {
//   background: linear-gradient(90deg, #8c52ff, #aa6fff);
// }
</style>
