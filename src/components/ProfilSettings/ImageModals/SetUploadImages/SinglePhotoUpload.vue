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
      console.log("upload");
      // this.$store.dispatch("PhotoURL", this.url);

      try {
        const response = await axios.put(
          "profiles/" + localStorage.getItem("userID"),
          { image: this.UploadImage },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
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