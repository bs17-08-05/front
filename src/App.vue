<template>
  <div>
    <notifications group='courier' position='bottom right'/>
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
          <v-icon style="color: #388E3C">shopping_cart</v-icon>
        </v-btn>
      </router-link>
      <v-btn flat style="color: #388E3C">Sign In</v-btn>
    </v-toolbar>
    
    <!-- Future cart -->
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click>
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>

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
import NotificationComponent from "./components/NotificationComponent.vue"
import HorecamaFeedbacks from './components/HorecamaFeedbacks.vue'

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
  },
  computed: {
    state() {
      return this.$store.getters.getView;
    }
  },
  data: function() {
    return {
        
    };
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
            this.$store.commit('setTokens', response.body.token, response.body.refresh_token);
          },
          response => {
            console.log("test");
          }
        );
    }
  }
};
</script>