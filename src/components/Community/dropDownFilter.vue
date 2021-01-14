<template>
  <div class="input-group mb-3">
    <select
      class="form-select"
      id="inputGroupSelect02"
      v-model="selectedFilter"
    >
      <option disabled>Sort by</option>
      <option value="Country">Country</option>
      <option value="City">City</option>
      <option value="Likes">Likes</option>
      <option value="Dates">Dates</option>
    </select>
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
};
</script>

<style></style>