<template>
  <div class="container-today-present">
    <div class="title">Today's Present</div>

    <div class="today-employee">7 / 10</div>
  </div>
</template>
<script>
export default {
  name: "TodaysPresent",
  // components: {
  //   BootstrapJumbotron,
  //   BootstrapNavbar
  // }
};
</script>

<style>
.container-today-present {
  width: 100%;
  float: left;
  margin-left: 20px;
  background-color: #fff;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
  margin-top:20px;
  border-radius: 5px;
}
.title {
  padding: 10px 0;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000;
}

.today-employee {
  padding: 10px 0;
  background-color: #f6fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a0aec0;
}
</style>
