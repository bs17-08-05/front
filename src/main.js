import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import configs from './js/config';

import VueResource from 'vue-resource';
import 'vuetify/dist/vuetify.min.css'

import router from './router'

import Vuex from 'vuex';App

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    view: 0,
    configs: configs,
    token: "",
    refresh_token: "",
    horecamaId: 0,
    goodId: 0,
  },
  mutations: {
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
  getters: {
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

Vue.http.interceptors.push(function(request) {
  request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
});
