<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
      rel="stylesheet"
      type="text/css"
    >
    <div class="card mx-auto" style="width: 50rem; min-height: 30rem; overlfow: auto;">
      <div class="card-body card-body-cascade">
        <div class="card-title">
          <h3
            style="color: #191918; font-family: monospace; padding:2em; text-decoration: dashed"
          >YOU HAVE PURCHASED:</h3>
          <div class="list-group">
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
              v-for="item in order"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">{{ item.name }}</h5>
                <small>{{ item.price }}</small>
              </div>
              <p class="mb-2">{{ item.description }}</p>
            </a>
          </div>

          <button
            type="button"
            class="btn btn-success mb-2"
            style="margin: 0 5 0 5; "
            v-on:click="onClick"
          >Order</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
p {
  font-family: monospace;
}
a {
  font-family: monospace;
}
small {
  font-family: monospace;
}
</style>

<script>
export default {
  methods: {
    onClick: function() {
      console.log("Pressedpidor");
    }
  },
  data: function() {
    return {
      order : this.$parent.order,
    }
  }
};
</script>