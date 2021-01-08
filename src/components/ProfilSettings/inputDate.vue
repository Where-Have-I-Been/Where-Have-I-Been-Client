<template>
  <div class="form-floating mt-3">
    <input
      class="form-control"
      type="date"
      id="example-date-input"
      v-model="date"
      @change="emitDate(date)"
    />
    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  props: { name: String },
  methods: {
    emitDate(data) {
      this.$emit("date", data);
    },
  },
};
</script>

<style>
</style>