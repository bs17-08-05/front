<template>
  <div><nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a href="#" class="navbar-brand">
        <img src="http://innopolis.ru/local/styles/img/logo.svg" width="50" height="50" alt="logo">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedControl" aria-expanded="false" aria-label="Toggle navigation"
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
            <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
      </div>
    </nav>
    <order-page>
    </order-page>
  </div>
</template>

<style>

</style>

<script>

export default {
  data(){
    return{

    }
  }  
}
</script>