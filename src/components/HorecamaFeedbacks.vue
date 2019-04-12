<template>
    <div>
        <button class="btn btn-info" @click="back">Back</button>
        <ul id="list" style="list-style: none;">
            <li v-for="item in feedbacks" class="feedbacks">
                <div class="feedback_info">

                    <div class="username_in_feedback">Client: <span>{{ item.user_name }}</span></div>
                    <div v-if="item.pros !== ''" class="price_in_feedback">What was good: {{ item.pros }}</div>
                    <div v-if="item.cons !== ''" class="pros_in_feedback">What was not good: {{ item.cons }}</div>
                    <div class="feedback_rating">Delivery rating: <span v-for="star in item.rating"><i class="fas fa-star"></i></span></div>
                    <div class="feedback_time">Delivery Time: {{ item.time }}</div>

                    <span>Client Ordered: </span>
                    <span v-if="item.goods_which_was_ordered.length !== 0" class="feedback_goods">
                        <span v-for="goods_entity in item.goods_which_was_ordered">
                        {{goods_entity}},
                        </span>
                    </span>
                    <span v-else class="feedback_goods">
                        <span>Not stated</span>
                    </span>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            let configs = this.$parent.configs;
            return {
                api_url: configs.BACKEND_URL + "/api/horecama_feedbacks/" + this.$parent.horecama_id + "/",
                configs: configs,
                feedbacks: [
                    {
                        pk: 10,
                        user_name: 'Alexander Kekovich',
                        goods_which_was_ordered: [],
                        rating: 1,
                        time: "2019-04-01T04:54:13.764049Z",
                        pros: "Вкусная, свежая еда",
                        cons: "По телефону нахамили =( "
                    },
                    {
                        pk: 8,
                        user_name: "Vladimir Kekovich",
                        goods_which_was_ordered: ["Ananas", "Pivas", "Vodka"],
                        rating: 4,
                        time: "2019-04-01T04:54:13.761049Z",
                        pros: "Чо пацаны аниме",
                        cons: ""
                    }
                ]
            };
        },
        methods: {
            getAllFeedbacks: function() {
                console.log(this.$parent.horecama_id);
                this.$http.get(this.api_url).then(
                    function(response) {
                        console.log(response);
                        this.feedbacks = response.body.data;
                    },
                    function(error) {
                        console.log(response);
                        //error
                    }
                );
            },
            back: function(id) {
                this.$parent.state = 1;
            },
            goto_feedbacks: function(id) {
                this.$parent.state = 3;
            }
        },
        created: function() {
            this.getAllFeedbacks();
        }
    };
</script>

<style scoped>
    .username_in_feedback span {
        font-weight: bold;
    }
    .feedbacks {
        background-color: #c0dbff;
        margin-top: 1em;
    }
</style>