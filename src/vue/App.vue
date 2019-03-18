<template>
<<<<<<< HEAD
  <div>
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a href="#" class="navbar-brand">
        <img src="http://innopolis.ru/local/styles/img/logo.svg" width="50" height="50" alt="logo">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedControl"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a href="#" class="nav-link">InnoEats</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Restoraunts</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input type="text" class="form-control mr-sm-2" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0 rounded-top">Search</button>
        </form>
      </div>
    </nav>

    <order-page></order-page>

=======
  <div class="container">
    <horecama-list-component v-if="state == 0"></horecama-list-component>
    <goods-list-component v-if="state == 1"></goods-list-component>
>>>>>>> dev
  </div>
</template>

<style>
</style>

<script>
<<<<<<< HEAD
export default {
  data() {
    return {
      order : [ {
        id: " HUI ",
        photo_url: "url",
        price: "999",
        description: "Neehooja",
        name: "EBAT"
      }
      ]
    };
  }
};
</script>
=======
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
      horecama_id: 0
    };
  }
};
</script>

>>>>>>> dev
