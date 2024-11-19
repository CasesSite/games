<!-- @format -->

<template>
  <footer class="footer">
    <Prefooter />
    <div class="container">
      <div class="footer_info-mobile">
        <div class="footer_logo">
          <NuxtLink>
            <img src="@/assets/img/header/header-logo.svg" alt="logo" />
            <p>StarDrop</p>
          </NuxtLink>
        </div>
        <div class="footer_info-mobile-socials"><Socials /></div>
      </div>
      <button class="footer_work__btn-mobile">
        <div class="btn-icon">
          <Icon name="custom:work" />
        </div>
        <p>Сотрудничество</p>
      </button>
      <div class="footer_medium">
        <ul class="footer_nav">
          <li>
            <NuxtLink to="/">Пользовательское соглашение </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Контакты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Правила</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/"> Вопрос - ответ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Анонсы</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq"> FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Соглашение о приватности </NuxtLink>
          </li>
        </ul>
        <div class="footer_info">
          <div class="footer_logo">
            <NuxtLink>
              <img src="@/assets/img/header/header-logo.svg" alt="logo" />
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
        <button class="footer_work__btn">
          <div class="btn-icon">
            <Icon name="custom:work" />
          </div>
          <p>Сотрудничество</p>
        </button>
      </div>
      <img
        class="footer_decorator"
        src="@/assets/img/decorator/footer-decorator.png"
        alt="Decorator"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
import Prefooter from "./Prefooter.vue";
import Socials from "./Socials.vue";
</script>

<style scoped lang="scss">
.footer {
  background: linear-gradient(180deg, #090d31 0%, #2f389f 82.94%);
  position: relative;
  padding-bottom: 5.5rem;
  padding-top: 12rem;
  @include bp($point_2) {
    padding-top: 5rem;
    padding-bottom: 8rem;
  }
  :deep(.socials) {
    justify-content: flex-end;
  }
  .container {
    max-width: 179rem;
  }
}

.footer_medium {
  @include flex-space;
  margin-bottom: 5rem;
  @include bp($point_2) {
    margin-bottom: 25px;
  }
}

.footer_bottom {
  @include flex-space;
  gap: 3rem;
}

.footer__copyright {
  color: rgb(130, 179, 255);
  font-size: 1.4rem;
  font-family: $font_3;
  max-width: 65.2rem;
}

.footer_nav {
  max-width: 58.4rem;
  @include flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  max-height: 17rem;
  gap: 2.2rem 3.8rem;
  @include bp($point_2) {
    gap: 20px;
    flex-wrap: nowrap;
    max-height: unset;
  }
  li {
    a {
      color: rgba(134, 181, 255, 1);
      transition: all 0.3s ease-in-out;
      font-family: $font_3;
      &:hover {
        color: $white;
      }
      @include bp($point_2) {
        font-size: 15px;
      }
    }
  }
}

.footer_decorator {
  position: absolute;
  bottom: -0.4rem;
  max-width: 49.2rem;
  right: 47rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @include bp($point_2) {
    right: 0;
    max-width: 230px;
    width: 100%;
    bottom: 180px;
  }
}

.footer_logo {
  margin-bottom: 2rem;
  a {
    @include flex-start;
    gap: 0.5rem;
    p {
      font-size: 3rem;
      font-family: $font_6;
      @include bp($point_2) {
        font-size: 18px;
      }
    }
  }
}

.footer_work__btn {
  @include flex-start;
  gap: 1.5rem;
  background: $button-gradient-blu-light;
  padding: 1.9rem 2.4rem;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  font-family: $font_5;
  cursor: pointer;
  color: $white;
  @include bp($point_2) {
    display: none;
  }
}
.footer_work__btn-mobile {
  @include flex-start;
  gap: 1.5rem;
  background: $button-gradient-blu-light;
  width: 100%;
  max-width: 400px;
  height: 50px;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  font-family: $font_5;
  cursor: pointer;
  color: $white;
  display: none;
  margin: 32px 0;
  @include bp($point_2) {
    @include flex-center;
  }
}
.footer_info {
  display: block;
  @include bp($point_2) {
    display: none;
  }
}
.footer_info-mobile {
  display: none;
  @include bp($point_2) {
    &-socials {
      width: 280px !important;
    }
    @include flex-space;
  }
}
.btn-icon {
  @include flex-center;
}
</style>
