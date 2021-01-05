<template>
  <div class="card text-center my-5">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">My profile</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <!-- start -->
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label EmailLabelInput"
          >EMAIL<br /><strong>ADDRESS</strong></label
        >
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control EmailInput"
            id="inputEmail3"
            placeholder="Email"
          />
        </div>
      </div>
      <!-- end -->
      <p class="mt-4">CONNECT WITH</p>
      <div class="imgOr mt-5">
        <img
          src="../../assets/facebook-f-brands.svg"
          alt="facebook"
          class="logoImgProfile photoImg1"
        />
        OR
        <img
          src="../../assets/google-brands.svg"
          alt="facebook"
          class="logoImgProfile photoImg2"
        />
      </div>
      <button type="button" class="btn btn-primary mt-5">Save</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logoImgProfile {
  width: 50px;
  height: 50px;
}

.menuSetting {
  opacity: 0.9;
}

.photoImg1 {
  margin-right: 20px;
}

.photoImg2 {
  margin-left: 20px;
}

@media (min-width: 576px) and (max-width: 959px){
  .EmailLabelInput {
    min-width: 90%;
  }

  .EmailInput{
    margin-left: 10%;
  }
}

@media (max-width: 475px) {
  .EmailLabelInput {
    min-width: 15rem;
  }
  .EmailInput{
    margin-left: 0;
  }
}
.card.text-center.my-5 {
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 6rem !important;
}
</style>