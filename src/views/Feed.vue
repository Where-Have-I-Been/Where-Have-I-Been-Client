<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <div class="notification pt-5">
        <notification :notification="notification"></notification>
      </div>
    </div>
  </div>
</template>

<script>
import notification from "../components/Feed/notification.vue";
import NavBar from "../components/NavBar.vue";
import axios from "axios";

export default {
  name: "Feed",
  data() {
    return {
      notification: null,
    };
  },
  methods: {
    async fetchFeed() {
      const notif = await axios.get(
        "notifications/" + localStorage.getItem("userID"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.notification = notif.data.data;
    },
  },
  mounted() {
    this.fetchFeed();
  },
  components: {
    notification,
    NavBar,
  },
};
</script>

<style>
.notification {
  width: 100%;
}
</style>