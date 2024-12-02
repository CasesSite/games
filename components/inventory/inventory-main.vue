<template>
  <section v-if="items" class="inventory_main">
    <div class="inventory-content">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'inventory-item',
          'inventory-item__big',
          getColorClass(item.rarity),
        ]"
      >
        <div class="inventory-item__head">
          <div class="inventory-item__payment">
            <img src="/assets/img/profile/card.svg" alt="Payment Icon" />
          </div>
          <div class="inventory-item__rate">
            {{ item.sellPrice }}
            <img src="/assets/img/profile/star.svg" alt="Rate Icon" />
          </div>
        </div>
        <div class="inventory-item__img">
          <img
            :class="item.showPresent ? 'inventory-item__showPresent' : ''"
            :src="item.image || '/assets/img/profile/inventory-item.png'"
            alt="Item Image"
          />
        </div>
        <div :class="item.showPresent ? 'inventory-item_bg' : ''">
          <div
            :class="
              item.showPresent
                ? 'inventory-item__show-kind'
                : 'inventory-item__kind'
            "
          >
            {{ item.kind }}
          </div>
          <div
            :class="
              item.showPresent
                ? 'inventory-item__show-name'
                : 'inventory-item__name'
            "
          >
            {{ item.name }}
          </div>
        </div>

        <div class="inventory-item__cover">
          <button class="but-sell">Продать</button>
          <button class="but-out">Вывести</button>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="inventory-content">
    <EmptyInventory />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { getCurrentUser as fetchCurrentUser } from "~/services/authService";
import { CaseItemRarity } from "~/common/commonTypes";
import axiosClient from "~/helper/axiosClient";
import EmptyInventory from "~/pages/account/empty-inventory.vue";

const items = ref([]);

async function logCurrentUser() {
  try {
    const user = await fetchCurrentUser();
    console.log("Current User:", user);
    await getAllUserInventoryItems(user);
  } catch (error) {
    if (error.status === 401) {
      return $router.push("/not-authorized");
    }
    console.error("Error fetching current user:", error);
  }
}

async function getAllUserInventoryItems(user) {
  const userInventoryItems = user.result.userInventory.itemsUserInventory;
  console.log(userInventoryItems.length, "items");
  const requests = userInventoryItems.map((item) =>
    axiosClient.get(`/items/get/${item.itemId}`),
  );

  try {
    const responses = await Promise.all(requests);
    items.value = responses.map((response, index) => ({
      ...userInventoryItems[index],
      ...response.data,
    }));
  } catch (error) {
    console.error("Failed to fetch one or more items", error);
  }
}
function getColorClass(rarity) {
  switch (rarity) {
    case CaseItemRarity.Primary:
      return "color_primary";
    case CaseItemRarity.Rare:
      return "color_rare";
    case CaseItemRarity.SuperRare:
      return "color_superRare";
    case CaseItemRarity.Epic:
      return "color_epic";
    case CaseItemRarity.Mif:
      return "color_mif";
    case CaseItemRarity.Legend:
      return "color_legend";
    default:
      return "color_primary";
  }
}

onMounted(() => {
  logCurrentUser();
});
</script>

<style lang="scss">
.inventory_main {
  background: #1b205a;
  padding: 3rem 2.9rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  @include bp($point_4) {
    padding: 0;
  }
}
.inventory-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  @include bp($point_4) {
    padding: 20px 10px;
    gap: 0.5rem;
  }
}
.inventory-item {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  padding: 1.2rem 0.9rem 2rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 205px;
  max-width: 400px;
  box-sizing: border-box;

  @include bp($point_6) {
    flex: 1 1 160px;
    max-width: 110px;
  }
}
.inventory-item__big {
  max-width: 205px;
  width: 100%;
}
.inventory-item__small .inventory-item__img {
  width: 5.5rem;
  height: 2.5rem;
  margin-bottom: 0;
}
.inventory-item__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}
.inventory-item__rate {
  @include flex-center;
  font-family: $font_5;
  position: relative;
  font-size: 16.75px;
  font-weight: 900;
  line-height: 15.55px;
}
.inventory-item__rate img {
  width: 20px;
  height: 19px;
  margin-left: 0.5rem;
}
.inventory-item__img {
  max-width: 12.4rem;
  width: 100%;
  margin-bottom: 0.8rem;
  position: relative;
}
.inventory-item__img img {
  width: 100%;
  height: 100%;
}
.inventory-item_bg {
  background: linear-gradient(
    180deg,
    rgba(41, 85, 179, 0) 0%,
    rgba(41, 85, 179, 0.68) 30.05%,
    rgba(0, 4, 40, 0.68) 87.1%
  );
  height: 100px;
  width: 110%;
  position: absolute;
  bottom: 0;
}
.inventory-item__kind,
.inventory-item__show-kind {
  color: $white;
  font-size: 16px;
  font-weight: 500;
  line-height: 17.95px;
  text-align: center;
  font-family: $font_2;
  margin-bottom: 5px;
}
.inventory-item__show-kind {
  position: absolute;
  bottom: 3.5rem;
  left: 37%;
}
.inventory-item__name,
.inventory-item__show-name {
  font-family: $font_3;
  font-size: 16px;
  font-weight: 700;
  line-height: 16.75px;
  text-align: center;
}
.inventory-item__show-name {
  text-align: center;
  position: absolute;
  bottom: 1rem;
  left: 24%;
}
.inventory-item__cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  content: "";
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  transition: top 0.3s ease-in-out;
  border-radius: 1.5rem;
}
.inventory-item:hover .inventory-item__cover {
  top: 0;
}
</style>
