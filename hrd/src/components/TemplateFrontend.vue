<template>
  <div class="container">
    <total-employee></total-employee>
    <out-today></out-today>
<todays-present></todays-present>  </div>
</template>
<script>
import TotalEmployee from "./TotalEmployee.vue";
import OutToday from "./OutToday.vue";
import TodaysPresent from "./TodaysPresent.vue";
export default {
  name: "TemplateFrontend",
  components: {
    TotalEmployee,
    OutToday,
    TodaysPresent,
  },
};
</script>

<style>
.container {
  width: 100%;
  /* background-color: #4A5568; */
}
</style>
