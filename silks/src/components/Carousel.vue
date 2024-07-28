<template>
  <section>
    <div class="hero">
      <div class="right" @click="nextSlide">
        <div class="drops">
          <div class="drop"></div>
        </div>
      </div>
      <div class="left" @click="prevSlide">
        <div class="drops">
          <div class="drop"></div>
        </div>
      </div>
      <div class="dots"></div>
      <div v-if="isMobile">
        <div
          class="slide"
          @touchstart.passive="nextSlide"
          @touchend.passive="nextSlide"
          @touchmove.passive="nextSlide"
        >
          <img
            src="../assets/carousel_1.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_2.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_3.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img src="../assets/carousel_4.jpg" loading="lazy" />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_5.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_6.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
      </div>
      <div v-else>
        <div
          class="slide"
          @touchstart.passive="nextSlide"
          @touchend.passive="nextSlide"
          @touchmove.passive="nextSlide"
        >
          <img
            src="../assets/carousel_1_mb.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_2_mb.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_3_mb.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img src="../assets/carousel_4_mb.jpg" loading="lazy" />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_5_mb.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
        <div class="slide">
          <img
            src="../assets/carousel_6_mb.jpg"
            alt="carousel"
            srcset=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CarouselView",
  props: {
    msg: String,
  },
  data() {
    return {
      isMobile: false,
      autoslider: null,
    };
  },
  mounted() {
    let screenSize = window.screen.availWidth;
    screenSize < 784 ? (this.isMobile = false) : (this.isMobile = true);
    this.slider();
    console.log(window.screen.availWidth, this.isMobile);
  },
  watch() {},
  deactivated() {},
  methods: {
    slider() {
      const allslides = this.$el.querySelectorAll(".slide");
      const slideDots = this.$el.querySelector(".dots");
      let count = 0;
      const maxLength = allslides.length;

      let goSLide = (count) => {
        allslides.forEach((e, i) => {
          e.style.transform = `translateX(${(i - count) * 100}%)`;
        });
      };
      const createDots = () => {
        allslides.forEach((_, i) => {
          slideDots.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}" id="carousel_dot_${i}"  aria-label="carousel_btn"></button>`
          );
        });
      };
      createDots();
      goSLide(count);

      this.prevSlide = () => {
        if (count === 0) {
          count = maxLength - 1;
        } else {
          count--;
        }
        goSLide(count);
        activeDot(count);
      };
      this.nextSlide = () => {
        if (count === maxLength - 1) {
          count = 0;
        } else {
          count++;
        }
        goSLide(count);
        activeDot(count);
      };
      const activeDot = (e) => {
        const dots = this.$el.querySelectorAll(".dots__dot");
        dots.forEach((el) => {
          el.classList.remove("dots__dot--active");
        });
        this.$el
          .querySelector(`.dots__dot[data-slide="${e}"]`)
          .classList.add("dots__dot--active");
      };
      activeDot(count);

      this.$el.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") this.prevSlide();
        e.key === "ArrowRight" && this.nextSlide();
      });
      slideDots.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
          // const{slide}=e.target.dataset
          const slide = e.target.dataset.slide;
          e.target.classList.add("dots__dot--active");
          goSLide(slide);
          activeDot(slide);
        }
      });
      this.autoslider = setInterval(() => {
        allslides.forEach((e) =>
          e.addEventListener("mouseover", () => {
            clearInterval(this.autoslider);
          })
        );
        this.nextSlide();
      }, 3000);
    },
  },
  beforeUnmount() {
    clearInterval(this.autoslider);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero {
  margin-top: var(--nav-width);
  max-width: 100vw;
  height: 100vh;
  /* margin: 0 auto; */
  position: relative;

  /* IN THE END */
  overflow: hidden;
}
.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  transition: transform 1s;
}

@media (width<781px) {
  .hero {
    height: 100vh;
  }
  .slide {
    height: 100vh;
  }
  .hero > .right {
    display: none;
  }
  .hero > .left {
    display: none;
  }
}
@media (min-width: 781px) and (max-width: 1200px) {
  .hero {
    height: 40rem;
  }
  .slide {
    height: 40rem;
  }
}
.slide > img {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.left {
  position: absolute;
  top: 50%;
  left: 6%;
  height: 5vh;
  width: 5vh;
  transform: rotate(-45deg);
  z-index: 1;
  background-color: white;
  font-size: 4rem;

  border: 1px solid white;
  border-radius: 0% 100% 54% 46% / 0% 46% 54% 100%;
  cursor: pointer;
}
.left:hover,
.right:hover {
  background-color: var(--primary--color);
}
.right {
  position: absolute;
  top: 50%;
  right: 6%;

  transform: rotate(135deg);
  z-index: 1;
  background-color: white;

  border-radius: 0% 100% 54% 46% / 0% 46% 54% 100%;
  cursor: pointer;
}

.drop:hover {
  border-radius: 50%;
}
.drops {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drop {
  position: relative;
  width: 35px;
  height: 35px;
  /* background: #000; */

  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
}
.drop:nth-child(1) {
  border-radius: 0% 100% 54% 46% / 0% 46% 54% 100%;
}

.drop::before {
  content: "";
  position: absolute;
  background: white;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 0% 100% 54% 46% / 0% 46% 54% 100%;
  opacity: 0.9;
}
.drop::after {
  content: "";
  position: absolute;
  background: white;
  top: 20px;
  left: 20px;
  width: 10px;
  height: 10px;
  border-radius: 0% 100% 54% 46% / 0% 46% 54% 100%;
  opacity: 0.9;
}

/* .hero .slide img {
  height: auto;
  width: 100vw;
} */
.dots {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 1;
}

.dots__dot {
  border: none;
  background-color: #b9b9b9;
  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 1.75rem;
  cursor: pointer;
  transition: all 0.5s;

  /* Only necessary when overlying images */
  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
}

.dots__dot:last-child {
  margin: 0;
}

.dots__dot--active {
  background-color: #fff;
  /* background-color: #888; */
  opacity: 1;
}
</style>
