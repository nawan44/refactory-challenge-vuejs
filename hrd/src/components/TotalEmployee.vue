<template>
  <div class="container-employee">
<div class="total-employee">
  Total Employee
</div>
<div class="count-employee">
439
</div>
<div class="gender-employee">
230 males / 209 females
</div>
  </div>
</template>
<script>

export default {
  name: "TemplateFrontend",
  // components: {
  //   BootstrapJumbotron,
  //   BootstrapNavbar
  // }
};
</script>

<style>
.container-employee {
  width: 30%;
  float: left;   margin-left: 20px;   background-color: #fff;
    border: 1px solid;
    text-align: center;
    margin: 0 auto;
    border-radius: 5px;

}
.total-employee{
  padding: 10px 0;
  background-color: #fff;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000;
}
.count-employee{
  padding: 10px 0;
  background-color: #F6FAFC;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 72px;
color: #000;

}
.gender-employee{
  padding: 10px 0;
  background-color: #F6FAFC;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #a0aec0;

}
</style>
