<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3></v-flex>
    </v-layout>

    <router-link :to="'/couriers/'">
      <v-btn flat style="color: #388E3C">Test couriers Info</v-btn>
    </router-link>

    <v-container grid-list-md text-xs-left>
      <v-list v-for="(item,index) in horecamas" :key="index">
        <v-container row>
          <v-flex xs6>
            <router-link :to="'/goodslist/' + item.pk">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
                width="344"
              >
                <v-img :aspect-ratio="16/9" :src="item.photo_url"></v-img>
                <v-card-title>
                  <div>
                    <span class="headline">{{item.name}}</span>
                    <div class="d-flex">
                      <v-rating
                        :value="item.rating"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="ml-2 grey--text text--darken-2">
                        <span>{{ item.rating }}</span>
                        <span>({{ item.reviews }})</span>
                      </div>
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <router-link v-bind:to="'/goodslist/' + item.pk + '/'">
                    <v-btn icon class="mr-0">
                      <v-icon style="color: #388E3C">chevron-right</v-icon>
                    </v-btn>
                  </router-link>
                </v-card-title>
              </v-card>
            </v-hover>
            </router-link>
          </v-flex>
        </v-container>
      </v-list>
    </v-container>
  </v-container>
</template>


<script>
export default {
  data: function() {
    return {
      api_url: "/api/horecama/",
      horecamas: [
        {
          type: "R",
          pk: 1,
          name: "BAR108",
          description: "Good beer and fresh burgers",
          photo_url:
            "https://fastly.4sqi.net/img/general/600x600/21727973_rM2g1eM5ezQUeah2jy8MlMFbSndkyEeUN3xiZ1QH7CI.jpg",
          address: "BAR108",
          rating: 4.3,
          reviews: 124
        }
      ],
      photo_prefix: this.$store.getters.getMediaUrl,
    };
  },
  methods: {
    getAllHorecama: function() {
      let back_url = this.$store.getters.getBackUrl;
      this.$http.get(back_url + this.api_url).then(
        function(response) {
          console.log(response);
          this.horecamas = response.body.data;
        },
        function(error) {
          //error
        }
      );
    },
  },
  created: function() {
    this.getAllHorecama();
  }
};
</script>