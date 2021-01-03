<template>
 <auth>
   <login-component></login-component>
  </auth>
</template>

<script>
import Auth from '../components/Authorisation/Auth.vue';
import LoginComponent from '../components/Authorisation/Login.vue';

export default {
  name: "Login",
  components: { Auth, LoginComponent}
};
</script>


