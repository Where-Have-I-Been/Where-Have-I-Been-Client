<template>
  <div class="p-2 bd-highlight" v-if="url">
    <div class="card mx-auto" style="width: 10rem">
      <img :src="url" class="card-img-top uploadImage" alt="selectPhoto" />
    </div>
    <button type="button" class="btn btn-primary mt-2" @click="handleUpload">
      Upload Photo
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "single photo Upload",
  data() {
    return {};
  },
  props: { UploadImage: null, url: null },
  methods: {
    async handleUpload() {
      // this.$store.dispatch("PhotoURL", this.url);
      console.log("upload");
      console.log(this.UploadImage);

      try {
        const fd = new FormData();
        fd.append("image", this.UploadImage, this.UploadImage.name);
        const response = await axios.post("photos", fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.$store.dispatch("PhotoURL", response.data.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
</style>