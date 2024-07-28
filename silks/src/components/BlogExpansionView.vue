<template>
  <section class="blog-view">
    <div class="blog-col-view">
      <img
        alt="img"
        :src="resolve_img_url(blog.Image_url)"
        loading="lazy"
        class="vlog-img-view"
      />
      <h1>{{ blog.heading }}</h1>
      <p>{{ blog.discription }}</p>
    </div>
    <div class="blog-selection">
      <div v-for="blg in da" :key="blg.id">
        <router-link
          :to="{ name: 'BlogExpansionView', params: { id: blg.id } }"
        >
          <p class="blog-selection-heading">{{ blg.heading }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import data from "../extra/data.json";

export default {
  name: "BlogExpansionView",

  data() {
    return {
      da: data.blog_data.Blogs,
    };
  },
  computed: {
    // heading() {
    //   return this.$route.params.id.toUpperCase().split("-");
    // },
    blog() {
      const data_d = data.blog_data.Blogs.find(
        (e) => e.id === this.$route.params.id
      );
      if (data_d) {
        return data_d;
      } else {
        return data[0];
      }
    },
  },

  methods: {
    resolve_img_url: function (path) {
      let images = require.context(
        "../assets/",
        false,
        /\.png$|\.jpg$|\.jpeg$/
      );
      return images("./" + path);
    },
  },
};
</script>
<style Scoped>
.blog-view {
  margin-top: var(--nav-width);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.blog-col-view {
  padding-top: 10vh;
  padding-left: 5vw;
  width: 70vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* background: url(../assets/bge3.jpg) no-repeat;
  background-size: cover; */
}

.vlog-img-view {
  width: 55vw;
  height: fit-content;
  margin-bottom: 10vh;
}
.blog-col-view > P {
  width: auto;
  min-height: 50vh;
  font-size: 1.8rem;
  letter-spacing: 1px;
  word-spacing: 2px;
  overflow-wrap: anywhere;

  text-align: left;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.blog-selection {
  padding-top: 10vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;
}
.blog-selection-heading {
  margin-bottom: 20px !important;
  color: var(--font);
  -webkit-line-clamp: 1;
}
.router-link-exact-active > p {
  transform: translateX(20px);
  color: grey;
  cursor: none;
}
</style>
