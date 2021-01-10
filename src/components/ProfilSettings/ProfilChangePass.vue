<template>
  <div class="form-floating mt-3">
    <input
      type="password"
      class="form-control"
      id="floatingInput"
      v-model="data"
      @change="emitData"
    />

    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "change Pass",
  data() {
    return {
      data: null,
    };
  },
  props: { name: null },
  methods: {
    emitData() {
      this.$emit("pass", this.data);
    },
  },
};
</script>

<style>
</style>