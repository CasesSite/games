<!-- @format -->

<template>
  <footer class="footer">
    <Prefooter />
    <div class="container">
      <div class="footer_medium">
        <ul class="footer_nav">
          <li>
            <NuxtLink to="/">Пользовательское соглашение </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Контакты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Соглашение о приватности </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Вопрос - ответ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Анонсы</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Правила</NuxtLink>
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
          <div class="btn-icon">
            <Icon name="custom:work" />
          </div>
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

<style scoped lang="scss">
.footer {
  background-image: url("../../assets/img/footer.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  padding-bottom: 5.5rem;
  padding-top: 12rem;
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
}

.footer_bottom {
  @include flex-space;
  gap: 3rem;
  background: rgba(46, 35, 117, 0.28);
  border-radius: 2.5rem;
  padding: 2.3rem 4.1rem;
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

  li {
    a {
      color: #86b5ff;
      transition: all 0.3s ease-in-out;
      font-family: $font_3;
      &:hover {
        color: $white;
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
}

.footer_logo {
  margin-bottom: 2rem;
  a {
    @include flex-start;
    gap: 0.5rem;
    p {
      font-size: 3rem;
      font-family: $font_6;
    }
  }
}

.footer_work__btn {
  @include flex-start;
  gap: 1.5rem;
  background: linear-gradient(
    180deg,
    rgb(218, 118, 208),
    rgb(102, 51, 225) 100%
  );
  padding: 1.9rem 2.4rem;
  border-radius: 1.5rem;
  font-size: 1.8rem;
  font-family: $font_5;
  cursor: pointer;
}

.btn-icon {
  @include flex-center;
}
</style>
