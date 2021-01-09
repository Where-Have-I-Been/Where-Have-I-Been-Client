<template>
  <div class="form-floating mt-3">
    <input
      class="form-control"
      type="date"
      id="DateID"
      v-model="date"
      @change="emitDate(date)"
    />
    <label for="DateID" v-if="user">Date od birth: {{ user.data.birth_date }}</label>
    <label for="DateID" v-else>{{ name }}</label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
</style>