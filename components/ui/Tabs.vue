<template>
  <div class="tabs-actions">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabStore.tabs"
        :key="index"
        :class="{ active: tabStore.activeTab === tab }"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </button>
    </div>

    <div class="controls">
      <div class="sell-toggle">
        <label for="sell">
          Можно продать
          <input type="checkbox" id="sell" name="sell" v-model="canSell" />
          <span></span>
        </label>
      </div>
      <button class="but-out">ВЫВЕСТИ</button>
      <button class="but-sell">ПРОДАТЬ ВСЕ</button>
    </div>
  </div>

  <component :is="activeComponent" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTabStore } from "@/stores/useTabStore";
import InventoryContracts from "@/components/inventory/inventory-contracts.vue";
import InventoryUpgrades from "@/components/inventory/inventory-upgrades.vue";
import InventoryMain from "@/components/inventory/inventory-main.vue";
import InventoryConclusions from "@/components/inventory/conclusions.vue";

const tabStore = useTabStore();

const tabComponents = {
  "Мой инвентарь": InventoryMain,
  Апгрейды: InventoryUpgrades,
  Контракты: InventoryContracts,
  Выводы: InventoryConclusions,
};

const activeComponent = computed(() => tabComponents[tabStore.activeTab]);

const selectTab = (tab: string) => {
  tabStore.setActiveTab(tab);
};
</script>

<style scoped lang="scss">
.tabs-actions {
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  background: #1b205a;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  @include bp($point_3) {
    display: block;
    padding: 20px 10px;
  }
}

.tabs {
  @include flex-center;
  gap: 10px;

  @include bp($point_3) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    & > :nth-child(1) {
      grid-column: span 2;
    }

    & > :nth-child(4) {
      grid-column: span 2;
    }
  }
}

.tabs button {
  background: #1b205a;
  border-radius: 10px;
  padding: 10px 20px;
  min-height: 50px;
  color: #fff;
  cursor: pointer;
  transition:
    background 0.3s ease,
    padding 0.2s ease-in;
  font-family: $font_2;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: 2px solid #383d91;
}

.tabs button.active {
  border: none;
  background: linear-gradient(0deg, #362f69 0%, #9e6171 100%);
}

.controls {
  @include flex-center;
  gap: 1.5rem;
  @include bp($point_3) {
    padding-top: 24px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}

.controls button {
  height: 5rem;
}

.sell-toggle {
  display: flex;
  align-items: center;
  color: #fff;
  font-family: $font_3;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  margin-right: 6rem;
}
.sell-toggle label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.sell-toggle span {
  display: inline-block;
  width: 49px;
  height: 31px;
  background: #49386b;
  border-radius: 5rem;
  position: relative;
  margin-left: 0.5rem;
}
.sell-toggle input {
  display: none;
}
.sell-toggle input + span:after {
  position: absolute;
  content: "";
  width: 17px;
  height: 17px;
  top: 7px;
  left: 4px;
  border-radius: 87px;
  transition: left 0.3s ease-in-out;
  background: linear-gradient(180deg, #f18d74 0%, #cb4b9e 100%);
}
.sell-toggle input:checked + span:after {
  left: 23px;
}
.tabs button img {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  vertical-align: middle;
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
