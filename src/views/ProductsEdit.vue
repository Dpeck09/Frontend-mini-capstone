<script>
import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js! edit!!",
        editProductParams: {},
        suppliers: [],
        errors: []
      };
    },
   created: function () {
    axios.get("/products/" + this.$route.params.id).then((response) => {
      console.log("products show", response);
      this.product = response.data;
      this.editProductParams = this.photo;
    });
  },
  methods: {
    updateProduct: function (product) {
      axios
        .patch("/products/" + product.id, this.editProductParams)
        .then((response) => {
          console.log("product update", response);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log("products update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="submit()">

      <p>name<input type="text" v-model="editProductParams.name"></p>
      <p>price<input type="text" v-model="editProductParams.price"></p>
      <p>description<input type="text" v-model="editProductParams.description"></p>
      <p>created_at<input type="text" v-model="editProductParams.created_at"></p>
      <p>updated_at<input type="text" v-model="editProductParams.updated_at"></p>
      <p>quantity<input type="text" v-model="editProductParams.quantity"></p>
      <p>supplier_id<input type="text" v-model="editProductParams.supplier_id"></p>
      <label for="cars">Choose a car:</label>

      <select name="cars" id="cars" v-model="editProductParams.supplier_id">
        <option v-for="supplier in suppliers" v-bind:value="supplier.id">{{ supplier.name }}</option>
      </select>

      {{ suppliers }}
      <button>Update product</button>
    </form>
  </div>
</template>

<style></style>