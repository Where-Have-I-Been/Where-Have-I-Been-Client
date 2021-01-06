<template>
  <div class="d-flex justify-content-between card3 mx-5 mt-3">
    <div class="card card3-1">
      <div class="card-body">
        <h5 class="card-title text-center"><strong>Trips</strong></h5>

        <div class="tripScroll">
          <!-- Wycieczka -->
          <trip-template></trip-template>
          <trip-template></trip-template>
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

export default {
  name: "TripStatisticTemplate",
  components: { TripTemplate, StatisticsTemplate },
};
</script>

<style>
body {
  overflow-x: hidden;
}

.tripScroll {
  height: 280px;
  overflow-y: scroll;
}

.card3-2 {
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