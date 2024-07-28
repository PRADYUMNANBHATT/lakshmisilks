<template>
  <header ref="header">
    <nav ref="nav">
      <div class="nav-top-bar">
        <TopBarCarousel />
      </div>
      <div class="nav-btm-br">
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img
              src="../assets/logo3.png"
              alt="logo"
              loading="lazy"
              class="logo-img"
            />
          </router-link>
        </div>

        <div class="burger" ref="burger" @click="model" v-if="modeOpen">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="burger" ref="burger" @click="model" v-else>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
    <div class="menu-items" ref="menu" @click="model">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }" class="golden-button"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="golden-button"
            >About US</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'ImageGallery' }" class="golden-button"
            >Gallery</router-link
          >
        </li>

        <li>
          <router-link :to="{ name: 'ContactUs' }" class="golden-button"
            >Contact US</router-link
          >
        </li>
      </ul>
    </div>
    <div class="whatsapp" ref="whatsapp">
      <a class="tooltip" href="https://wa.me/+91859040087">
        <span class="tooltiptext">+91859040087</span>
        <img src="../assets/whatsapp.png" alt="whatsapp_image" loading="lazy" />
        <!-- <i class="fa fa-whatsapp" aria-hidden="true"></i> -->
      </a>
    </div>
  </header>
</template>
<script>
import TopBarCarousel from "./TopBarCarousel.vue";
export default {
  name: "NavbarView",
  components: { TopBarCarousel },
  data() {
    return {
      observer: null,
      modeOpen: true,
    };
  },
  methods: {
    model() {
      this.$refs.menu.classList.toggle("visible-bx");
      this.modeOpen = !this.modeOpen;
    },

    up(e) {
      // window.scrollBy(0, -window.innerHeight);

      let length_y = e.pageY;
      const j = 0;

      const looper = () => {
        setTimeout(() => {
          length_y -= 100;

          if (j < length_y) {
            window.scrollBy(0, -100);
            looper();
          }
        }, 100);
      };
      if (j < length_y) looper();
    },

    obaserverCallback(entries) {
      // const [e]=entries
      try {
        entries.forEach((e) => {
          if (!e.isIntersecting) {
            this.$refs.whatsapp.style.display = "flex";
            this.$refs.nav.classList.add("sticky");
          } else {
            this.$refs.nav.classList.remove("sticky");
            this.$refs.whatsapp.style.display = "none";
          }
        });
      } finally {
        // always runs
      }
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.obaserverCallback, {
      root: null,
      threshold: 1,
      rootMargin: `${1000}px`,
    });
    try {
      this.observer.observe(this.$refs.header);
    } finally {
      // always runs
    }
  },

  beforeUnmount() {
    this.observer.unobserve(this.$refs.header);
  },
};
</script>
<style Scoped>
.tooltip:hover > .tooltiptext {
  display: block;
  background-color: #25d366;
}
.tooltiptext {
  display: none;
  position: absolute;
  z-index: 103;
  font: 1em sans-serif;
  left: -20px;
  top: -20px;
}

nav {
  position: absolute;
  top: 0;
  z-index: 99999;
  height: var(--nav-width);
}
.nav-top-bar {
  max-width: 100vw;
  height: 25%;
  background: var(--secondry--color);

  cursor: pointer;
  overflow-x: auto;
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  color: grey;
}

.nav-btm-br {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 100vw;

  background: url("../assets/navbh6.png");
  /* background-color: rgb(232, 232, 174); */
  background-size: contain;
  padding-right: 3rem;
  background-position: center;
  /* filter: opacity(0.8); */
  /* backdrop-filter: opacity(0.3); */
  /* 
  box-shadow: inset 20px -20px 60px #bebebe, inset -20px 20px 60px #ffffff; */
}
.nav-btm-br .logo {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
}
.sticky {
  position: fixed;
}
@media (width>1350px) {
  .logo-img {
    height: 18vh;
    width: 100%;
    padding: 0.8vh;
  }
}

.nav-btm-br .burger:hover {
  transform: scale(1.2);
  transition: all 350ms;
  /* border: 5px solid var(--secondry--color); */
}
.btn {
  list-style: none;
  display: inline-block;
  padding-right: 20px;
  text-align: center;
  color: black;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.mobile-menu-btm {
  display: none;
}
.btn :hover {
  transform: scale(1.05);
  transition: all 350ms;
  color: var(--primary--color);
  cursor: pointer;
}

.txt-shipment {
  font-size: 1rem;
}
.menu-items {
  display: none;
  z-index: 99999;
  position: fixed;

  top: var(0);
  left: 0;

  min-width: 30vw;
  min-height: 100vh;
  background: url("../assets/bgsidebar.png") no-repeat;
  background-size: cover;
  background-position: center center;

  /* border-bottom-right-radius: 50px;
  border-top-right-radius: 50px; */
  /* background-color: #f2f2c6; */
  /* box-shadow: inset 20px -20px 60px #bebebe, inset -20px 20px 60px #ffffff; */

  /* background-color: white; */
  justify-content: space-evenly;

  align-items: flex-start;
}

.btn {
  display: list-item;
  padding: 30px;
  /* background: url("../assets/navbh5.png") no-repeat; */
  min-width: 15rem;
  margin: 3rem;
  text-align: center;
  font-size: 1.5rem;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  cursor: pointer;
  font-size: 18px;
  border-radius: 0.5em;
  background-color: #f9c800;
  /* border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
}

.btn:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.btn:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.btn:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: var(--secondry--color);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}
.golden-button {
  touch-action: manipulation;
  display: inline-block;
  outline: none;
  font-family: inherit;
  padding: 30px;
  /* background: url("../assets/navbh5.png") no-repeat; */
  min-width: 15rem;
  margin: 2rem 3rem;
  text-align: center;
  font-size: 1.5rem;
  font-size: 1em;
  box-sizing: border-box;
  border: none;
  border-radius: 0.3em;
  height: 2.75em;
  line-height: 2.5em;
  text-transform: uppercase;
  padding: 0 1em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(110, 80, 20, 0.4),
    inset 0 -2px 5px 1px rgba(139, 66, 8, 1),
    inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
  background-image: linear-gradient(
    160deg,
    #a54e07,
    #b47e11,
    #fef1a2,
    #bc881b,
    #a54e07
  );
  border: 1px solid #a55d07;
  color: rgb(120, 50, 5);
  text-shadow: 0 2px 2px rgba(250, 227, 133, 1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-size: 100% 100%;
  background-position: center;
}

.golden-button:focus,
.golden-button:hover {
  background-size: 150% 150%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23),
    inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
  border: 1px solid rgba(165, 93, 7, 0.6);
  color: rgba(120, 50, 5, 0.8);
}

.golden-button:active {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(110, 80, 20, 0.4),
    inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
}

.mobile-menu-btm :hover {
  color: #ffffff;
  border: 1px solid var(--secondry--color);
}

.btn:hover:before {
  top: -35%;
  background-color: var(--secondry--color);
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.btn:hover:after {
  top: -45%;
  background-color: var(--secondry--color);
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.burger {
  display: flex;
  position: absolute;
  right: 30px;
  color: rgb(58, 57, 57);
  height: 100%;
  width: 50px;
  /* color: var(--secondry--color); */
  transition: all 1s linear;
  font-size: 3rem;
  margin: 0;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.mobile-menu-btm {
  /* background: url("../assets/navold2.jpg"); */
  background-size: cover;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: var(--nav-width);
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 102;
  font-size: 3rem;
  /* border: 10px solid transparent;
    padding: 15px;
    border-image: url(./assets/appstore.svg) 30 round; */
}

.ba-close {
  display: none;
  position: absolute;
  right: 10%;
  top: 10%;
  color: transparent;
  font-size: 2rem;
  border-radius: 50%;
  border: 1px solid transparent;
  padding: 7px;
  cursor: pointer;
}

.visible-bx {
  display: flex;
  align-items: center;
  justify-items: center;

  animation: slide_left 1s linear;
}
.whatsapp {
  position: fixed;
  bottom: 5%;
  right: 3%;
  z-index: 101;
  width: 60px;
  height: fit-content;
  /* background-color: white;
  border-radius: 50%; */
  background-image: url("../assets/whatsapp.png");
}
.whatsapp i {
  font-size: 5.5rem;
  color: green;
  fill: white;
}
.up {
  width: 4rem;
  height: 4rem;
  font-size: large;
  color: white;
  background-color: var(--primary--color);
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
}
.up:hover {
  color: var(--secondry--color);
}

@media (width<1350px) {
  .nav-top-bar {
    height: 25%;
  }
  .nav-btm-br {
    height: 75%;
  }
  .nav-btm-br .logo {
    width: 300px;
  }
  router-link > .logo-img {
    height: fit-content;
    width: 300px;
  }
  .nav-top-bar {
    font: 1em sans-serif;
  }
}
@media (width<984px) {
  .nav-btm-br .logo {
    width: 240px;
  }
  router-link > .logo-img {
    height: fit-content;
    width: 240px;
  }
}
@media (width< 431px) {
  .nav-top-bar {
    height: 25%;
  }
  .nav-btm-br {
    height: 75%;
    width: 100vw;
  }
  .logo-img {
    height: auto;
    width: 200px;
  }
}
</style>
