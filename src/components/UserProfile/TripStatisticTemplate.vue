<template>
  <div class="d-flex justify-content-between card3 mx-5 mt-3">
    <div class="card card3-1">
      <div class="card-body">
        <h5 class="card-title text-center"><strong>Trips</strong></h5>

        <div class="tripScroll">
          <!-- Wycieczka -->
          <trip-template :Trips="Trips"></trip-template>
          <!-- Koniec wycieczki -->
        </div>
      </div>
    </div>

    <div class="card gap-2 card3-2">
      <div class="card-body">
        <!-- statystki -->
        <statistics-template></statistics-template>
        <!-- koniec statystyk -->
      </div>
    </div>
  </div>
</template>

<script>
import TripTemplate from "./TripsTemplate.vue";
import StatisticsTemplate from "./StatisticsTemplate.vue";
import axios from "axios";
export default {
  name: "TripStatisticTemplate",
  components: { TripTemplate, StatisticsTemplate },
  data(){
    return {
      Trips: null,
      id: this.$route.params.id,
    }
  },
  methods: {
    async getUserTrips() {
      let trip = "";
      if (this.id == undefined)
        trip = "trips/user/" + localStorage.getItem("userID");
      else trip = "trips/user/" + this.id;
      if (this.id == undefined) {
        const user = await axios.get(trip, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.Trips = user.data.data[0];
      }
    },
  },
  mounted(){
    this.getUserTrips();
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

.tripScroll {
  height: 80%;
  overflow-y: scroll;
}

.card3-2 {
  width: 40vw;
}
.card3-1 {
  width: 40vw;
}

@media (max-width: 983px) {
  .card3 {
    min-width: 82%;
    margin: 0 auto;
    min-height: 200px;
    gap: 10px;
    flex-wrap: wrap;
  }
  .card3-1,
  .card3-2 {
    width: 80vw;
  }
}
</style>