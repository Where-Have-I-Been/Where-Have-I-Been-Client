<template>
  <div
    class="card mb-3 h-200 card-inside-1"
    v-for="(trip, i) in Trips"
    :key="i"
  >
    <div class="row g-0" v-if="Trips">
      <div class="col-md-4" v-if="trip.photo">
        <img :src="trip.photo.id" alt="img" class="tripSingleImage" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ trip.name }}</h5>
          <p class="card-text">
            {{ trip.description }}
          </p>
          <p class="card-text">
            <small class="text-muted">Data: 10.12.2020</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Trip Template",
  data() {
    return {
      Trips: null,
      id: this.$route.params.id,
    };
  },
  methods: {
    async getUserTrips() {
      if (this.id == undefined) {
        const user = await axios.get(
          "trips/user/" + localStorage.getItem("userID"),
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.Trips = user.data.data;
        console.log(user.data.data);
      }
    },
    async getDiffUserTrips() {
      if (this.id) {
        const user = await axios.get("trips/user/" + this.id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.Trips = user.data.data;
        console.log(user.data.data);
      }
    },
  },
  mounted() {
    this.getUserTrips();
    this.getDiffUserTrips();
  },
};
</script>

<style>
.tripSingleImage {
  width: 100%;
}
</style>