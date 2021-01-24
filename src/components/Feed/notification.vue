<template>
  <div>
    <div class="card mb-3 mb-4" v-if="notification">
      <div
        class="alert alert-primary pt-4"
        role="alert"
        v-for="(noti, i) in notification"
        :key="i"
      >
        <a class="alert-link">{{ noti.data[0] }}</a>
        <p>{{ noti.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification",
  props: { notification: null },
};
</script>

<style>
</style>