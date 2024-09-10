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
        <label>Можно продать</label>
        <input type="checkbox" v-model="canSell" />
      </div>

      <button class="btn-exit">ВЫВЕСТИ</button>
      <button class="btn-sell">ПРОДАТЬ ВСЕ</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tabs = ["Мой инвентарь", "Апгрейды", "Контракты", "Crash"];
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
  align-items: center;
  padding: 10px;
  background-color: #1c1c3a;
  border-radius: 10px;
}

.tabs {
  display: flex;
  gap: 10px;
}

.tabs button {
  background-color: #373a6d;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tabs button.active {
  background: linear-gradient(90deg, #ff6f6f, #ff8c8c);
}

.controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.sell-toggle {
  display: flex;
  align-items: center;
  color: #fff;
}

.sell-toggle label {
  margin-right: 10px;
}

.btn-exit,
.btn-sell {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-exit {
  background: linear-gradient(90deg, #ff6f6f, #ff8c8c);
}

.btn-sell {
  background: linear-gradient(90deg, #8c52ff, #aa6fff);
}
</style>
