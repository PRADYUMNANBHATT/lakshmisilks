<template>
  <SectionHeading hdg="Lakshmi Silks BRIDAL TALE's" />
  <div class="carouseltwo">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :class="['carouseltwo-item', index === activeIndex ? 'active' : '']"
        :style="{ transitionDelay: 0.02 * index + 's' }"
      >
        <!-- <img
          :src="resolve_img_url(item.image)"
          class="Img-fluid"
          alt="Slide Image"
        /> -->
        <div class="video">
          <iframe
            :src="item.you_tub"
            :title="item.youtubtitle"
            frameborder="0"
            class="iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="carouseltwo-caption">
          <h1>{{ item.title }}</h1>
          <p>{{ item.caption }}</p>
        </div>
      </div>
    </div>

    <!-- <a class="carousel-control-prev" role="button" @click="prevSlidetwo">
      <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
    </a>
    <a class="carousel-control-next" role="button" @click="nextSlidetwo">
      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </a> -->
  </div>
</template>

<script setup>
import SectionHeading from "./SectionHeading.vue";
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";

const activeIndex = ref(0);
const autoplayInterval = ref(null);

const carouselItems = ref([
  // Carousel items data here...

  {
    title: "BRIDAL TALE's",
    caption:
      "Every wedding comes with a bundle of emotions, be it love, happiness or sentiment. Embrace the journey of love and commitment with our handpicked selection of bridel collection.",
    image: "gl2.jpg",
    you_tub: "https://www.youtube.com/embed/UxY7Opm-Dfk",
    youtubtitle: "Bridal Tales by Lakshmi Silks",
  },
  {
    title: "BRIDAL TALE's",
    caption:
      "Every wedding comes with a bundle of emotions, be it love, happiness or sentiment. Embrace the journey of love and commitment with our handpicked selection of bridel collection.",
    image: "test10.jpg",
    you_tub: "https://www.youtube.com/embed/ApR8ReB-t80",
    youtubtitle: "Lakshmi Bridal Tales",
  },

  {
    title: "BRIDAL TALE's",
    caption:
      "Every wedding comes with a bundle of emotions, be it love, happiness or sentiment. Embrace the journey of love and commitment with our handpicked selection of bridel collection.",
    image: "test11.jpg",
    you_tub: "https://www.youtube.com/embed/dGejdtdrtDM",
    youtubtitle: "വരു.., സന്ദർശിക്കു ലക്ഷ്മി സിൽക്‌സ്, ടി.ബി. റോഡ്, കോട്ടയം.",
  },
  {
    title: "BRIDAL TALE's",
    caption:
      "Every wedding comes with a bundle of emotions, be it love, happiness or sentiment. Embrace the journey of love and commitment with our handpicked selection of bridel collection.",
    image: "test11.jpg",
    you_tub: "https://www.youtube.com/embed/JXFhFmOnTgM",
    youtubtitle: "Bridal Tales",
  },
]);

// const prevSlidetwo = () => {
//   activeIndex.value =
//     (activeIndex.value - 1 + carouselItems.length) % carouselItems.length;
// };

const nextSlidetwo = () => {
  activeIndex.value = (activeIndex.value + 1) % carouselItems.value.length;
};
// const resolve_img_url = (path) => {
//   let images = require.context("../assets/", false, /\.png$|\.jpg$|\.jpeg$/);
//   return images("./" + path);
// };
onMounted(() => {
  // Start autoplay when component is mounted
  startAutoplay();
});

onUnmounted(() => {
  // Stop autoplay when component is unmounted
  stopAutoplay();
});

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlidetwo();
  }, 3000); // Change slide every 3 seconds (adjust as needed)
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval.value);
};
onBeforeUnmount(() => clearInterval(autoplayInterval.value));
</script>

<style scoped>
.carouseltwo {
  position: relative;
  border: 15px solid transparent;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  overflow: hidden;
}

.carouseltwo-inner {
  overflow: hidden;
}

.carouseltwo-item {
  display: none;
}
.carouseltwo-item.active > img {
  width: 50vw;
  height: 100%;
  animation: added 1s linear;
}
.carouseltwo-item.active {
  display: flex;
}

.carouseltwo-caption {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  padding: 5%;
  /* animation: added 1s linear; */
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  color: #000000;

  border: none;

  z-index: 10;
  cursor: pointer;
}

.carousel-control-prev {
  left: 1rem;
}

.carousel-control-next {
  right: 1rem;
}
.iframe {
  width: 50vw;
  max-width: 50vw;
  height: 100vh;
}
.video {
  width: 50vw;
}
@media (width<848px) {
  .carouseltwo-item {
    flex-direction: column;
    align-items: center;
  }
  .iframe {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
  }
  .carouseltwo-caption {
    background-color: rgba(255, 255, 255, 0.441);
  }
  .video {
    width: 100vw;
  }
}
</style>
