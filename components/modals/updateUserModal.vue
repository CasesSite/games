<template>
  <div v-if="isUpdateModalOpen" class="modal-overlay" @click="closeUpdateModal">
    <div class="modal-content" @click.stop>
      <button @click="closeUpdateModal">
        <img src="~/assets/img/modal/close.svg" alt="close" class="close-btn" />
      </button>

      <div class="modal-singIn-wrapper">
        <h2 class="modal-text">Обновите данные вашего аккаунта</h2>
        <p class="modal-singIn__input">
          <input
            v-model="updatedEmail"
            type="email"
            placeholder="Введите новый e-mail"
            class="input-field"
          />
        </p>
        <p class="modal-singIn__input">
          <input
            v-model="updatedName"
            type="text"
            placeholder="Введите новое имя"
            class="input-field"
          />
        </p>
        <p class="modal-singIn__input">
          <input
            v-model="updatedPhone"
            type="text"
            placeholder="Введите новый телефон"
            class="input-field"
          />
        </p>
        <button class="action-btn" @click="updateUser">Обновить ›</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGlobalStore } from "@/stores/useGlobalStore";
import axiosClient from "~/helper/axiosClient.js";

const isUpdateModalOpen = ref(false);
const updatedEmail = ref("");
const updatedName = ref("");
const updatedPhone = ref("");

function closeUpdateModal() {
  isUpdateModalOpen.value = false;
}

async function updateUser() {
  const globalStore = useGlobalStore();
  const currentUser = globalStore.currentUser;

  if (!currentUser?.id) {
    console.error("User ID not found. Cannot update.");
    return;
  }

  try {
    const updatePayload = {
      email: updatedEmail.value,
      userName: updatedName.value,
      phone: updatedPhone.value,
    };

    const response = await axiosClient.put(
      `/users/update/${currentUser.id}`,
      updatePayload,
    );

    globalStore.setCurrentUser(response.data);
    closeUpdateModal();
    console.log("User updated successfully.");
  } catch (error) {
    console.error(
      "Error updating user:",
      error.response?.data || error.message,
    );
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
  font-size: 14px;
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
</style>
