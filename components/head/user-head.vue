<template>
  <div class="userHead">
    <!-- Логотип и кнопка загрузки -->
    <div class="userHead__logo">
      <img src="@/assets/img/user.jpg" alt="User Avatar" class="user-avatar" />
      <button type="button" class="btn-download">
        <Icon name="bi:download" class="icon-download" />
        <p>Загрузить</p>
      </button>
    </div>

    <!-- Информация о пользователе -->
    <div class="userHead__info">
      <div class="userHead_info__top">
        <!-- Левая часть с именем пользователя и кнопкой "Изменить" -->
        <div class="user_infoTop__left">
          <h3 class="user-name">Genius Levenstine</h3>
          <button type="button" class="btn-edit">Изменить</button>
        </div>
        <!-- ID пользователя с иконкой копирования -->
        <div class="userHead__id">
          <p>ID: 687980</p>
          <Icon name="bxs:copy" class="icon-copy" />
        </div>
      </div>

      <!-- Нижняя часть с валютами -->
      <div class="userHead__bottom">
        <ul class="user-stats">
          <li>
            <Icon name="bi:coin" class="icon-money" />
            <span>91.750 Р</span>
          </li>
          <li>
            <Icon name="bi:gem" class="icon-gem" />
            <span>20</span>
          </li>
          <li>
            <button type="button" class="btn-replenish">Пополнить</button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Лучший дроп -->
    <div class="userHead__drop">
      <p>Лучший дроп</p>
      <div class="drop-item">
        <img src="@/assets/img/drop-item.jpg" alt="AK-47" />
        <span>AK-47 Soul Dreamer</span>
        <span>970.5 Р</span>
      </div>
    </div>

    <!-- Любимый кейс -->
    <div class="userHead__case">
      <p>Любимый кейс</p>
      <div class="case-item">
        <img src="@/assets/img/favorite-case.jpg" alt="Favorite Case" />
        <button type="button" class="btn-open">Открыть</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
