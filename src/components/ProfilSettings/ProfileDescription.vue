<template>
  <div class="card mt-5">
    <h5 class="card-header text-center">PROFILE DESCRIPTION</h5>
    <div class="card-body">
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Change your description</label>
      </div>
    </div>
      <div class="d-flex justify-content-center pb-3">
        <button type="button" class="btn btn-info btnchngPass">EDIT</button>
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
</style>