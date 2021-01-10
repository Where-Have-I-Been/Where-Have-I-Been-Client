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

export default {
  components: { changePass },
  methods: {
    handleSubmit() {
      console.log("asdas");
    },
    getOldPass(e){
      console.log(e);
    },
    getNewOldPass(e) {
      console.log(e);
    },
    getConfirm(e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>