<template>
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <!-- start -->
        <div class="card mt-2 leftSideCard">
          <div class="card-body">
            <!-- body start -->
            <user-card-info active="password"></user-card-info>
            <!-- body stop -->
          </div>
        </div>
      </div>
      <!-- end -->
      <div class="col-sm-9">
        <!-- card2 -->
        <div class="card mt-2 leftSideCard">
          <div class="card-body opacityCardRight">
            <!-- ciało start -->
            <user-reset-password></user-reset-password>
            <!-- ciało stop -->
          </div>
        </div>
        <!-- card2 end -->
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/NavBar.vue";
import UserCardInfo from "../../components/ProfilSettings/UserCardInfo.vue";
import UserResetPassword from "../../components/ProfilSettings/userResetPass.vue";

export default {
  name: "UserProfile",
  components: { navBar, UserCardInfo, UserResetPassword },
};
</script>

<style>
.leftSideCard {
  height: 90vh;
}

.itemSetting {
  cursor: pointer;
}

.itemSetting:hover {
  font-weight: bolder;
}
.router-link-active.router-link-exact-active {
  color: white;
}

.opacityCardRight {
  background-image: url("../../assets/nightsky(1).jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>