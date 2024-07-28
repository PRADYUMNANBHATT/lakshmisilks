<template>
  <section class="short">
    <SectionHeading hdg="Lakshmi Silks Gallery" />
    <div class="gallery-2">
      <div class="col-two">
        <iframe
          height="500"
          src="https://www.youtube.com/embed/S6rmmqh3FNw"
          title="Lakshmi Silks  Sep  Grid 01 Video 01"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/PdQ4pru-qO0"
          title="Shop these and a lot more at Lakshmi Silks T.B Road. Kottayam"
          frameborder="0"
          height="587"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          height="587"
          src="https://www.youtube.com/embed/DoUCTiSyzNI"
          title="Lakshmi Silks Keralapiravi"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          height="587"
          src="https://www.youtube.com/embed/RiJcf4W53Ls"
          title="lakshmi"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="col-two">
        <iframe
          height="587"
          src="https://www.youtube.com/embed/MOss47F1yQc"
          title="Enchanting mystic florals and pastel hues to make you a dream girl."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          height="587"
          src="https://www.youtube.com/embed/IkHMPsnrpJo"
          title="Explore more at Lakshmi Silks, T. B. Road, Kottayam #fashionstyles #silks #fashion #kottayam"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          height="587"
          src="https://www.youtube.com/embed/Grimu0kmFlM"
          title="Lakshmi SIlk Grid02 Video01"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          height="587"
          src="https://www.youtube.com/embed/0bFkMewOVRw"
          title="Lakshmi Silks Grid01 Video01"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>
<script>
import SectionHeading from "./SectionHeading.vue";
export default {
  name: "ImageGalleryView",
  components: { SectionHeading },
};
</script>
<style Scoped>
.short {
  margin: var(--nav-width) 0;
}
iframe {
  width: 100% !important;
  height: 100vh !important;
}
.gallery-2 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  max-width: 100vw;
  background-color: transparent;
  gap: var(--gap);
  overflow: hidden;
}
.gallery-2 .col-two {
  display: flex;
  flex-direction: column;
  min-width: 47.25vw;
  height: auto;
  gap: var(--gap);
  box-shadow: inset 20px 20px 20px rgb(0, 0, 0, 0.05),
    25px 35px 20px rgb(0, 0, 0, 0.05), 25px 30px 30px rgb(0, 0, 0, 0.05),
    inset -20px -20px 25px rgb(255, 255, 255, 0.9);
  overflow: hidden;
}
.gallery-2 .col-two iframe {
  width: 100%;
  padding: 10px;
  height: auto;
  /* border: 20px solid #ffffff; */
}

.gallery-2 .col-two iframe:hover {
  transform: scale(1.05);
  transition: all 350ms ease-in-out;
}
@media (max-width: 780px) {
  .gallery-2 {
    flex-wrap: wrap;
  }
}
</style>
