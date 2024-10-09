<template>
  <div class="userHead"
  v-for="item in userHead">
    <div class="userHead__avatar">
      <div class="userHead__img">
        <img :src="item.avatar" />
      </div>
      <button class="userHead_img__download"><img :src="item.downIcon">
        Загрузить</button>
    </div>

    <div class="userHead__info">
      <div class="userHead_info__profile">
        <div class="userHead_profile__name">
          <div class="userHead__name">
            <h3>{{ item.name }}</h3>
            <button>Изменить</button>
          </div>
          <div class="userHead__id">ID: {{ item.ID }} <img :src="item.copy" />
          </div>
        </div>
        <div class="userHead_profile__stats">
          <div class="userHead_stats__money">
            <div class="userHead__money">
              <img :src="item.creditsIcon" alt="" class="userHead_money__icon userHead__credits">
              {{ item.credits }}
              <img :src="item.star" alt="" class="userHead__star">
            </div>
            <div class="userHead__money">
              <img :src="item.gemsIcon" alt="" class="userHead_money__icon userHead__gems">
              {{ item.gems }}
            </div>
          </div>
          <div class="userHead_stats__add">
            <button>Пополнить </button>
          </div>
        </div>
      </div>
      <div class="userHead_info__achieves"></div>
    </div>

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
      credits: "91.750",
      star: "/assets/img/profile/star.svg",
      gemsIcon: "/assets/img/profile/gem.svg",
      gems: "20"
    }
  ]);

</script>

<style scoped lang="scss">

.userHead {
  padding: 3.5rem;
  background: #1B205A;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userHead__img {
  display: block;
  background: red;
  width: 14rem;
  height: 14rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}
.userHead__img img {
  width: 100%;
  height: 100%;
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
}
.userHead_profile__name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.85rem;
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
  color: #7C7E9D;
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
}
.userHead__money {
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-family: "Exo2-Bold";
}
.userHead_money__icon {
  margin-right: 1.5rem;
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
}
.userHead_stats__add button {

  background: linear-gradient(180deg, #E171E3 0%, #8332ED 100%);
  position: relative;
  font-size: 1.8rem;
  color: #fff;
  font-family: "Exo2-Bold";
  text-transform: uppercase;
  line-height: 2rem;
  padding: 1.8rem 3.5rem 1.8rem 2.8rem;
  border-radius: 1.5rem;
  cursor: pointer;

}
.userHead_stats__add button:after
{
  content: '›';
  position: absolute;
  font-size: 1.8rem;
  line-height: 2rem;
  top: 1.8rem;
  right: 2.5rem;
  transition: all .2s ease-in;

}
.userHead_stats__add button:hover:after
{
  right: 2.1rem;
}

</style>
