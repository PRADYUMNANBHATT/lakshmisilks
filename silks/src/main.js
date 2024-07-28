import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Footer from "./components/FooterView.vue";
import Navbar from "@/components/NavbarView.vue";

const app = createApp(App);
app.component("footer-view", Footer);
app.component("navbar-view", Navbar);
app.use(store);
app.use(router);

app.mount("#app");
