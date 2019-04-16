<template>
  <div>

    <router-link :to="'/feedbacks/' + self_id">
      <v-btn flat style="color: #388E3C">Feedbacks</v-btn>
    </router-link>

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
        {
          id: "",
          price: "",
          name: ""
        }
      ],
      api_url: "/api/goods/" + this.$route.params.id + "/",
      self_id: this.$route.params.id,
      photo_prefix: this.$store.getters.getMediaUrl,
      goods: [
        {
          id: 1,
          photo_url:
                  "http://s5.favim.com/orig/74/beautiful-blue-burger-cake-Favim.com-751982.jpg",
          price: 350,
          description: "Amazing burger",
          name: "Beef Burger"
        },
        {
          id: 2,
          photo_url:
                  "https://leeds-list.com/wp-content/uploads/2013/09/Beer_tasting_heading-web.jpg",
          price: 400,
          description: "Delicios beer",
          name: "State Ladder"
        }
      ]
    };
  },
  computed: mapGetters({
    products: "allProducts",
    length: "getNumberOfProducts"
  }),
  methods: mapActions(["addToCart"]),

  created: function() {
    let back_url = this.$store.getters.getBackUrl;
    this.$http.get(back_url + this.api_url).then(
            function(response) {
              this.goods = response.body.data;
            },
            function(error) {
              console.log(response);
              //error
            }
    );
  }
};
</script>