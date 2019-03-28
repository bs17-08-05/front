<template>
  <v-container grid-list-md text-xs-center>
    <ul style="list-style-type: none;" id="list">
      <li v-for="(item,index) in horecamas" v-bind:key="index">
        <div id="e3" style="max-width: 400px; margin: 20px 20px ;">
          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="green darken-1" class="white--text">
                  <a @click="view_menu(item.pk)">
                    <v-layout>
                      <v-flex xs5>
                        <v-img
                          
                          :src="item.photo_url"
                          :alt="item.name"
                          
                        >
                          <v-flex xs7>
                            <v-card-title primary-title>
                              <div>
                                <div
                                  class="headline"
                                  style="text-align: left; margin: 0.3rem 0"
                                >{{item.name}}</div>
                                <div style="text-align: left">{{item.description}}</div>
                                <div style="text-align: left">Place: {{item.address}}</div>

                                <div style="margin:0.3rem 0; text-align: left;">
                                  <div
                                    v-if="item.type === 'R'"
                                    class="font-weight-light font-italic"
                                  >restoraunt</div>
                                  <div
                                    v-if="item.type === 'C'"
                                    class="font-weight-light font-italic"
                                  >caffee</div>
                                  <div
                                    v-if="item.type === 'M'"
                                    class="font-weight-light font-italic"
                                  >market</div>
                                  <div
                                    v-if="item.type === 'H'"
                                    class="font-weight-light font-italic"
                                  >hotels</div>
                                </div>
                              </div>
                            </v-card-title>
                          </v-flex>
                        </v-img>
                      </v-flex>
                    </v-layout>
                  </a>
                  <v-divider light></v-divider>
                  <v-card-actions class="pa-3">Restoraunt rating:
                    <v-spacer></v-spacer>
                    <v-icon>star</v-icon>
                    <v-icon>star</v-icon>
                    <v-icon>star</v-icon>
                    <v-icon>star</v-icon>
                    <v-icon>star_border</v-icon>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </li>
    </ul>
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
          address: "BAR108"
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