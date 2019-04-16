<template>
  <div>
    <v-layout>
      <v-flex v-for="(item,index) in goods" v-bind:key="index" xs12 sm2 offset-sm1>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="photo_prefix + item.photo_url"
            :alt="item.name"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{item.name}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">{{item.price}} rubs</span>
              <br>
              <span>{{item.id}}</span>
              <br>
              <span>{{item.description}}</span>
            </div>
          </v-card-title>
          <v-card-actions style="height: 3.5em;position: relative;text-align: right;">
            <v-btn
              flat
              color="green darken-1"
              style="position: absolute;right: 3px;bottom: 15%;"
              @click="addToCart(item)"
            >Add to cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      cart: [
        /*{
          id: "",
          price: "",
          name: ""
        }*/
      ],
      api_url: "/api/goods/" + this.$route.params.id + "/",
      photo_prefix: this.$store.getters.getMediaUrl,
    };
  },
  computed: {...mapGetters({
    products: "allProducts",
    length: "getNumberOfProducts",
  }), goods() {
    return this.$store.state.all;
  }},
  methods: mapActions(["addToCart", "getAllGoods"]),
  

  created: function() {
    this.getAllGoods();
  }
};
</script>