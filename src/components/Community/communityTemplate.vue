<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link to="/community" tag="community" class="nav-link active"
            >Trips</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/community/users" tag="community" class="nav-link"
            >Users</router-link
          >
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!-- asd -->
      <div class="row g-3">
        <div class="col-sm-7">
          <input
            type="text"
            class="form-control"
            placeholder="Search Trip"
            aria-label="SearchTrip"
          />
        </div>
        <div class="col-sm">
          <drop-down-filter></drop-down-filter>
        </div>
        <div class="col-sm">
          <drop-down-sort></drop-down-sort>
        </div>
      </div>
      <!-- asd -->
    </div>
    <div class="cardTrip px-4">
      <card-trip :trips="trips"></card-trip>
    </div>
  </div>
</template>

<script>
import dropDownFilter from "./dropDownFilter.vue";
import dropDownSort from "./dropDownSort.vue";
import cardTrip from "./cardTrip.vue";
import axios from "axios";

export default {
  name: "Cmtp",
  data() {
    return {
      trips: null,
    };
  },
  components: { cardTrip, dropDownFilter, dropDownSort },
  methods: {
    async getTrips() {
      const trips = await axios.get(
        "trips/user/" + localStorage.getItem("userID"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.trips = trips.data.data;
    },
  },
  mounted(){
    this.getTrips();
  }
};
</script>

<style>
.search {
  display: inline-block;
}

</style>