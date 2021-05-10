<template>
  <div class="background-home">
    <navbar></navbar>
    <div class="frame1">
      <div class="container-card" v-for="user in users" v-bind:key="user.id">
        <b-card img-alt="Card image" img-top>
          <img v-bind:src="user.menu_image" class="image-product" />
          <b-card-title class="product-title">
            {{ user.menu_title }}
          </b-card-title>
          <b-card-sub-title class="product-price">{{
            user.menu_price
          }}</b-card-sub-title>
          <b-card-text class="product-desc"> {{ user.menu_desc }} </b-card-text>

          <b-button href="#" class="button-cart">Add to cart</b-button>
        </b-card>
      </div>
    </div>
    <div class="frame2">
      <!-- <empty-cart></empty-cart> -->
      <cart :msg="childData" />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
// import EmptyCart from "../components/EmptyCart.vue";
import Cart from "../components/Cart.vue";

import axios from "axios";

export default {
  components: { Navbar, Cart },
  name: "Home",
  data() {
    return {
      users: [],
      images: []
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/nawan44/raw-data-menu/main/menu_kopi.json"
      )
      .then(response => {
        this.users = response.data;
        this.images = response.data.menu_images;

        console.log(response);
      })
      .catch(error => console.log(error));
  }
};
</script>
<style>
.background-home {
  padding: 0;
  margin: 0;
  height: 100%;
  color: #fff;
  width: 100%;
  background-color: #2c3e50;
}
.frame1 {
  width: 70%;
  padding: 0;
  margin: 0;
  float: left;
  color: red;
  background-color: #2c3e50;
}
.frame2 {
  width: 30%;
  height: 100vh;
  padding: 0;
  margin: 0;
  float: left;
  background-color: #1a202c;
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
.container-card {
  width: 300px;
  padding-top: 20px;
  padding-bottom: 20px;

  margin: 0 auto;
  text-align: center;
}
.template-card {
  width: 300px;
  padding: 0;
}
.button-cart {
  background-color: #edf2f7;
  color: #4a556b;
  border-radius: 20px;
  border: none;
  width: 90%;
  height: 35px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 20px;
}
.button-cart:hover {
  background-color: #cad5e0;
}
.image-product {
  width: 100%;
  height: 175px;
  margin-bottom: 10px;
}
.product-title {
  color: #718096;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  width: 100%;
}
.product-price {
  color: #000 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
}
.product-desc {
  color: #4a556b;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  width: 100%;
  margin-bottom: 25px;
}
</style>
