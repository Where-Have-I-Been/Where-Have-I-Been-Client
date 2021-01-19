<template>
  <div class="col-md-12">
    <nav class="navbar navbar-md">
      <div class="navbar-brand textBrandNav">WHIB</div>
      <ul class="nav" v-if="user">
        <li class="nav-item">
          <router-link
            class="nav-link itemsNavBarHome"
            to="/"
            @click="handleClick"
            >Log out</router-link
          >
        </li>
      </ul>
      <ul class="nav" v-else>
        <li class="nav-item">
          <router-link class="nav-link itemsNavBarHome" to="/login"
            >SIGN UP</router-link
          >
        </li>
        <li class="nav-item itemsNavBarHome">
          <router-link class="nav-link" to="/register">SIGN IN</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeNavBar",
  data(){
    return {
      user: null,
    }
  },
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    async getUser() {
      const response = await axios.get("user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.user = response.data.data;
    },
  },
  mounted(){
    this.getUser();
  }
};
</script>

<style>
.BtnTgl {
  color: #fff;
  z-index: 100;
}

@media (max-width: 470px) {
  .textBrandNav {
    padding-left: 90px;
  }
  .itemsNavBarHome {
    padding-left: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>