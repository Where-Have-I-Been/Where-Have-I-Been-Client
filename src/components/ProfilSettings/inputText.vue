<template>
  <div class="form-floating mt-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput"
      placeholder="name@example.com"
      required
      v-model="Username"
      @change="emitUserName(Username)"
    />
    <label for="floatingInput">{{ name }}</label>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "UserName input",
  data() {
    return {
      Username: "",
    };
  },
  props: { name: String },
  methods: {
    emitUserName(data) {
      this.$emit("username", data);
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
</style>
