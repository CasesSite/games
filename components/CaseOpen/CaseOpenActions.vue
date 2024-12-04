<template>
  <div>
    <div class="info" v-if="!isAuthorizedUser">
      <div class="case-info__message">
        <p class="message-title">ВЫ НЕ АВТОРИЗОВАНЫ!</p>
        <p class="message-desc">Авторизируйтесь, чтобы открыть кейс</p>
      </div>
      <div class="hero_btn">
        <NuxtLink to="/not-authorized"> ВОЙТИ </NuxtLink>
      </div>
    </div>
    <!--    <div class="info" v-else-if="isNotEnoughMoney">-->
    <!--      <div class="case-info__message">-->
    <!--        <p class="message-title">-->
    <!--          Не хватает  dsadas100 000 {{ amount }}-->
    <!--          <img-->
    <!--              class="star-icon"-->
    <!--              src="@/assets/img/header/header-logo.svg"-->
    <!--              alt="Star Icon"-->
    <!--          />-->
    <!--        </p>-->
    <!--        <p class="message-desc">Недостаточно средств для открытия кейса</p>-->
    <!--      </div>-->
    <!--      <div class="hero_btn">-->
    <!--        <NuxtLink to="/account/payment">ПОПОЛНИТЬ БАЛАНС</NuxtLink>-->
    <!--      </div>-->
    <!--    </div>-->
    <div v-else class="case-info__actions">
      <div class="btn-wrapper">
        <span @click="onCountChange(1)" class="x-btn" :class="{ 'active-btn': boxCount === 1, disabled: disabled }">X1</span>
        <span @click="onCountChange(2)" class="x-btn" :class="{ 'active-btn': boxCount === 2, disabled: disabled }">X2</span>
        <span @click="onCountChange(3)" class="x-btn" :class="{ 'active-btn': boxCount === 3, disabled: disabled }">X3</span>
        <span @click="onCountChange(4)" class="x-btn" :class="{ 'active-btn': boxCount === 4, disabled: disabled }">X4</span>
        <span @click="onCountChange(5)" class="x-btn" :class="{ 'active-btn': boxCount === 5, disabled: disabled }">X5</span>
      </div>

      <button class="case-action-button sell-btn" :class="{ disabled }" @click="onSpin">
        ОТКРЫТЬ ЗА {{ price }}
        <img
            class="icon"
            src="@/assets/img/header/header-logo.svg"
            alt="Star Icon"
        />
      </button>
      <button class="case-action-button fast-sell-btn" :class="{ disabled }" @click="fastOpen">
        <img
            class="icon lightning-icon"
            src="../../assets/img/header/lightning.svg"
            alt="Lightning Icon"
        />
        БЫСТРОЕ ОТКРЫТИЕ
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import { CaseType } from "~/common/commonTypes"
import {useGlobalStoreRefs} from "~/stores/useGlobalStore";

const props = defineProps<{
  price: number;
  boxCount: number;
  disabled: boolean;
  onCountChange: (val: number) => void;
  onSpin: () => void;
  fastOpen: () => void;
}>();

const { isAuthorizedUser, currentUser } = useGlobalStoreRefs();


const isNotEnoughMoney = computed(() => {
  return currentUser?.value?.result?.currentBalance < props.price;
});


</script>

<style lang="scss" scoped>
.case-info__message {
  background: linear-gradient(0deg, #362F69 0%, #9E6171 100%);
  width: 396px;
  text-align: center;
  padding: 1.6rem 3.6rem 1.8rem 3.6rem;
  border-radius: 10px;
  margin-bottom: 10px;

  .message-title {
    font-family: $font_2;
    font-size: 20px;
    font-weight: 900;
  }
  .message-desc {
    font-family: $font_2;
  }

  @include bp($point_5) {
    width: 325px;
  }
}

.hero_btn {
  cursor: pointer;
  width: 396px;
  border-top: 0.4rem solid rgb(254, 128, 255);
  border-radius: 10px;
  background: linear-gradient(180deg, #F18D72 0%, #C744A3 100%);
  font-size: 20px;
  font-family: $font_5;
  text-transform: uppercase;
  a {
    padding: 1.6rem 3.6rem 1.8rem 3.6rem;
    @include flex-center;
  }

  @include bp($point_5) {
    width: 325px;
  }
}

.case-action-button {
  padding: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: $white;
  font-family: $font_2;
  font-size: 20px;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;

  @include bp($point_5) {
    width: 325px;
  }
}

.case-info__actions {
  @include flex-center;
  gap: 35px;

  @include bp($point_5) {
    flex-direction: column;
    gap: 10px;
  }
}

.case-action-button {
  padding: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: $white;
  font-family: $font_2;
  font-size: 20px;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;

  @include bp($point_5) {
    width: 325px;
  }
}

.sell-btn {
  background: $out;
}

.fast-sell-btn {
  background: $sell;
}

.lightning-icon {
  margin-right: 10px;
  width: 15px;
  height: 24px;
}

.btn-wrapper {
  width: 240px;
  background: $dark-blue-button-bg;
  display: flex;
  padding: 12px 15px;
  gap: 6px;
  border-radius: 10px;
}

.x-btn {
  height: 34px;
  margin: 0;
  width: 37px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5760F0;
  font-size: 14px;
  font-family: $font_2;
  border-radius: 10px;
  color: $white;
  cursor: pointer;
  font-weight: 900;
  line-height: 14px;
}

.active-btn {
  background: $sell;
}

.icon {
  width: 2.5rem;
  height: 2.5rem;
}

.disabled {
  pointer-events: none;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>