<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>
        <v-btn flat>InnoEats</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat>Restoraunts</v-btn>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>

      <v-btn flat>Sign In</v-btn>
    </v-toolbar>

    <v-expansion-panel style="display: none" id="cart">
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <template v-slot:header>
          <div>Cart</div>
        </template>
        <v-card>
          <v-card-text v-for="(item,index) in cart" :key="index" class="grey lighten-3">
            <div class="title">{{item.name}}</div>
            <div class="subheading">{{item.price}}</div>
            <div class="body-1">{{item.id}}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <div class="container">
      <main-page v-if="state == 0"></main-page>
      <goods-page v-if="state == 1"></goods-page>
      <order-page v-if="state == 2"></order-page>
    </div>
  </div>
</template>

<style>
.v-icon .v-btn {
  color: #333;
}
.v-toolbar-title {
  color: #333;
}
</style>

<script>
import MainPage from "./components/MainPage.vue";
import GoodsList from "./components/GoodsList.vue";
import Order from "./components/Order.vue";

export default {
  components: {
    "main-page": MainPage,
    "goods-page": GoodsList,
    "order-page": Order
  },
  data: function() {
    return {
      state: 0,
      horecama_id: 0,
      order: [
        {
          id: " 123 ",
          photo_url: "url",
          price: "350rub",
          description: "Lorem ipsum dolor sit amet ",
          name: "Pizza"
        }
      ]
    };
  }
};
</script>
