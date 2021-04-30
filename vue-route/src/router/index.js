import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";

import Login from "@/pages/Login";
import Home from "@/pages/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
