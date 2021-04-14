<template>
  <div class="container">
<total-employee></total-employee>
<out-today></out-today>
  </div>
</template>
<script>
import TotalEmployee from "./TotalEmployee.vue";
import OutToday from "./OutToday.vue";

export default {
  name: "TemplateFrontend",
  components: {
    TotalEmployee, OutToday
  }
};
</script>

<style>
.container {
  width: 100%;
    /* background-color: #4A5568; */

}
</style>
