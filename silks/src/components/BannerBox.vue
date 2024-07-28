<template>
  <section>
    <div class="sect-3">
      <div class="semi-banner">
        <img :src="resolve_img_url(image_src)" alt="banner" loading="lazy" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "BannerView",
  props: {
    image_src: {
      type: String,
      default: "HomeBanner4.jpg",
    },
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>
<style Scoped>
.sect-3 {
  max-width: 100vw;
  overflow: hidden;
}
.semi-banner {
  margin: 1.5vw;

  width: 97vw;
  height: auto;
  overflow: hidden;
  border: 10px solid white;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
}
.semi-banner img {
  width: 100%;
  height: 100%;
}
.semi-banner img:hover {
  transform: scale(1.05);
  transition: all 350ms ease-in-out;
}
</style>
