<template>
  <div id="scroll-container">
    <div id="scroll-text">
      Free Shipping across India* <span class="devider"></span>100% Purchase
      Protection<span class="devider"></span> Custom Stitching
      <span class="devider"></span>International Shipping<span
        class="devider"
      ></span>
      Online Video Shopping
      <span class="devider"></span>
    </div>
  </div>
</template>

<style scoped>
#scroll-container {
  border-radius: 5px;
  overflow: hidden;
}
.devider {
  width: 2px;
  background-color: grey;
  height: 100%;
  padding-right: 2px;
  margin: 0 15px;
}
#scroll-text {
  /* animation properties */
  font-size: 1.3rem;
  width: 100vw;
  color: black;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: my-animation 15s linear infinite;
  -webkit-animation: my-animation 15s linear infinite;
  animation: my-animation 15s linear infinite;
}
@media only screen and (max-width: 960px) {
  /* styles for browsers larger than 960px; */
  #scroll-text {
    font-size: 1rem;
    width: 150vw;
  }
}

@media only screen and (max-width: 510px) {
  /* styles for mobile browsers smaller than 480px; (iPhone) */
  #scroll-text {
    font-size: 0.5rem;
    width: 300vw;
  }
}
@media only screen and (max-width: 848px) {
  #scroll-text {
    font-size: 0.6rem;
    width: 200vw;
  }
  /* default iPad screens */
}
/* different techniques for iPad screening */
@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: portrait) {
  /* For portrait layouts only */
}

@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
  /* For landscape layouts only */
}

/* for Firefox */
@-moz-keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
  }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
