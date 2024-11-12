<template>
  <header>
    <div class="container">
      <div class="header_main">
        <div class="header_top__main">
          <div class="header_action">
            <div class="header_logo">
              <NuxtLink to="/"
                ><img src="../../assets/img/header/header-logo.svg" alt="logo"/></NuxtLink>
            </div>
            <div class="header_btn__group">
                <button type="button" class="primary button">
                  <Icon name="custom:crown" />
                  <span>топ</span>
                </button>
                <button type="button" class="secondary button">
                  <Icon name="custom:area" />
                  <span>все</span>
                </button>

            </div>
          </div>
          <ul class="header_prize__list">
            <li v-for="(item, i) in list" :key="'mini-prize-' + i">
              <MiniPrize :card="item" />
            </li>
          </ul>
          <div class="header__online">
            <CardOnline />
          </div>
        </div>
        <div class="header_bottom__main">
          <nav class="header_nav">
            <NuxtLink
              to="/"
              v-for="(item, i) in nav"
              :key="'header-nav-item-' + i"
            >
              <div class="nav_icon">
                <Icon :name="'custom:' + item.icon" :size="36" />
              </div>

              <p>{{ item.name }}</p>
            </NuxtLink>
          </nav>
          <img src="@/assets/img/header/crash.svg" alt="crash" class="crash"/>
          <Socials />
          <LoginBtn @click="openModal"  />
        </div>
      </div>
    </div>
    <LoginModal v-if="isModalOpen" @close="closeModal" />
    <!-- <div class="header_socials">
    </div> -->
  </header>
</template>

<script setup lang="ts">
import CardOnline from "../cards/CardOnline.vue";
import MiniPrize from "../cards/MiniPrize.vue";
import Socials from "./Socials.vue";
import { ref } from 'vue';
import LoginModal from "~/components/modals/LoginModal.vue";
import LoginBtn from "../ui/LoginBtn.vue";

const list = ref<any>([
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "violet",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "green",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "blue",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "rose",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "violet",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "green",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "blue",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "rose",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "violet",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "green",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "blue",
  },
  {
    img: "/assets/img/top-img.png",
    name: "Dream Starter",
    link: "/",
    color: "rose",
  },
]);
const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

const nav = ref<any>([
  { name: "Кейсы", icon: "nav-1", link: "" },
  { name: "бонусы", icon: "nav-2", link: "" },
  { name: "барабан", icon: "nav-3", link: "" },
  { name: "апгрейд", icon: "nav-4", link: "" },
  { name: "контракты", icon: "nav-5", link: "" },
  { name: "квесты", icon: "nav-6", link: "" },
  { name: "crash", icon: "nav-7", link: "" },
]);
</script>

<style scoped lang="scss">
.header_action {
  @include flex-start;
}

.header_logo {
  width: 6.8rem;
  height: 6.8rem;
  @include flex-center;
  margin-right: 1rem;
  position: relative;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
  }
}

.header_btn__group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  .button {
    height: 3.18rem;
    padding: 18px;
    &:last-child {
      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  button {
    @include flex-center;
    color: $white;
    gap: 0.5rem;
    padding: 0.7rem 1.1rem;
    cursor: pointer;
    width: 100%;
    p {
      font-size: 1.5rem;
      font-family: $font_5;
      text-transform: uppercase;
    }
  }

  .iconify {
    min-width: 2.4rem;
  }
}

.button {
  position: relative;
  z-index: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: $linear;
    pointer-events: none;
    z-index: -1;
    border-radius: 0.5rem;
  }
  &:after {
    position: absolute;
    width: 95%;
    height: 93%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $dark-blue;
    content: "";
    border-radius: 0.5rem;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
  }
}

.header_top__main {
  @include flex-start;
  gap: 0.4rem;
  position: relative;
  z-index: 2;
  max-height: 104px;
  height: 100%;
  &:before {
    width: 110%;
    height: 100%;
    background: $dark-blue;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

.header_prize__list {
  @include flex-start;
  flex-grow: 1;
  gap: 2px;
  max-width: 100%;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}

.header__online {
  position: absolute;
  top: 50%;
  right: 3.1rem;
  transform: translateY(-50%);
  z-index: 99;
}
.header_bottom__main {
  position: relative;
  z-index: 2;
  height: 101px;
  @include flex-space;
  gap: 3rem;
  padding: 0 2rem 8px 2rem;
  background: linear-gradient(180deg, #3658f7 0%, #5541c2 100%);
  box-shadow: 0px 7px 0px 0px #4a3399;
  border-bottom-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;

  // &:before {
  //   position: absolute;
  //   top: -2.4rem;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 100%;
  //   height: 23rem;
  //   content: "";
  //   background-image: url("../../assets/img/decorator/nav.png");
  //   background-size: 100% 103%;
  //   background-repeat: no-repeat;
  //   background-position: center center;
  //   pointer-events: none;
  //   z-index: -1;
  // }
}
.header_nav {
  @include flex-start;
  gap: 2rem;
  a {
    @include flex-start;
    gap: 1.6rem;
    font-size: 1.7rem;
    font-family: $font_5;
    text-transform: uppercase;
    border-radius: 0.9rem;
    padding: 0.7rem 1.7rem 0.7rem 0.7rem;
    box-shadow: inset 0 0 0.3rem 0 rgba(0, 0, 0, 0.49);
    background: rgba(43, 52, 145, 0.67);
    position: relative;
    &:hover {
      &:before {
        opacity: 1;
        visibility: visible;
      }
    }
    p {
      z-index: 1;
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      pointer-events: none;
      transition: all 0.3s ease-in-out;
      border-radius: 0.9rem;
      overflow: hidden;
      z-index: 0;
      opacity: 0;
      visibility: hidden;
    }

    &:nth-child(1) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(225, 113, 228),
          rgb(128, 48, 237) 100%
        );
      }
    }
    &:nth-child(2) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(241, 141, 116),
          rgb(199, 68, 164) 100%
        );
      }
    }
    &:nth-child(3) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(225, 113, 228),
          rgb(128, 48, 237) 100%
        );
      }
    }
    &:nth-child(4) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(30, 184, 224),
          rgb(41, 103, 220) 100%
        );
      }
    }
    &:nth-child(5) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(143, 56, 238),
          rgb(25, 105, 209) 100%
        );
      }
    }
    &:nth-child(6) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(235, 174, 121),
          rgb(164, 77, 170) 100%
        );
      }
    }
    &:nth-child(7) {
      .nav_icon,
      &:before {
        background: linear-gradient(
          180deg,
          rgb(43, 231, 182),
          rgb(39, 101, 209) 100%
        );
      }
    }
  }
}
.crash{
  height: 108px;
  position: relative;
  bottom: -7px;
}
.nav_icon {
  width: 3.6rem;
  height: 3.6rem;
  @include flex-center;
  border-radius: 0.7rem;
  z-index: 1;
}

header {
  position: relative;
  .container {
    padding: 0;
  }
}

.header_socials {
  position: absolute;
  @include flex-end;
  z-index: 99;
  width: 100%;
  right: 5.2rem;
  top: calc(100% + 3.2rem);
}
</style>
