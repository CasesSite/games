<template>
  <section class="inventory_main">
    <div class="inventory-content">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['inventory-item', 'inventory-item__big', item.class]"
      >
        <div class="inventory-item__head" v-if="item.showHeader">
          <div class="inventory-item__payment">
            <img :src="item.paymentIcon" alt="Payment Icon" />
          </div>
          <div class="inventory-item__rate">
            {{ item.rate }}
            <img :src="item.rateIcon" alt="Rate Icon" />
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
</template>

<script setup lang="ts">
const items = [
  {
    class: "inventory-item_usual",
    paymentIcon: "/assets/img/profile/card.svg",
    rate: 980,
    rateIcon: "/assets/img/profile/star.svg",
    image: "/assets/img/profile/inventory-item.png",
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_cyan",
    paymentIcon: "/assets/img/profile/card.svg",
    rate: 281,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_violet",
    paymentIcon: "/assets/img/profile/payment-card.svg",
    rate: 984,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_cyan",
    paymentIcon: "/assets/img/profile/card.svg",
    rate: 1290,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_red",
    paymentIcon: "/assets/img/profile/payment-card.svg",
    rate: 333,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_cyan",
    paymentIcon: "/assets/img/profile/card.svg",
    rate: 1290,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_usual",
    paymentIcon: "/assets/img/profile/payment-card.svg",
    rate: 888,
    rateIcon: "/assets/img/profile/star.svg",
    image: "/assets/img/profile/inven-bg-card-1.svg",
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: true,
  },
  {
    class: "inventory-item_usual",
    paymentIcon: "/assets/img/profile/payment-card.svg",
    rate: 787,
    rateIcon: "/assets/img/profile/star.svg",
    image: "/assets/img/profile/inven-bg-card-2.svg",
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: true,
  },
  {
    class: "inventory-item_cyan",
    paymentIcon: "/assets/img/profile/card.svg",
    rate: 1290,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_cyan",
    paymentIcon: "/assets/img/profile/card.svg",
    rate: 1290,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
  {
    class: "inventory-item_red",
    paymentIcon: "/assets/img/profile/payment-card.svg",
    rate: 787,
    rateIcon: "/assets/img/profile/star.svg",
    image: null,
    kind: "Melinor",
    name: "Starned Corbem",
    showHeader: true,
    showPresent: false,
  },
];
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
.inventory-item_usual {
  background: linear-gradient(180deg, #373e96 0%, #1b6ed2 100%);
}
.inventory-item_cyan {
  background: linear-gradient(180deg, #3a7a18 0%, #68b31e 100%);
}
.inventory-item_violet {
  background: linear-gradient(180deg, #7715a6 0%, #b015ec 100%);
}
.inventory-item_grey {
  background: linear-gradient(180deg, #373a75 0%, #656d8d 100%);
}
.inventory-item_gold {
  background: linear-gradient(180deg, #403f70 0%, #a18265 100%);
}
.inventory-item_green {
  background: linear-gradient(180deg, #323a6f 0%, #42983a 100%);
}
.inventory-item_red {
  background: linear-gradient(180deg, #66154f 0%, #d12a52 100%);
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
