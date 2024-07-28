<template>
  <div class="row-contact">
    <div class="column-cnt">
      <!-- <img
        src="../assets/contactus.jpg"
        alt="product-image"
        loading="lazy"
        class="br-img"
      /> -->
    </div>
    <div class="discription-col">
      <div class="row">
        <div class="map">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=+Lakshmisilks%2CKosamattom+City+Centre%2C+Tourist+Banglow+Rd%2C+Near+KSRTC+Bustand%2C+++++++++++++++Eerayil+Kadavu%2C+Kottayam%2C+Kerala+686001&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="cntact-box">
          <h4 class="pdctname">Contact Us</h4>
          <div class="contact-sm-box">
            <a href="tel:+914812936000">
              <i class="fa fa-phone fa-co" aria-hidden="true"></i>
              <p>+91 4812936000</p>
            </a>
          </div>
          <div class="contact-sm-box">
            <a href="mailto:customercare@lakshmisilks.co">
              <i class="fa fa-envelope-o fa-co" aria-hidden="true"></i>
              <p href="mailto:customercare@lakshmisilks.co">
                customercare@lakshmisilks.co
              </p>
            </a>
          </div>
          <div class="contact-sm-box">
            <a href="https://wa.me/+918590400877" target="_blank">
              <i class="fa fa-whatsapp fa-co" aria-hidden="true"></i>

              <p>+91 85904 00877</p>
            </a>
          </div>
          <div class="contact-sm-box">
            <a href="https://wa.me/+918590400877" target="_blank">
              <i class="fa fa-address-card-o fa-co" aria-hidden="true"></i>
              <p>
                Kosamattom City Centre, Tourist Banglow Rd, Near KSRTC Bustand,
                Eerayil Kadavu, Kottayam, Kerala 686001
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactView",
};
</script>
<style Scoped>
.row-contact {
  margin-top: var(--nav-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */

  /* gap: 5vw; */
  width: 100vw;
}
#gmap_canvas {
  width: 50vw;
  height: 70vh;
}

.column-cnt {
  height: auto;
  /* margin-top: 120px; */
  width: 100vw;
}
.br-img {
  width: 100vw;
  height: auto;
}
/* .product-img:hover {
  transform: scale(1.05);
  transition: all 350ms linear;
} */
.discription-col {
  width: 100vw;
  overflow: hidden;
  min-width: 40vh;
  padding: 5vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.cntact-box {
  gap: 10px;
  cursor: pointer;
  min-height: 50vh;
  margin: 10vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.map {
  width: 50vw;
}
.contact-sm-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: fit-content;
  gap: 20px;
  padding: 5px;
}
.contact-sm-box > a {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.contact-sm-box > a > p {
  font-size: 2rem;
}
.contact-sm-box > a > i {
  font-size: 2rem;
  padding: 10px 25px;
}
.fa-co {
  color: var(--primary--color);
}
.fa-co:hover {
  transform: scale(1.02);
  transition: all 350ms;
  color: var(--secondry--color);
}
.row {
  width: 100vw;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
}
@media (width<1000px) {
  .row {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .cntact-box,
  .map {
    min-width: 90vw;
    padding: 2vw;
    margin: 0;
  }
  .discription-col {
    padding: 0;
    margin: 0;
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #gmap_canvas {
    width: 100%;
    height: fit-content;
  }
}
</style>
