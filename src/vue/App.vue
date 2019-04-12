<template>
  <div class="container">
    <!-- <horecama-list-component v-if="state == 0"></horecama-list-component>
    <goods-list-component v-if="state == 1"></goods-list-component> -->
    <notification-component></notification-component>
  </div>
</template>

<style>
</style>

<script>
import HorecamaListComponent from "./HorecamaListComponent.vue";
import GoodsListComponent from "./GoodsListComponent.vue";
import Signin from "./Signin.vue";
import Signup from "./Signup.vue";
import NotificationComponent from "./NotificationComponent.vue"

export default {
  computed: {
    state() {
      return this.$store.getters.getView;
    }
  },
  components: {
    "horecama-list-component": HorecamaListComponent,
    "goods-list-component": GoodsListComponent,
    "signin-component": Signin,
    "signup-component": Signup,
    "notification-component": NotificationComponent,
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

