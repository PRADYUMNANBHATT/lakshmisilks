<template>
  <div class="row-col">
    <div class="img-col">
      <img
        src="../assets/test.jpg"
        alt="product-image"
        loading="lazy"
        class="product-img"
      />
    </div>
    <div class="discription-col">
      <h4 class="pdctname">Kanjeepuram saree</h4>
      <p class="pdct-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam
        dolore vitae perferendis quos iste debitis quaerat mollitia sed magni
        itaque, odit voluptates consectetur, quam, reprehenderit maxime
        distinctio totam nisi.
      </p>
      <span class="price">₹ 5000 /-</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductView",
};
</script>
<style Scoped>
.row-col {
  padding-top: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* margin: 3vw; */
  gap: 5vw;
  width: 100vw;
}
.img-col {
  padding: 5vh 3vw;
  width: 40vw;
  min-height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
}
.product-img {
  width: 40vw;
  height: auto;
  cursor: crosshair;
}
.product-img:hover {
  transform: scale(2) translateY(25%);
  transition: all 350ms linear;
}
.discription-col {
  min-height: 100vh;
  width: 40vw;
  padding: 5vh 3vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: flex-start; */
}
.pdctname {
  font-size: 2rem;
  text-transform: uppercase;
  color: #b2b0b0;
  display: -webkit-box;
  max-width: auto;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pdct-description {
  font-size: 1rem;
  color: #505052;
  display: -webkit-box;
  max-width: auto;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.7rem;
  /* height: 35px; */
}
.price {
  font-size: 1.4rem;
  color: #505052;
}
</style>
