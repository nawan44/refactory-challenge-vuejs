<template>
  <div class="container">
<total-employee></total-employee>
  </div>
</template>
<script>
import TotalEmployee from "./TotalEmployee.vue";

export default {
  name: "TemplateFrontend",
  components: {
    TotalEmployee
  }
};
</script>

<style>
.container {
  width: 100%;
    /* background-color: #4A5568; */

}
</style>
