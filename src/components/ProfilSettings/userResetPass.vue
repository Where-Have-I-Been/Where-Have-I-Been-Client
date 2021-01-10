<template>
  <div class="card text-center my-5">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">My profile</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!-- start -->
      <div class="alert alert-success" role="alert" v-if="success">
        {{ success.message }}
      </div>
      <div class="alert alert-danger" role="alert" v-if="error">
        {{ error.message }}
      </div>
      <form @submit.prevent="handleSubmit">
        <change-pass name="Old Password" @pass="getOldPass"></change-pass>
        <change-pass name="New Password" @pass="getNewOldPass"></change-pass>
        <change-pass
          name="Confirm New Password"
          @pass="getConfirm"
        ></change-pass>

        <button type="submit" class="btn btn-success mt-3">Save</button>
      </form>
      <!-- end -->
    </div>
  </div>
</template>

<script>
import changePass from "../ProfilSettings/ProfilChangePass.vue";
import axios from "axios";

export default {
  components: { changePass },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      ConfirmNewPassword: "",
      success: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "users/" + localStorage.getItem("userID") + "/change-password",
          {
            current_password: this.oldPassword,
            password: this.newPassword,
            password_confirmation: this.ConfirmNewPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        location.reload();
        this.success = response.data;
        this.password = "";
        this.oldPassword = "";
        this.ConfirmNewPassword = "";
      } catch (e) {
        console.log("Error " + e);
        this.error = e;
        this.password = "";
        this.oldPassword = "";
        this.ConfirmNewPassword = "";
      }
    },
    getOldPass(e) {
      this.oldPassword = e;
    },
    getNewOldPass(e) {
      this.newPassword = e;
    },
    getConfirm(e) {
      this.ConfirmNewPassword = e;
    },
  },
};
</script>

<style>
</style>