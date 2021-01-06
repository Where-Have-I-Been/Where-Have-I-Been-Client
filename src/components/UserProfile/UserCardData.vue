<template>
  <div class="card mx-5 mt-5">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <img
            src="../../assets/avatar2.jpg"
            alt="img"
            class="ProfileImgAvatar rounded-circle"
          />
          <div class="col-sm">
            <strong>Janek Kowalski</strong>
            <p>
              Poland
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png"
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
    name: 'UserCardData',
};
</script>

<style>
.ProfileImgAvatar{
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