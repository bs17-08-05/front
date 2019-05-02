<template>
  <v-layout align-center justify-center row fill-height>
    <v-card width="1000px" height="500px">
      <v-card-title primary-title>
        <div>
          <h3
            style="color: #191918; font-family: monospace; padding:2em; text-decoration: dashed"
          >YOU HAVE PURCHASED:</h3>
        </div>
      </v-card-title>
      <div class="cart">
        <p v-show="!products.length">
          <i>Your cart is empty!</i>
          <v-btn>
            <router-link to="/">Go shopping</router-link>
          </v-btn>
        </p>
        <table class="table is-striped" v-show="products.length">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p,index) in products" v-bind:key="index">
              <td>{{ p.name }}</td>
              <td>rub.{{ p.price }}</td>
              <td>{{ p.quantity }}</td>
            </tr>
            <tr>
              <td>
                <b>Total:</b>
              </td>
              <td></td>
              <td>
                <b>rub.({{ total }})</b>
              </td>
            </tr>
          </tbody>
        </table>

        <v-form>
          <v-text-field v-model="user_name" label="Name" required></v-text-field>
          <v-text-field v-model="user_phone" label="Phone" required></v-text-field>
          <v-text-field v-model="address" label="Address" required></v-text-field>
          <p>
            <v-btn
              v-show="products.length"
              class="button is-primary"
              v-on:click="checkout()"
            >Checkout</v-btn>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :multi-line="mode === 'multi-line'"
              :timeout="timeout"
              :vertical="mode === 'vertical'"
            >
              {{ text }}
              <v-btn dark flat @click="snackbar = false">Close</v-btn>
            </v-snackbar>
          </p>
        </v-form>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      snackbar: false,
      color: "success",
      mode: "",
      timeout: 6000,
      text: "Your order is reviewed.. Whait for call",
      user_name: "",
      user_phone: "",
      address: ""
    };
  },
  headers: [
    {
      text: "Name",
      align: "left",
      sortable: false,
      value: "name"
    },
    { text: "Price", value: "price" },
    { text: "Quantity", value: "quantity" }
  ],
  computed: {
    ...mapGetters({
      products: "cartProducts"
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    }
  },
  methods: {
    checkout() {
      var url = this.$store.getters.getBackUrl + "/api/order/";
      var data = {
        user_name: this.user_name,
        user_phone: this.user_phone,
        address: this.address,
        goods: this.products
      };
      console.log(data);
      var config = { headers: { "Content-Type": "application/json" } };
      axios.post(url, data, config).then(Response => {
        console.log(Response);
        if (Response.status == 200) {
          this.snackbar = true;
        }
      });
    }
  }
};
</script>