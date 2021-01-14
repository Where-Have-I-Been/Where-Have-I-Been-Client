<template>
  <li class="list-group-item" v-if="countries">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label
        class="form-check-label"
        for="flexCheckDefault"
        v-for="(v, i) in countries"
        :key="i"
      >
        {{ v[v.id] }}
      </label>
    </div>
  </li>
</template>

<script>
export default {
  name: "countryCheckbox",
  props: {
    countries: null,
  },
};
</script>

<style>
</style>