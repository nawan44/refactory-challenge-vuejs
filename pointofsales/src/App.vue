<template>
  <div id="app">
    <!-- <Navbar />
    <Layout /> -->
    <Login />
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
// import Layout from "./components/Layout.vue";
import Login from "./pages/Login.vue";

export default {
  name: "App",
  components: {
    Login,
    // Navbar,
    // Layout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background-color: #2D3748;
}
</style>
