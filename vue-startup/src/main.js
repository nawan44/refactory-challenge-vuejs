// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
// import VueAxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueCurrencyInput from "vue-currency-input";
import Vuetify from "vuetify";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(VueCurrencyInput);

// export default VuetifyMoney;

// import vuetify from "@/plugins/vuetify-money.js";

/* eslint-disable no-new */
new Vue({
  el: "#app",

  router,
  components: { App },
  template: "<App/>"
});
