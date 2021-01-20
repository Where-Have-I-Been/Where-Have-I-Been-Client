<template>
  <div class="form-check" v-for="(v, i) in countries" :key="i">
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      id="exampleRadios1"
      :value="v.name"
      v-model="selected"
    />
    <label class="form-check-label" for="exampleRadios1"> {{ v.name }} </label>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "countryCheckbox",
  data() {
    return {
      countries: "",
      selected: "",
    };
  },
  methods: {
    async getCountries() {
      const trips = await axios.get("countries");
      this.countries = trips.data.data;
    },
    emitCountry() {
      this.$emit("country", this.selected);
    },
  },
  mounted() {
    this.getCountries();
  },
  updated() {
    this.emitCountry();
  },
};
</script>

<style>
</style>