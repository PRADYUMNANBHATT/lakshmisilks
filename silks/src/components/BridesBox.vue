<template>
  <section>
    <SectionHeading hdg="Brides of Lakshmi" />
    <div class="bride-row">
      <div class="brides-colection">
        <div class="brides-img">
          <img src="../assets/test9.jpg" alt="bridelmate" />
        </div>
        <div class="brides-img">
          <img src="../assets/test10.jpg" alt="" />
        </div>
        <div class="brides-img">
          <img src="../assets/test11.jpg" alt="" />
        </div>
      </div>
      <div class="brides-txt">
        <h1>Lakshmi Bridel Collection.</h1>
        <p>
          Bright hues, bold prints, and beautiful you. Wear your own sunshine
          and let your style shine bright with Lakshmi Silks. Come experience
          pure silks & best craftsmanship at Lakshmi Silks, T. B. Road, Kottayam
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeading from "./SectionHeading.vue";
export default {
  name: "BridesBox",
  components: { SectionHeading },
};
</script>
<style Scoped>
.bride-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  min-height: 50vw;
  overflow: hidden;
  position: relative;
  margin: 5vw;
  background: url("../assets/gold.jpg");
  background-size: cover;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  /* background-size: 100%; */
  /* animation: gradient 15s ease infinite; */
  background-position: 100% 50%;
}
@keyframes gradient {
  0% {
    background-position: 0% 0%;
    background-size: 100%;
  }
  50% {
    background-position: 100% 100%;
    background-size: 150%;
  }
  100% {
    background-position: 0% 0%;
    background-size: 100%;
  }
}
.brides-colection {
  height: 90vh;
  position: relative;
  width: 45vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  /* background: url("../assets/gold.png"); */
  background-size: cover;
}

.brides-colection > div:nth-child(1) {
  position: absolute;
  left: 0;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  transform: translateY(0px);
}
.brides-colection > div:nth-child(2) {
  position: absolute;
  left: 10vw;
  transform: translateY(20%);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
.brides-colection > div:nth-child(3) {
  position: absolute;
  left: 20vw;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  transform: translateY(40%);
}
.brides-colection > div > img {
  height: 100%;
  width: 30vw;
}
.brides-txt:hover + .brides-colection {
  display: none;
}
@keyframes anime {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(20%);
  }
}
.brides-img :hover {
  transition: all 1s linear;
  transform: translateY(20%);
}
.brides-txt {
  width: 45vw;
  background-color: rgba(255, 255, 255, 0.821);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 5%;
  gap: 20px;
  position: absolute;
  right: 0;
  z-index: 0;
}

@media (width<1000px) {
  .bride-row {
    flex-direction: column;
    padding: 0;
  }
  .bride-row > div {
    width: 100%;
  }
  .brides-colection > div > img {
    width: 300px;
  }
}
</style>
