<template>
  <h5 class="card-title form-label" for="customFile">Upload Image</h5>
  <input
    type="file"
    class="form-control"
    id="customFile"
    @change="fileHandler($event)"
  />
  <single-photo-upload
    v-if="UploadImage"
    :UploadImage="UploadImage"
    :url="URLImage"
  ></single-photo-upload>
</template>

<script>
import SinglePhotoUpload from "./SinglePhotoUpload.vue";
export default {
  name: "Upload Component",
  components: { SinglePhotoUpload },
  data() {
    return {
      UploadImage: null,
      URLImage: null,
    };
  },
  methods: {
    fileHandler(e) {
      this.UploadImage = e.target.files[0];
      this.URLImage = URL.createObjectURL(e.target.files[0]);
    },
  },
};
</script>

<style>
</style>