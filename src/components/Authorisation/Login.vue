<template>
  <div class="card-body cardLogin">
    <auth-error :error="error"></auth-error>
    <form @submit.prevent="handleSubmit">
      <div class="input-group form-group">
        <div class="input-group-prepend"></div>
        <input
          type="text"
          class="form-control input-login mt-2"
          placeholder="Username"
          required
          v-model="email"
        />
      </div>
      <div class="input-group form-group">
        <input
          type="password"
          class="form-control input-pass"
          placeholder="Password"
          required
          v-model="password"
        />
      </div>
      <div class="form-group">
        <input
          type="submit"
          value="Sign In"
          class="btn float-right login_btn w-100 mb-4"
        />
      </div>
    </form>
  </div>
  <div class="card-footer">
    <h2 class="connectWith"><span>or connect with</span></h2>
    <div class="d-flex justify-content-around mt-4">
      <img
        src="../../assets/facebook-f-brands.svg"
        alt="facebook"
        class="image-auth"
      />
      <img
        src="../../assets/google-brands.svg"
        alt="google"
        class="image-auth"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthError from "./AuthError.vue";

export default {
  components: { AuthError },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data);
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style>
.cardLogin {
  min-height: 20vh;
}

.connectWith {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 5% 0 10%;
}

.connectWith span {
  background: #fff;
  color: #69b9ff;
  font-size: 1rem;
  padding: 0 10px;
}

.image-auth {
  width: 35px;
  height: 35px;
  margin: 12px 0 16px;
}
</style>

