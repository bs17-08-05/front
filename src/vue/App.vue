<template>
  <div class="container">
    <horecama-list-component v-if="state == 0"></horecama-list-component>
    <goods-list-component v-if="state == 1"></goods-list-component>
  </div>
</template>

<style>

</style>

<script>
import HorecamaListComponent from "./HorecamaListComponent.vue";
import GoodsListComponent from "./GoodsListComponent.vue";
export default {
  components: {
    "horecama-list-component": HorecamaListComponent,
    "goods-list-component": GoodsListComponent
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

