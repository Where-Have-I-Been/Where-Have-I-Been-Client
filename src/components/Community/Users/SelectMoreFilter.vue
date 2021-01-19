<template>
  <div class="input-group mb-3">
    <select class="form-select" id="inputGroupSelect02" v-model="selected">
      <option selected disabled>Select more filter</option>
      <option value="city">City</option>
      <option value="Country">Country</option>
      <option value="only-followings">Trips Followers</option>
      <option value="only-liked">Likes Trips</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectMoreFilter",
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
};
</script>

<style>
</style>

