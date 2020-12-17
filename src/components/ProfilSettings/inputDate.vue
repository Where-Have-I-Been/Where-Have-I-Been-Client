<template>
  <div class="form-floating mt-3">
    <input
      class="form-control"
      type="date"
      value="1998-16-12"
      id="example-date-input"
    />
    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
export default {
  props: { name: String },
};
</script>

<style>
</style>