<template>
  <div class="case-container">
    <p class="case-top-back">
      <button @click="goBack">
        <Icon
            name="mdi:chevron-down"
            style="transform: rotate(90deg); padding-top: 2px"
        />
        Назад
      </button>
      <img src="/assets/img/prefooter/wave.svg" alt="wave" />
    </p>

    <div class="case-info">
      <CaseOpening
          v-if="caseStore?.currentCase"
          :data="caseStore?.currentCase"
          :caseImg="caseStore?.currentCase.image"
          :items="caseStore?.currentCase.items"
          :caseId="caseStore?.currentCase.id"
      />
    </div>

    <h3 class="case-content-title">СОДЕРЖИМОЕ КЕЙСА</h3>

    <div class="case-content-grid">
      <CaseItem
          v-if="caseStore.currentCase"
          v-for="(caseItem) in caseStore.currentCase.items"
          :key="caseItem.id"
          :img="caseItem.image"
          :name="caseItem.name"
          :rarity="caseItem.rarity"
          :game="caseItem.game"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CaseItem from "~/components/cards/CaseItem.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useCurrentCaseStore } from "~/stores/useCurrentCaseStore";
import CaseOpening from "~/components/CaseOpen/CaseOpening.vue";


const router = useRouter();
const caseStore = useCurrentCaseStore();


onMounted(async () => {
  try {
    const response = await axios.get(`https://dev.24cases.ru/v1/cases/get/${router.currentRoute.value.params.id}`)
    console.log('response', response.data);
    caseStore.setCaseData(response.data as CaseItem);
  } catch (error) {
    await router.push('/')
  }
});

const goBack = () => {
  router.go(-1); // Go back to the previous page
};

</script>

<style scoped lang="scss">

.case-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 10px 40px 10px;
  border-radius: 10px;
}

.case-top-back {
  @include flex-space;
  padding: 20px 0;
  width: 100%;
  > button {
    @include flex-center;
    cursor: pointer;
    align-items: center;
    width: 155px;
    height: 50px;
    border-radius: 13px;
    color: $white;
    background-color: #fefefe0d;
    font-family: $font_2;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }
}

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

.case-content-title {
  text-align: center;
  font-family: $font_2;
  font-weight: 900;
  font-size: 26px;
  margin: 85px auto 54px;
}

.case-content-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px 35px;
  flex-wrap: wrap;

  @include bp($point_5) {
    gap: 5px;
  }
}

.case-item {
  @include flex-center;
  flex-direction: column;
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

</style>
