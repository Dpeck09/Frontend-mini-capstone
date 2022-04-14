<script>
import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        products: []
      };
    },
    created: function () {
      this.indexProducts();
      
    },
    methods: {
      indexProducts() {
        console.log('grabbing products')
        axios.get('/products.json').then(response => {
        console.log(response.data);
        this.products = response.data;
        });
      },
    },
  };
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="product in products">
      {{product.id}}: {{product.name}}

      <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>