<template>
  <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button @click="$emit('close')">
        <img
          src="~/assets/img/modal/close.svg"
          width="20"
          alt="close"
          class="close-btn"
        />
      </button>
      <img
        src="~/assets/img/modal/vectorLogin.svg"
        alt="Login Modal"
        class="logo-icon"
      />
      <div v-if="step === 'email'" class="modal-singIn-wrapper">
        <h2 class="modal-text">Войдите или создайте аккаунт</h2>
        <input
          v-bind="emailAttrs"
          v-model="email"
          type="email"
          placeholder="Введите e-mail"
          class="input-field"
        />
        <button class="action-btn" @click="goToPassword">ПРОДОЛЖИТЬ ›</button>
      </div>

      <div v-else-if="step === 'password'" class="modal-singIn-wrapper">
        <h2 class="modal-text">Введите свой пароль</h2>
        <p class="modal-singIn__input">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Не менее 8 символов"
            class="input-field"
          />
          <img
            src="~/assets/img/modal/eye.svg"
            alt="Toggle Password Visibility"
            class="toggle-password-icon"
            @click="togglePasswordVisibility"
          />
        </p>
        <p class="modal-singIn__input">
          <button class="action-btn" @click="login">Войти</button>
          <button class="action-forgot-btn">Забыли свой пароль?</button>
        </p>
      </div>

      <div v-else-if="step === 'createPassword'" class="modal-singIn-wrapper">
        <h2 class="modal-text">Придумайте пароль</h2>
        <p class="modal-singIn__input">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Не менее 8 символов"
            class="input-field"
          />
          <img
            src="~/assets/img/modal/eye.svg"
            alt="Toggle Password Visibility"
            class="toggle-password-icon"
            @click="togglePasswordVisibility"
          />
        </p>
        <button class="action-btn" @click="createAccount">
          Создать аккаунт
        </button>
      </div>

      <div class="social-login">
        <p>Войти с помощью:</p>
        <div class="social-icons"><SocialsInLogin /></div>
      </div>
      <footer class="footer-text">
        Прочел и согласен с Политика конфиденциальности и Пользовательское
        соглашение
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import SocialsInLogin from "~/components/shared/SocialsInLogin.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
const showPassword = ref(false);
const isOpen = ref(true);
const step = ref("email");
const password = ref("");
const { values, defineField } = useForm();
const [email, emailAttrs] = defineField("email");

const schema = toTypedSchema(
  z.object({
    email: z.string().nonempty().email(),
  }),
);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
function closeModal() {
  isOpen.value = false;
}

async function goToPassword() {
  try {
    const response = await axios.get(
      `https://dev.24cases.ru/v1/exists/${email.value}`,
    );
    if (response.data === true) {
      step.value = "password";
    } else {
      step.value = "createPassword";
    }
  } catch (error) {
    console.error("Error checking email:", error);
  }
}
async function createAccount() {
  if (password.value.length >= 8) {
    try {
      const response = await axios.post(
        "https://dev.24cases.ru/v1/auth/register",
        {
          email: email.value,
          password: password.value,
          role: "User",
        },
      );

      console.log("Account created successfully:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error creating account:", error);
    }
  }
}
async function login() {
  if (password.value.length >= 8) {
    try {
      const response = await axios.post(
        "https://dev.24cases.ru/v1/auth/login",
        {
          email: email.value,
          password: password.value,
        },
      );
      console.log("login created successfully:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error creating account:", error);
    }
  }
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-text {
  font-family: $font_2;
  font-size: 35px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.modal-content {
  background-color: $dark-blue-modal-bg;
  padding: 5.1875rem 6.375rem 3rem 6.375rem;
  width: 90%;
  max-width: 735px;
  text-align: center;
  color: $white;
  position: relative;
  border-radius: 20px;
  @include flex-center;
  @include flex-col;
  gap: 35px;
}

.modal-singIn-wrapper {
  @include flex-center;
  @include flex-col;
  gap: 35px;
  max-width: 527px;
  width: 100%;
  .toggle-password-icon {
    position: absolute;
    right: 20px;
    top: 45%;
    cursor: pointer;
  }
  .modal-singIn__input {
    position: relative;
    width: 100%;
  }
}
.logo-icon {
  position: absolute;
  left: 300px;
  top: -71px;
  max-width: 156px;
  width: 100%;
}
.close-btn {
  position: absolute;
  right: 25px;
  top: 28px;
  width: 20px;
  cursor: pointer;
  border: none;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 33px;
  margin-bottom: 1rem;
  outline: none;
  height: 81px;
  border-radius: 8px;
  background-color: $dark-blue-input-bg;
  font-weight: 600;
  line-height: 36px;
  font-size: 23px;
  color: $blue-input-text;
  border: 1px solid $dark-blue-border;
  margin-top: 10px;
  &::placeholder {
    font-family: $font_2;
    font-size: 23px;
    font-weight: 600;
    line-height: 36px;
    color: $blue-input-text;
  }
}

.action-btn {
  width: 100%;
  padding: 22px 0;
  background: $lrose;
  border: none;
  border-radius: 10px;
  color: $white;
  font-family: $font_5;
  font-size: 19px;
  line-height: 19px;
  cursor: pointer;
  @include flex-center;
}

.action-btn:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.action-forgot-btn {
  font-family: $font_2;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  color: $blue-light-text;
  padding-top: 11px;
  cursor: pointer;
}
.social-login {
  margin-top: 1.5rem;
  background: $dark-blue-modal-sector-bg;
  max-width: 527px;
  width: 100%;
  max-height: 185px;
  height: 100%;
  border-radius: 20px;
  padding: 2.6875rem 0 3.4375rem 0;
  > p {
    font-family: $font_2;
    font-size: 19px;
    font-weight: 600;
    line-height: 19px;
    text-align: center;
  }
}
> p {
  font-family: $font_2;
  color: $white;
  font-size: 19px;
  font-weight: 600;
  line-height: 19px;
  text-align: center;
}
.social-icons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.footer-text {
  color: $blue-light-text;
  font-family: $font_2;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}
</style>
