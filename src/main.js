import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import configs from './js/config';

import VueResource from 'vue-resource';
import Notifications from 'vue-notification'
import 'vuetify/dist/vuetify.min.css'
import * as types from './mutation-types'

import router from './router'

import Vuex from 'vuex';
App

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(Vuex)
Vue.use(Notifications)

const store = new Vuex.Store({
  state: {
    added: [],
    view: 0,
    configs: configs,
    token: "",
    refresh_token: "",
    horecamaId: 0,
    goodId: 0,
    all: [{
      id: 1,
      photo_url:
        "http://s5.favim.com/orig/74/beautiful-blue-burger-cake-Favim.com-751982.jpg",
      price: 350,
      description: "Amazing burger",
      name: "Beef Burger",
    },
    {
      id: 2,
      photo_url:
        "https://leeds-list.com/wp-content/uploads/2013/09/Beer_tasting_heading-web.jpg",
      price: 400,
      description: "Delicios beer",
      name: "State Ladder"
    }]
  },
  mutations: {
    [types.ADD_TO_CART](state, {
      id, name, price
    }) {
      const record = state.added.find(p => p.id === id)

      if (!record) {
        state.added.push({
          id,
          name,
          price,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    },
    setView(state, view) {
      state.view = view;
    },
    setHorecamaId(state, horecamaId) {
      state.horecamaId = horecamaId;
    },
    setGoodId(state, id) {
      state.goodId = id;
    },
    setTokens(state, token, refreshToken) {
      state.token = token;
      state.refresh_token = refreshToken;
    }

  },
  actions: {
    addToCart({
      commit
    }, product) {
      commit(types.ADD_TO_CART, product);
    },
    getAllGoods(context) {
      let back_url = this.$store.getters.getBackUrl;
      this.$http.get(back_url + this.api_url).then(
        function(response) {
          context.state.all = response.body.data;
        },
        function(error) {
          console.log(response);
          //error
        }
      );
    }
  },
  getters: {
    allProducts: state => state.all, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    cartProducts: state => {
      return state.added.map(({
        id,
        quantity
      }) => {
        const product = state.added.find(p => p.id === id)
        if(product === undefined) {
          console.error(id, state.all);
          return {};
        }
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity
        }
      })
    },
    getView: state => {
      return state.view;
    },
    getBackUrl: state => {
      return state.configs.BACKEND_URL;
    },
    getAuthUrl: state => {
      return state.configs.AUTH_URL;
    },
    getBackWsUrl: state => {
      return state.configs.BACKEND_WS;
    },
    getMediaUrl: state => {
      return state.configs.MEDIA_URL;
    },
    getToken: state => {
      return state.token;
    },
    getRefreshToken: state => {
      return state.refresh_token;
    },
    getHorecamaId: state => {
      return state.horecamaId;
    }
  }
})

Vue.http.interceptors.push(function (request) {
  request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
});