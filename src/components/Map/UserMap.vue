<template>
  <div id="map" style="heigth: 1000px"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
var map = null;
export default {
  name: "UserMap",
  props: { markersTable: Array, clicked : Object},
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoicmV3ZTk5OSIsImEiOiJja2dwZDRweGYwcDF2MnltbzV4eGxrYXRmIn0.NZVEHJyOKu3-ACCu39fsTw";
       map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [12.550343, 55.665957],
        zoom: 9
      });
      this.markersTable.forEach(marker => {
        new mapboxgl.Marker().setLngLat([marker.lng, marker.lat]).addTo(map);
      });
      // map.on("click", e => {
      //   console.log(e.lngLat);
      // });
    }
  },
  mounted() {
    this.createMap();
  },
  updated() {
    map.flyTo({
        center: [this.clicked.lng, this.clicked.lat],
        zoom: 9,
        essential: true
        });
  }
};
</script>

<style>
</style>