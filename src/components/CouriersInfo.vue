<template>
    
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
                        pk: 1,
                        user: 3,
                        orders_info: [
                            {
                                delivered: true,
                                finished: false,
                                price: 200
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
                    this.goods = response.body.data;
                },
                function(error) {
                    console.log(response);
                    //error
                }
            );
        }
    };
</script>

<style scoped>

</style>