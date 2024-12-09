<template>
  <section class="drum-top-wrapper">
    <div class="drum-top">
      <button id="spin" class="button drum-button" @click="spin">
        КРУТИТЬ БАРАБАН
      </button>
      <canvas id="canvas" width="600" height="600" class="drum-canvas">
      </canvas>
      <div class="drum-top-text">
        <h4>СУПЕРБОНУС</h4>
        <div class="drum-top-text__completed">
          Собери слово <span>STARDROP</span>
        </div>
        <div class="drum-top-text__word">
          <span
            v-for="(letter, index) in options"
            :key="index"
            :class="{ 'highlighted-letter': selectedLetter.includes(letter) }"
          >
            {{ letter }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const options = ["S", "T", "A", "R", "D", "R", "O", "P"];
const images = [
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
  "/assets/img/drum/drum-item.png",
];
const selectedLetter = ref([]);

let spinSound = null;

if (typeof window !== "undefined") {
  spinSound = new Audio("/assets/audio/spin-sound.mp3");
}

const stopRotateWheel = () => {
  clearTimeout(spinTimeout);
  spinSound.pause();
  spinSound.currentTime = 0;

  const degrees = (startAngle.value * 180) / Math.PI + 90;
  const arcd = (arc * 180) / Math.PI;
  const index = Math.floor((360 - (degrees % 360)) / arcd);
  const text = options[index];

  // Highlight the selected letter
  if (!selectedLetter.value.includes(text)) {
    selectedLetter.value.push(text);
  }

  console.log(`Selected Letter: ${text}`);
  drawRouletteWheel();
};

const startAngle = ref(0);
const arc = Math.PI / (options.length / 2);
let spinTimeout = null;

let spinTime = 0;
let spinTimeTotal = 0;
let ctx;

const drawRouletteWheel = () => {
  const canvas = document.getElementById("canvas");
  if (canvas?.getContext) {
    const outsideRadius = 300;
    const imageRadius = 250;
    const textRadius = 260;
    const insideRadius = 190;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 600);

    for (let i = 0; i < options.length; i++) {
      const angle = startAngle.value + i * arc;

      // Draw Images
      const image = new Image();
      image.src = images[i];
      image.onload = () => {
        const imgX = 300 + Math.cos(angle + arc / 2) * imageRadius - 50;
        const imgY = 300 + Math.sin(angle + arc / 2) * imageRadius - 50;
        ctx.drawImage(image, imgX, imgY, 100, 100);
      };

      // Draw Letters
      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = "bold 26px Helvetica, Exo";
      ctx.translate(
        300 + Math.cos(angle + arc / 2) * textRadius,
        300 + Math.sin(angle + arc / 2) * textRadius,
      );
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      const text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }
  }
};

const spin = () => {
  const spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;

  spinSound.play(); // Play sound
  rotateWheel(spinAngleStart);
};

const rotateWheel = (spinAngleStart) => {
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  const spinAngle =
    spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle.value += (spinAngle * Math.PI) / 180;
  drawRouletteWheel();
  spinTimeout = setTimeout(() => rotateWheel(spinAngleStart), 30);
};

const easeOut = (t, b, c, d) => {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
};

onMounted(() => {
  drawRouletteWheel();
});
</script>
<style lang="scss" scoped>
.drum-top-wrapper {
  position: relative;
  width: 1000px;
  height: 1000px;
  @include flex-center;
  margin: auto;
}
.drum-top {
  position: absolute;
  width: 900px;
  height: 900px;
  margin: auto;
  background-image: url("/assets/img/drum/bg-drum.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.drum-button {
  position: absolute;
  top: 50%;
  left: 43%;
}
.drum-canvas {
  @include flex-center;
  margin: auto;
  padding-top: 100px;
}
.drum-top-text {
  @include flex-center;
  @include flex-col;
  gap: 20px;
  h4 {
    font-family: $font_2;
    font-size: 24px;
    font-weight: 800;
    line-height: 37px;
    text-align: center;
  }
  .drum-top-text__completed {
    font-family: $font_2;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    color: #90c0ff;
    span {
      color: #e37583;
      font-weight: 900;
    }
  }
  .drum-top-text__word {
    @include flex-center;
    gap: 7px;
    & > span {
      @include flex-center;
      text-align: center;
      width: 42px;
      height: 42px;
      background: #141949;
      text-shadow: 1px 1px 0px 0px #373b64;
      color: #1a1f56;
      font-family: $font_2;
      font-size: 26.73px;
      font-weight: 900;
      line-height: 27.06px;
    }
    .highlighted-letter {
      color: white !important;
    }
  }
}
</style>
