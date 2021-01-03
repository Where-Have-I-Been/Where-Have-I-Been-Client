<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <div class="notification">
        <notification></notification>
      </div>

      <div class="notification">
        <like-your-trip></like-your-trip>
      </div>

      <div class="notification">
        <someone-add-new-trip></someone-add-new-trip>
      </div>

      <div class="notification">
        <follow-you></follow-you>
      </div>
    </div>
  </div>
</template>

<script>
import notification from "../components/Feed/notification.vue";
import likeYourTrip from "../components/Feed/likeYourTrip.vue";
import someoneAddNewTrip from "../components/Feed/someoneAddNewTrip.vue";
import followYou from "../components/Feed/followYou.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Feed",
  components: {
    notification,
    NavBar,
    likeYourTrip,
    someoneAddNewTrip,
    followYou,
  },
};
</script>

<style>
.notification {
  width: 100%;
}
</style>