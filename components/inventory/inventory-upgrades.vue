<template>
  <section class="inventory-upgrades">
    <div class="inventory-upgrade__item inventory-upgrade__item_win">
      <div class="inventory-upgrade__column">
        <div class="inventory-upgrade__title">Ваша ставка</div>
        <div class="inventory-item_usual inventory-upgrade__item-one">
          <div class="inventory-item__head">
            <div class="inventory-item__payment"></div>
            <div class="inventory-item__rate">
              980
              <img src="/assets/img/profile/star.svg" alt="" />
            </div>
          </div>
          <div class="inventory-item__img">
            <img src="/public/assets/img/profile/inventory-item.png" alt="" />
          </div>
          <div class="inventory-item__kind">Melinor</div>
          <div class="inventory-item__name">Starned Corbem</div>
        </div>
        <div class="inventory-upgrade__footer">
          Шанс&nbsp;<span>12.5%</span>
        </div>
      </div>
      <div class="inventory-upgrade__column inventory-upgrade__res">
        <div class="inventory-upgrade__title">Апгрейд</div>
        <div
          class="inventory-item__big inventory-item_usual inventory-upgrade__item-one"
        >
          <div class="inventory-item__head">
            <div class="inventory-item__payment"></div>
            <div class="inventory-item__rate">
              980
              <img src="/assets/img/profile/star.svg" alt="" />
            </div>
          </div>
          <div class="inventory-item__img">
            <img src="/public/assets/img/profile/inventory-item.png" alt="" />
          </div>
          <div class="inventory-item__kind">Melinor</div>
          <div class="inventory-item__name">Starned Corbem</div>
        </div>
        <div class="inventory-upgrade__footer">Выигрыш</div>
      </div>
    </div>

    <div class="inventory-upgrade__item inventory-upgrade__item_lose">
      <div class="inventory-upgrade__column">
        <div class="inventory-upgrade__title">Ваша ставка</div>
        <div
          class="inventory-item__big inventory-item_usual inventory-upgrade__item-one"
        >
          <div class="inventory-item__head">
            <div class="inventory-item__payment"></div>
            <div class="inventory-item__rate">
              980
              <img src="/assets/img/profile/star.svg" alt="" />
            </div>
          </div>
          <div class="inventory-item__img">
            <img src="/public/assets/img/profile/inventory-item.png" alt="" />
          </div>
          <div class="inventory-item__kind">Melinor</div>
          <div class="inventory-item__name">Starned Corbem</div>
        </div>
        <div class="inventory-upgrade__footer">
          Шанс&nbsp;<span>93.5%</span>
        </div>
      </div>
      <div class="inventory-upgrade__column inventory-upgrade__res">
        <div class="inventory-upgrade__title">Апгрейд</div>
        <div
          class="inventory-item__big inventory-item_usual inventory-upgrade__item-one"
        >
          <div class="inventory-item__head">
            <div class="inventory-item__payment"></div>
            <div class="inventory-item__rate">
              980
              <img src="/assets/img/profile/star.svg" alt="" />
            </div>
          </div>
          <div class="inventory-item__img">
            <img src="/public/assets/img/profile/inventory-item.png" alt="" />
          </div>
          <div class="inventory-item__kind">Melinor</div>
          <div class="inventory-item__name">Starned Corbem</div>
        </div>
        <div class="inventory-upgrade__footer">Проигрыш</div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.inventory-upgrades {
  display: flex;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 2.5rem;
  background-color: #1b205a;
  padding: 4rem;
  @include bp($point_5) {
    padding: 10px;
  }
}
.inventory-upgrade__item {
  max-width: 450px;
  width: 100%;
  background: #161953;
  padding: 1.8rem 0 0 0;
  @include flex-space;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &-one {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    padding: 1.2rem 0.9rem 2rem 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 170px !important;
    height: 160px !important;
    background: linear-gradient(180deg, #373e96 0%, #1b6ed2 100%);

    @include bp($point_6) {
      width: 140px !important;
      height: 140px !important;
    }
  }
}
.inventory-upgrade__item:hover {
  transform: translateY(-0.4rem);
}
.inventory-upgrade__column {
  @include flex-col;
  @include flex-space;
  max-width: 230px;
  width: 100%;
}

.inventory-upgrade__title {
  font-family: $font_2;
  font-size: 14px;
  font-weight: 600;
  line-height: 18.79px;
  text-align: center;
  margin-bottom: 2rem;
}
.inventory-upgrade__footer {
  @include flex-center;
  font-family: $font_5;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 2.3rem;
  height: 6.8rem;
  width: 100%;
  & span {
    font-weight: 900;
  }
}
.inventory-upgrade__item_lose
  .inventory-upgrade__res
  .inventory-upgrade__footer {
  background: linear-gradient(
    180deg,
    rgba(24, 27, 87, 0) 0%,
    rgba(254, 44, 72, 0.25) 100%
  );
  font-family: $font_6;
  color: #dd6b89;
}
.inventory-upgrade__item_win
  .inventory-upgrade__res
  .inventory-upgrade__footer {
  background: linear-gradient(
    180deg,
    rgba(24, 27, 87, 0) 0%,
    rgba(110, 226, 48, 0.3) 100%
  );
  font-family: "Exo2-bold", sans-serif;
  color: #a0fe2c;
}
.inventory-upgrade__item_lose:after {
  content: "";
  position: absolute;
  background: url("/public/assets/img/profile/downgrade.svg");
  width: 26px;
  height: 26px;
  top: 44%;
  left: 47%;
}
.inventory-upgrade__item_win:after {
  content: "";
  position: absolute;
  background: url("/public/assets/img/profile/upgrade.svg");
  width: 26px;
  height: 26px;
  top: 44%;
  left: 47%;
}
.inventory-upgrade__item_lose span {
  font-family: $font_6;
  color: #dd6b89;
}
.inventory-upgrade__item_win span {
  font-family: $font_6;
  color: #ffdd55;
}
</style>
