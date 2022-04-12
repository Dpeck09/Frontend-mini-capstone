<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "I hope this doesnt ruin my whole mini capstone:",
        products: []
      };
    },
    created: function () {
      this.indexProducts();
    },
    methods: {
      indexProducts: function () {
        axios.get("/products").then((response) => {
          console.log("products index", response);
          this.products = response.data
        });
      },
      indexImages: function () {
        axios.get("/images").then((response) => {
          console.log("images index", response);
          this.images = response.data
        });
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h3>All Photos</h3>
    <div v-for="product in products" v-bind:key="product.id">
    <img v-bind:src="product.images" v-bind:alt="product.name">
    <h3>{{ product.quantity }} <br> {{ product.price }}</h3>
    
    
    </div>
  </div>
</template>

<style></style>