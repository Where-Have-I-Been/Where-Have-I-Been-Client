<template>
  <h5 class="card-title" @click="setAvatar">Select Your Image</h5>
  <set-photo-image :images="images"></set-photo-image>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center" @change="setAvatar">
      <li class="page-item" :class="{ disabled: actualPage == 1 }">
        <a
          class="page-link"
          href="#"
          tabindex="-1"
          @click="(actualPage -= 1), setAvatar()"
          >Previous</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click="(actualPage = 1), setAvatar()"
          >1</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click="(actualPage = 2), setAvatar()"
          >2</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click="(actualPage = 3), setAvatar()"
          >3</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="#" @click="(actualPage += 1), setAvatar()"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import setPhotoImage from "./SetPhotoImage.vue";
import axios from "axios";

export default {
  name: "Gallery Component",
  data() {
    return {
      images: null,
      actualPage: 1,
    };
  },
  components: { setPhotoImage },
  methods: {
    async setAvatar() {
      try {
        const response = await axios.get(
          "photos/user/" +
            localStorage.getItem("userID") +
            "?per-page=5&page=" +
            this.actualPage,
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
    },
  },
  mounted() {
    this.setAvatar();
  },
};
</script>

<style>
</style>