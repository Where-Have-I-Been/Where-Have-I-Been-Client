<template>
  <div class="form-floating">
    <select
      class="form-select"
      id="floatingSelect"
      aria-label="Floating label select example"
      v-model="selectedFilter"
    >
      <option value="likes">Likes</option>
      <option value="created">Date Created</option>
      <option value="updated">Date Updated</option>
    </select>
    <label for="floatingSelect">Sort By</label>
  </div>
</template>

<script>
export default {
  name: "DropDownFilter",
  data() {
    return {
      selectedFilter: "",
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