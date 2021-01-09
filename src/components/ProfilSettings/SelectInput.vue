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
    <label for="floatingInput" v-if="user">Gender: {{ user.data.gender }}</label>
    <label for="floatingInput" v-else>{{ name }}</label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Select gender",
  data() {
    return {
      gender: "",
    };
  },
  props: { name: String, value: Array },
  methods: {
    emitGender(data) {
      this.$emit("gender", data);
    },
  },
  computed: {
    ...mapGetters(["user", "profile"])
  },
};
</script>

<style>
</style>