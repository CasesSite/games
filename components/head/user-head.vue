<template>
  <div class="userHead" v-for="item in userHead">
    <p class="userHead-container">
      <div>
        <div class="userHead__img">
          <img :src="item.avatar" alt="avatar"/>
          <div class="userHead_profile__name-mobile">
            <div class="userHead__name">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="userHead__id">
              ID: {{ item.ID }} <img :src="item.copy" />
            </div>
          </div>
        </div>
        <button class="userHead_img__download">
          <img :src="item.downIcon" alt="down icon" /> Загрузить
        </button>
      </div>
      <div class="userHead_info__profile">
        <div class="userHead_profile__name">
          <div class="userHead__name">
            <h3>{{ item.name }}</h3>
            <button>Изменить</button>
          </div>
          <div class="userHead__id">
            ID: {{ item.ID }} <img :src="item.copy" />
          </div>
        </div>
        <div class="userHead_profile__stats">
          <div class="userHead_stats__money">
            <div class="userHead__money">
              <img
                  :src="item.creditsIcon"
                  alt=""
                  class="userHead_money__icon userHead__credits"
              />
              {{ item.credits }}
              <img :src="item.star" alt="" class="userHead__star" />
            </div>
            <div class="userHead__money">
              <img
                  :src="item.gemsIcon"
                  alt=""
                  class="userHead_money__icon userHead__gems"
              />
              {{ item.gems }}
            </div>
          </div>
          <div class="userHead_stats__add">
            <button>Пополнить</button>
          </div>
        </div>
      </div>
    </p>
    <p class="userHead__info">
      <div class="userHead_info__achieves">
        <div class="userHead_profile__fav">
          <div class="userHead_fav__ammo userHead__fav">
            <div class="userHead_fav__title userHead_ammo__tltle">
              Лучший дроп
            </div>
            <div class="userHead_ammo__img">
              <img :src="item.dropImg" />
            </div>
            <div class="userHead_ammo__foot">
              <div class="userHead_ammo__info">
                <div class="userHead_info__weapon">
                  {{ item.dropWeapon }}
                </div>
                <div class="userHead_info__nickname">
                  {{ item.dropName }}
                </div>
              </div>
              <div class="userHead_ammo__rate">
                {{ item.dropRate }}
                <img :src="item.dropIcon" />
              </div>
            </div>
          </div>
          <div class="userHead_fav__case userHead__fav">
            <div class="userHead_fav__title userHead_case__title">
              Любимый кейс
            </div>
            <div class="userHead_fav__name">{{ item.favName }}</div>
            <img :src="item.favCase" class="userHead_fav__img" alt="fav img" />
            <button class="button userHead_fav_button">Открыть</button>
          </div>
        </div>
      </div>
    </p>
  </div>
</template>

<script setup lang="ts">
const userHead = ref<any>([
  {
    avatar: "/assets/img/profile/avatar.png",
    name: "Genius Levenstine",
    downIcon: "/assets/img/download.svg",
    ID: "687980",
    copy: "/assets/img/profile/copy.svg",
    creditsIcon: "/assets/img/profile/credits.svg",
    credits: 91750,
    star: "/assets/img/profile/star.svg",
    gemsIcon: "/assets/img/profile/gem.svg",
    gems: 20,
    dropImg: "/assets/img/profile/best-drop.png",
    dropWeapon: "АК-74",
    dropName: "Soul Dreamer",
    dropRate: 970.5,
    dropIcon: "/assets/img/profile/ratedrop.svg",
    favName: "Palpatine",
    favCase: "/assets/img/profile/fav-case.png",
  },
]);
</script>

<style scoped lang="scss">
.userHead {
  padding: 3.5rem;
  background: #1b205a;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include bp($point_2) {
    display: block;
    padding: 15px;
  }
}
.userHead__img {
  display: block;
  background: red;
  width: 14rem;
  height: 14rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  @include bp($point_4) {
    display: flex;
    gap: 17px;
  }
}
.userHead__img img {
  width: 100%;
  height: 100%;
}
.userHead__avatar{
  display: block;
  @include bp($point_4) {
    display: none;
  }
}
.userHead-container{
@include flex-space;
  gap: 2rem;
  @include bp($point_4) {
    @include flex-start;
    @include flex-col;
    align-items: flex-start;
  }
}

.userHead_img__download {
  font-family: "Exo2-Bold", serif;
  display: flex;
  justify-content: space-between;
  width: 14rem;
  align-items: center;
  padding: 1.4rem 1.9rem;
  background: #141949;
  border-radius: 1rem;
  color: #fff;
  font-size: 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
}

.userHead_info__profile {
  width: 55.9rem;
  @include bp($point_4) {
    width: 100%;
  }
}
.userHead_profile__name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.85rem;
  @include bp($point_4) {
 display: none;
  }
}
.userHead_profile__name-mobile{
  display: none;
  @include bp($point_4) {
    @include flex-start;
    @include flex-col;
    margin-bottom: 1.85rem;
    gap: 1rem;
  }

}
.userHead__name {
  display: flex;
  align-items: center;

}
.userHead__name h3 {
  font-size: 2rem;
  line-height: 2.1rem;
  font-family: "Exo2-Bold";
  margin-right: 2rem;
}
.userHead__name button {
  padding: 0.8rem 1.3rem;
  background: #151951;
  border-radius: 0.5rem;
  color: #7c7e9d;
  text-transform: uppercase;
  font-family: "Exo2-Bold";
  cursor: pointer;
}

.userHead__id {
  padding: 1rem 2.6rem 1rem 1.2rem;
  background: #141949;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
}
.userHead__id img {
  position: absolute;
  top: 1.3rem;
  right: 0.9rem;
  width: 1.2rem;
  height: 1.4rem;
}

.userHead_profile__stats {
  background: #141949;
  padding: 3.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include bp($point_4) {
    padding: 20px;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }
}

.userHead__money {
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-family: "Exo2-Bold";
  @include bp($point_4) {
    font-size: 18px;
  }
}
.userHead_money__icon {
  margin-right: 1.5rem;
  @include bp($point_4) {
    margin-right: 1rem;
  }
}
.userHead__credits {
  width: 2.6rem;
  height: 2.1rem;
}
.userHead__gems {
  width: 2.6rem;
  height: 2.6rem;
}
.userHead__star {
  width: 2.6rem;
  height: 2.6rem;
  margin-left: 1rem;
  @include bp($point_4) {
    width: 20px;
    height: 20px;
  }
}
.userHead_stats__add {
  @include bp($point_4) {
    width: 100%;
  }
}

.userHead_stats__add button {
  background: linear-gradient(180deg, #e171e3 0%, #8332ed 100%);
  position: relative;
  font-size: 1.8rem;
  color: #fff;
  font-family: "Exo2-Bold";
  text-transform: uppercase;
  line-height: 2rem;
  padding: 1.8rem 3.5rem 1.8rem 2.8rem;
  border-radius: 1.5rem;
  cursor: pointer;
  @include bp($point_4) {
    width: 100%;
  }

}
.userHead_stats__add button:after {
  content: "›";
  position: absolute;
  font-size: 1.8rem;
  line-height: 2rem;
  top: 1.8rem;
  right: 2.5rem;
  transition: all 0.2s ease-in;
}
.userHead_stats__add button:hover:after {
  right: 2.1rem;
}
.userHead__info {
@include flex-start;
  gap: 2.5rem;
  @include bp($point_2) {
    display: none;
  }
}
.userHead_profile__fav {
  display: flex;
  gap: 2.5rem;
}
.userHead__fav {
  width: 29rem;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  border-radius: 2rem;
}
.userHead_fav__ammo {
  background: linear-gradient(135.02deg, #1b65b7 0%, #212669 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userHead_fav__case {
  background: linear-gradient(135.02deg, #2e2b6e 0%, #c1356a 100%);
}
.userHead_fav__title {
  font-size: 2rem;
  font-family: "Exo2-Medium";
  line-height: 2rem;
}
.userHead_ammo__tltle {
  margin-bottom: 2.3rem;
}
.userHead_ammo__img {
  width: 20rem;
}
.userHead_ammo__img img {
  width: 100%;
}
.userHead_ammo__foot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userHead_ammo__info {
  display: flex;
  flex-direction: column;
}
.userHead_info__weapon {
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-family: "Exo2-bold", sans-serif;
}
.userHead_fav__case {
  position: relative;
}
.userHead_fav__img {
  position: absolute;
  bottom: -10%;
  left: 45%;
  max-width: 180px;
}

.userHead_case__title {
  margin-bottom: 1rem;
}
.userHead_fav__name {
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-family: "Exo2-Medium";
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 6.7rem;
}
</style>
