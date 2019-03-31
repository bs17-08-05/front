import Vue from 'vue';
import Vuetify from 'vuetify';
import App from '../vue/App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from '../vue/components/Order.vue';
import MainPage from '../vue/components/MainPage.vue'
import configs from './config';

import VueResource from 'vue-resource';
import response from "vue-resource/src/http/response";
import 'vuetify/dist/vuetify.min.css'


Vue.use(VueResource);
Vue.use(Vuetify);


new Vue({
  el: '#app',
  
  render: h => h(App),
  data: {
    configs: configs,
  }
});
