<template>
  <div class="col-md-12">
    <nav class="navbar navbar-md">
      <div class="navbar-brand textBrandNav">WHIB</div>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link itemsNavBarHome" to="/login">SIGN UP</router-link>
        </li>
        <li class="nav-item itemsNavBarHome">
          <router-link class="nav-link" to="/register">SIGN IN</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HomeNavBar",
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