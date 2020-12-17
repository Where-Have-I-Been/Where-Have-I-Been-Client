<template>
  <div class="form-floating mt-3">
    <input
      type="email"
      class="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label for="floatingInput">{{name}}</label>
  </div>
</template>

<script>
export default {
    props: {name: String}
};
</script>

<style>
</style>
