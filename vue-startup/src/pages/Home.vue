<template>
  <div class="background-home">
    <navbar></navbar>
    <card-product></card-product>
    Home
    <button>
      <router-link to="/login">Users</router-link>
    </button>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import CardProduct from "../components/CardProduct.vue";

export default {
  components: { Navbar, CardProduct },
  name: "Login"
};
</script>
<style>
.background-home {
  margin: 0;
  height: 100vh;
  width: 100%;
  color: red;
  background-color: #2c3e50;
}

.footer-login {
  margin: 5px 0 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding: 10px;
  color: #a0aec0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
