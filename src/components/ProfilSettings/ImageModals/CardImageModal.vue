<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current="true"
            href="#"
            @click="changeCard = true"
            :class="{ active: changeCard }"
            >Set Image</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click="changeCard = false"
            :class="{ active: !changeCard }"
            >Upload Image</a
          >
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="setImageActive" v-if="changeCard">
        <gallery-component></gallery-component>
      </div>
      <div class="setUploadActive" v-else>
        <upload-component></upload-component>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryComponent from "./SetUploadImages/GalleryComponent.vue";
import UploadComponent from "./SetUploadImages/UploadComponent.vue";

export default {
  data() {
    return {
      changeCard: true,
    };
  },
  components: { GalleryComponent, UploadComponent },
  updated() {
    this.$emit("card-change", this.changeCard);
  },
};
</script>

<style>
</style>