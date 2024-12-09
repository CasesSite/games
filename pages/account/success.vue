<template>
  <div class="wrapper-small">
    <div class="page-success">
      <div class="page-success__title">
        <div class="page-success__icon">
          <img src="/public/assets/img/profile/success.svg" alt="" />
        </div>
        <h1>Баланс успешно пополнен</h1>
      </div>
      <div class="page-success__preferences page-preferences">
        <ul class="page-preferences__list">
          <li class="page-preferences__item preferences-item">
            <div class="preferences-item__icon">
              <img src="/public/assets/img/profile/crown.svg" alt="" />
            </div>
            Отлично! Теперь вперёд выбивать <span> крутой дроп</span>!
          </li>
          <li class="page-preferences__item preferences-item">
            <div class="preferences-item__icon">
              <img src="/public/assets/img/profile/medal.svg" alt="" />
            </div>
            Открывай кейсы! Создавай <span> контракты</span> и
            <span> апгрейды</span>!
          </li>
          <li class="page-preferences__item preferences-item">
            <div class="preferences-item__icon">
              <img src="/public/assets/img/profile/battle.svg" alt="" />
            </div>
            Не забывай учавствовать в <span>ивентах</span> и
            <span>кейсбаттлах</span>
          </li>
        </ul>
      </div>
      <div class="page-success__buttons">
        <NuxtLink to="/" class="but-out">На главную</NuxtLink
        ><NuxtLink to="/account/inventory" class="but-sell"
          >Перейти к ивенту</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-success {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-success__title {
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-family: "Exo2-bold";
  margin-bottom: 10.8rem;
}
.page-success__title img {
  margin-right: 1.5rem;
}
.page-preferences {
  margin-bottom: 5rem;
}
.page-preferences__list {
  display: flex;
  width: 103.6rem;
  justify-content: space-between;
  align-items: center;
}
.preferences-item {
  position: relative;
  width: 31.2rem;
  height: 18.8rem;
  background: linear-gradient(180deg, #353ba3 0%, #252a73 100%);
  border-radius: 2rem;
  padding: 10.5rem 4.1rem 5.9rem 4.1rem;
  font-family: Exo2-regular;
  text-align: center;
  font-size: 1.8rem;
}
.preferences-item span {
  color: #ff8c8c;
}
.preferences-item__icon {
  position: absolute;
  width: 9.9rem;
  height: 9.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #4c55d8 0%, #242974 100%);
  border-radius: 2rem;
  top: -2.3rem;
  right: 10.6rem;
}
.page-success__buttons {
  display: flex;
  width: 54rem;
  justify-content: space-between;
  align-items: center;
}
.page-success__buttons button {
  width: 26rem;
  height: 5rem;
  position: relative;
  font-size: 2rem;
  font-family: "Exo2-medium";
  text-transform: none;
}
.page-success__buttons .but-out:after {
  position: absolute;
  content: "‹";
  font-size: 2rem;
  top: 1.2rem;
  left: 6.3rem;
  transition: all 0.2s ease-in-out;
}
.page-success__buttons .but-out:hover:after {
  left: 5.9rem;
}
.page-success__buttons .but-sell:after {
  position: absolute;
  content: "›";
  font-size: 2rem;
  top: 1.2rem;
  right: 3.4rem;
  transition: all 0.2s ease-in-out;
}
.page-success__buttons .but-sell:hover:after {
  right: 2.9rem;
}
</style>
1
