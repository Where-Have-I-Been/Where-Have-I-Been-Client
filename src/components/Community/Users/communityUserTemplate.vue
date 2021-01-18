<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <router-link to="/community" tag="community" class="nav-link"
            >Trips</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/community/users"
            tag="community"
            class="nav-link active"
            >Users</router-link
          >
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="input-group">
        <div class="row w-100">
          <div class="col">
            <form class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputValue"
              />
              <label for="floatingInputValue">Search User</label>
            </form>
          </div>
          <div class="col">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                v-model="filterSelected"
              >
                <option value="Followed" selected>Followed</option>
                <option value="Following">Follow You</option>
              </select>
              <label for="floatingSelect">Sort By</label>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-evenly flex-wrap mt-4"
        v-if="filterSelected == 'Followed' || filterSelected == ''"
      >
        <user-card :FollowedUsers="FollowedUsers" show="follow"></user-card>
      </div>
      <div
        class="d-flex justify-content-evenly flex-wrap mt-4"
        v-if="filterSelected == 'Following'"
      >
        <user-card :FollowedUsers="FollowersUsers"></user-card>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: page == 0 }">
          <a
            class="page-link"
            href="#ad"
            tabindex="-1"
            aria-disabled="true"
            @click="page -= 1"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#ad" @click="page = 0">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#ad" @click="page = 1">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#ad" @click="page = 2">3</a>
        </li>
        <li class="page-item" :class="{ disabled: page == 2 }">
          <a class="page-link" href="#ad" @click="page += 1">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import UserCard from "./UserCard.vue";
import axios from "axios";

export default {
  name: "Community User Template",
  data() {
    return {
      FollowedUsers: null,
      FollowersUsers: null,
      filterSelected: "Followed",
    };
  },
  methods: {
    async getFollowedUsers() {
      const fu = await axios.get(
        "following/user/" + localStorage.getItem("userID"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.FollowedUsers = fu.data.data;
    },
    async getFollowersUsers() {
      const fu = await axios.get(
        "followers/user/" + localStorage.getItem("userID"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.FollowersUsers = fu.data.data;
    },
  },
  mounted() {
    this.getFollowedUsers();
    this.getFollowersUsers();
  },
  components: { UserCard },
};
</script>

<style>
.search {
  display: inline-block;
}
</style>