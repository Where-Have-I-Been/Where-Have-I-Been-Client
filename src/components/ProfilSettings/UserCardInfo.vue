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
        v-if="photo"
        :src="photo"
        alt=""
        class="imgSettingCard rounded-circle"
      />
      <img
        src="../../assets/avatar2.jpg"
        alt=""
        class="imgSettingCard rounded-circle"
        v-else
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
  <p class="text-center fs-4" v-if="Username">{{ Username }}</p>
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
    </ul>
  </div>
</template>

<script>
import setImageModal from "./ImageModals/setImageModal.vue";
import axios from "axios";

export default {
  components: { setImageModal },
  name: "UserCardInfo",
  data() {
    return {
      showActive: false,
      setImageModal: false,
      user: null,
      Username: null,
      photo: null,
    };
  },
  props: { active: String },
  methods: {
    async getUser() {
      const response = await axios.get(
        "profiles/" +
          localStorage.getItem("profilID") +
          "?representation=private",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.data.photo != null){
        this.photo = response.data.data.photo.url;
        this.Username = response.data.data.name;
      }
      this.user = response.data.data;
    },
  },
  mounted() {
    this.getUser();
  },
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