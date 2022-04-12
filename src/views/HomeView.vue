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
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>