<template>
  <div class="containerForCommunityUser pb-3">
    <nav-bar></nav-bar>
    <div class="container pt-3">
      <c-tmp></c-tmp>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../components/NavBar.vue";
import cTmp from "../components/Community/communityTemplate.vue";

export default {
  name: "Community",
  components: { NavBar, cTmp },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    checkUser() {
      if (!this.user) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    // this.checkUser();
  },
};
</script>

<style>
</style>