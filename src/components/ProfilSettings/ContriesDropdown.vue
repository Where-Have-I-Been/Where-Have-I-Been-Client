<template>
  <div class="form-floating mt-3">
    <select
      class="form-select"
      id="floatingSelect"
      aria-label="Floating label select example"
      v-model="country"
      @change="emitCountry(country)"
    >
      <option v-for="(v, i) in value" :key="i" :value="i">
        {{ v.name }}
      </option>
    </select>
    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "Countries DropDown",
  data() {
    return {
      country: "",
    };
  },
  props: { name: null, value: [], user: null },
  methods: {
    emitCountry(data) {
      this.$emit("country", data + 1);
    },
  },
};
</script>

<style>
</style>