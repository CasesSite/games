<template>
  <div class="case-top">
    <h2 class="case-title">{{ props.data?.name }}</h2>
    <p class="case-subtitle">Кейс</p>
  </div>

  <div class="case-info">
    <div v-if="isOpening">
      <CaseOpening :caseImg="props.data.image" :items="props.data.items" />
    </div>
    <div class="info" v-else>
      <img :src="props.data.image" alt="Case Image" class="case-image"/>
      <div v-if="!isAuth">
        <div class="case-info__message">
          <p class="message-title">ВЫ НЕ АВТОРИЗОВАНЫ!</p>
          <p class="message-desc">Авторизируйтесь, чтобы открыть кейс</p>
        </div>
        <div class="hero_btn">
          <NuxtLink to="/"> ВОЙТИ </NuxtLink>
        </div>
      </div>
      <div v-else-if="notEnoughMoney">
        <div class="case-info__message">
          <p class="message-title">
            Не хватает {{ amount }}
            <img
                class="star-icon"
                src="@/assets/img/header/header-logo.svg"
                alt="Star Icon"
            />
          </p>
          <p class="message-desc">Недостаточно средств для открытия кейса</p>
        </div>
        <div class="hero_btn">
          <NuxtLink to="/">ПОПОЛНИТЬ БАЛАНС</NuxtLink>
        </div>
      </div>
      <div v-else class="case-info__actions">
        <button class="case-action-button sell-btn" @click="open">
          ОТКРЫТЬ ЗА 980
          <img
              class="icon"
              src="@/assets/img/header/header-logo.svg"
              alt="Star Icon"
          />
        </button>
        <button class="case-action-button fast-sell-btn" @click="withdraw">
          <img
              class="icon lightning-icon"
              src="../../assets/img/header/lightning.svg"
              alt="Lightning Icon"
          />
          БЫСТРОЕ ОТКРЫТИЕ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { CaseType } from "~/common/commonTypes"
import CaseOpening from "~/components/CaseOpen/CaseOpening.vue";

const props = defineProps<{
  data: CaseType;
}>();


const isOpening = ref(false);

const notEnoughMoney = false; // TODO: remove hardcode after adding userStore
const isAuth = true; // TODO: remove hardcode after adding userStore
const amount = 4; // TODO: remove hardcode after adding userStore

const open = () => {
  isOpening.value = true;
}

</script>

<style lang="scss" scoped>
.case-top {
  @include flex-center;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 20px;
}

.case-title {
  text-align: center;
  font-size: 37px;
  font-family: $font_2;
  font-weight: 900;
}

.case-subtitle {
  text-align: center;
  font-family: $font_2;
  font-size: 16px;
  color: $grey-text;
}

.case-info {
  min-height: 300px;
  @include flex-center;
  flex-direction: column;
}

.case-image {
  max-width: 340px; // 500px;
  @include bp($point_5) {
    width: 100%;
  }
}

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

.icon {
  width: 20px;
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
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: #fff;
  font-family: $font_5;
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

.info {
  text-align: center;
}

</style>