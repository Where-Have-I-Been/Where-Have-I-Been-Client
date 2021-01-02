<template>
<li class="list-group-item">
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      {{name}}
    </label>
  </div>
</li>
</template>

<script>
export default {
    name: 'countryCheckbox',
    props: {
        name: String,
    }
};
</script>

<style>
</style>