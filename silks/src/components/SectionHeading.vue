<template>
  <div class="h-sec">
    <strong> {{ hdg }}</strong>

    <div class="btm-cl">
      <div class="h-sec-bar"></div>
      <div>
        <img
          src="../assets/mandala.png"
          alt="symbol"
          class="Symbol"
          loading="lazy"
        />
      </div>
      <div class="h-sec-bar"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionHeadingView",
  props: {
    hdg: String,
  },
};
</script>
<style Scoped></style>
