// import Vue from "vue";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import { BootstrapVue } from "bootstrap-vue";
// import "./plugins/bootstrap-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

createApp(App).mount("#app");
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
