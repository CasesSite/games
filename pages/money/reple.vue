<template>
  <div class="balance-recharge">
    <!-- Левый блок - Выбор региона и способа оплаты -->
    <div class="recharge-left">
      <h2>Пополнение баланса</h2>

      <!-- Выбор региона -->
      <div class="region-select">
        <label for="region">Регион оплаты:</label>
        <select id="region">
          <option value="BRUNEI">BRUNEI</option>
          <option value="RUSSIA">RUSSIA</option>
          <!-- Другие регионы -->
        </select>
      </div>

      <!-- Способы оплаты -->
      <div class="payment-methods">
        <div
          class="payment-method"
          v-for="(method, index) in paymentMethods"
          :key="index"
        >
          <img :src="method.logo" alt="Payment method" />
        </div>
      </div>

      <p class="min-amount">Минимальная сумма пополнения: 10 Р</p>
    </div>

    <!-- Правый блок - Ввод промокода, суммы и подтверждение -->
    <div class="recharge-right">
      <div class="selected-method">
        <h3>Выбранный метод оплаты:</h3>
        <div class="selected-method-logo">
          <img src="@/assets/img/modal/yandex.svg" alt="Selected payment" />
        </div>
      </div>

      <!-- Ввод промокода -->
      <div class="promo-code">
        <label for="promo">Промокод (если есть)</label>
        <input type="text" id="promo" />
        <button class="btn-apply">Применить</button>
      </div>

      <!-- Ввод email и суммы -->
      <div class="input-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" />
      </div>

      <div class="input-group">
        <label for="amount">Сумма пополнения</label>
        <input type="number" id="amount" />
      </div>

      <!-- Подтверждение условий -->
      <div class="checkbox">
        <input type="checkbox" id="terms" />
        <label for="terms"
          >Я принимаю условия пользовательского соглашения</label
        >
      </div>

      <!-- Кнопка оплаты -->
      <button class="btn-pay">ПЕРЕЙТИ К ОПЛАТЕ ›</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const paymentMethods = [
  { logo: "@/assets/yoomoney.png" },
  { logo: "@/assets/yoomoney.png" },
  { logo: "@/assets/yoomoney.png" },
  { logo: "@/assets/yoomoney.png" },
];
</script>

<style scoped lang="scss"></style>
