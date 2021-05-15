import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";

import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Teh from "@/pages/Teh";
import Kopi from "@/pages/Kopi";
import Snack from "@/pages/Snack";
import Jus from "@/pages/Jus";

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
      path: "/teh",
      name: "Teh",
      component: Teh
    },
    {
      path: "/kopi",
      name: "Kopi",
      component: Kopi
    },
    {
      path: "/snack",
      name: "Snack",
      component: Snack
    },
    {
      path: "/jus",
      name: "Jus",
      component: Jus
    }
  ]
});
