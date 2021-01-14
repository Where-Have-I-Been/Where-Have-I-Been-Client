<template>
  <div class="form-floating mt-3">
    <select
      class="form-select"
      id="floatingSelect"
      aria-label="Floating label select example"
      v-model="gender"
      @change="emitGender(gender)"
    >
      <!-- <option selected>{{name}}</option> -->
      <option v-for="(v, i) in value" :key="i">{{ v }}</option>
    </select>
    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "Select gender",
  data() {
    return {
      gender: "",
    };
  },
  props: { name: String, value: Array, user: null },
  methods: {
    emitGender(data) {
      this.$emit("gender", data);
    },
  },
};
</script>

<style>
</style>