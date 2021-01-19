<template>
  <div class="">
    <ul class="list-group">
      <li class="list-group-item pb-4 filterCity"><filtr-city></filtr-city></li>
      <li class="list-group-item scrollable pt-2">
        <country-checkbox></country-checkbox>
      </li>
      <li class="list-group-item pb-4 pt-4">
        <follows-filter></follows-filter>
      </li>
      <li class="list-group-item pb-4"><liked-filter></liked-filter></li>
    </ul>
  </div>
  <button type="button" class="btn btn-info mt-3">Save</button>
</template>

<script>
import FiltrCity from "./FiltrCity.vue";
import countryCheckbox from "./countryCheckbox";
import FollowsFilter from "./FollowsFilter.vue";
import LikedFilter from "./likedFilter.vue";
export default {
  name: "Filter Data",
  components: { FiltrCity, countryCheckbox, FollowsFilter, LikedFilter },
};
</script>

<style>
.scrollable {
  overflow: scroll;
  height: 40vh;
}

.filterCity {
  max-width: 100%;
}
</style>