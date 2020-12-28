<template>
  <nav-bar></nav-bar>
  <div class="container pt-3">
    <c-u></c-u>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import cU from "../components/Community/Users/communityUserTemplate.vue";

export default {
  name: "Community",
  components: { NavBar, cU },
};
</script>

<style>
</style>