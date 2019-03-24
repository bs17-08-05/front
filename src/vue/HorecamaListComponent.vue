<template>
  <ul id="list">
    <li v-for="item in horecamas" class="horecama">
      <a @click="view_menu(item.pk)">
        <div class="horecama_img">
          <img :src="configs.BACKEND_URL + item.photo_url" :alt="item.name" class='list-img'>
        </div>
      </a>

      <div class="horecama_info">
        <div v-if="item.type === 'R'" class="horecama_type">Restaurant:</div>
        <div v-if="item.type === 'C'" class="horecama_type">Cafe:</div>
        <div v-if="item.type === 'H'" class="horecama_type">Hotel:</div>
        <div v-if="item.type === 'M'" class="horecama_type">Market:</div>
        <a @click="view_menu(item.pk)">
          <div class="horecama_name">{{ item.name }}</div>
        </a>

        <div class="horecama_desc">{{ item.description }}</div>
        <div class="horecama_adrs">Адрес: {{ item.address }}</div>
      </div>
    </li>
  </ul>
</template>

<style>
.horecama {
  width: 33%;
  display: inline-block;
  height: 300px;
  padding: 0 25px;
  margin-top: 1em;
}
#list {
  width: 100%;
}
.list-img {
    width: 100%;
    height: 100%;
}
.horecama_img {
  background-color: #8ea4ff;
  height: 60%;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 0.5em;
  text-align: center;
}
.horecama_name {
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
}
.horecama_type {
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
}
a:link {
  text-decoration: none;
  color: #000;
}

a:visited {
  text-decoration: none;
  color: #000;
}

a:hover {
  text-decoration: underline;
  color: #000;
}

a:active {
  text-decoration: none;
  color: #000;
}
.horecama_img img {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.horecama_img {
  position: relative;
}
.horecama_info {
  padding-left: 5px;
  padding-right: 5px;
}
</style>

<script>
export default {
  data() {
    let configs = this.$parent.configs;
    return {
      api_url: configs.BACKEND_URL + "/api/horecama/",
      configs: configs,
      horecamas: [{'type': 'R', 'pk': 1, 'name': 'UUU', 'description': 'UUUUUU', 'photo_url': null, 'address':'test'}]
    };
  },

  methods: {
    getAllHorecama: function() {
      console.log(this.api_url);
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
    }
  },
  created: function() {
    this.getAllHorecama();
  }
};
</script>

