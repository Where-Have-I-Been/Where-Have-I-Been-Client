<template>
  <li class="list-group-item">
    <div class="form-check" v-for="(v, i) in countries" :key="i">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        :value="v.id"
        v-model="selected"
      />
      <label class="form-check-label" for="flexCheckDefault">
        {{ v.name }}
      </label>
    </div>
  </li>
</template>

<script>
import axios from "axios";

export default {
  name: "countryCheckbox",
  data() {
    return {
      countries: null,
      selected: [],
    };
  },
  methods: {
    async getCountries() {
      const trips = await axios.get("countries");
      this.countries = trips.data.data;
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style>
</style>