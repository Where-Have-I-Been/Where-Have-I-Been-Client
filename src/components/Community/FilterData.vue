<template>
  <div class="">
    <ul class="list-group">
      <li class="list-group-item pb-4 filterCity">
        <filtr-city @city="getCity"></filtr-city>
      </li>
      <li class="list-group-item scrollable pt-2">
        <country-checkbox @country="getCountry"></country-checkbox>
      </li>
      <li class="list-group-item pb-4 pt-4">
        <follows-filter @follows="getFollows"></follows-filter>
      </li>
      <li class="list-group-item pb-4">
        <liked-filter @like="getLike"></liked-filter>
      </li>
    </ul>
  </div>
  <button type="button" class="btn btn-info mt-3" @click="EmitFilters">
    Save
  </button>
</template>

<script>
import FiltrCity from "./FiltrCity.vue";
import countryCheckbox from "./countryCheckbox";
import FollowsFilter from "./FollowsFilter.vue";
import LikedFilter from "./likedFilter.vue";
export default {
  name: "Filter Data",
  data() {
    return {
      filters: {
        city: "",
        country: "",
        like: false,
        follows: false,
      },
    };
  },
  components: { FiltrCity, countryCheckbox, FollowsFilter, LikedFilter },
  methods: {
    getCity(city) {
      this.filters.city = city;
    },
    getCountry(country) {
      this.filters.country = country;
    },
    getFollows(follow) {
      this.filters.follows = follow;
    },
    getLike(like) {
      this.filters.like = like;
    },
    EmitFilters() {
      this.$emit("filters", this.filters);
    },
  },
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