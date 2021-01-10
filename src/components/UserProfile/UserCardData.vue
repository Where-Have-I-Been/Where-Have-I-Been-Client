<template>
  <div class="card mx-5 mt-5">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <img
            :src="image"
            alt="img"
            class="ProfileImgAvatar rounded-circle"
            v-if="image"
          />
          <img
            src="../../assets/avatar2.jpg"
            alt="img"
            class="ProfileImgAvatar rounded-circle"
            v-else
          />
          <div class="col-sm">
            <strong v-if="name"> {{ name }} </strong>
            <strong v-else>Janek Kowalski</strong>
            <p v-if="user">
              {{ user.nationality.code }}
              <img
                :src="user.nationality.flag"
                alt="flag"
                class="ProfilFlagImg rounded-circle"
              />
            </p>
          </div>
          <div class="col-md">
            <button
              type="button"
              class="btn btn-info ml-3 float-end FollowButton"
            >
              Add Friend +
            </button>
            <button
              type="button"
              class="btn btn-info float-end addFriendButton"
            >
              Follow +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCardData",
  data() {
    return {
      image: localStorage.getItem("photo"),
      name: localStorage.getItem("name"),
    };
  },
  props: { user: null },
};
</script>

<style>
.ProfileImgAvatar {
  width: 140px;
  height: 100px;
  position: relative;
  top: 0vh;
}

.ProfilFlagImg {
  width: 20px;
  height: 20px;
  border: 1px solid black;
}

.FollowButton {
  opacity: 0.8;
  margin-left: 20px;
}

.addFriendButton {
  opacity: 0.8;
}
</style>