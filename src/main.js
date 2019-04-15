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
      id: '',
      name: '',
      description: '',
      price: 399
    }]
  },
  mutations: {
    [types.ADD_TO_CART](state, {
      id 
      //propisat vse svoystva goods
    }) {
      const record = state.added.find(p => p.id === id)

      if (!record) {
        state.added.push({
          //zamenit id na product i quantity
          id,
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
      commit(types.ADD_TO_CART, {
        id: product 
        //dobalvyaem polnostyu product
      })
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
        const product = state.all.find(p => p.id === id)

        return {
          name: product.name,
          price: product.price,
          quantity
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