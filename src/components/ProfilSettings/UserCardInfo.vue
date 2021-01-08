<template>
  <!-- change avatar -->
  <div class="dropdown">
    <a
      class="dropdown-toggle"
      href="#"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      :class="{ show: showActive }"
      @click="showActive = !showActive"
    >
      <img
        src="../../assets/avatar2.jpg"
        alt=""
        class="imgSettingCard rounded-circle"
      />
    </a>
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
      :class="{ show: showActive }"
    >
      <li>
        <a
          class="dropdown-item"
          href="#"
          @click="setImageModal = !setImageModal"
          >Set Image</a
        >
      </li>
      <set-image-modal v-if="setImageModal"></set-image-modal>
    </ul>
  </div>
  <!-- change avatar -->
  <p class="text-center fs-4">{{ Username }}</p>
  <div class="links mt-4">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item itemSetting"
        :class="{ activeAction: active == 'profile' }"
      >
        <router-link to="/userProfile">Profile Settings</router-link>
      </li>
      <li
        class="list-group-item itemSetting"
        :class="{ activeAction: active == 'password' }"
      >
        <router-link to="/userProfile/changepassword"
          >Change Password</router-link
        >
      </li>
      <li
        class="list-group-item itemSetting"
        :class="{ activeAction: active == 'email' }"
      >
        <router-link to="/userProfile/email"
          >Email & Social Profiles</router-link
        >
      </li>
      <li
        class="list-group-item itemSetting"
        :class="{ activeAction: active == 'desc' }"
      >
        <router-link to="/userProfile/profileDescription"
          >Profile Description</router-link
        >
      </li>
      <li
        class="list-group-item itemSetting"
        :class="{ activeAction: active == 'delete' }"
      >
        <router-link to="/userProfile/profileDeleteAccount"
          >Delete Account</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import setImageModal from "./ImageModals/setImageModal.vue";
// import { mapGetters } from "vuex";

export default {
  components: { setImageModal },
  name: "UserCardInfo",
  data() {
    return {
      showActive: false,
      setImageModal: false,
      Username: this.user,
    };
  },
  props: { active: String },
  // computed: {
  //   ...mapGetters(["user"]),
  // },
  updated() {
    this.Username = this.$store.state.user.data.name;
  }
};
</script>

<style>
.imgSettingCard {
  width: 80%;
  height: 80%;
  margin-left: 10%;
}

.activeAction {
  background-color: mediumturquoise;
  color: white;
}
a {
  text-decoration: none;
}
</style>