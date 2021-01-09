<template>
  <div class="container">
    <div class="card-columns ColumnPhotoImage scroll">
      <div class="card cardPhotoImage" v-for="(photo, i) in PhotoURL" :key="i">
        <img
          :src="photo"
          class="card-img-top uploadImage pb-4"
          alt="selectPhoto"
          :class="{ selected: isActive == i }"
          @click="handleSetAvatar(i)"
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
  methods: {
    async handleSetAvatar(url) {
      this.isActive = url;

      try {
        const response = await axios.get(
          "profiles/" + localStorage.getItem("userID"),
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    ...mapGetters(["PhotoURL"]),
  },
};
</script>

<style>
.cardPhotoImage {
  border: none;
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