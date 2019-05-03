<template>
  <v-container>

    <router-link :to="'/feedbacks/' + self_id">
      <v-btn flat style="color: #388E3C">Feedbacks</v-btn>
    </router-link>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 style="padding: 1rem;" v-for="(item,index) in goods" v-bind:key="index" >


          <v-card>
            <v-img
              class="white--text"
              height="150px"
              :src="photo_prefix + item.photo_url"
              :alt="item.name"
            >
            </v-img>
            <v-card-title style="padding-bottom: 4px !important; height: 130px; overflow: hidden;">
              <div>
                <span style="font-size: 2em">{{item.name}}</span>
                <br>
                <span class="grey--text">{{item.price}}&#8381;</span>
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
    </v-container>
  </v-container>
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
        },
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
        },
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