<template>
  <section class="inventory-contracts">
    <div class="inventory__contact">
      <div class="inventory-contact__list">
        <div class="inventory-item__main">
          <div
            class="inventory-item inventory-item_usual inventory-item__contacts"
          >
            <div class="inventory-item__head inventory-contracts__head">
              <div class="inventory-item__payment"></div>
              <div class="inventory-item__rate inventory-contracts-rate">
                980
                <img src="/assets/img/profile/star.svg" alt="" />
              </div>
            </div>
            <div class="inventory-item__img inventory-img">
              <img src="/public/assets/img/profile/inventory-item.png" alt="" />
            </div>
            <div class="inventory-item__kind inventory-contracts__kind">
              Melinor
            </div>
            <div class="inventory-item__name inventory-contracts__name">
              Starned Corbem
            </div>
          </div>
        </div>
        <InventoryContractsSub />
      </div>
      <div class="inventory-contract__info inventory-info">
        <div class="inventory-info__cost">
          Стоимость контракта: <span>91.750</span>
        </div>
        <div class="inventory-info__quality">
          Количество предметов: <span>10</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.inventory-contracts {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.8rem;
  row-gap: 2.8rem;
  background-color: #1b205a;
  padding: 4rem;
  @include bp($point_5) {
    padding: 10px;
  }
}
.inventory__contact {
  background: #141949;
  padding: 2rem 2.8rem 2rem 2.8rem;
  max-width: 680px;
  width: 100%;
  border-radius: 2rem;
  cursor: pointer;
  @include bp($point_5) {
    padding: 10px;
  }
}
.inventory-contact__list {
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 1.2rem;
  @include bp($point_5) {
    column-gap: 5px;
  }
}

.inventory-contract__info {
  background: #1a1e5d;
  border-radius: 1rem;
  padding: 0.8rem 0.8rem 0.8rem 1.5rem;
}
.inventory-info {
  display: flex;
  justify-content: space-between;
  font-family: $font_2;
  font-size: 1.2rem;
  @include bp($point_5) {
    @include flex-col;
    gap: 5px;
  }
}
.inventory-info__cost span {
  font-family: $font_5;
  font-weight: 900;
  font-size: 12px;
}
.inventory-info__quality span {
  font-family: $font_5;
  color: #f08a75;
}
.inventory-img {
  max-width: 120px;
  width: 100%;
  @include bp($point_5) {
    margin-bottom: 2px;
    > img {
      max-width: 70px;
      height: 30px;
      margin-bottom: 2px;
    }
  }
}
.inventory-item__contacts {
  width: 170px;
  height: 170px;
  justify-content: space-between;
  @include bp($point_5) {
    width: 97px;
    height: 102px;
    padding: 9px;
  }
}
.inventory-contracts-rate {
  @include bp($point_5) {
    font-size: 10px;
    > img {
      width: 10px;
    }
  }
}
.inventory-contracts__head {
  @include bp($point_5) {
    margin-bottom: 2px;
  }
}
.inventory-contracts__kind {
  @include bp($point_5) {
    font-size: 10px;
    margin-bottom: 0;
    line-height: 0;
  }
}
.inventory-contracts__name {
  @include bp($point_5) {
    font-size: 10px;
  }
}
</style>
<script setup lang="ts">
import InventoryContractsSub from "~/components/inventory/inventory-contracts-sub.vue";
</script>
