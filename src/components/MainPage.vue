<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3></v-flex>
    </v-layout>

    <v-container grid-list-md text-xs-center>
      <ul style="list-style-type: none;" id="list">
        <li v-for="(item,index) in horecamas" v-bind:key="index">
          <div id="e3" style="max-width: 400px; margin: 20px 20px ;">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <router-link to="/goodslist">
                    <v-card v-ripple>
                      <v-img :src="item.photo_url" aspect-ratio="2.75"></v-img>

                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0" align="center">{{item.name}}</h3>
                          <div>{{ item.description }}</div>
                          <div>{{item.address}}</div>
                        </div>
                      </v-card-title>

                      <div style="margin:0.3rem 0; text-align: left;">
                        <div
                          v-if="item.type === 'R'"
                          class="font-weight-light font-italic"
                        >restoraunt</div>
                        <div v-if="item.type === 'C'" class="font-weight-light font-italic">caffee</div>
                        <div v-if="item.type === 'M'" class="font-weight-light font-italic">market</div>
                        <div v-if="item.type === 'H'" class="font-weight-light font-italic">hotels</div>
                      </div>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        Restoraunt rating:
                        <v-spacer></v-spacer>
                        <span class="grey--text text--lighten-2 caption mr-2">({{ item.rating }})</span>
                        <v-rating
                          v-model="item.rating"
                          background-color="white"
                          color="yellow accent-4"
                          dense
                          half-increments
                          hover
                          size="18"
                        ></v-rating>
                      </v-card-actions>
                    </v-card>
                  </router-link>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </li>
      </ul>
    </v-container>
    <v-footer dark height="auto">
      <v-card flat tile class="green darken-2 white--text text-xs-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
          Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
          dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
          Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
          diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2019 —
          <strong>BS17-08-5</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>


<script>
export default {
  data() {
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
          rating: 4.3
        }
      ]
    };
  },
  methods: {
    getAllHorecama: function() {
      this.$http.get(this.api_url).then(
        function(response) {
          console.log(response);
          this.horecamas = response.body.data;
        },
        function(error) {
          //error
        }
      );
    },
    view_menu: function(id) {
      this.$parent.state = 1;
      this.$parent.horecama_id = id;
    },
    created: function() {
      this.getAllHorecama();
    }
  }
};
</script>