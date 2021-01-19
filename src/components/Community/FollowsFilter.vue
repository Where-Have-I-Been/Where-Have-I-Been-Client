<template>
  <div class="form-check">
    <h5>Do you want filter by Follows</h5>
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
      value="true"
      v-model="followsFilter"
    />
    <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      v-model="followsFilter"
      value="false"
      checked
    />
    <label class="form-check-label" for="flexRadioDefault2"> No </label>
  </div>
</template>

<script>
export default {
  name: "Follows Filter",
  data() {
    return {
      followsFilter: false,
    };
  },
  methods: {
    emitFollows() {
      this.$emit("follows", this.followsFilter);
    },
  },
  updated() {
    this.emitFollows();
  },
};
</script>

<style>
</style>