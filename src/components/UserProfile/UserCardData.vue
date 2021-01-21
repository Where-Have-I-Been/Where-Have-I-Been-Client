<template>
  <div class="card mx-5 mt-5">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <img
            v-if="publicProfile.image && id"
            alt="img"
            class="ProfileImgAvatar rounded-circle"
            :src="publicProfile.image"
          />
          <img
            v-else-if="user && id == undefined"
            alt="img"
            class="ProfileImgAvatar rounded-circle"
            :src="user.photo.url"
          />
          <img
            src="../../assets/avatar2.jpg"
            alt="img"
            class="ProfileImgAvatar rounded-circle"
            v-else
          />
          <div class="col-sm">
            <strong v-if="publicProfile.name"> {{ publicProfile.name }}</strong>
            <strong v-else-if="id && publicProfile.name == null"
              >New User</strong
            >
            <strong v-else-if="user && id == undefined"> {{ user.name }} </strong>
            <strong v-else>New User</strong>
            <p v-if="publicProfile.code">
              {{ publicProfile.code }}
              <img
                :src="publicProfile.flag"
                alt="flag"
                class="ProfilFlagImg rounded-circle"
              />
            </p>
            <p v-else-if="user && id == undefined">
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
      image: null,
      name: null,
      nationality: null,
      id: this.$route.params.id,
      followed: false,
      publicProfile: {
        name: "",
        image: "",
        code: "",
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
        }
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
    async handleUnfollowButton(id) {
      const unfollow = await axios.delete("follows/user/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.sucess = unfollow.data.data;
      location.reload();
    },
    async getPublicUser() {
      if (this.id) {
        try {
          const pu = await axios.get("profiles/" + this.id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          if (this.id === localStorage.getItem("userID"))
            this.$router.push("/profil");

          this.publicProfile.name = pu.data.data.name;
          this.publicProfile.description = pu.data.data.description;
          if (pu.data.data.photo)
            this.publicProfile.image = pu.data.data.photo.url;
          if (pu.data.data.nationality) {
            this.publicProfile.flag = pu.data.data.nationality.flag;
            this.publicProfile.code = pu.data.data.nationality.code;
          }
        } catch (err) {
          if (err.response.status) this.$router.push("/profil");
        }
      }
    },
  },
  props: { user: null },
  beforeMount() {
    this.checkIfFollowed();
    this.getPublicUser();
  },
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