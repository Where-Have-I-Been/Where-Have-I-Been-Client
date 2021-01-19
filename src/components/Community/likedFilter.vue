<template>
  <div class="form-check">
    <h5>Do you want filter by Likes?</h5>
    <input
      class="form-check-input"
      type="radio"
      name="SelectYesLike"
      id="selectYesLike"
      value="true"
      v-model="likedFilter"
    />
    <label class="form-check-label" for="selectYesLike"> Yes </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="SelectNoLike"
      id="selectNoLike"
      v-model="likedFilter"
      value="false"
      checked
    />
    <label class="form-check-label" for="selectNoLike"> No </label>
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