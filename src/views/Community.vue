<template>
  <nav-bar></nav-bar>
  <div class="container pt-3">
    <c-tmp></c-tmp>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import cTmp from "../components/Community/communityTemplate.vue";

export default {
  name: "Community",
  components: { NavBar, cTmp },
};
</script>

<style>
</style>