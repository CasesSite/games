<!-- @format -->

<template>
  <footer class="footer">
    <Prefooter />
    <div class="container">
      <div class="footer_medium">
        <ul class="footer_nav">
          <li>
            <NuxtLink to="">Пользовательское соглашение </NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> Контакты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="">Соглашение о приватности </NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> Вопрос - ответ</NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> Анонсы</NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to=""> Правила</NuxtLink>
          </li>
        </ul>
        <div class="footer_info">
          <div class="footer_logo">
            <NuxtLink>
              <img src="@/assets/img/footer-logo.png" alt="" />
              <p>StarDrop</p>
            </NuxtLink>
          </div>
          <Socials />
        </div>
      </div>
      <div class="footer_bottom">
        <div class="footer__copyright">
          Company number 13246765, 16 John Nicholas Crescent, Ellesmere Port,
          Cheshire, United Kingdom, CH65 2DL, +44 07308278693.
        </div>
        <div class="footer_work__btn">
          <Icon name="custom:work" />
          <p>Сотрудничество</p>
        </div>
      </div>
      <div class="footer_decorator">
        <img src="@/assets/img/decorator/footer-decorator.png" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Prefooter from "./Prefooter.vue";
import Socials from "./Socials.vue";
</script>

<style scoped lang="scss"></style>
