<template>
  <div class="four-not-four">
    <!-- <h1>404</h1>
    <h2>Page Not Found</h2> -->
  </div>
</template>
<script>
export default {
  name: "404View",
};
</script>
<style Scoped>
.four-not-four {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary--color);
  background: url(../assets/404.webp) no-repeat;
  background-position: center;
}
.four-not-four h1 {
  font-size: 20rem;
  color: var(--secondry--color);
  text-shadow: 13px 9px 8px rgba(248, 205, 8, 0.76);
}
.four-not-four h2 {
  font-size: 3rem;
  color: white;
}
</style>
