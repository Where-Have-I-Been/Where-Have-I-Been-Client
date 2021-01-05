<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">WHIB</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span 
        class="navbar-toggler-icon"
        @click="ToggleCollapse()"
        ></span>
      </button>
      <!-- show na dole -->
      <div 
      class="collapse navbar-collapse justify-content-md-end" 
      id="navbarNavDropdown"
      v-bind:class="{ show: toggleCollapse }"
      >
        <ul class="navbar-nav text-rigth">

        <ul class="nav navbar-nav navbar-right text-rigth">

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="ToogleMenu()"
            >
              <i class="fas fa-envelope navbar-brand"><span class="badge badge-primary notifColor">12</span></i>

              <img src="../assets/avatar2.jpg" class="rounded-circle navAvatar" alt="" />
              Janek Kowalski
            </a>
            <!-- show na dole -->
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              v-bind:class="{ show: toggleMenu }"
            >
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </li>
        </ul>
      </ul>
      </div>
     </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      toggleCollapse: false,
      toggleMenu: false,
    };
  },
  methods: {
    ToogleMenu() {
        this.toggleMenu = !this.toggleMenu;
    },
    ToggleCollapse() {
        this.toggleCollapse = !this.toggleCollapse;
    },
  },
};
</script>

<style>
.navAvatar {
  width: 50px;
  height:40px;
}

.notifColor {
  color:red;
}
.navbar-brand{
  padding-left: 1rem;
}
</style>