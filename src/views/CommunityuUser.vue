<template>
  <div class="containerForCommunityUser pb-3">
    <nav-bar></nav-bar>
    <div class="container pt-3">
      <c-u></c-u>
    </div>
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
.containerForCommunityUser {
  background: rgb(17, 25, 68);
  background: linear-gradient(
    90deg,
    rgba(17, 25, 68, 1) 4%,
    rgba(89, 151, 207, 1) 51%,
    rgba(28, 61, 168, 1) 99%
  );
  min-height: 100vh;
}
</style>