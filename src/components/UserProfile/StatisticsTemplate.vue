<template>
  <div class="container">
    <div class="row mt-3 pt-3" style="background-color: #eeeeee">
      <div class="col-md-6">
        <div class="card-group">
          <div class="card mb-4">
            <div class="card-body">
              <h6 class="card-title">Likes:</h6>
              <p class="card-text blue-text">
                <i class="fas fa-thumbs-up fa-2x"></i
                ><span class="ml-2" style="font-size: 30px">{{
                  data.likes_count
                }}</span>
              </p>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <h6 class="card-title">Followers:</h6>
              <p class="card-text red-text">
                <i class="fas fa-users fa-2x"></i
                ><span class="ml-2" style="font-size: 30px">{{
                  data.followers_count
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card-group">
          <div class="card mb-4">
            <div class="card-body">
              <h6 class="card-title">Followings:</h6>

              <p class="card-text green-text">
                <i class="fas fa-user fa-2x"></i
                ><span class="ml-2" style="font-size: 30px">{{
                  data.followings_count
                }}</span>
              </p>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <h6 class="card-title">Visited places:</h6>
              <p class="card-text red-text">
                <i class="fas fa-map-marked-alt fa-2x"></i><span class="ml-2" style="font-size: 30px">{{
                  data.visited_places_count
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profil",
  data() {
    return {
      data: [],
      id: this.$route.params.id,
    };
  },
  methods: {
    async fetchStatitic() {
      let userStat = "";
      if (this.id == undefined)
        userStat = "user-statistics/" + localStorage.getItem("userID");
      else userStat = "user-statistics/" + this.id;
      const stat = await axios.get(userStat, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.data = stat.data;
      this.folowers = stat.data.followers_count;
    },
  },
  mounted() {
    this.fetchStatitic();
  },
};
</script>

<style>
</style>