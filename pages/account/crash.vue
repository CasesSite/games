<template>
  <div class="inventory">
    <div class="container">
      <userHead />
      <Tabs />
      <div class="bets-grid">
        <div class="bet-card" v-for="(bet, index) in bets" :key="index">
          <div class="card-header">
            <p>Ваша ставка</p>
            <p>Выигрыш</p>
          </div>

          <div class="card-content">
            <p class="bet-amount">{{ bet.amount }} Р</p>
            <div v-if="bet.status === 'win'" class="win-box">
              <p class="win-amount">{{ bet.winAmount }} Р</p>
              <p class="win-status">ВЫИГРЫШ</p>
            </div>
            <div v-if="bet.status === 'lose'" class="lose-box">
              <p class="lose-status">ПРОИГРЫШ</p>
            </div>
          </div>

          <div class="card-footer">
            <p>
              Коэффициент: <span>{{ bet.coefficient }}</span>
            </p>
            <button :class="bet.status === 'win' ? 'btn-win' : 'btn-lose'">
              {{ bet.status === "win" ? "ВЫИГРЫШ" : "ПРОИГРЫШ" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userHead from "~/components/head/user-head.vue";
import Tabs from "~/components/ui/Tabs.vue";

const bets = [
  { amount: 980, winAmount: 7350, coefficient: "x7.5", status: "win" },
  { amount: 980, winAmount: 0, coefficient: "x0.0", status: "lose" },
  { amount: 980, winAmount: 7350, coefficient: "x7.5", status: "win" },
  { amount: 980, winAmount: 0, coefficient: "x0.0", status: "lose" },
];
</script>

<style scoped lang="scss"></style>
