<template>
  <div class="form-check">
    <h5>Do you want filter by Likes?</h5>
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
      value="true"
      v-model="likedFilter"
    />
    <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      v-model="likedFilter"
      value="false"
      checked
    />
    <label class="form-check-label" for="flexRadioDefault2"> No </label>
  </div>
</template>

<script>
export default {
  name: "Liked Filter",
  data() {
    return {
      likedFilter: false,
    };
  },
  methods: {
    emitLikes() {
      this.$emit("like", this.likedFilter);
    },
  },
  updated(){
    this.emitLikes();
  }
};
</script>

<style>
</style>