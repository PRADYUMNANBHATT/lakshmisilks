<template>
  <section>
    <SectionHeading hdg="BLOG" />
    <div class="bloges" @mouseover="check_hange($event)" ref="blog_cols">
      <div
        class="blog-col"
        v-for="dat in data_d"
        :key="dat.id"
        @click="rediect_to(dat.id)"
      >
        <img
          alt="img"
          :src="resolve_img_url(dat.Image_url)"
          loading="eager"
          class="vlog-img"
        />
        <p>{{ dat.discription }}</p>
        <strong>{{ dat.date }}</strong>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeading from "./SectionHeading.vue";
import datar from "../extra/data.json";
export default {
  name: "BlogView",
  components: {
    SectionHeading,
  },
  data() {
    return {
      data_d: null,
    };
  },
  mounted() {
    this.data_d = datar.blog_data.Blogs;
  },
  methods: {
    check_hange(e) {
      let ratio = (e.screenX / e.view.screen.width) * 100;

      if (ratio > 50) {
        this.$refs.blog_cols.scrollLeft += 100;
      } else {
        this.$refs.blog_cols.scrollLeft -= 100;
      }
    },
    resolve_img_url: function (path) {
      let images = require.context(
        "../assets/",
        false,
        /\.png$|\.jpg$|\.jpeg$/
      );
      return images("./" + path);
    },
    rediect_to(id) {
      this.$router.push({
        name: "BlogExpansionView",
        params: { id: id },
      });
    },
  },
};
</script>
<style Scoped>
.bloges {
  min-width: 300vw;
  cursor: ew-resize;
  overflow-x: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  gap: 10px;
  padding-bottom: 50px;
  /* white-space: nowrap; */
  transition: all 1s linear;
  /* scroll-behavior: smooth; */
}
.blog-col {
  max-width: 30vw;
  min-height: 50vh;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  border: 0.5rem solid white;
  position: relative;
}
.blog-col p {
  font-size: 13px;
  color: #505052;
  text-align: justify;
}
.blog-col strong {
  padding: 10px;
  color: grey;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.vlog-img {
  height: 100%;
  width: 29vw;
  padding-bottom: 20px;
}
.blog-col:hover {
  transform: scale(1.05) translateY(5%);
  transition: all 350ms linear;
}
@media (width<800px) {
  .blog-col {
    max-width: 95vw;
    width: 95vw;
    height: auto;
    padding: 2vw;
  }
  .vlog-img {
    width: 100vw;
  }
}
</style>
