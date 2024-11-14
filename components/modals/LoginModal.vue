<template>
  <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button @click="$emit('close')">
        <img src="~/assets/img/modal/close.svg" alt="close" class="close-btn" />
      </button>
      <img
        src="~/assets/img/modal/vectorLogin.svg"
        alt="Login Modal"
        class="logo-icon"
      />
      <div v-if="step === 'email'" class="modal-singIn-wrapper">
        <h2 class="modal-text">Войдите или создайте аккаунт</h2>
        <p>
          <input
            v-model="email"
            @blur="onBlurEmail"
            type="email"
            placeholder="Введите e-mail"
            class="input-field"
          />
          <span v-if="emailError" class="error-message">{{ emailError }}</span>
        </p>
        <button class="action-btn" @click="handleSubmit(goToPassword())">
          ПРОДОЛЖИТЬ ›
        </button>
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
          <button class="action-btn" @click="handleSubmit(login())">
            Войти
          </button>
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
        <button class="action-btn" @click="handleSubmit(createAccount())">
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
import {
  checkEmailExists,
  createAccount as registerUser,
  login as loginUser,
} from "~/services/authService";
import SocialsInLogin from "~/components/shared/SocialsInLogin.vue";
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
const showPassword = ref(false);
const isOpen = ref(true);
const password = ref("");
const step = ref("email");

const schema = toTypedSchema(
  z.object({
    email: z
      .string()
      .nonempty({ message: "E-mail is required" })
      .email({ message: "Invalid e-mail format" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one digit" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
  }),
);
const { handleSubmit } = useForm({ validationSchema: schema });
const {
  value: email,
  errorMessage: emailError,
  handleBlur: onBlurEmail,
} = useField("email");

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function closeModal() {
  isOpen.value = false;
}

async function goToPassword() {
  try {
    const emailExists = await checkEmailExists(email.value);
    if (emailExists) {
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
      await registerUser(email.value, password.value);
      closeModal();
    } catch (error) {
      console.error("Error creating account:", error);
    }
  }
}

async function login() {
  if (password.value.length >= 8) {
    try {
      await loginUser(email.value, password.value);
      closeModal();
      globalStore.setAuthorized(true);
    } catch (error) {
      console.error("Error logging in:", error);
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
  font-size: 2.1875rem; // 35px
  font-weight: 700;
  line-height: 2.25rem; // 36px
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.modal-content {
  background-color: $dark-blue-modal-bg;
  padding: 5.1875rem 6.375rem 3rem; // 83px 102px 48px
  width: 90%;
  max-width: 45.9375rem; // 735px
  text-align: center;
  color: $white;
  position: relative;
  border-radius: 1.25rem; // 20px
  @include flex-center;
  @include flex-col;
  gap: 2.1875rem; // 35px
  @media (max-width: 480px) {
    padding: 2rem;
  }
}

.modal-singIn-wrapper {
  @include flex-center;
  @include flex-col;
  gap: 2.1875rem; // 35px
  max-width: 32.9375rem; // 527px
  width: 100%;
  .toggle-password-icon {
    position: absolute;
    right: 1.25rem; // 20px
    bottom: 37%;
    cursor: pointer;
  }
  .modal-singIn__input {
    position: relative;
    width: 100%;
  }
}
.logo-icon {
  position: absolute;
  top: -4.4375rem; // -71px
  max-width: 9.75rem; // 156px
  width: 100%;
}
.close-btn {
  position: absolute;
  right: 1.5625rem; // 25px
  top: 1.75rem; // 28px
  width: 1.25rem; // 20px
  cursor: pointer;
  border: none;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.0625rem; // 33px
  margin-bottom: 1rem;
  outline: none;
  height: 5.0625rem; // 81px
  border-radius: 0.5rem; // 8px
  background-color: $dark-blue-input-bg;
  font-weight: 600;
  line-height: 2.25rem; // 36px
  font-size: 1.4375rem; // 23px
  color: $blue-input-text;
  border: 0.0625rem solid $dark-blue-border; // 1px
  margin-top: 0.625rem; // 10px
  &::placeholder {
    font-family: $font_2;
    font-size: 1.4375rem; // 23px
    font-weight: 600;
    line-height: 2.25rem; // 36px
    color: $blue-input-text;
  }
}
.error-message {
  color: red;
  font-size: 0.875rem; // 14px
}
.action-btn {
  width: 100%;
  padding: 1.375rem 0; // 22px
  background: $lrose;
  border: none;
  border-radius: 0.625rem; // 10px
  color: $white;
  font-family: $font_5;
  font-size: 1.1875rem; // 19px
  line-height: 1.1875rem; // 19px
  cursor: pointer;
  @include flex-center;
}

.action-btn:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); // 8px 16px
}
.action-forgot-btn {
  font-family: $font_2;
  font-size: 1rem; // 16px
  font-weight: 600;
  line-height: 2.25rem; // 36px
  color: $blue-light-text;
  padding-top: 0.6875rem; // 11px
  cursor: pointer;
}
.social-login {
  margin-top: 1.5rem;
  background: $dark-blue-modal-sector-bg;
  max-width: 32.9375rem; // 527px
  width: 100%;
  max-height: 11.5625rem; // 185px
  height: 100%;
  border-radius: 1.25rem; // 20px
  padding: 2.6875rem 0 3.4375rem; // 43px 55px
}
p {
  font-family: $font_2;
  color: $white;
  font-size: 1.1875rem; // 19px
  font-weight: 600;
  line-height: 1.1875rem; // 19px
  text-align: center;
  width: 100%;
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
  font-size: 1.125rem; // 18px
  font-weight: 500;
  line-height: 1.5rem; // 24px
  text-align: center;
}
</style>
