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
            <strong v-if="id"> {{ publicProfile.name }} z id {{ id }}</strong>
            <strong v-else-if="name"> {{ name }} </strong>
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
              v-if="id"
              @click="handleAddFriend(id)"
            >
              Add Friend +
            </button>
            <button
              type="button"
              class="btn btn-secondary float-end addFriendButton"
              v-if="followed"
              @click="handleUnfollowButton(id)"
            >
              Unfollow -
            </button>
            <button
              type="button"
              class="btn btn-info float-end addFriendButton"
              v-if="!followed && id"
              @click="handleFollowButton(id)"
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
import axios from "axios";

export default {
  name: "UserCardData",
  data() {
    return {
      image: localStorage.getItem("photo"),
      name: localStorage.getItem("name"),
      id: this.$route.params.id,
      followed: false,
      publicProfile: {
        name: "",
        image: "",
        country: "",
        flag: "",
        description: "",
      },
    };
  },
  methods: {
    async checkIfFollowed() {
      const fu = await axios.get(
        "following/user/" + localStorage.getItem("userID"),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      fu.data.data.forEach((el) => {
        if (el.id == this.$route.params.id) {
          this.followed = true;
          console.log(el);
          this.publicProfile.name = el.email;
        }
        // else this.followed = false;
      });
    },
    async handleFollowButton(id) {
      try {
        const follow = await axios.post("follows/user/" + id, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(follow);
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
    handleAddFriend(id) {
      console.log(id);
    },
    async handleUnfollowButton(id) {
      const unfollow = await axios.delete("follows/user/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.sucess = unfollow.data.data;
      location.reload();
    },
  },
  props: { user: null },
  mounted() {
    // this.checkIfFollowed();
  },
  beforeMount(){
    this.checkIfFollowed();
  }
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