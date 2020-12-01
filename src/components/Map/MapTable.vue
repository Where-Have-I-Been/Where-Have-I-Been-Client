<template>
  <div class="table">
    <table border="1">
      <tr
        v-for="(marker, index) in markersTable"
        :key="index"
        @click="onClickMap(index)"
      >
        <td>name: {{ marker.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MapTable",
  props: { markersTable: Array },
  methods: {
    onClickMap(index) {
      this.$emit("clicked", index);
    }
  }
};
</script>

<style>
.table {
  cursor: pointer;
}
</style>