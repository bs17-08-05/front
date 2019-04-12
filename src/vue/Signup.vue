<template>
  <div class="login">
    <p v-if="error" style="color: red">{{ error }}</p>
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
    <div class="form-group">
      <label for="userName">Full name</label>
      <input
        type="text"
        class="form-control"
        id="userName"
        aria-describedby="userNameHelp"
        placeholder="Enter user name"
        v-model="userName"
      >
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="address"
        class="form-control"
        id="address"
        aria-describedby="phoneHelp"
        placeholder="Enter address"
        v-model="address"
      >
    </div>
    <button @click="signup" class="btn btn-primary">Submit</button>
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
      userName: "",
      address: "",
      error: "",
    };
  },

  methods: {
    signup: function(e) {
      e.preventDefault();
      let data = {
        phone_number: this.phone,
        password: this.password,
        user_name: this.userName,
        address: this.address,
        type: 'CU',
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
