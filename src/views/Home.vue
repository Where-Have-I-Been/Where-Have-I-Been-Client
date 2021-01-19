<template>
  <div class="container-fluid banner">
    <div class="row">
      <!-- banner -->
      <home-navbar></home-navbar>
      <!-- end -->
      <div class="col-md-8 offset-md-2 info HomeLower">
        <h1 class="text-center">WHERE HAVE I BEEN</h1>
        <h1 class="text-center" v-if="name">Hi {{ name }}</h1>
        <p class="text-center animate__animated animate__bounce pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <!-- LOGGED -->
        <div class="d-flex justify-content-evenly pt-5" v-if="user">
          <router-link
            class="btn btn-lg btn-info mr-2 btnHomeOpacity"
            to="/profil"
            >PROFILE
          </router-link>
          <router-link
            to="/chooseMap"
            class="btn btn-lg btn-info mr-2 btnHomeOpacity routerMap"
            >GO TO MAP</router-link
          >
        </div>
        <!-- LOGGED -->
        <div class="d-flex justify-content-evenly pt-5" v-else>
          <router-link
            class="btn btn-lg btn-info mr-2 btnHomeOpacity"
            to="/register"
            >JOIN TO US
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
import axios from "axios";
import HomeNavbar from "../components/Home/HomeNavbar.vue";

export default {
  name: "Home",
  data() {
    return {
      name: null,
      user: null,
    };
  },
  components: { HomeNavbar },
  async created() {
    const response = await axios.get("user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // this.$store.dispatch("user", response.data);
    localStorage.setItem("userID", response.data.data.id);
    localStorage.setItem("profilID", response.data.data.profile_id);
    localStorage.setItem("name", response.data.data.name);
    this.user = response;
    this.name = response.data.data.name;
  },
};
</script>

<style>
@import "../components/Home/home.css";
</style>
