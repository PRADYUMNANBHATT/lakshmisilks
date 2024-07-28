import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/maintance-mode",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/MaintenanceView.vue"
      ),
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AboutUs.vue"),
  },

  {
    path: "/image-gallery",
    name: "ImageGallery",

    component: () =>
      import(/* webpackChunkName: "about" */ "../components/ImageGallery.vue"),
  },
  {
    path: "/catelogue-view/:id",
    name: "Catelogueview",

    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/CategoryViewTwo.vue"
      ),
  },
  {
    path: "/blog-view/:id",
    name: "BlogExpansionView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/BlogExpansionView.vue"
      ),
  },
  {
    path: "/catelogue-view/product-view/:id",
    name: "ProductView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductView.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/ContactUs.vue"),
  },
  {
    path: "/terms-and-conditions",
    name: "termsandconditions",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Termsandcondition.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Privacypolicy.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",

    component: () =>
      import(/* webpackChunkName: "about" */ "../components/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: "smooth" });
      }, 10);
    });
  },
});

export default router;
