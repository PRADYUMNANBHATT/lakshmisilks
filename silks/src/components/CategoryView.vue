<template>
  <section>
    <SectionHeading hdg="Brides of Lakshmi" />
    <div class="product-row">
      <div class="product-box">
        <img src="../assets/pdct.jpg" alt="pdct" loading="lazy" class="ctimg" />
        <h4 class="cth">Kanjeepuram saree</h4>
      </div>
      <div class="product-box">
        <img src="../assets/pdct.jpg" alt="pdct" loading="lazy" class="ctimg" />
        <h4 class="cth">Kanjeepuram saree</h4>
      </div>
      <div class="product-box">
        <img src="../assets/pdct.jpg" alt="pdct" loading="lazy" class="ctimg" />
        <h4 class="cth">Kanjeepuram saree</h4>
      </div>
      <div class="product-box">
        <img src="../assets/pdct.jpg" alt="pdct" loading="lazy" class="ctimg" />
        <h4 class="cth">Kanjeepuram saree</h4>
      </div>
      <div class="product-box">
        <img src="../assets/pdct.jpg" alt="pdct" loading="lazy" class="ctimg" />
        <h4 class="cth">Kanjeepuram saree</h4>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeading from "./SectionHeading.vue";
export default {
  name: "CategoryView",
  components: { SectionHeading },
};
</script>
<style Scoped>
.h-sec {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1vh 0;
  height: auto;
  max-width: 100vw;
}
.h-sec strong {
  font-weight: 100;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: "Monserat";
}
.Symbol {
  height: 1rem;
  margin: 0.5rem;
}
.btm-cl {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.h-sec-bar {
  width: 100px;
  height: 1.5px;
  background-color: #7e7d7d;
}
.product-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 3vh 0;
  max-width: 100vw;
  /* background: url("./assets/nav2.jpg"); */
}
.product-box {
  height: auto;
  width: 18vw;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  border: 0.5rem solid white;
  overflow: hidden;
  margin: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* box-shadow: 2px 2px 2px black; */
}
.pdcth {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #b2b0b0;
  display: -webkit-box;
  max-width: 18vw;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pdctcnt {
  font-size: 13px;
  color: #505052;
  display: -webkit-box;
  max-width: 18vw;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* height: 35px; */
}
.price {
  font-size: 13px;
  color: #505052;
}
.pdctimg {
  height: 17vw;
  width: auto;
}
img:hover {
  transform: scale(1.05);
  transition: all 350ms ease-in-out;
}
.ctimg {
  height: 17vw;
  width: auto;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
.cth {
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #b2b0b0;
  display: -webkit-box;
  max-width: 18vw;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
