<template>
  <div class="form-floating mt-3">
    <input
      class="form-control"
      type="date"
      id="DateID"
      v-model="date"
      @change="emitDate(date)"
    />
    <label for="DateID" v-if="date">Date od birth: {{ date }}</label>
    <label for="DateID" v-else>{{ name }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  props: { name: String, user: null },
  methods: {
    emitDate(data) {
      this.$emit("date", data);
    },
    setDate() {
      this.date = this.user.birth_date;
    },
  },
};
</script>

<style>
</style>