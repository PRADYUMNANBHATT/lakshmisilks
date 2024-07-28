<template>
  <div class="ring" ref="loader">
    <div class="gif-loader"></div>
  </div>
  <!-- <navbar-view />
  <router-view />
  <footer-view /> -->
  <Maintence />
</template>
<script>
import Maintence from "./components/MaintenanceView.vue";
export default {
  data() {
    return {
      name: "Apples",
      message: "I like apples",
      alltags: [
        {
          type: "http-equiv",
          name: "Content-Security-Policy",
          type2: "value",
          content: "default-src 'self' www.lakshmisilks.co; img-src*,",
        },

        {
          type: "property",
          name: "og:type",
          type2: "content",
          content: "article",
        },

        {
          type: "property",
          name: "og:site_name",
          type2: "content",
          content: "Lakshmi Silks",
        },
        {
          type: "property",
          name: "fb:admins",
          type2: "content",
          content: "110306301803952",
        },
        {
          type: "name",
          name: "twitter:card",
          type2: "content",
          content: "summary_large_image",
        },
        {
          type: "name",
          name: "twitter:site",
          type2: "content",
          content: "@lakshmisilks",
        },
        {
          type: "name",
          name: "twitter:creator",
          type2: "content",
          content: "@lakshmisilks",
        },
        {
          type: "name",
          name: "keywords",
          type2: "content",
          content: "Lakshmi Silks",
        },
        {
          type: "name",
          name: "description",
          type2: "content",
          content:
            "Wrap yourself in timeless elegance with a lakshmi saree. Step into grace with Lakshmi Silks. By crafting epics in Kanchipuram Banaras silks, we blend opulence with grace to enhance your beauty. Shop these and much more at Lakshmi Silks.",
        },
        {
          type: "property",
          name: "og:title",
          type2: "content",
          content: "Lakshmi Silks | The Authentic silk people",
        },
        {
          type: "property",
          name: "og:description",
          type2: "content",
          content:
            "Wrap yourself in timeless elegance with a lakshmi saree. Step into grace with Lakshmi Silks. By crafting epics in Kanchipuram Banaras silks, we blend opulence with grace to enhance your beauty. Shop these and much more at Lakshmi Silks.",
        },

        {
          type: "property",
          name: "og:url",
          type2: "content",
          content: "https://lakshmisilks.co",
        },
        {
          type: "property",
          name: "og:image",
          type2: "href",
          content: "https://lakshmisilks.co/img/logo.4a39b7d5.png",
        },
        {
          type: "property",
          name: "og:image:alt",
          type2: "content",
          content: "The AUthentic Silks People",
        },

        {
          type: "name",
          name: "twitter:title",
          type2: "content",
          content: "Lakshmi Silks | The Authentic silk people",
        },
        {
          type: "name",
          name: "twitter:image:src",
          type2: "href",
          content: "https://lakshmisilks.co/img/logo.4a39b7d5.png",
        },
        {
          type: "name",
          name: "twitter:url",
          type2: "content",
          content: "https://lakshmisilks.co",
        },
        {
          type: "name",
          name: "twitter:description",
          type2: "content",
          content:
            "Wrap yourself in timeless elegance with a lakshmi saree. Step into grace with Lakshmi Silks. By crafting epics in Kanchipuram Banaras silks, we blend opulence with grace to enhance your beauty. Shop these and much more at Lakshmi Silks.",
        },
      ],
    };
  },
  components: { Maintence },

  mounted() {
    setTimeout(() => {
      this.$refs.loader.classList.remove("ring");
      this.$refs.loader.classList.remove("gif-loader");
    }, 6000);
    document.title = "Lakshmi Silks";
    // this.metaTag();
    // this.logger();
  },
  methods: {
    // windows: (onload = () => {
    //   console.log(this.$refs.loader);
    //   setTimeout(() => {
    //     this.$refs.loader.classList.remove("ring");
    //   }, 2000);
    // }),
    metaTag() {
      for (let i = 0; i < this.alltags.length; i++) {
        let meta = document.createElement("meta");
        meta.setAttribute(this.alltags[i].type, this.alltags[i].name);
        meta.setAttribute(this.alltags[i].type2, this.alltags[i].content);
        meta.setAttribute("class", "changable");
        document.head.appendChild(meta);
      }
    },
    // logger() {
    // console.log("Cookies: " + navigator.cookieEnabled);
    // console.log("Browser Language: " + navigator.browserLanguage);
    // console.log("Language: " + navigator.language);
    // console.log("Platform: " + Navigator.userActivation);
    // console.log("Connection Speed: " + navigator.connectionSpeed);
    // console.log("User Agent: " + navigator.userAgent);
    // console.log("Webdriver: " + navigator.webdriver);
    // console.log("Geolocation: " + navigator.geolocation);
    // fetch("https://api.ipify.org/?format=json").then((response) =>
    //   console.log(response.json(), self.location)
    // );
    //   const p = new window.RTCPeerConnection();
    //   p.createDataChannel(null);
    //   p.createOffer().then((d) => p.setLocalDescription(d));
    //   p.onicecandidate = (e) => console.log(p.localDescription, e);
    // },
  },
};
</script>

<style>
:root {
  --primary--color: #ec1b2b;
  --secondry--color: #f8cd08;
  --font: #530701;
  --font--para: #53060199;
  --gap: 10px 10px;
  --text-letter-spacing: 1px;
  --nav-width: 25vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Garamond, Baskerville, Caslon, serif;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
html {
  font-size: 62%;
  /* transition: all 1s linear; */
  scroll-behavior: smooth;
}
@import "./fonts/fontawesome.min.css";

html ::-webkit-scrollbar {
  display: none;
}
nav a.router-link-exact-active {
  color: var(--primary--color);
}

.ring {
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.705);
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  align-items: center;
  justify-content: center;
  background-image: url(./assets/Lakshmi-Logo-Alpha.gif);
  background-position: center;
  background-size: 200px;
  background-repeat: no-repeat;
}

body {
  display: flex;
  width: 100vw;
  height: auto;
  position: relative;
}
.h-sec {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2vh;
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
  height: 2rem;
  width: 2rem;
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
h1 {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 1px;
  word-spacing: 2px;
  overflow-wrap: anywhere;
  text-align: left;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  color: var(--font);
}
p {
  font-size: 1.8rem;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-align: left;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  display: -webkit-box;
  /* -webkit-line-clamp: 4; */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--font--para);
}
@keyframes slide_left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide_right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide_btm {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
@keyframes changewidth {
  from {
    width: 150px;
  }

  to {
    width: 300px;
  }
}
@media (width<1000px) {
  :root {
    --nav-width: 100px;
  }
  p {
    font-size: 16px !important;
  }
  h1 {
    font-size: 26px !important;
  }
}

@keyframes rotery {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes finished {
  0% {
    opacity: 1;
    top: 0;
  }
  50% {
    opacity: 1;
    top: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: -100vw;
  }
}

@keyframes added {
  from {
    opacity: 0;
    translate: -100px 0;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
</style>
