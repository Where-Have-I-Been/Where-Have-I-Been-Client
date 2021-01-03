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
      <div class="input-group w-75 mx-auto">
        <span class="input-group-text">Search User</span>
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          v-model="search"
        />
      </div>
      <div class="d-flex justify-content-evenly flex-wrap mt-4">
        <user-card
          :items="itemsPagination"
          :page="page"
          :search="search"
          :filterJson="filterJson"
        ></user-card>
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

export default {
  name: "Cmtp",
  data() {
    return {
      items: [
        [
          { name: "Jan Nowak" },
          { name: "Alexis Newton" },
          { name: "Armani Benitez" },
          { name: "Tabitha Trejo" },
        ],
        [
          { name: "Cleo Greene" },
          { name: "Kamal Holden" },
          { name: "Steve Riggs" },
          { name: "Acacia Garner" },
        ],
        [{ name: "Roshan Perry" }, { name: "Adam Kowalski" }],
      ],
      page: 1,
      maxPage: 0,
      search: "",
      coutnEl: 0,
    };
  },
  components: { UserCard },
  mounted() {
    this.coutnEl = Math.floor(this.items.length / 4);
    this.page = 0;
  },
  computed: {
    filterJson() {
      return this.items[this.page].filter((js) => {
        return js.name.match(this.search);
      });
    },
  },
};
</script>

<style>
.search {
  display: inline-block;
}
</style>