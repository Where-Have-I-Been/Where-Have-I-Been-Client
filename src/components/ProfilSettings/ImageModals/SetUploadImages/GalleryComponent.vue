<template>
  <h5 class="card-title" @click="setAvatar">Select Your Image</h5>
  <set-photo-image :images="images"></set-photo-image>
</template>

<script>
import setPhotoImage from "./SetPhotoImage.vue";
import axios from "axios";

export default {
  name: "Gallery Component",
  data(){
    return {
      images: null,
    }
  },
  components: { setPhotoImage },
  methods: {
    async setAvatar(){
      try {
        const response = await axios.get(
          "photos/user/" +
            localStorage.getItem("userID") +
            "?per-page=5&page=y/1",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        this.images = response.data.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.setAvatar();
  },
};
</script>

<style>
</style>