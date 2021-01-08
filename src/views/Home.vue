<template>
  <div class="container-fluid banner">
    <div class="row">
      <!-- banner -->
      <home-navbar></home-navbar>
      <!-- end -->
      <div class="col-md-8 offset-md-2 info HomeLower">
        <h1 class="text-center">WHERE HAVE I BEEN</h1>
        <h1 class="text-center" v-if="user">Hi {{ user.data.email }}</h1>
        <p class="text-center animate__animated animate__bounce pt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <!-- LOGGED -->
        <div class="d-flex justify-content-center flex-nowrap pt-5" v-if="user">
          <router-link
            class="btn btn-lg btn-info mr-2 btnHomeOpacity profile"
            to="/profile"
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
import { mapGetters } from "vuex";
import axios from "axios";
import HomeNavbar from "../components/Home/HomeNavbar.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: { HomeNavbar },
  async created() {
    const response = await axios.get("users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    this.$store.dispatch("user", response.data);
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
@import "../components/Home/home.css";
</style>
