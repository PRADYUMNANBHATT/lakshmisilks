<template>
  <section>
    <SectionHeading hdg="Customer Testimonial" />
    <div class="test-slider">
      <div class="test-left" @click="previ_test()">
        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div class="testi-row">
        <div class="testi-col1" v-for="data in testimonial_data" :key="data">
          <TestimonyBox :heading="data.heading" :msg="data.msg" />
        </div>
      </div>
      <div class="test-right" @click="next_test()">
        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
    </div>
  </section>
</template>
<script>
import TestimonyBox from "./TestimonyBox.vue";
import SectionHeading from "./SectionHeading.vue";
// import DiscriptionBox from "./DiscriptionBox.vue";

export default {
  name: "TesimonialView",
  components: { SectionHeading, TestimonyBox },
  data() {
    return {
      previ_test: undefined,
      next_test: undefined,
      intervalId: null,
      testimonial_data: [
        {
          heading: "Ahalya Mohan",
          msg: "Like its name, its truly a wonderfull place to find the best fit for you. I enjoyed whenever I visit this place.",
        },
        {
          heading: "Vivek Narayan",
          msg: "This is an amazing place which full fill all your shoppin requirements. So i am very excited to be their when ever occasion call us.",
        },
        {
          heading: "Noora Nihal",
          msg: "Great collection's make it unique, it is one of the most famous shopping destination in kottayam. It has famous for branded cloths. You can easily find  all types of clothes and much more in one place. A must visit place",
        },
        {
          heading: "Tesi Thomas",
          msg: "It is the best shopping destination. it is situated just at the heart of Kottayam. Kids Section  is very exciting for kids as well as adults. The only thing to worry about is 'selecting the right one'. But I found a great help from their charming Customer service executives ",
        },
      ],
    };
  },
  methods: {
    testimonial_slider() {
      const slide = this.$el.querySelectorAll(".testi-col1");
      const maxLengther = slide.length;
      let counter = 0;
      const test_slide = (counter) =>
        slide.forEach((element, i) => {
          element.style.transform = `translateX(${(i - counter) * 100}%)`;
        });
      // test_slide(counter);
      this.next_test = () => {
        if (counter === maxLengther - 1) {
          counter = 0;
        } else {
          counter++;
        }
        test_slide(counter);
      };
      this.previ_test = () => {
        if (counter === 0) {
          counter = maxLengther - 1;
        } else {
          counter--;
        }
        test_slide(counter);
      };
      this.intervalId = setInterval(() => {
        this.next_test();
      }, 5000);
    },
  },
  mounted() {
    this.testimonial_slider();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style Scoped>
.testi-row {
  height: 50vh;
  max-width: 100vw;
  overflow: hidden;
  gap: 0px;
  display: flex;
  flex-direction: row;
  position: relative;
}
.test-slider {
  position: relative;
}

.testi-col1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  width: 100%;
}
.test-left {
  position: absolute;
  top: 45%;
  left: 5%;
  z-index: 20;
  font-size: 3rem;
  color: var(--primary--color);
  cursor: pointer;
}
.test-right {
  position: absolute;
  top: 45%;
  right: 5%;
  z-index: 20;
  cursor: pointer;
  font-size: 3rem;
  color: var(--primary--color);
}
</style>
