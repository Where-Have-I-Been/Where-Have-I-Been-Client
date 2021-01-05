<template>
  <img
    src="../../assets/avatar2.jpg"
    alt="img"
    class="imgAvatar rounded-circle mx-auto d-block img-fluid"
  />
  <p class="text-center fs-4">Janek Kowalski</p>
  <div class="links mt-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item itemSetting" :class="{activeAction : active=='profile'}">
        <router-link to="/userProfile">Profile Settings</router-link>
      </li>
      <li class="list-group-item itemSetting" :class="{activeAction : active=='password'}">
        <router-link to="/userProfile/changepassword">Change Password</router-link>
      </li>
      <li class="list-group-item itemSetting" :class="{activeAction : active=='email'}">
        <router-link to="/userProfile/email">Email & Social Profiles</router-link>
      </li>
      <li class="list-group-item itemSetting" :class="{activeAction : active=='desc'}">
        <router-link to="/userProfile/profileDescription">Profile Description</router-link>
      </li>
      <li class="list-group-item itemSetting" :class="{activeAction : active=='delete'}">
        <router-link to="/userProfile/profileDeleteAccount">Delete Account</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserCardInfo",
  props:{active: String }
};
</script>

<style>
.activeAction {
  background-color: mediumturquoise;
  color:white;
}
a {
  text-decoration: none;
}
</style>