<template>
  <div id="app">
    <template-frontend></template-frontend>

    <!-- <Login /> -->
         </div>
</template>

<script>

import TemplateFrontend from "@/components/TemplateFrontend";

export default {
  name: "App",
  components: {
    TemplateFrontend,
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
