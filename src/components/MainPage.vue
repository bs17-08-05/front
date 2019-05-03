<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3></v-flex>
    </v-layout>

    <v-container grid-list-md text-xs-left>
      <v-layout row wrap>
          <v-flex style="padding: 1rem" xs12 md4 lg3 sm v-for="(item,index) in horecamas" :key="index">
            <router-link :to="'/goodslist/' + item.pk">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
              >
                <v-img :aspect-ratio="16/9" :src="photo_prefix + item.photo_url"></v-img>
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
      </v-layout>
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
        },
        {
          type: "R",
          pk: 2,
          name: "BAR108",
          description: "Good beer and fresh burgers",
          photo_url:
                  "https://fastly.4sqi.net/img/general/600x600/21727973_rM2g1eM5ezQUeah2jy8MlMFbSndkyEeUN3xiZ1QH7CI.jpg",
          address: "BAR108",
          rating: 4.3,
          reviews: 124
        },
        {
          type: "R",
          pk: 3,
          name: "BAR108",
          description: "Good beer and fresh burgers",
          photo_url:
                  "https://fastly.4sqi.net/img/general/600x600/21727973_rM2g1eM5ezQUeah2jy8MlMFbSndkyEeUN3xiZ1QH7CI.jpg",
          address: "BAR108",
          rating: 4.3,
          reviews: 124
        },
        {
          type: "R",
          pk: 4,
          name: "BAR108",
          description: "Good beer and fresh burgers",
          photo_url:
                  "https://fastly.4sqi.net/img/general/600x600/21727973_rM2g1eM5ezQUeah2jy8MlMFbSndkyEeUN3xiZ1QH7CI.jpg",
          address: "BAR108",
          rating: 4.3,
          reviews: 124
        },
        {
          type: "R",
          pk: 5,
          name: "BAR108",
          description: "Good beer and fresh burgers",
          photo_url:
                  "https://fastly.4sqi.net/img/general/600x600/21727973_rM2g1eM5ezQUeah2jy8MlMFbSndkyEeUN3xiZ1QH7CI.jpg",
          address: "BAR108",
          rating: 4.3,
          reviews: 124
        },

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
