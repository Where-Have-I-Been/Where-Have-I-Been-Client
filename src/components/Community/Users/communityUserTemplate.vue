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
            <form class="form-floating" @submit.prevent="">
              <input
                type="text"
                class="form-control"
                id="floatingInputValue"
                v-model="searchUserInput"
                @keyup.enter="searchUser($event.target.value)"
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
                @change="handleselectChange"
              >
                <option value="All">All Users</option>
                <option value="Followed">Users by Followers</option>
                <option value="Following">Users by Following</option>
              </select>
              <label for="floatingSelect">Filter By</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly flex-wrap mt-4">
        <user-card :FollowedUsers="FollowedUsers" :show="unfollow"></user-card>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: page == 1 }">
          <a
            class="page-link"
            href="#ad"
            tabindex="-1"
            aria-disabled="true"
            @click="fetchApi(), (page -= 1)"
            :class="{ disabled: page == 1 }"
            >Previous</a
          >
        </li>
        <li class="page-item disabled">
          <a class="page-link"> {{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: page == maxPage }">
          <a class="page-link" href="#ad" @click="fetchApi(), (page += 1)"
            >Next</a
          >
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
      unfollow: false,
      searchUserInput: "",
      filterSelected: "All",
      page: 1,
      maxPage: 1,
    };
  },
  methods: {
    async fetchApi() {
      let getUsers = "";
      if (this.filterSelected === "Followed") {
        getUsers = "users?by-followings=true&per-page=9&page=" + this.page;
        this.unfollow = true;
      } else if (this.filterSelected === "Following") {
        getUsers = "users?by-followers=true&per-page=9&page=" + this.page;
        this.unfollow = false;
      } else if (this.filterSelected === "All") {
        getUsers = "users?&per-page=9&page=" + this.page;
        this.unfollow = false;
      }

      const fu = await axios.get(getUsers, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.FollowedUsers = fu.data.data;
      this.maxPage = Math.ceil(
        fu.data.pagination.total / fu.data.pagination.count
      );
    },
    async searchUser(data) {
      let search = "users";
      if (data == "") search = "users";
      else if (this.filterSelected === "All")
        search = "users?search-query=" + data;
      else if (this.filterSelected === "Followed")
        search =
          "users?by-followings=true&search-query=" +
          data +
          "&per-page=9&page=" +
          this.page;
      else if (this.filterSelected === "Following")
        search =
          "users?by-followers=true&search-query=" +
          data +
          "&per-page=9&page=" +
          this.page;
      const fu = await axios.get(search, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(search);
      this.FollowedUsers = fu.data.data;
    },
    handleselectChange(){
      this.page = 1;
      this.fetchApi();
    }
  },
  mounted() {
    this.fetchApi();
  },
  components: { UserCard },
};
</script>

<style>
.search {
  display: inline-block;
}
</style>