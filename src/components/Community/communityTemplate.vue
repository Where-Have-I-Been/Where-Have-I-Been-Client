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
            @keyup.enter="InputDown($event.target.value)"
          />
        </div>
        <div class="col-sm">
          <drop-down-filter @sort="getSort"></drop-down-filter>
        </div>
        <!-- <div class="col-sm">
          <drop-down-sort @filter="getFilter"></drop-down-sort>
        </div> -->
      </div>
      <!-- asd -->
    </div>
    <div class="">
      <!-- <filter-data></filter-data> -->
    </div>
    <!-- <div class="cardTrip px-4" v-if="trips">
      <card-trip :trips="trips[0]"></card-trip>
    </div> -->

    <!--  -->
    <div class="container-sm">
      <div class="row justify-content-start">
        <div class="col-md-3 pb-4"><filter-data></filter-data></div>
        <div class="col-md-9">
          <div class="cardTrip px-4" v-if="trips">
            <card-trip :trips="trips[0]"></card-trip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dropDownFilter from "./dropDownFilter.vue";
// import dropDownSort from "./dropDownSort.vue";
import FilterData from "./FilterData.vue";
import cardTrip from "./cardTrip.vue";
import axios from "axios";

export default {
  name: "Cmtp",
  data() {
    return {
      trips: null,
      sort: null,
    };
  },
  components: { cardTrip, dropDownFilter, FilterData },
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
    async InputDown(text) {
      if (text != null) {
        const searchUser = await axios.get(
          "trips-result?search-query=" + text,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.trips = searchUser.data.data;
      }
    },
    async getSort(data) {
      console.log(data);
      const sortTrip = await axios.get("trips?sort=" + data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.trips = sortTrip.data.data;
    },
    getFilter(data) {
      console.log(data);
      this.trips = data;
    },
  },
  mounted() {
    this.getTrips();
  },
};
</script>

<style>
.search {
  display: inline-block;
}
</style>