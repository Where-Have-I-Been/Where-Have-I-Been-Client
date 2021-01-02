<template>
  <div
    class="card mb-3"
    style="width: 18rem"
    v-for="(item, i) in filterJson"
    :key="i"
  >
    <img src="../../../assets/avatar2.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <div class="row g-3">
        <a href="#" class="btn btn-primary">See Profile</a>
        <a href="#" class="btn btn-primary">Follow</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardTrip",
  data() {
    return {};
  },
  props: { items: Array, page: Number, search: String, filterJson: Array},
};
</script>

<style>
.jpg {
  width: 200px;
  height: 200px;
}
</style>