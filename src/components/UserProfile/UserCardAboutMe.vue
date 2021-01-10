<template>
  <div class="card mx-5 mt-3">
    <div class="card-body">
      <h5 class="card-title">About me</h5>
      <p class="card-text px-3 pt-4 pb-4" v-if="user">
        {{ user.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCardAboutMe",
  props: { user: null },
};
</script>

<style>
</style>