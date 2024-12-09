<template>
  <div class="payment-wrapper">
    <div class="payment container">
      <div class="payment-head">
        <div class="payment-head__icon">
          <img src="/assets/img/profile/credits.svg" alt="" />
        </div>
        <h1>Пополнение баланса</h1>
      </div>
      <div class="payment-content">
        <div class="payment-regions">
          <div class="payment-regions__dropdown payment-dropdown">
            <div class="payment-dropdown__title">
              <span>Регион оплаты:</span>
            </div>
            <div class="payment-dropdown__value">
              <div class="payment-dropdown__flag">
                <img
                  src="/public/assets/img/profile/deposit-select-icon.png"
                  alt=""
                />
              </div>
              <div class="payment-dropdown__title">Brunei</div>
            </div>
          </div>
          <div class="payment-regions__cards payment-cards">
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
            <div class="payment-card">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
          </div>
          <div class="payment-regions__min">
            Минимальная сумма пополнения:&nbsp;<span>10 ₽</span>
          </div>
        </div>
        <div class="payment-methods">
          <div class="payment-methods__method payment-method">
            <div class="payment-method__params">
              <div class="payment-method__title">Выбранный метод оплаты:</div>
              <div class="payment-method__name">cards</div>
            </div>
            <div class="payment-method_logo">
              <img src="/public/assets/img/profile/umoney.png" alt="" />
            </div>
          </div>
          <!-- Methods -->
          <div class="payments-methods__promo payment-promo">
            <form action="#">
              <input type="text" placeholder="Промокод (если есть)" />
              <button class="but-out">Применить</button>
            </form>
            <div class="payment-promo__banner payment-banner">
              <div class="payment-banner__title">Бонус на пополнение</div>
              <div class="payment-banner__description">+50% к пополнению</div>
              <div class="payment-banner__img">
                <img src="/public/assets/img/profile/wallet.png" alt="" />
              </div>
            </div>
          </div>
          <!-- Promo -->
          <div class="payment-methods__form payment-form">
            <form @submit.prevent="handleSubmit">
              <div class="payment-form__content">
                <label for="email">
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    placeholder="E-mail"
                  />
                </label>
                <label for="sum">
                  <input
                    type="number"
                    id="cost"
                    required
                    v-model="amount"
                    placeholder="Сумма пополнения"
                    class="input-cost"
                  />
                </label>
                <label for="policy" class="label-policy" required>
                  <input type="checkbox" name="policy" id="policy" checked />
                  <span></span> Я принимаю условия
                  <a href="">пользовательского соглашения</a>
                </label>
              </div>
              <button
                class="but-sell payment-form__content-button"
                type="submit"
              >
                Перейти к оплате
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import axiosClient from "~/helper/axiosClient";
import { useGlobalStoreRefs } from "~/stores/useGlobalStore";
import { useRouter } from "vue-router";
import { getCurrentUser } from "~/services/authService";
const router = useRouter();
const { currentUser } = useGlobalStoreRefs();
const id = computed(() => currentUser?.value?.result?.id || 0);
const email = ref(computed(() => currentUser?.value?.result?.email || null));
const amount = ref<number | null>(null);

async function submitRecharge(userId: number, amount: number) {
  const data = {
    userId: userId,
    financialDataId: "",
    balanceBefore: "0",
    balanceAfter: "0",
    amount: amount,
    type: 0,
    paymentType: 1,
  };

  try {
    await axiosClient.post("/finance/transaction", data);
    await getCurrentUser();
    router.push("/account/success");
  } catch (error) {
    console.error(
      "Error during recharge:",
      error.response?.data || error.message,
    );
  }
}
function handleSubmit() {
  if (amount.value !== null) {
    submitRecharge(id.value, amount.value);
  } else {
    console.error("Please enter a valid amount");
  }
}
</script>

<style scoped lang="scss">
.payment-wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 85px 30px;
  margin: auto;
  @include bp($point_3) {
    padding: 40px 10px;
  }
}
.payment {
  background: #1b1f5e;
  padding: 5rem 5rem 4rem 5rem;
  border-radius: 2.5rem;
  @include bp($point_3) {
    padding: 10px;
  }
}
.payment-head {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
}
.payment-head__icon {
  width: 2rem;
  height: 1.7rem;
}
.payment-head__icon img {
  width: 100%;
}
.payment-head h1 {
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin-left: 1rem;
}
.payment-content {
  display: flex;
  justify-content: center;
  gap: 70px;
  @include bp($point_3) {
    flex-direction: column;
    gap: 40px;
  }
}
.payment-regions {
  max-width: 495px;
  width: 100%;
  @include bp($point_3) {
    margin: auto;
  }
}
.payment-regions__dropdown {
  padding: 2.2rem 2.5rem 2.2rem 2.5rem;
  background: #20256e;
  border-radius: 1rem;
  height: 6rem;
}
.payment-methods {
  max-width: 495px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  @include bp($point_3) {
    margin: auto;
  }
}
.payment-dropdown {
  display: flex;
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;
  color: #fff;
}
.payment-dropdown:after {
  content: "";
  position: absolute;
  right: 2.7rem;
  top: 4rem;
  background: url("/public/assets/img/profile/dropdown-angle.png");
  width: 0.9rem;
  height: 0.5rem;
  margin-top: -0.5rem;
}
.payment-dropdown__title {
  margin-right: 1rem;
  font-family: $font_3;
}
.payment-dropdown__title span {
  color: #666999;
}
.payment-dropdown__value {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-family: $font_3;
  color: #ffffff;
  text-transform: uppercase;
}
.payment-dropdown__flag {
  width: 2.5rem;
  height: 1.9rem;
  margin-right: 0.7rem;
}
.payment-dropdown__flag img {
  width: 100%;
}
.payment-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 1.5rem;
  row-gap: 2.2rem;
  margin-bottom: 3rem;
  @include bp($point_3) {
    column-gap: 10px;
    row-gap: 10px;
  }
}
.payment-card {
  width: 154px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #20256e;
  border-radius: 1.5rem;
  cursor: pointer;
  @include bp($point_7) {
    max-width: 95px;
  }
}
.payment-regions__min {
  display: flex;
  font-size: 1.6rem;
  justify-content: center;
  color: #7d82cd;
  font-family: $font_2;
}
.payment-regions__min span {
  font-weight: $font_3;
  color: #fff;
}
.payment-method {
  background: #20256e;
  padding: 4rem 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12.2rem;
  border-radius: 1rem;
  margin-bottom: 2px;
  @include bp($point_7) {
    display: none;
  }
}
.payment-method__title {
  font-family: $font_5;
  font-size: 1.6rem;
  color: #7d82cd;
  margin-bottom: 1rem;
  line-height: 1.6rem;
}
.payment-method__name {
  font-size: 1.6rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  font-family: $font_3;
}
.payment-promo {
  background: #20256e;
  padding: 4rem 4.5rem 1.5rem 4.5rem;
  display: flex;
  flex-direction: column;
  @include bp($point_3) {
    padding: 10px;
  }
}
.payment-promo form {
  display: flex;
  margin-bottom: 2rem;
  @include bp($point_3) {
    flex-direction: column;
    gap: 20px;
  }
}
.payment-promo input {
  width: 35.2rem;
  margin-right: 2.2rem;
  @include bp($point_3) {
    width: 100%;
  }
}
.payment-promo button {
  margin-right: 0;
  height: auto;
  max-height: 5rem;
  @include bp($point_3) {
    width: 100%;
    height: 50px;
  }
}
.payment-banner {
  width: 100%;
  height: 10.3rem;
  background: linear-gradient(
    92.24deg,
    #29479c 2.67%,
    #2b2f72 52.26%,
    #6a4a79 89.58%,
    #db7882 99.6%
  );
  border-radius: 1rem;
  padding: 3rem 0 3rem 3.5rem;
  position: relative;
}
.payment-banner__img {
  position: absolute;
  top: -1.6rem;
  right: 0;
}
.payment-banner__title {
  font-family: $font_5;
  font-size: 1.7rem;
  line-height: 1.7rem;
  margin-bottom: 1rem;
}
.payment-banner__description {
  font-family: $font_3;
  font-size: 1.6rem;
  line-height: 1.6rem;
}
.payment-form__content {
  background: #20256e;
  padding: 4rem 4.5rem 4.3rem 4.5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 3rem;
  @include bp($point_3) {
    padding: 10px;
  }
}
.payment-form__content label {
  width: 100%;
}
#email {
  width: 100% !important;
  margin-bottom: 1.5rem;
}
#cost {
  width: 100% !important;
  margin-bottom: 3.5rem;
}
.payment-form button {
  width: 100%;
  height: 6.5rem;
  font-size: 2rem;
  position: relative;
  @include bp($point_3) {
    height: 55px;
    font-size: 18px;
  }
}
.payment-form button:after {
  content: "›";
  position: absolute;
  font-size: 2rem;
  line-height: 2rem;
  top: 54%;
  right: 19rem;
  transition: all 0.2s ease-in;
  margin-top: -1.4rem;
  @include bp($point_3) {
    font-size: 18px;
    right: unset;
  }
}
.payment-form button:hover:after {
  right: 18.5rem;
  @include bp($point_3) {
    right: 20%;
  }
}
</style>
