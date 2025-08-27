import "./styles/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router"; 
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";


const app = createApp(App);

app
    .component("Navbar", Navbar)
    .component("Footer", Footer)
    
app.use(createPinia());
app.use(router);

app.mount("#app");
