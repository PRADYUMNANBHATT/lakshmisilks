<template>
  <section>
    <SectionHeading hdg="Lakshmi Silks Collection" />
    <div class="gallery">
      <div class="col">
        <div class="img-box-glry">
          <router-link
            :to="{ name: 'Catelogueview', params: { id: 'silks-saree' } }"
          >
            <img
              src="../assets/test6.jpg"
              alt="collection_img"
              class="img-fluid"
              loading="lazy"
            />
            <div class="text-overlay">Kanchipuram sarees</div>
          </router-link>
        </div>
        <div class="img-box-glry">
          <router-link
            :to="{ name: 'Catelogueview', params: { id: 'semi-tusser' } }"
            ><img
              src="../assets/galary_med_1.jpg"
              loading="lazy"
              alt="collection_img"
              class="img-fluid"
            />
            <div class="text-overlay">Designer sarees</div>
          </router-link>
        </div>
        <div class="img-box-glry">
          <router-link
            :to="{ name: 'Catelogueview', params: { id: 'party-wear' } }"
            ><img
              src="../assets/gl1.jpg"
              loading="lazy"
              alt="collection_img"
              class="img-fluid"
            />
            <div class="text-overlay">Wedding Gown</div></router-link
          >
        </div>
      </div>
      <div class="col">
        <div class="img-box-glry">
          <router-link
            :to="{ name: 'Catelogueview', params: { id: 'semi-litchi' } }"
          >
            <img
              src="../assets/galary_med_2.jpg"
              loading="lazy"
              alt="collection_img"
              class="img-fluid"
            />
            <div class="text-overlay">kids Wear</div></router-link
          >
        </div>
        <div class="img-box-glry">
          <router-link
            :to="{ name: 'Catelogueview', params: { id: 'designer-saree' } }"
            ><img
              src="../assets/test12.jpg"
              loading="lazy"
              alt="collection_img"
              class="img-fluid"
            />
            <div class="text-overlay">Men's wear</div>
          </router-link>
        </div>
        <div class="img-box-glry">
          <router-link
            :to="{ name: 'Catelogueview', params: { id: 'traditional-wear' } }"
            ><img
              src="../assets/test7.jpg"
              loading="lazy"
              alt="collection_img"
              class="img-fluid"
            />
            <div class="text-overlay">Silks sarees</div></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeading from "./SectionHeading.vue";
export default {
  name: "GalleryView",
  components: { SectionHeading },
};
</script>
<style Scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 100vw;
  background-color: transparent;
  gap: var(--gap);
  overflow: hidden;
}
.gallery .col {
  display: flex;
  flex-direction: column;
  width: 48.25vw;
  height: auto;
  gap: var(--gap);
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  overflow: hidden;
}
.gallery .col img {
  width: 100%;
  height: 100%;
  padding: 10px;
  height: auto;
}

.gallery .col img:hover {
  transform: scale(1.05);
  transition: all 350ms ease-in-out;
}
.img-box-glry {
  position: relative;
}
.text-overlay {
  position: absolute;
  left: 20px;
  bottom: 20px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1;
  font-size: 3rem;
  color: var(--font);
  background-color: rgba(255, 255, 255, 0.557);
  padding: 20px;
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
}
@media (width<1000px) {
  .text-overlay {
    font-size: 1rem;
    padding: 5px;
  }
}
</style>
