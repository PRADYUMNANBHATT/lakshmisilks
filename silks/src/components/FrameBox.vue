<template>
  <section>
    <div class="sect-2">
      <div class="col-l">
        <router-link
          :to="{ name: 'Catelogueview', params: { id: 'semi-litchi' } }"
        >
          <img
            src="../assets/lakshmibox10.jpg"
            alt="sect-2 iamge"
            loading="lazy"
            class="frm-img"
          />
        </router-link>
        <router-link
          :to="{ name: 'Catelogueview', params: { id: 'semi-litchi' } }"
        >
          <img
            src="../assets/lakshmibox11.jpg"
            alt="sect-2 iamg"
            loading="lazy"
            class="frm-img"
          />
        </router-link>
      </div>

      <div class="col-l">
        <router-link
          :to="{ name: 'Catelogueview', params: { id: 'semi-litchi' } }"
        >
          <img
            src="../assets/lakshmibox12.jpg"
            alt="sect-2 iamg"
            loading="lazy"
            class="frm-img"
          />
        </router-link>
        <router-link
          :to="{ name: 'Catelogueview', params: { id: 'semi-litchi' } }"
        >
          <img
            src="../assets/lakshmibox13.jpg"
            alt="sect-2 iamg"
            loading="lazy"
            class="frm-img"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FrameView",
};
</script>
<style Scoped>
.sect-2 {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 20px;
  max-width: 97vw;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
}
.col-1 {
  overflow: hidden;
  /* padding: 10px; */
  border: 10px solid white;
}
.frm-img {
  height: auto;
  width: 100%;

  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
}
.frm-img:hover {
  transform: scale(1.05);
  transition: all 350ms ease-in-out;
}
</style>
