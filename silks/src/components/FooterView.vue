<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="widgetdiv">
          <div class="logorow">
            <div class="logo logodiv">
              <router-link to="/"
                ><img
                  alt=""
                  src="../assets/logo.png"
                  class="footer-img"
                  loading="lazy"
              /></router-link>
            </div>
            <div class="logo logodiv2"></div>
          </div>
          <div class="borderbottom"></div>
          <p class="logocontent">
            Shopping has always been an enjoyment. Lakshmi Silks has been a
            foremost Shopping destination to every household across Kottayam.
            Its authentic and loyalty with which we continue to win the
            customers across are simply unmatched. Shopping at Lakshmi Silks can
            give you that reason to rejoice and a way to find inspiration on
            marketplaces.
          </p>
        </div>

        <div class="widgetservice ourservice">
          <div class="widgettitle">About Us</div>
          <div class="widgetcontent">
            <ul>
              <li><router-link to="/about">Know Us</router-link></li>

              <!--                                    <li><a href="#">Pothys Rewards</a></li>-->
              <li><router-link to="/contact-us">Enquiry</router-link></li>
            </ul>
          </div>
        </div>

        <div class="widgetservice ourservice">
          <div class="widgettitle">Our Policies</div>
          <div class="widgetcontent">
            <ul>
              <li>
                <router-link to="/terms-and-conditions"
                  >Terms and Conditions</router-link
                >
              </li>
              <li>
                <router-link to="/privacy-policy">Privacy Policy</router-link>
              </li>
              <!-- <li><a href="track-order">Track Your Order</a></li> -->
            </ul>
          </div>
        </div>

        <div class="widgetservice ourservice">
          <div class="widgettitle">FOLLOW US</div>
          <div class="widgetcontent socialdiv">
            <a
              target="_blank"
              href="https://www.facebook.com/lakshmisilkskottayam/"
              ><i class="fa fa-facebook-f fabicon f-icon"></i
            ></a>

            <a
              target="_blank"
              href="https://www.instagram.com/lakshmisilkskottayam/"
              ><i class="fa fa-instagram fabicon f-icon"></i
            ></a>

            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCmedQ7qNe-ft5Q9_JAfJoFA"
              ><i class="fa fa-youtube fabicon f-icon"></i
            ></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/lakshmi-silks-kerala/"
              ><i class="fa fa-linkedin fabicon f-icon"></i
            ></a>
          </div>
        </div>

        <div class="borderbottom"></div>
        <div class="widgetservice ourservice">
          <div class="widgettitle">Contact US</div>
          <div class="widgetcontent tabcontent tabcontentdot">
            <ul>
              <li>
                <a href="https://wa.me/+918590400877" target="_blank">
                  <i class="fa fa-address-card-o fa-co" aria-hidden="true"></i>
                  Kosamattom City Centre, Tourist Banglow Rd, Near KSRTC
                  Bustand, Eerayil Kadavu, Kottayam, Kerala 686001</a
                >
              </li>
              <!-- <li><a href="tel:+918939593990">MAIN - +91-8939593990/ 96</a></li> -->
              <li>
                <a href="tel:+914812936000">
                  <i class="fa fa-phone fa-co" aria-hidden="true"></i>
                  +91 4812936000</a
                >
              </li>
              <li>
                <a href="mailto:customercare@lakshmisilks.co">
                  <i class="fa fa-envelope-o fa-co" aria-hidden="true"></i>
                  customercare@lakshmisilks.co
                </a>
              </li>
              <!-- <li><a>SKYPE - pothyssilks</a></li> -->
              <li>
                <a href="https://wa.me/+918590400877" target="_blank">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  +91 85904 00877</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="borderbottom"></div>
      </div>

      <div class="footerbottom">
        <div class="paymentdiv">
          <span>Copyrights @ 2023 All Rights Reserved by Lakshmisilks.</span>
        </div>
        <div class="techdiv">
          <a target="_blank" href="https://weebee.co.in"
            >Tech Driven by Weebee Technologies & Marketing Solutions</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style Scoped>
footer {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  line-height: 24px;
  font-weight: 400;
  margin-top: 10vh;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: block;
  font-family: "MontserratLight";
  font-size: 13px;
  padding: 30px 0;
  padding-bottom: 0;
  background-color: #e8e8e8 !important;
  color: #000 !important;
  max-width: 100vw;
}
.footer-img {
  height: fit-content;
  width: 200px;
}
.footer-top {
  width: 94vw;
  margin-left: 3vw;
  max-width: 100vw;
}
.borderbottom {
  background-color: #000000;
  height: 2px;
  width: 100%;
}
.widgetdiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.logorow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.storeimg {
  height: 35px;
  width: 100%;
}
.logdiv {
  display: inline-block;
}
.logocontent {
  color: #000;
  width: 94vw;
  padding: 1rem 0;
  display: none;
}

a {
  text-decoration: none;
  color: black;
}
i {
  padding-right: 10px;
}
.widgetservice {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  margin: 1rem;
  overflow: hidden;
}
.widgettitle {
  font-weight: thin;
  letter-spacing: 2px;
  min-width: 140px !important;
  padding-right: 10px;
  text-transform: uppercase;
  border-right: 1px solid black;
}
.widgetcontent ul li {
  display: inline-block;
  list-style: none;
  padding: 0px 10px;
}
.footerbottom {
  margin-left: 3vw;
  height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
}
.widgetcontent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
.widgetcontent > a > i {
  font-size: 1.5rem;
  padding: 0 20px;
  color: var(--primary--color);
}
.techdiv > a {
  color: var(--font--para);
}
@media (width<1000px) {
  /* .footer-top {
    display: none;
  }
  .footerbottom {
    display: none;
  } */
}
@media (width< 431px) {
  .footer-img {
    height: fit-content;
    width: 200px;
  }
}
</style>
