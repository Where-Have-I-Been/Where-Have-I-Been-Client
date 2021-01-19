<template>
  <div class="pb-2">
    <label for="filtrCity">Filtr by City</label>
    <input
      type="text"
      id="filtrCity"
      v-model="city"
      @keyup.enter="cityEmit($event.target.value)"
    />
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
    cityEmit(data) {
      this.$emit("city", data);
      this.city = "";
    },
  },
};
</script>

<style>
</style>