<template>
  <nav-bar></nav-bar>
  <div class="container">
    <user-card-data :user="user"></user-card-data>
    <user-card-about-me :user="user"></user-card-about-me>
    <trip-statistic-template :user="user"></trip-statistic-template>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserCardData from "../components/UserProfile/UserCardData.vue";
import UserCardAboutMe from "../components/UserProfile/UserCardAboutMe.vue";
import TripStatisticTemplate from "../components/UserProfile/TripStatisticTemplate.vue";
import axios from "axios";

export default {
  name: "Profil",
  data() {
    return {
      user: null,
    };
  },
  components: { NavBar, UserCardData, UserCardAboutMe, TripStatisticTemplate },
  methods: {
    async getUser() {
      const user = await axios.get(
        "profiles/" +
          localStorage.getItem("profilID") +
          "?representation=private",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.user = user.data.data;
    },
  },
  mounted(){
    this.getUser();
  }
};
</script>

<style>
body {
  background-image: url("../assets/sunset-sky-dark-night.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
</style>