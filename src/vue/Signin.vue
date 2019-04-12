<template>
  <div class="login">
    <p v-if="error"> {{ error }}</p>
    <div class="form-group">
    <label for="phoneNumber">Phone number</label>
    <input
        type="phone"
        class="form-control"
        id="phoneNumber"
        aria-describedby="phoneHelp"
        placeholder="Enter phone number"
        v-model="phone"
    >
    <small
        id="phoneHelp"
        class="form-text text-muted"
    >We'll never share your phone number with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="password">Password</label>
    <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="password"
    >
    </div>
    <button @click="signin" class="btn btn-primary">Submit</button>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      phone: "",
      password: "",
      error: "",
    };
  },

  methods: {
    signin: function(e) {
      e.preventDefault();
      let data = {
        phone_number: this.phone, 
        password: this.password
      };
      this.$http
        .post(this.$store.getters.getAuthUrl + "/auth/signin", data)
        .then(
          response => {
            let r = response.body;
            let token = r['token'];
            let refresh_token = r['refresh_token'];
            let session_id = r['session_id'];
            this.$store.commit('setTokens', token, refresh_token);
            localStorage.setItem('sessionId', session_id);
            localStorage.setItem('token', token);
          },
          response => {
            console.log(response);
            this.error = response.body['error'];
          }
        );
    }
  }
};
</script>
