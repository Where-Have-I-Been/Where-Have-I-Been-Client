<template>
  <div class="input-group mb-3">
    <select class="form-select" id="inputGroupSelect02" v-model="selected">
      <option selected>Select more filter</option>
      <option value="Followed Users">Followed Users</option>
      <option value="Trips Like">Trips Like</option>
      <option value="Country/City">Country/City</option>
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

