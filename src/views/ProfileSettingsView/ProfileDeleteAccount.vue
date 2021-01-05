<template>
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <!-- start -->
        <div class="card mt-2 leftSideCard">
          <div class="card-body">
            <!-- body start -->
            <user-card-info active="delete"></user-card-info>
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
            <delete-account></delete-account>
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
import UserCardInfo from '../../components/ProfilSettings/UserCardInfo.vue';
import DeleteAccount from '../../components/ProfilSettings/ProfileDeleteAccount.vue'

export default {
  name: "UserProfile",
  components: { navBar, UserCardInfo, DeleteAccount},
};
</script>

<style>
.leftSideCard {
  height: 90vh;
}

.itemSetting{
  cursor: pointer;
}

.itemSetting:hover {
  font-weight: bolder;

}
.router-link-active.router-link-exact-active {
color:white;
}

.opacityCardRight {
  background-image: url('../../assets/nightsky(1).jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>