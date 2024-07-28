<template>
  <div class="maintenance">
    <h1>We'll be back soon</h1>
    <h2>Under Maintenance</h2>
  </div>
</template>
<script>
export default {
  name: "MaintenanceView",
};
</script>
<style Scoped>
.maintenance {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* background-color: var(--primary--color); */
  /* background: url(../assets/404.webp) no-repeat; */
  background-position: center;
}
.maintenance h1 {
  font-size: 4rem;
  color: var(--secondry--color);
  text-shadow: 13px 9px 8px rgba(248, 205, 8, 0.76);
}
.maintenance h2 {
  font-size: 3rem;
  color: var(--primary--color);
}
</style>
