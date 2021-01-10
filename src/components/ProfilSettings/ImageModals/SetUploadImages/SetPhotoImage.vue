<template>
  <div class="container">
    <div class="card-columns ColumnPhotoImage scroll">
      <div
        class="card cardPhotoImage"
        v-for="(image, i) in images"
        :key="i"
        @change="handleSetAvatar"
      >
        <img
          :src="images[i].url"
          class="card-img-top uploadImage pb-4"
          alt="selectPhoto"
          :class="{ selected: isActive == i }"
          @click="setAvatarImage(images[i].photo_id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Set Photo Image",
  data() {
    return {
      isActive: null,
    };
  },
  props: { images: null },
  computed: {
    ...mapGetters(["PhotoURL"]),
  },
  methods: {
    async setAvatarImage(id) {
      try {
        const response = await axios.put(
          "profiles/" + localStorage.getItem("userID"),
          { photo_id: id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        localStorage.setItem("photo", response.data.data.photo.url);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.cardPhotoImage {
  border: none;
  width: 50%;
  float: left;
}

.uploadImage {
  border-radius: 0em;
}

.scroll {
  max-height: 30vh;
  width: 100%;
  overflow-y: auto;
}

.selected {
  border: solid 5px black;
}
</style>