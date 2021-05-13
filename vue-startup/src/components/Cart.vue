<template>
  <div class="container-cart" id="page">
    <button class="button-checkout">Checkout</button>
    <div class="label-checkout">
      <div class="label-total-checkout">
        Total
      </div>
      <div class="label-price-checkout">
        {{ result() }}
      </div>
    </div>
    <div class="label-product-checkout">Latte</div>
    <div class="label-rupiah">
      <div class="label-harga-satuan" id="input1">570000</div>
      <div class="label-kali ">x</div>
      <div class="label-volume" id="input2">
        {{ count }}
      </div>
      <div class="label-harga-total">{{ result() }}</div>
    </div>
    <div class="container-actions">
      <button class="button-checkout-remove">Remove</button>
      <span>
        <button class="button-checkout-plus" v-on:click.prevent="increment">
          +
        </button>
        <button class="button-checkout-minus" v-on:click.prevent="decrement">
          -
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    result: function() {
      return 570000 * parseInt(this.count);
    }
  }
};
</script>
<style>
.container-cart {
  width: 90%;
  height: 300px;
  padding: 30px 0;
  margin: 0 auto;
  text-align: center;
}
.button-checkout {
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #4c51bf;
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
}
.button-checkout:hover {
  background-color: #667eea;
}
.label-checkout {
  padding: 10px 0;
  float: left;
  width: 100%;
}
.label-total-checkout {
  color: #718096;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;

  width: 35%;
  float: left;
}
.label-price-checkout {
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  width: 65%;
  float: left;
}
.label-product-checkout {
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  background-color: #000;
  width: 100%;
  float: left;
  text-align: left;
  margin: 0 auto;
  padding: 15px 0 15px 10px;
}
.label-rupiah {
  width: 100%;
  background-color: #fff;
  color: #000;
  float: left;
  text-align: center;
  margin: 0 auto;
  padding: 15px 0;
}
.label-harga-satuan {
  width: 43%;
  float: left;

  color: #718096;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
}
.label-kali {
  width: 5%;
  float: left;

  color: #000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
}
.label-volume {
  width: 7%;
  float: left;

  color: #000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
}
.label-harga-total {
  width: 45%;
  float: left;
  color: #000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
}
.container-actions {
  background-color: #3c366b;
  padding: 10px;
  width: 100%;
  float: left;
}
.button-checkout-remove {
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: 50%;
  margin: 10px 0;
  background: transparent;
  border: none;
  border-radius: 5px;
  padding: 5px;
}
.button-checkout-remove:hover {
  background: #5967d8;
}

.button-checkout-plus {
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: 20%;
  margin: 10px 0;
  background: #5967d8;
  border: none;
  border-radius: 5px;
  padding: 5px;
}
.button-checkout-minus {
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: 20%;
  margin: 10px 0;
  background: #5967d8;
  border: none;
  border-radius: 5px;
  padding: 5px;
}
</style>
