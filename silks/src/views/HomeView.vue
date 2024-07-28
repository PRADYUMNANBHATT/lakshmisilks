<template>
  <!-- <CategoryView /> -->
  <Carousel :carousel="carousel_data" />
  <DiscriptionBox />
  <GalleryView />
  <BannerView :image_src="url" />
  <tesimonial_view />
  <!-- <BridesBox /> -->
  <BrideCarousel />
  <!-- <selection_section />

  <BlogViewe /> -->
</template>

<script>
// @ is an alias to /src
// import MultiProductView from "@/components/MultipleProductView.vue";
// import CategoryView from "@/components/CategoryViewTwo.vue";
import Carousel from "@/components/CarouselView.vue";
// import FrameBox from "@/components/FrameBox.vue";
import BannerView from "@/components/BannerBox.vue";
import GalleryView from "@/components/GalleryView.vue";
// import BlogViewe from "@/components/Blogview.vue";
import DiscriptionBox from "@/components/DiscriptionBox.vue";
// import selection_section from "@/components/SelectionSection.vue";
import tesimonial_view from "@/components/TestimonialView.vue";
// import BridesBox from "@/components/BridesBox.vue";
import BrideCarousel from "@/components/CarouselTwo.vue";
import data from "../extra/data.json";
export default {
  name: "HomeView",
  components: {
    Carousel,
    // FrameBox,
    BannerView,
    // CategoryView,
    // MultiProductView,
    GalleryView,
    // BlogViewe,
    DiscriptionBox,
    // selection_section,
    tesimonial_view,
    // BridesBox,
    BrideCarousel,
  },
  data() {
    return {
      url: "HomeBanner4.jpg",
      carousel_data: data.blog_data.carousel_img,
    };
  },
};
</script>
<style scoped></style>
