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
                @change="searchUser($event.target.value)"
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
                @change="fetchApi"
              >
                <option value="All">All</option>
                <option value="Followed">Followed</option>
                <option value="Following">Follow You</option>
              </select>
              <label for="floatingSelect">Sort By</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly flex-wrap mt-4">
        <user-card :FollowedUsers="FollowedUsers"></user-card>
      </div>
    </div>
    <nav aria-label="Page navigation example" v-if="filterSelected == 'All'">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: page == 1 }">
          <a
            class="page-link"
            href="#ad"
            tabindex="-1"
            aria-disabled="true"
            @click="fetchApi(), (page -= 1)"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#ad" @click="fetchApi(), (page = 1)">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#ad" @click="fetchApi(), (page = 2)">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#ad" @click="fetchApi(), (page = 3)">3</a>
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
      searchUserInput: "",
      filterSelected: "All",
      page: 1,
      maxPage: 1,
      paginate: null,
    };
  },
  methods: {
    async fetchApi() {
      let getUsers = "";
      if (this.filterSelected === "Followed") {
        getUsers = "following/user/" + localStorage.getItem("userID");
      } else if (this.filterSelected === "Following") {
        getUsers = "followers/user/" + localStorage.getItem("userID");
      } else if (this.filterSelected === "All") {
        console.log(this.page);
        getUsers = "users?per-page=9&page=" + this.page;
      }

      const fu = await axios.get(getUsers, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.FollowedUsers = fu.data.data;
      this.paginate = fu.data.pagination;
      if (this.filterSelected === "All") {
        this.maxPage = Math.ceil(
          fu.data.pagination.total / fu.data.pagination.count
        );
      }
    },
    searchUser(data) {
      this.searchUserInput = data;
    },
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