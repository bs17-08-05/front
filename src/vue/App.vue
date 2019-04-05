<template>
  <div class="container">
    <horecama-list-component v-if="state == 0"></horecama-list-component>
    <goods-list-component v-if="state == 1"></goods-list-component>
    <horecama-feedbacks-component v-if="state == 3"></horecama-feedbacks-component>
  </div>
</template>

<style>

</style>

<script>
import HorecamaListComponent from "./HorecamaListComponent.vue";
import GoodsListComponent from "./GoodsListComponent.vue";
import HorecamaFeedbacks from "./HorecamaFeedbacks.vue";
export default {
  components: {
    "horecama-list-component": HorecamaListComponent,
    "goods-list-component": GoodsListComponent,
    "horecama-feedbacks-component": HorecamaFeedbacks,
  },
  data: function() {
    return {
      state: 0,
      horecama_id: 0,
      configs: this.$parent.configs,
    };
  }
};
</script>

