import Vue from 'vue';
import App from '../vue/App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from '../vue/components/Order.vue';
import VueResource from 'vue-resource';
import response from "vue-resource/src/http/response";
Vue.use(VueResource);
Vue.component('order-page', Order);


new Vue({
  el: '#app',
  
  render: h => h(App)
});
