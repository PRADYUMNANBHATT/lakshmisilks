<template>
  <section
    class="bloger"
    :style="{
      backgroundImage: 'url(' + resolve_img_url(category.bg_img) + ')',
      // background: category.bg_clr,
    }"
  >
    <div class="blog-uper-row">
      <div class="blog-uper-text">
        <ul>
          <!-- <li v-for="head in heading" :key="head" :style="{ color: text_clr }">
            {{ head }}
          </li> -->
          <li :style="{ color: category.clr }">{{ category.data_d.name }}</li>
        </ul>

        <p :style="{ color: category.data_d.pclr }">
          {{ category.data_d.category_discription }}
        </p>
        <router-link :to="{ name: 'ContactUs' }">
          <div class="btn-blog" :style="{ backgroundColor: category.clr }">
            CONTACT NOW
          </div>
        </router-link>
      </div>
      <div
        class="blog-uper-img"
        :style="{
          // backgroundImage: 'url(' + resolve_img_url(category.img) + ')',
        }"
      >
        <img
          :src="resolve_img_url(category.img)"
          alt="pdct_img"
          class="img-fluider"
          loading="lazy"
        />
      </div>
    </div>
    <div class="blog-lower-row">
      <div
        class="img-box"
        id="1"
        @click="change_img(1)"
        :style="{
          backgroundImage: 'url(' + resolve_img_url(category.data_d.bg) + ')',
          // background: category.data_d.bg_clr_1,
        }"
      >
        <img
          :src="resolve_img_url(category.data_d.category_image_1)"
          alt="pdctimg"
        />
      </div>
      <div
        class="img-box"
        id="2"
        @click="change_img(2)"
        :style="{
          backgroundImage: 'url(' + resolve_img_url(category.data_d.bg) + ')',
          // background: category.data_d.bg_clr_2,
        }"
      >
        <img
          :src="resolve_img_url(category.data_d.category_image_2)"
          alt="pdctimg"
        />
      </div>
      <div
        class="img-box"
        id="3"
        @click="change_img(3)"
        :style="{
          backgroundImage: 'url(' + resolve_img_url(category.data_d.bg) + ')',
          // background: category.data_d.bg_clr_3,
        }"
      >
        <img
          :src="resolve_img_url(category.data_d.category_image_3)"
          alt="pdctimg"
        />
      </div>
      <div
        class="img-box"
        id="4"
        @click="change_img(4)"
        :style="{
          backgroundImage: 'url(' + resolve_img_url(category.data_d.bg) + ')',
          // background: category.data_d.bg_clr_4,
        }"
      >
        <img
          :src="resolve_img_url(category.data_d.category_image_4)"
          alt="pdctimg"
        />
      </div>
    </div>
  </section>
</template>
<script>
import data from "../extra/data.json";
export default {
  name: "CategoryViewTwo",
  data() {
    return {
      data: data.blog_data.category_data,
      selected_img: 1,
      counterInterval: undefined,
    };
  },
  computed: {
    // heading() {
    //   return this.$route.params.id.toUpperCase().split("-");
    // },
    category() {
      let data_d = data.blog_data.category_data.find(
        (e) => e.category_name === this.$route.params.id
      );

      if (!data_d) data_d = data.blog_data.category_data[0];
      let img = `category_image_` + this.selected_img;
      let bg_img = `bg`;
      let bg_clr = `bg_clr_` + this.selected_img;
      let clr = `clr_` + this.selected_img;
      return {
        data_d: data_d,
        img: data_d[img],
        bg_img: data_d[bg_img],
        bg_clr: data_d[bg_clr],
        clr: data_d[clr],
      };
    },
  },
  mounted() {
    this.auto_loadr();
  },
  unmounted() {
    clearInterval(this.counterInterval);
  },
  methods: {
    resolve_img_url(path) {
      let images = require.context(
        "../assets/",
        false,
        /\.png$|\.jpg$|\.jpeg$/
      );
      return images("./" + path);
    },
    change_img(x) {
      this.selected_img = x;
      this.selected_loader();
    },
    auto_loadr() {
      this.counterInterval = setInterval(() => {
        if (this.selected_img < 4) {
          this.selected_img++;
          this.selected_loader();
        } else {
          this.selected_img = 1;
          this.selected_loader();
        }
      }, 5000);
    },
    selected_loader() {
      let img_box = this.$el.querySelectorAll(".img-box");
      img_box.forEach((element) => {
        if (Number(element.id) === this.selected_img) {
          element.style.transform = `rotate(1.02turn)`;
        } else {
          element.style.transform = `rotate(1turn)`;
        }
      });
    },
  },
};
</script>
<style Scoped>
.bloger {
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 2s linear;
}
.blog-uper-row {
  margin-top: var(--nav-width);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  /* background: url(../assets/repeat-white.png); */
}
.img-fluider {
  max-height: 100vh;
  width: auto;
  animation: slide_right 1s linear;
  z-index: 0;
  object-fit: cover;
}
.blog-uper-img {
  transition: all 1s linear;
  height: 100vh;
  width: 60vw;
  padding-top: 20px;
  animation: animal_animator 0.5s ease;
  z-index: 1;
  object-fit: contain;
  background-position: right 3em bottom 10px;
  background-repeat: no-repeat;
  /* position: absolute; */
  /* right: 10%; */
}
.blog-uper-text {
  width: 50vw;

  background: url("../assets/bhe.jpg") no-repeat;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 10vw;
  z-index: 0;

  /* border-radius: 50px; */
  /* background: #e0e0e0; */
  box-shadow: -20px -20px 60px #e8e4d8, 20px 20px 60px #e8e4d8;
  /* padding: 70px; */
}

.blog-uper-text > ul > li {
  display: inline-block;
  padding-right: 10px;
  list-style: none;
  font-size: 5rem;
  text-transform: uppercase;

  font-weight: 300;
  letter-spacing: 1px;
  word-spacing: 2px;
  overflow-wrap: anywhere;
  text-align: left;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;

  animation: slide_left 2s linear;
}
.blog-uper-text > ul > li:nth-child(2) {
  color: var(--secondry--color);
}
.blog-uper-text > p {
  /* color: black; */
  font-size: 1.8em;
  letter-spacing: 1px;
  word-spacing: 2px;
  overflow-wrap: anywhere;
  text-align: justify;
  text-align: left;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  animation: slide_btm 1s linear;
  /* color: url(../assets/zt.gif); */
}
@keyframes animal_animator {
  0% {
    clip-path: polygon(6% 92%, 0% 17%, 92% 95%, 87% 29%, 0% 32%);
  }
  10% {
    clip-path: polygon(16% 92%, 100% 17%, 92% 95%, 87% 29%, 10% 32%);
  }
  20% {
    clip-path: polygon(26% 92%, 80% 17%, 92% 85%, 87% 29%, 20% 32%);
  }
  30% {
    clip-path: polygon(36% 92%, 70% 17%, 92% 5%, 87% 29%, 30% 32%);
  }
  40% {
    clip-path: polygon(46% 92%, 60% 17%, 92% 65%, 87% 29%, 40% 32%);
  }
  50% {
    clip-path: polygon(56% 92%, 50% 17%, 92% 55%, 87% 29%, 50% 32%);
  }
  60% {
    clip-path: polygon(66% 92%, 40% 17%, 92% 45%, 87% 29%, 60% 32%);
  }
  70% {
    clip-path: polygon(76% 92%, 30% 17%, 92% 30%, 87% 29%, 70% 32%);
  }

  80% {
    clip-path: polygon(86% 92%, 20% 17%, 92% 20%, 87% 29%, 80% 32%);
  }

  90% {
    clip-path: polygon(96% 92%, 10% 17%, 92% 10%, 87% 29%, 90% 32%);
  }

  100% {
    clip-path: polygon(100% 92%, 0% 17%, 92% 0%, 87% 29%, 100% 32%);
  }
}
.blog-lower-row {
  width: 100vw;
  /* margin: 0 10vw; */
  min-height: auto;
  padding: 10vh 10vw;
  /* border-radius: 5% 5% 0 0; */
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: url(../assets/repeat-white.png);
}
.img-box {
  width: 20vw;
  background-color: white;
  border: 10px solid white;
  height: 20vw;
  overflow: hidden;
}
.img-box img {
  width: 20vw;
}
/* .img-box img:hover {
  width: 21vw;
  transform: scale(1.2);
  transition: all 1s linear;
  z-index: 20;
} */
.btn-blog {
  margin-top: 30px;
  width: 160px;
  padding: 10px 20px;
  /* animation: slide_btm 2s linear; */
  /* border: 1px solid black; */
  /* background-color: black; */
  color: white;
}
.btn-blog:hover {
  width: 300px;
  animation: changewidth 1s linear;
}
@media (width<1000px) {
  .blog-uper-row {
    flex-wrap: wrap;
  }
  .blog-uper-img {
    height: 100vh;
    width: 100vw;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    right: 0;
  }
  .blog-uper-text {
    width: 100vw;
    height: fit-content;

    left: 0;
    /* display: none; */
  }
  .blog-uper-text > ul > li {
    font-size: 5rem;
  }
  .img-fluider {
    overflow: hidden;
    height: 100vh;
    max-width: 100vw;
  }
}
</style>
