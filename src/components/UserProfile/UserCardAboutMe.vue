<template>
  <div class="card mx-5 mt-3">
    <div class="card-body">
      <h5 class="card-title">About me</h5>
      <p class="card-text px-3 pt-4 pb-4" v-if="aboutDiffUser">
        {{ aboutDiffUser }}
      </p>
      <p class="card-text px-3 pt-4 pb-4" v-else-if="user && id == undefined">
        {{ user.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserCardAboutMe",
  data() {
    return {
      aboutDiffUser: null,
      id: this.$route.params.id,
    };
  },
  props: { user: null },
  methods: {
    async getDiffUser() {
      const pu = await axios.get("profiles/" + this.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.aboutDiffUser = pu.data.data.description;
    },
  },
  mounted() {
    this.getDiffUser();
  },
};
</script>

<style>
</style>