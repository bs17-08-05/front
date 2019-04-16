import MainPage from "../components/MainPage.vue";
import GoodsList from "../components/GoodsList.vue";
import Order from "../components/Order.vue";
import NotFound from "../components/NotFound.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import NotificationComponent from "../components/NotificationComponent.vue"
import HorecamaFeedbacks from '../components/HorecamaFeedbacks.vue'
import Cart from "../components/Cart.vue";

import Vue from "vue";
import VueRouter from 'vue-router';
import CouriersInfo from "@/components/CouriersInfo";

Vue.use(VueRouter);
const routes = [{
        path: '/',
        component: MainPage
    },
    {
        path: '/goodslist/:id',
        component: GoodsList
    },
    {
        path: '/cart/',
        component: Cart
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/feedbacks/:id',
        component: HorecamaFeedbacks
    },
    {
        path: '/couriers/',
        component: CouriersInfo
    },
    {
        path: '/*',
        component: NotFound
    },
];
export default new VueRouter({
    mode: 'history',
    routes
})