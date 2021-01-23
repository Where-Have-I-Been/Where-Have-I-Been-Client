<template>
  <div
    class="card mb-3 h-200 card-inside-1"
    v-for="(trip, i) in Trips"
    :key="i"
  >
    <div class="row g-0" v-if="Trips">
      <div class="col-md-4" v-if="trip.photo">
        <img :src="trip.photo.url" alt="img" class="tripSingleImage" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ trip.name }}</h5>
          <p class="card-text">
            {{ trip.description }}
          </p>
          <p class="card-text" v-if="trip.created_date">
            <small class="text-muted">Date: {{ trip.created_date }}</small>
          </p>
          <p class="card-text">
            <small class="text-muted mr-5">{{ trip.likes }} </small>
            <i
              v-if="trip.liked == !true"
              class="far fa-heart likeHeart"
              @click="getLike(trip)"
            ></i>
            <i
              v-else
              class="fas fa-heart likeHeart"
              @click="getUnlike(trip)"
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
  name: "Trip Template",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: { Trips: null },
  methods: {
    async getLike(trip) {
      try {
        await axios.post("likes/trip/" + trip.id, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        trip.liked = true;
        trip.likes++;
      } catch (e) {
        console.log(e);
      }
    },
    async getUnlike(trip) {
      try {
        await axios.delete("likes/trip/" + trip.id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        trip.liked = false;
        trip.likes--;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.tripSingleImage {
  width: 100%;
}

.likeHeart {
  cursor: pointer;
}
</style>