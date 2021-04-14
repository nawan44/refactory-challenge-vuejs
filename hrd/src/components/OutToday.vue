<template>
  <div class="container-out-today">
    <div class="out-today">Out Today</div>
    <div class="image-employee">
      <img src="../assets/photo/people1.jpeg" class="photo"/>
      <img src="../assets/photo/people2.jpeg" class="photo"/>
      <img src="../assets/photo/people3.jpeg" class="photo"/>
      <img src="../assets/photo/people4.jpeg" class="photo"/>
      <img src="../assets/photo/people5.jpeg" class="photo"/>

    </div>
    <div class="count-image">5 People</div>
  </div>
</template>
<script>
// import people1 from '../assets/photo/people1';
// import people2 from '../assets/photo/people2';
// import people3 from '../assets/photo/people3';
// import people4 from '../assets/photo/people4';
// import people5 from '../assets/photo/people5';



export default {
  name: "TemplateFrontend",

};
</script>

<style>
.container-out-today {
  width: 30%;
  float: left;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
}
.out-today {
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
.image-employee {
  padding: 10px 0;
  background-color: #f6fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #000;
}
.count-image {
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
.photo{
  border-radius: 50%;
  width: 35px;
  
}
</style>
