<template>
  <div class="container">
    <div class="row">
      <div class="col-9">
        <UserMap :markersTable="markersTable" :clicked="clicked" />
      </div>
      <div class="col-3">
        <MapTable :markersTable="markersTable" @clicked="onClickChild" />
      </div>
    </div>
  </div>
</template>

<script>
import UserMap from "../components/Map/UserMap.vue";
import MapTable from "../components/Map/MapTable.vue";
export default {
  data() {
    return {
      markersTable: [
        { name: "jakas nazwa", lng: 12.550343, lat: 55.665957 },
        { name: "lalal", lng: 12.553591056720677, lat: 55.69724654625975 },
        {
          name: "Jophe New",
          lng: 12.657072075932007,
          lat: 56.193764659779646,
        },
        {
          name: "Small town",
          lat: 55.73953323876651,
          lng: 11.88926150438476,
        },
        {
          name: "Allen Kent",
          lat: 81.704118,
          lng: 143.874292,
        },
        {
          name: "Millicent Cooke",
          lat: 46.994858,
          lng: -8.725215,
        },
        {
          name: "Mcneil Nelson",
          lat: 5.202764,
          lng: -53.859161,
        },
        {
          name: "Geraldine Hartman",
          lat: 42.343686,
          lng: -28.840189,
        },
        {
          name: "Bright Bright",
          lat: -45.295107,
          lng: 129.394814,
        },
        {
          name: "Liz Carroll",
          lat: -73.364314,
          lng: -63.766475,
        },
        {
          name: "Jackson Hurst",
          lat: 78.432495,
          lng: -167.966394,
        },
      ],
      clicked: null,
    };
  },
  components: { UserMap, MapTable },
  methods: {
    onClickChild(value) {
      this.clicked = this.markersTable[value];
      // console.log(this.clicked);
    },
  },
  name: "Map",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-height: 100vh;
  max-width: 100vw;
}
</style>