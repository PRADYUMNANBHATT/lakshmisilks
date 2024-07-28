<template>
  <div class="carousel">
    <div v-for="(item, index) in carouselItem.carousel" :key="item">
      <div class="carousel_img" v-if="screenSize > 900">
        <figure
          :class="['carousel_img', index === activeIndex ? 'visible' : 'hide']"
        >
          <img :src="resolve_img(item.img)" alt="image" class="image" />
        </figure>
      </div>
      <div class="carousel_img" v-else>
        <figure
          :class="['carousel_img', index === activeIndex ? 'visible' : 'hide']"
        >
          <img
            :src="resolve_img(item.mb_img)"
            alt="image"
            class="image"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
    <div class="dot-col">
      <div v-for="(item, index) in carouselItem.carousel" :key="item">
        <div
          :class="['dot', index === activeIndex ? 'dot-clr' : '']"
          @click="activeIndex = index"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount } from "vue";
import resolve_img from "../mixin/mixin";
const carouselItem = defineProps(["carousel"]);
let screenSize = window.innerWidth;
let activeIndex = ref(0);
let intervalId;
let nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % carouselItem.carousel.length;
};
onMounted(() => {
  slideAutoplay();
});

const slideAutoplay = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 7000);
};
onBeforeUnmount(() => clearInterval(intervalId));
</script>
<style Scoped>
.dot-col {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50px;
  position: absolute;
  bottom: 5%;
  right: 0;
  left: 0;
  z-index: 3;
  gap: 5px;
}
.dot {
  border: none;
  background-color: #b9b9b9;
  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 1.75rem;
  cursor: pointer;
  transition: all 0.5s;
}
.dot-clr {
  background-color: #fff;
  /* background-color: #888; */
  opacity: 1;
}
.carousel {
  margin-top: var(--nav-width);
  height: auto;
  width: 100vw;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.carousel-txt {
  position: absolute;
  width: 400px;
  z-index: 1;
  bottom: 25%;
  left: 15%;
  flex-direction: column;

  h1 {
    font-size: 4rem !important;
    margin-bottom: 15px;
    color: var(--fc);
  }
  p {
    width: 600px;
    margin-bottom: 15px;
  }
  button {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    text-decoration: none;
    margin-bottom: 30px;
    font-weight: 400;
    width: 150px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    border: 2px solid #ffffff;
    color: #ffffff !important;
    transition: all 0.4s ease;
    background: none;
    text-transform: uppercase;
    font-size: 13px;
    border-radius: 0;
    font-family: "bmwtypenextttbold";
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 255px;
    float: left;
  }
}
.carousel_img {
  max-height: 100vh;
  width: 100vw !important;
  position: relative;
}
img {
  width: 100%;
}
.visible {
  display: flex;
  /* animation: slideout 2s ease-in 3s forwards; */
  animation: slidein, slideout;
  animation-duration: 2s, 2s;
  animation-delay: 0s, 6.5s;
}
.hide {
  display: none;
  animation: slideout 0.1s linear;
}
@keyframes slideout {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
@keyframes slidein {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
