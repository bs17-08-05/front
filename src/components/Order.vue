<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex>
      <v-card style="width: 50rem; min-height: 30rem; overflow:auto;">
        <v-card-title primary-title>
          <div>
            <h3
              style="color: #191918; font-family: monospace; padding:2em; text-decoration: dashed"
            >YOU HAVE PURCHASED:</h3>
          </div>
        </v-card-title>
        <div>
          <div class="list-group">
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
              v-for="(item,index) in order"
              v-bind:key="index"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">{{ item.name }}</h5>
                <small style="text-align:right">{{ item.price }}</small>
              </div>
              <p class="mb-2">{{ item.description }}</p>
            </a>
          </div>
        </div>
        <v-layout align-end justify-end row fill-height>
          <v-card-actions>
            <v-btn flat color="red">Cancel</v-btn>
            <v-btn flat color="dark-green" v-on:click="onClick">Confirm</v-btn>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<style>
</style>

<script>
import axios from "axios";
export default {
  name: 'Order',
  methods: {
    onClick: function() {
      console.log(axios);
      return 0;
      var url = "http://127.0.0.1:8000/api/order/";
      var data = {
        user_name: "test",
        user_phone: "+79393809899",
        address: "test",
        goods: [{ id: 3, quantity: 3 }]
      };
      var config = { headers: { "Content-Type": "application/json" } };
      axios.post(url, data, config).then(Response => {
        console.log("Data sent");
        console.log(Response);
      });
    }
  },
  data: function() {
    return {
      order: this.$parent.order
    };
  }
};
</script>