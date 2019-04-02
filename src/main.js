import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import configs from './js/config';

import VueResource from 'vue-resource';
import response from "vue-resource/src/http/response";

import 'vuetify/dist/vuetify.min.css'

import router from './router'

Vue.use(VueResource);
Vue.use(Vuetify);

new Vue({
    el: '#app',
    router,
    render: h => h(App),


    data: {
        configs: configs,
    },

});
