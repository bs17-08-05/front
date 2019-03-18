<template>
  <div>
    <button class="btn btn-info" @click="back">Back</button>
    <ul id="list">
      <li v-for="item in goods" class="goods">
        <a @click="buyButton(item.id)">
          <div class="goods_img">
            <img :src="item.photo_url" :alt="item.name" class="list-img">
          </div>
        </a>

        <div class="goods_info">
          <a @click="view_menu(item.id)">
            <div class="goods_name">{{ item.name }}</div>
          </a>

          <div class="goods_desc">{{ item.description }}</div>
          <div class="goods_adrs">Price: {{ item.price }}</div>
          <button class="btn btn-info" @click="buyButton(item.id)">Buy</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.goods {
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
  height: auto;
}
.goods_img {
  background-color: #8ea4ff;
  height: 60%;
  width: 100%;
  border-radius: 7px;
  margin-bottom: 0.5em;
  text-align: center;
}
.goods_name {
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
}
.goods_type {
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
.goods_img img {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.goods_img {
  position: relative;
}
.goods_info {
  padding-left: 5px;
  padding-right: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      api_url: "/api/goods/" + this.$parent.horecama_id + "/",
      goods: [
        { id: 1, photo_url: null, price: 12, description: "test", name: "hui" }
      ]
    };
  },

  methods: {
    getAllGoods: function() {
      console.log(this.$parent.horecama_id);
      this.$http.get(this.api_url).then(
        function(response) {
          console.log(response);
          this.goods = response.body.data;
        },
        function(error) {
          console.log(response);
          //error
        }
      );
    },
    back: function(id) {
      this.$parent.state = 0;
    },
    buyButton: function(id) {
      this.$parent.state = 2;
      this.$parent.good = id;
    }
  },
  created: function() {
    this.getAllGoods();
  }
};
</script>

