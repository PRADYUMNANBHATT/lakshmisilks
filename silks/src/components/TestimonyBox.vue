<template>
  <div class="testimonial-card">
    <div class="cord-col">
      <h1>{{ heading }}</h1>
      <p class="testimonial-msg">
        {{ msg }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestimonyBox",
  props: {
    heading: String,
    msg: String,
  },
};
</script>
<style Scoped>
.testimonial-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  padding: 5vw;
  width: 90vw;
  height: 50vh;
  background: url("../assets/navold.jpg");

  border: 15px solid transparent;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  overflow: hidden;
}
.testimonial-msg {
  color: black;
}
.test-img {
  position: absolute;
  height: 10vw;
  width: auto;
  right: 0;
  bottom: -10px;
  z-index: 21;
}
</style>
