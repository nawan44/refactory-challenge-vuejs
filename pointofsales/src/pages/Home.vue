<template>
  <div >
    <Navbar />
    <Layout />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Layout from "../components/Layout.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Layout,
  },
};
</script>
