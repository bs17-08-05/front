import Vue from 'vue';
import App from '../vue/App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueResource from 'vue-resource';
import response from "vue-resource/src/http/response";
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),

  data: {

  }



});
