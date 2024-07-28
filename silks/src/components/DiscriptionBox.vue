<template>
  <section class="de-section-top">
    <div class="de-section">
      <div class="container-discription">
        <!-- <span>View the entire collection</span> -->
        <h1>Lakshmi Silks</h1>
        <p>
          Wrap yourself in timeless elegance with a lakshmi saree. Step into
          grace with Lakshmi Silks. By crafting epics in Kanchipuram Banaras
          silks, we blend opulence with grace to enhance your beauty. Shop these
          and much more at Lakshmi Silks.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DiscriptionView",
};
</script>
<style Scoped>
.de-section-top {
  background-size: cover;
  background-repeat: no-repeat;
}
.de-section {
  max-width: 100vw;

  /* background-color: rgba(226, 222, 222, 0.702); */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  /* 
  background-size: 100vw; */
}
.container-discription {
  max-width: 90vw;

  color: #530701;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 10vw;
  gap: 20px;
  backdrop-filter: blur(4px);
  border: 15px solid transparent;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  overflow: hidden;
  /* background-color: #100f0f8c; */
}

@media (width<1000px) {
  .de-section {
    justify-content: center;
  }
  .container-discription {
    max-width: 100vw;
    min-height: 50vh;
    padding: 2vh 3vw;
    gap: 5px;
  }
}
</style>
