import NotFound from '../components/NotFound.vue';
import MainPage from '../components/MainPage.vue'
import GoodsList from '../components/GoodsList.vue'
import Order from '../components/Order.vue'
import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/goodslist/',
            component: GoodsList
        },
        {
            path: '/cart/',
            component: Order
        },
        {
            path: '/*',
            component: NotFound

        }
    ]
})