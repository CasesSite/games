<template>
  <div class="balance-recharge">
    <!-- Left block - Region selection and payment method -->
    <div class="recharge-left">
      <h2>Пополнение баланса</h2>

      <!-- Region selection -->
      <div class="region-select">
        <label for="region">Регион оплаты:</label>
        <select id="region" v-model="selectedRegion">
          <option value="BRUNEI">BRUNEI</option>
          <option value="RUSSIA">RUSSIA</option>
          <!-- Other regions -->
        </select>
      </div>

      <!-- Payment methods -->
      <div class="payment-methods">
        <div
          class="payment-method"
          v-for="(method, index) in paymentMethods"
          :key="index"
          @click="selectPaymentMethod(index)"
          :class="{ selected: selectedMethodIndex === index }"
        >
          <img :src="method.logo" alt="Payment method" />
        </div>
      </div>

      <p class="min-amount">Минимальная сумма пополнения: 10 Р</p>
    </div>

    <!-- Right block - Promo code, amount, and confirmation -->
    <div class="recharge-right">
      <div class="selected-method">
        <h3>Выбранный метод оплаты:</h3>
        <div class="selected-method-logo">
          <img
            v-if="selectedMethod"
            :src="selectedMethod.logo"
            alt="Selected payment"
          />
        </div>
      </div>

      <!-- Promo code -->
      <div class="promo-code">
        <label for="promo">Промокод (если есть)</label>
        <input type="text" id="promo" v-model="promoCode" />
        <button class="btn-apply">Применить</button>
      </div>

      <!-- Email and amount -->
      <div class="input-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="input-group">
        <label for="amount">Сумма пополнения</label>
        <input type="number" id="amount" v-model="amount" />
      </div>

      <!-- Terms agreement -->
      <div class="checkbox">
        <input type="checkbox" id="terms" v-model="acceptTerms" />
        <label for="terms"
          >Я принимаю условия пользовательского соглашения</label
        >
      </div>

      <button class="btn-pay" @click="submitRecharge()">
        ПЕРЕЙТИ К ОПЛАТЕ ›
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/useGlobalStore";
import { ref, computed } from "vue";
import axiosClient from "@/helper/axiosClient";

const globalStore = useGlobalStore();

const paymentMethods = [
  { logo: "@/assets/yoomoney.png" },
  { logo: "@/assets/yoomoney.png" },
  { logo: "@/assets/yoomoney.png" },
  { logo: "@/assets/yoomoney.png" },
];

const selectedRegion = ref("BRUNEI");
const selectedMethodIndex = ref<number | null>(null);
const selectedMethod = computed(() =>
  selectedMethodIndex.value !== null
    ? paymentMethods[selectedMethodIndex.value]
    : null,
);
const promoCode = ref("");
const email = ref("");
const amount = ref<number | null>(null);
const acceptTerms = ref(false);

function selectPaymentMethod(index: number) {
  selectedMethodIndex.value = index;
}

async function submitRecharge() {
  const data = {
    userId: "5e1eb899-6e76-432c-84e6-1b374a96c201",
    financialDataId: "",
    balanceBefore: "0",
    balanceAfter: "0",
    amount: 600,
    type: 0,
    paymentType: 1,
  };

  try {
    await axiosClient.post("/finance/transaction", data);
    console.log("Recharge successful:", response.data);
  } catch (error) {
    console.error(
      "Error during recharge:",
      error.response?.data || error.message,
    );
  }
}
</script>

<style scoped lang="scss">
.balance-recharge {
  display: flex;
  justify-content: space-between;
}

.payment-method.selected {
  border: 2px solid blue;
}
</style>
