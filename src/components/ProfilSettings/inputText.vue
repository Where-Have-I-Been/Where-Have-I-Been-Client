<template>
  <div class="form-floating mt-3">
    <input
      type="text"
      class="form-control"
      id="floatingInput"
      v-model="Username"
      @change="emitUserName(Username)"
    />
    <label for="floatingInput" v-if="user">Username: {{ user.data.name }}</label>
    <label for="floatingInput" v-else>{{ name }}</label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
