<template>
  <div class="form-floating mt-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput"
      v-model="Username"
      @change="emitUserName(Username)"
    />
    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
export default {
  name: "UserName input",
  data() {
    return {
      Username: "",
    };
  },
  props: { name: String, user: null },
  methods: {
    emitUserName(data) {
      this.$emit("username", data);
    },
  },
};
</script>

<style>
</style>
