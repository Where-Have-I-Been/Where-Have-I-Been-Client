<template>
  <h5 class="card-title">Select Your Image</h5>
  <set-photo-image></set-photo-image>
</template>

<script>
import setPhotoImage from './SetPhotoImage.vue';

export default {
  name: "Gallery Component",
  components: { setPhotoImage },
};
</script>

<style>
</style>