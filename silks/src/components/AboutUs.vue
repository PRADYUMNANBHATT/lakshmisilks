<template>
  <section class="abt">
    <div class="row-about">
      <RouterLink to="/contact-us">
        <img src="../assets/aboutus.png" alt="about" class="img-fluid" />
      </RouterLink>
      <!-- <div class="col-about">
        <div class="heading">
          <h2><span>Lakshmi</span> Silks</h2>
        </div>
        <span class="dr">
          Lakshmi Silks retailer of a variety of silk saree, wedding saree,
          bridal saree, kanjivaram saree etc. The range of products that we
          offer satisfies every client need. We have maintained high quality
          levels with the help of stringent audits and quality test of every
          product to ensure all the products are of the same standard. Our
          efficient workforce gives special attention to detail and every design
          by our talented designers is unique.
        </span>
      </div>
      <div class="col-img">
        <img src="../assets/LS_PNG_01.png" alt="about-img" class="about-img" />
      </div> -->
    </div>
    <div class="video-frame">
      <iframe
        src="https://www.youtube.com/embed/Lv0_wbQfuLw?autoplay=1"
        title="Lakshmi Silks"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutUsView",
};
</script>
<style Scoped>
.abt {
  /* background: url(../assets/bge3.jpg) no-repeat; */
  background-size: cover;
  max-width: 100vw;
  height: auto;
}
.row-about {
  height: auto;
  max-width: 100vw;
  /* background: url(../assets/aboutus.png) no-repeat; */
  /* overflow: scroll; */
  margin-top: var(--nav-width);
  /* width: 100vw;
  height: 100vh; */
  margin-bottom: 1vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.img-fluid {
  width: 100vw;
  height: fit-content;
}
.col-about {
  min-height: 120vh;
  /* max-width: 45vw; */
  height: 120vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
}
.col-img {
  z-index: 0;
  position: absolute;
  right: 20vw;

  animation: slide_right 2s linear;
}
.heading {
  position: relative;
  height: 30vh;
}
.col-about > div > h2 {
  width: 50vw;
  font-size: 10rem;
  padding-left: 2rem;
  z-index: 1;
  color: var(--secondry--color);
  left: 40%;
  position: absolute;
  top: 23%;
  text-transform: italic;
  animation: slide_left 2s linear;
}
.col-about > div h2 span {
  color: var(--primary--color);
  left: -50%;
  position: absolute;
  top: -60%;
}

.dr {
  width: 50vw;
  font-size: 2rem;
  padding-left: 2rem;

  animation: slide_btm 2s linear;
  z-index: 1;
  color: var(--font--para);
}
.about-img {
  max-width: 50vw;
  height: 100vh;
  object-fit: cover;
  padding-bottom: 0;
  margin-bottom: 0;
}
iframe {
  width: 96vw;
  min-height: 100vh;
  margin: 3vh;
}
.video-frame {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1000px) and (min-width: 500px) {
  .col-about {
    width: 100vw;
  }
  .about-img {
    height: 100vh;
    width: auto;
    display: none;
    bottom: 0;
  }
  .col-about > div > h2 {
    font-size: 8rem;
    top: 15%;
    left: 10%;
  }
  .dr {
    font-size: 1.8rem;
    width: 80vw;
  }
  iframe {
    width: 96vw;
    min-height: 50vh;
    margin: 3vh;
  }
}
@media (max-width: 500px) {
  .col-about > div > h2 {
    font-size: 6rem;
  }
  iframe {
    width: 96vw;
    height: fit-content;
    margin: 3vh;
  }
}
</style>
