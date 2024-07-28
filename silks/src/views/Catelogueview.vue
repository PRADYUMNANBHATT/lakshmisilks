<template>
  <BannerView :image_src="url" />
  <MultiProductView />
</template>
<script>
import BannerView from "@/components/BannerBox.vue";
import MultiProductView from "@/components/MultipleProductView.vue";
export default {
  name: "CatelogueView",
  components: {
    BannerView,
    MultiProductView,
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
<style Scoped></style>
