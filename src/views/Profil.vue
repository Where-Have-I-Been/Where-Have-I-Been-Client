<template>
  <nav-bar></nav-bar>
  <div class="container">
    <user-card-data></user-card-data>
    <user-card-about-me></user-card-about-me>
    <trip-statistic-template></trip-statistic-template>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserCardData from "../components/UserProfile/UserCardData.vue";
import UserCardAboutMe from "../components/UserProfile/UserCardAboutMe.vue";
import TripStatisticTemplate from "../components/UserProfile/TripStatisticTemplate.vue";

export default {
  name: "Profil",
  components: { NavBar, UserCardData, UserCardAboutMe, TripStatisticTemplate },
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