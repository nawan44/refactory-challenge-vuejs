<template>
  <div>
    <div class="container-card">
      <b-card
        img-src="https://asset.kompas.com/crops/OEZLF206mGcKKUfmkrMP4CGNGmg=/0x0:1000x667/750x500/data/photo/2020/05/18/5ec2485195aca.jpg"
        img-alt="Card image"
        img-top
      >
        <b-card-title class="product-title">Es Teh</b-card-title>
        <b-card-sub-title class="product-price">Rp 50.000</b-card-sub-title>
        <b-card-text class="product-desc">
          Teh dingin bikin merinding
        </b-card-text>

        <b-button href="#" class="button-cart">Add to cart</b-button>
      </b-card>
    </div>
    <div class="container-card">
      <b-card
        img-src="http://www.isitunhealthy.com/wp-content/uploads/2020/01/Green-Tea2.jpg"
        img-alt="Card image"
        img-top
      >
        <b-card-title class="product-title">Green Tea </b-card-title>
        <b-card-sub-title class="product-price">Rp 12.000</b-card-sub-title>
        <b-card-text class="product-desc">
          Teh Hijau Rerumputan
        </b-card-text>

        <b-button href="#" class="button-cart">Add to cart</b-button>
      </b-card>
    </div>
    <div class="container-card">
      <b-card
        img-src="https://wfxl.com/resources/media/5d8b73f3-d4a3-4e4c-adc1-e0b8ceb09de6-large16x9_coffeeMGNPIXABAY.PNG?1568247151162"
        img-alt="Card image"
        img-top
      >
        <b-card-title class="product-title">Americano</b-card-title>
        <b-card-sub-title class="product-price">Rp 70.000</b-card-sub-title>
        <b-card-text class="product-desc">
          Kopi Hitam Legam
        </b-card-text>

        <b-button href="#" class="button-cart">Add to cart</b-button>
      </b-card>
    </div>
  </div>
</template>
<style scoped>
.container-card {
  width: 300px;
  padding-top: 20px;
  padding-bottom: 20px;

  margin: 0 auto;
  text-align: center;
}
.template-card {
  width: 300px;
  padding: 0;
}
.button-cart {
  background-color: #edf2f7;
  color: #4a556b;
  border-radius: 20px;
  border: none;
  width: 90%;
  height: 35px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 20px;
}
.button-cart:hover {
  background-color: #cad5e0;
}
.image-product {
  width: 100%;
  height: 175px;
  margin-bottom: 10px;
}
.product-title {
  color: #718096;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  width: 100%;
}
.product-price {
  color: #000 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
}
.product-desc {
  color: #4a556b;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  width: 100%;
  margin-bottom: 25px;
}
</style>
