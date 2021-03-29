<template>
  <div class="background-login">
    <div class="container-login">
      <div class="title-login">
        Cafe Bang Mul
      </div>
      <h5 class="label-input">Username</h5>
      <input type="text" value="admin" class="input-username" />
      <h5 class="label-input">Password</h5>
      <input type="password" value="admin" class="input-password" />

      <button><router-link to="/home">Users</router-link></button>
    </div>

    <div class="footer-login">
      &copy;2020 Random App. All rights reserved.
    </div>
  </div>
</template>
<script>
import { EventBus } from "@uplatform/event-bus";

// import BootstrapAlert from "@/components/BootstrapAlert";

export default {
  name: "Login",
  // components: {
  //   BootstrapAlert
  // },
  mounted() {
    EventBus.$emit("pindahRoute", this.namaRouteAktif);
  },
  computed: {
    namaRouteAktif() {
      return this.$route.name;
    }
  }
};
</script>
<style>
.background-login {
  padding: 70px;
  height: 100%;
  background-color: #2d3748;
}
.container-login {
  margin-top: 30px;
  width: 300px;
  height: 375px;
  text-align: center;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
}
.title-login {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  padding: 20px 0 30px 0;
  color: #000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.label-input {
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  padding: 0 0 0 30px;
  color: #4a5568;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.input-username {
  border-style: solid;
  border: none;
  outline: none;
  padding: 7px;
  text-align: left;
  width: 240px;
  margin: 0 0 30px 0;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 1px #ccc;
}
.input-username:focus {
  box-shadow: 0 0 5px #4199e1;
  margin: 0 0 40px 0;
  padding: 7px;
  border: 1px solid #4199e1;
}

.input-password {
  border-style: solid;
  border: none;
  outline: none;
  padding: 7px;
  text-align: left;
  width: 240px;
  margin: 0 0 30px 0;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 1px #ccc;
}
.input-password:focus {
  box-shadow: 0 0 5px #4199e1;
  margin: 0 0 30px 0;
  padding: 7px;
  border: 1px solid #4199e1;
}
router-link {
  width: 100px;
  border-radius: 3px !important;
  border: 0.5px solid #4199e1;
  margin: 80px 0 30px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  color: #000;
  background-color: #4199e1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
button a:hover {
  color: #fff;
  background-color: #2c6cb0;
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
