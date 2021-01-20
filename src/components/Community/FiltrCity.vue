<template>
  <div class="form-group">
    <label for="filtrCity">Filtr by City</label>
    <input type="text" class="form-control" id="filtrCity" v-model="city" />
  </div>
</template>

<script>
export default {
  name: "Filtr City",
  data() {
    return {
      city: "",
    };
  },
  methods: {
    cityEmit() {
      this.$emit("city", this.city);
    },
  },
  updated() {
    this.cityEmit();
  },
};
</script>

<style>
</style>