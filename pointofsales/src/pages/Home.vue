<template >
  <div >
    <Navbar />
    <Layout />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Layout from "../components/Layout.vue";
import { EventBus } from "@uplatform/event-bus";

export default {
  name: "Home",
  components: {
    Navbar,
    Layout,
  },
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
