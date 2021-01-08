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
export default {
  name: "single photo Upload",
  data() {
    return {};
  },
  props: { UploadImage: null, url: null },
  methods: {
    handleUpload() {
      console.log("upload");
      this.$store.dispatch("PhotoURL", this.url);
    },
  },
};
</script>

<style>
</style>