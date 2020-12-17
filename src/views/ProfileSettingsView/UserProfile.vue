<template>
  <nav-bar></nav-bar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <!-- start -->
        <div class="card mt-2 leftSideCard">
          <div class="card-body">
            <!-- body start -->
            <user-card-info active="profile"></user-card-info>
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
            <profil-settings-card></profil-settings-card>
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
import profilSettingsCard from '../../components/ProfilSettings/profilSettingsCard.vue'
import UserCardInfo from '../../components/ProfilSettings/UserCardInfo.vue';

export default {
  name: "UserProfile",
  components: { navBar, profilSettingsCard , UserCardInfo },
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
  background-color: blue;
  color:white;
}

.opacityCardRight {
  background-image: url('../../assets/sunset-sky-dark-night.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>