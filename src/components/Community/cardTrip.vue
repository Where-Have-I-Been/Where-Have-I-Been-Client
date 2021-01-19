<template>
  <div class="card mb-3" v-for="(trip, i) in trips" :key="i">
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
            <small class="text-muted">{{ trip.create - date }}</small>
          </p>
          <p class="card-text">
            <small class="text-muted mr-5">ilosc like</small>
            <i
              class="far fa-heart likeHeart"
              @click="getLike(trip.id)"
              v-if="!like"
            ></i>
            <i
              class="fas fa-heart likeHeart"
              v-else
              @click="getUnlike(trip.id)"
            ></i>
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
      Trips: this.trips,
      like: false,
    };
  },
  props: { trips: null },
  methods: {
    async getUserTrips() {
      if (this.trips == null) {
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
          if (this.trips != null) this.Trips = this.trips;
          console.log(user.data.data);
        }
      }
    },
    async getLike(tripID) {
      const like = await axios.post("likes/trip/" + tripID, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(like);
      this.like = true;
    },
    async getUnlike(tripID) {
      const like = await axios.delete("likes/trip/" + tripID, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(like);
      this.like = false;
    },
  },
  mounted() {
    this.getUserTrips();
  },
  watch() {
    if (this.trips != null) this.Trips = this.trips;
  },
};
</script>

<style>
.jpg {
  width: 200px;
  height: 200px;
}

.likeHeart {
  cursor: pointer;
}
</style>