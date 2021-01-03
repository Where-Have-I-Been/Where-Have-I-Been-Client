<template>
<div class="container-fluid banner ">
    <div class="row">
      <!-- banner -->
      <home-navbar></home-navbar>
      <!-- end -->
      <div class="col-md-8 offset-md-2 info HomeLower">
        <h1 class="text-center">WHERE HAVE I BEEN</h1>
        <p class="text-center animate__animated animate__bounce pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <div class="d-flex justify-content-evenly pt-5">
          <router-link class="btn btn-lg btn-info mr-2 btnHomeOpacity" to="/register">JOIN TO US
          </router-link>         
          <button type="button" class="btn btn-lg btn-light btnHomeOpacity">
            INFORMATION
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNavbar from "../components/Home/HomeNavbar.vue";
export default {
  name: "Home",  
  components: { HomeNavbar },
};  
</script>

<style>
@import "../components/Home/home.css";
</style>
