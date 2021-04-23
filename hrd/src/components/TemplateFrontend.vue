<template>
  <div class="container">
    <Navbar />
    <total-employee></total-employee>
    <out-today></out-today>
    <todays-present></todays-present>
    <upcoming-events></upcoming-events>
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import TotalEmployee from "./TotalEmployee.vue";
import OutToday from "./OutToday.vue";
import TodaysPresent from "./TodaysPresent.vue";
import UpcomingEvents from "./UpcomingEvents.vue";

export default {
  name: "TemplateFrontend",
  components: {
    Navbar,
    TotalEmployee,
    OutToday,
    TodaysPresent,
    UpcomingEvents,
  },
};
</script>

<style>
.container {
  width: 100%;
  /* background-color: #4A5568; */
}
</style>
