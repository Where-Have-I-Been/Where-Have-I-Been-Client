<template>
  <div class="card mb-3" v-for="(trip, i) in Trips" :key="i">
    <div class="row g-0" v-if="Trips">
      <div class="col-md-4 jpg rounded mx-auto d-block">
        <img :src="trip.photo.url" alt="Trip image" class="jpg" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ trip.name }}</h5>
          <p class="card-text">
            {{ trip.description }}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cardTrip",
  data() {
    return {
      Trips: null,
    };
  },
  props: { trips: null },
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
  },
  mounted() {
    this.getUserTrips();
  },
};
</script>

<style>
.jpg {
  width: 200px;
  height: 200px;
}
</style>