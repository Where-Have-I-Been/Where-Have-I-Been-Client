<template>
  <div>
    <div class="card mb-3 mb-4">
      <div class="row g-0">
        <div class="col-md-4 text-center">
          <img src="../../assets/avatar2.jpg" alt="..." class="notiJpg pt-3" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Someone add new Trip!</h2>
            <p class="card-text textWidth text-justify">
              The group will gather for breakfast in our open-air eating area,
              following which TBF staff will lead the group in a few fun
              icebreakers and name-games. This will be your first opportunity to
              really get to know our in-country staff. After these games,
              TBF/FAW staff will conduct a thorough orientation of the home base
              house, the batey communities, and Dominican Republic as a whole.
            </p>
            <div class="map">
              <img src="../../assets/mapimg.png" alt="" class="imageWidth" />
            </div>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <button type="button" class="btn btn-outline-primary btn-lg">
              See this Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.textWidth {
  width: 70%;
  float: left;
}

.imageWidth {
  width: 22%;
}

@media (max-width: 820px) {
  .textWidth {
    width: 100%;
    float: none;
  }
  .imageWidth {
    width: 20%;
    left:20%;
    margin: auto;
  }
}
</style>