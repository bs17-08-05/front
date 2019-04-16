<template>
  <v-app>
    <v-layout align-center justify-center fill-height>
      <v-container align-center text-xs-center>
        <h2 class="text-uppercase" style="color: #388E3C">Registration</h2>
        <v-form ref="regForm">
          <v-text-field v-model="surname" label="Surname" :rules="[rules.required]"></v-text-field>
          <v-text-field v-model="name" label="Name" :rules="[rules.required]"></v-text-field>
          <v-text-field v-model="phone" label="Phone" :mask="'+7##########'"></v-text-field>
          <v-text-field v-model="email" label="Email" :rules="[rules.email,rules.required]"></v-text-field>
          <v-text-field v-model="pass1" label="Password" type="password" :rules="[rules.required]"></v-text-field>
          <v-text-field
            v-model="pass2"
            label="Confirm password"
            type="password"
            :rules="[rules.required]"
          ></v-text-field>
          <v-btn @click="signup" style="color: #388E3C">Sing up</v-btn>
          <a @click="$router.push('/signin')">Have account?</a>
        </v-form>
      </v-container>
    </v-layout>
  </v-app>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      surname: "",
      phone: "",
      name: "",
      pass1: "",
      pass2: "",
      email: "",
      rules: {
        email: val => {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return (
            !val || re.test(String(val).toLowerCase()) || "Uncorrected value"
          );
        },
        required: val => !!val || "Required"
      }
    };
  },

  methods: {
    signup: function(e) {
      e.preventDefault();
      let data = {
        surname: this.surname,
        name: this.name,
        password: this.pass1,
        password_confirmation: this.pass2,
        email: this.email,
        phone: this.phone,
        username: this.email,
        role_id: 1
      };
      this.$http
        .post(this.$store.getters.getAuthUrl + "/auth/signup", data)
        .then(
          response => {
            let r = response.body;
            let token = r["token"];
            let refresh_token = r["refresh_token"];
            let session_id = r["session_id"];
            this.$store.commit("setTokens", token, refresh_token);
            localStorage.setItem("sessionId", session_id);
            localStorage.setItem("token", token);
          },
          response => {
            console.log(response);
            this.error = response.body["error"];
          }
        );
    }
  }
};
</script>
