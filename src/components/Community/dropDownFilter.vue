<template>
  <div class="input-group mb-3">
    <select
      class="form-select"
      id="inputGroupSelect02"
      v-model="selectedFilter"
    >
      <option disabled>Sort by</option>
      <option value="likes">Likes</option>
      <option value="created">Date Created</option>
      <option value="updated">Date Updated</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDownFilter",
  data() {
    return {
      selectedFilter: null,
    };
  },
  methods: {
    sortEmit() {
      this.$emit("sort", this.selectedFilter);
    },
  },
  updated() {
    this.sortEmit();
  },
};
</script>

<style></style>