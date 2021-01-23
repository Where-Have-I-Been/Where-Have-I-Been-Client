<template>
  <div
    class="card mb-3"
    style="width: 18rem"
    v-for="(item, i) in FollowedUsers"
    :key="i"
  >
    <img
      :src="item.avatar.url"
      class="card-img-top imageAvatarSize"
      alt="..."
      v-if="item.avatar"
    />
    <img
      src="../../../assets/avatar2.jpg"
      class="card-img-top"
      alt="..."
      v-else
    />
    <div class="card-body">
      <h4 class="card-title" v-if="item.name">{{ item.name }}</h4>
      <h5 class="card-title">{{ item.email }}</h5>
      <div class="row g-3">
        <a class="btn btn-primary" @click="$router.push('/profil/' + item.id)"
          >See Profile</a
        >
        <a
          href="#"
          class="btn btn-secondary"
          @click="handleFollow(item.id)"
          v-if="show == true"
          >Unfollow</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserCard",
  data() {
    return {
      sucess: "",
    };
  },
  props: { FollowedUsers: null, show: null },
  methods: {
    async handleFollow(id) {
      const unfollow = await axios.delete("follows/user/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.sucess = unfollow.data.data;
      location.reload();
    },
  },
};
</script>

<style>
.jpg,
.imageAvatarSize {
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>