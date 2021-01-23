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
            class="form-control inputSearch"
            placeholder="Search Trip"
            aria-label="SearchTrip"
            v-model="searchInput"
            @keyup.enter="InputDown($event.target.value)"
          />
        </div>
        <div class="col-sm">
          <drop-down-filter @sort="getSort"></drop-down-filter>
        </div>
      </div>
    </div>
    <div class="">
      <div class="container-sm">
        <div class="row justify-content-start">
          <div class="col-md-3 pb-4">
            <filter-data @filters="getFilters"></filter-data>
          </div>
          <div class="col-md-9">
            <div class="cardTrip px-4" v-if="trips">
              <card-trip :trips="trips[0]"></card-trip>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li
                  class="page-item cursor"
                  @click="page-- && getSort()"
                  :class="{ disabled: page <= 1 }"
                >
                  <a class="page-link" :class="{ disabled: page == 1 }"
                    >Previous</a
                  >
                </li>
                <li class="page-item cursor disabled">
                  <a class="page-link"> {{ page }}</a>
                </li>
                <li
                  class="page-item cursor"
                  @click="page++ && getSort()"
                  :class="{ disabled: page == maxPage }"
                >
                  <a class="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dropDownFilter from "./dropDownFilter.vue";
import FilterData from "./FilterData.vue";
import cardTrip from "./cardTrip.vue";
import axios from "axios";

export default {
  name: "Cmtp",
  data() {
    return {
      trips: null,
      sort: "",
      searchInput: "",
      page: 1,
      maxPage: 1,
      filter: {
        city: "",
        country: "",
        like: false,
        follows: false,
      },
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
      let search =
        "trips?sort=" +
        this.sort +
        "&country=" +
        this.filter.country +
        "&city=" +
        this.filter.city +
        "&only-followings=" +
        this.filter.follows +
        "&only-liked=" +
        this.filter.like +
        "&search-query=";

      if (text != null) {
        const searchUser = await axios.get(
          search + text + "&per-page=3&page=" + this.page,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.trips = searchUser.data.data;
        this.maxPage = Math.ceil(
          searchUser.data.pagination.total / searchUser.data.pagination.count
        );
      }
    },
    async getSort(data) {
      let search =
        "trips?country=" +
        this.filter.country +
        "&city=" +
        this.filter.city +
        "&only-followings=" +
        this.filter.follows +
        "&only-liked=" +
        this.filter.like +
        "&search-query=" +
        this.searchInput +
        "&sort=";

      const sortTrip = await axios.get(
        search + data + "&per-page=3&page=" + this.page,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.trips = sortTrip.data.data;
      this.maxPage = Math.ceil(
        sortTrip.data.pagination.total / sortTrip.data.pagination.count
      );
    },
    async getFilters(data) {
      this.filter.city = data.city;
      this.filter.country = data.country;
      this.filter.like = data.like;
      this.filter.follows = data.follows;

      let search =
        "trips?sort=" +
        this.sort +
        "&country=" +
        this.filter.country +
        "&city=" +
        this.filter.city +
        "&only-followings=" +
        this.filter.follows +
        "&only-liked=" +
        this.filter.like +
        "&search-query=" +
        this.searchInput;

      const filterTrip = await axios.get(
        search + "&per-page=3&page=" + this.page,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.trips = filterTrip.data.data;
      this.maxPage = Math.ceil(
        filterTrip.data.pagination.total / filterTrip.data.pagination.count
      );
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

.inputSearch {
  height: 9.5vh;
}

.cursor {
  cursor: pointer;
}
</style>