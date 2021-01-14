<template>
  <div class="container">
    <div class="alert alert-success" role="alert" v-if="success">
      <a href="#">{{ success.message }}</a>
    </div>
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
          @click="id = images[i].photo_id"
          :class="{ selected: isActive == i }"
        />
      </div>
      <button
        type="button"
        class="btn btn-info"
        @click="setAvatarImage()"
        v-if="id"
      >
        Save
      </button>
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
      id: null,
      success: "",
    };
  },
  props: { images: null },
  computed: {
    ...mapGetters(["PhotoURL"]),
  },
  methods: {
    async setAvatarImage() {
      try {
        const response = await axios.put(
          "profiles/" + localStorage.getItem("profilID"),
          { photo_id: this.id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        localStorage.setItem("photo", response.data.data.photo.url);
        this.success = response.data;
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
    setID(id) {
      console.log(id);
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