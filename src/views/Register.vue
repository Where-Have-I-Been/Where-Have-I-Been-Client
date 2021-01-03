<template>
  <div>
  <auth>
    <registerComponent></registerComponent>
  </auth>
  </div>
</template>

<script>
import Auth from "../components/Authorisation/Auth.vue";
import registerComponent from "../components/Authorisation/Register.vue";

export default {
  name: "Register",
  components: { Auth, registerComponent }
};
</script>
