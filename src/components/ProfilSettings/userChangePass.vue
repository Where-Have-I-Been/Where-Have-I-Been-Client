<template>
  <div class="card mt-5">
    <h5 class="card-header text-center">CHANGE PASSWORD</h5>
    <div class="card-body">
      <p class="card-text mt-3 text-center">
        You will receive an email with a link to create a new password.
      </p>
      <p class="card-text text-center">Do you want to continue ?</p>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success btnchngPass">Success</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btnchngPass {
  text-align: center;
}
.card.mt-5{
  margin-top: 10rem !important;
  margin: 10rem 2rem 0 2rem;
 }
</style>