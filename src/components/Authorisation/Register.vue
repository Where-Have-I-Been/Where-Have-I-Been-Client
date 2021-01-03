<template>
  <div class="card-body">
    <form>
      <div class="input-group form-group">
        <input
          type="text"
          class="form-control input-login mt-2 mb-3"
          placeholder="Username"
        />
      </div>

      <div class="input-group form-group">
        <input
          type="text"
          class="form-control input-login mt-2 mb-3"
          placeholder="E-mail"
        />
      </div>

      <div class="input-group form-group">
        <input
          type="password"
          class="form-control input-pass mt-2 mb-3"
          placeholder="Password"
        />
      </div>

      <div class="input-group form-group">
        <input
          type="password"
          class="form-control input-pass mt-2 mb-5"
          placeholder="Confirm password"
        />
      </div>
      <div class="form-group">
        <input
          type="submit"
          value="Create account"
          class="btn float-right login_btn w-100 mb-4"
        />
      </div>
    </form>
  </div>
  <div class="card-footer">
    <h2><span>or connect with</span></h2>
    <div class="d-flex justify-content-around">
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
export default {
  name: "Register",
};
</script>

<style>
h2 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h2 span {
  background: #fff;
  color: #69b9ff;
  font-size: 1rem;
  padding: 0 10px;
}
.image-auth{
  width: 35px;
  height: 35px;
  margin: 18px 0 16px;
}
</style>

