<template>
  <div class="container">
    <div class="d-flex justify-content-center mx-auto h-100">
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <router-link to="/login" tag="login" class="nav-link"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/register" tag="register" class="nav-link"
                >Register</router-link
              >
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="animate__animated animate__pulse">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style>
@import "./auth.css";
</style>

