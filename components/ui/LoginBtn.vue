<template>
  <button v-if="!isAuthorizedUser" class="login-btn">
    <div class="login-btn__w">
      <Icon name="custom:print" :size="25" />
      <p>ВОЙТИ</p>
    </div>
  </button>
  <p v-else class="login-btn-mobile">
    <img src="@/assets/img/header/plus.svg" alt="plus" class="plus-mobile" />
    <button class="authorized-content">
      <NuxtLink to="/account/inventory">
        <img src="@/assets/img/header/plus.svg" alt="plus" class="plus" />
      </NuxtLink>
      <p class="coins">
        {{ coins }}
        <img
          class="star-icon"
          src="@/assets/img/header/header-logo.svg"
          alt="Star Icon"
        />
      </p>
      <img
        src="@/assets/img/header/avatar.png"
        alt="User Avatar"
        class="avatar-mobile"
      />
    </button>
  </p>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useGlobalStoreRefs } from "@/stores/useGlobalStore";
import { getCurrentUser as fetchCurrentUser } from "~/services/authService";

const { isAuthorizedUser, currentUser } = useGlobalStoreRefs();
const coins = computed(() => currentUser?.value?.result?.currentBalance || 0);

async function logCurrentUser() {
  try {
    const user = await fetchCurrentUser();
    console.log("Current User:", user);
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
}

onMounted(() => {
  if (isAuthorizedUser.value) {
    logCurrentUser();
  }
});
</script>

<style scoped lang="scss">
.login-btn__w {
  @include flex-start;
  gap: 1.4rem;
  padding: 1.6rem 1.9rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  @include bp($point_2) {
    padding: 9px;
    & span {
      font-size: 16px !important;
    }
  }
  p {
    font-size: 1.9rem;
    text-transform: uppercase;
    font-family: $font_5;
    text-shadow: 0px 0.2rem 0px rgba(255, 255, 255, 0.158);
  }
}

.login-btn {
  border-radius: 1rem;
  background: linear-gradient(180deg, #f18d72 0%, #c744a3 100%);
  box-shadow: 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset;
  transition: all 0.3s ease-in-out;
  color: $white;
  @include bp($point_2) {
    p {
      font-size: 10px;
    }
  }
  &:hover {
    box-shadow:
      inset 0 0 0 0 rgba(0, 0, 0, 0.25),
      0 1.33rem 1.33rem 0 rgba(0, 0, 0, 0.15);
  }
}

.authorized-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #353ba8;
  border-radius: 3rem;
  @include bp($point_2) {
    padding: 5px;
    gap: 4px;
    border-radius: 10px;
  }
  .avatar {
    position: relative;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 0.5rem;

    > img {
      padding: 5px;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 1.5rem;
      padding: 2px;
      background: linear-gradient(
        180deg,
        #fe80ff 0%,
        rgba(76, 78, 234, 0.3) 100%
      );
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  .coins {
    font-size: 2rem;
    font-family: $font_2;
    color: #ffffff;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    @include flex-center;
    @include bp($point_2) {
      font-size: 1rem;
    }
  }

  .star-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  .plus {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px;
    padding: 5px;
    background-color: #5c207cbf;
    @include bp($point_2) {
      display: none;
    }
  }
}
.login-btn-mobile {
  @include flex-center;
  gap: 5px;
}
.plus-mobile {
  display: none;
  background-color: #5c207cbf;
  height: 34px;
  width: 34px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  @include bp($point_2) {
    display: block;
  }
}
.avatar-mobile {
  width: 23px;
  height: 23px;
  border-radius: 5px;
}
</style>
