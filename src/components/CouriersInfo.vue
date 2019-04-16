<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3></v-flex>
        </v-layout>

        <div class="couriers">
            <v-list v-for="(item,index) in couriers" :key="index">
                <div class="feedback_info">

                    <div class="courier">Courier: <span>{{ item.courier_name }}</span></div>
                    <div class="feedback_rating">Courier last delivers:
                        <div v-for="order in item.orders_info">
                            <div class="courier_orders">
                                <ul>
                                    <li>Client: {{order.client_name}}</li>
                                    <li>Successfully Delivered: {{order.delivered}}</li>
                                    <li>Successfully Finished: {{order.finished}}</li>
                                    <li>Delivery price: {{order.price}}</li>
                                </ul>
                            </div>
                            <br><br><br>
                        </div>
                    </div>


                </div>
            </v-list>
        </div>


    </v-container>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        data() {
            return {
                api_url: "/api/couriers/",
                photo_prefix: this.$store.getters.getMediaUrl,
                couriers: [
                    {
                        pk: 1, //courier id wtf????
                        user: 3, //user id
                        courier_name: "Vova Nagibator 2011",
                        orders_info: [
                            {
                                client_name: "Vladimir Ivanov",
                                delivered: true,
                                finished: false,
                                price: 200
                            },
                            {
                                client_name: "Vladimir Alexiev",
                                delivered: false,
                                finished: true,
                                price: 2000
                            },{
                                client_name: "Vladimir Petushkov",
                                delivered: true,
                                finished: false,
                                price: 500
                            },
                        ]
                    },
                    {
                        pk: 1,
                        user: 3,
                        courier_name: "Ivan ShadowLord PRO 2013",
                        orders_info: [
                            {
                                client_name: "Vladimir Ivanov",
                                delivered: true,
                                finished: false,
                                price: 200
                            },
                            {
                                client_name: "Vladimir Alexiev",
                                delivered: false,
                                finished: true,
                                price: 2000
                            },{
                                client_name: "Vladimir Petushkov",
                                delivered: true,
                                finished: false,
                                price: 500
                            },
                        ]
                    },
                ]
            };
        },
        computed: mapGetters({
            products: "allProducts",
            length: "getNumberOfProducts"
        }),
        methods: mapActions(["addToCart"]),

        created: function() {
            let back_url = this.$store.getters.getBackUrl;
            this.$http.get(back_url + this.api_url).then(
                function(response) {
                    this.couriers = response.body.data;
                },
                function(error) {
                    console.log(response);
                    console.log(error);
                    //error
                }
            );
        }
    };
</script>

<style scoped>

</style>