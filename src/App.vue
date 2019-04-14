<template>
  <div>
    <notifications group="courier" position="bottom right"/>
    <notification-component></notification-component>
    <!-- Nav bar -->
    <v-toolbar flat color="white">
      <v-toolbar-title>
        <router-link to="/">
          <v-btn flat style="color: #388E3C">InnoEats</v-btn>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat style="color: #388E3C">Restoraunts</v-btn> -->

      <v-btn icon>
        <v-icon style="color: #388E3C">search</v-icon>
      </v-btn>
      <router-link to="/cart">
        <v-btn icon>
          <v-badge color="green">
            <template v-slot:badge>
              <span>{{itemsInCart}}</span>
            </template>
            <v-icon style="color: #388E3C">shopping_cart</v-icon>
          </v-badge>
        </v-btn>
      </router-link>
      <router-link to="/signin">
        <v-btn flat style="color: #388E3C">Sign In</v-btn>
      </router-link>
    </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<style>
a:link {
  text-decoration: none;
}
</style>

<script>
import MainPage from "./components/MainPage.vue";
import GoodsList from "./components/GoodsList.vue";
import Order from "./components/Order.vue";
import NotFound from "./components/NotFound.vue";
import Signin from "./components/Signin.vue";
import Signup from "./components/Signup.vue";
import NotificationComponent from "./components/NotificationComponent.vue";
import HorecamaFeedbacks from "./components/HorecamaFeedbacks.vue";
import Cart from "./components/Cart.vue";

export default {
  components: {
    "main-page": MainPage,
    "goods-page": GoodsList,
    "order-page": Order,
    "notfound-page": NotFound,
    "signin-component": Signin,
    "signup-component": Signup,
    "notification-component": NotificationComponent,
    "horecama-feedbacks-component": HorecamaFeedbacks,
    "cart": Cart,
  },
  computed: {
    state() {
      return this.$store.getters.getView;
    },
    itemsInCart(){
			let cart = this.$store.getters.cartProducts;
			return cart.reduce((accum, item) => accum + item.quantity, 0)
		}
  },
  data: function() {
    return {};
  },
  created: function() {
    let sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      let url = this.$store.getters.getAuthUrl;
      this.$http
        .get(url + "/auth/get_tokens", { params: { session_id: sessionId } })
        .then(
          response => {
            console.log(response.body);
            this.$store.commit(
              "setTokens",
              response.body.token,
              response.body.refresh_token
            );
          },
          response => {
            console.log("test");
          }
        );
    }
  }
};
</script>