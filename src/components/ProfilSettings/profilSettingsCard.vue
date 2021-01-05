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
      <div class="d-flex p-2 bd-highlight">
        <img
          src="../../assets/avatar2.jpg"
          alt="img"
          class="imgSettingCard rounded-circle"
        />
        <div class="p-2 bd-highlight"><input class="form-control" type="file" id="formFile"></div>
        <div class="p-2 bd-highlight"><button type="button" class="btn btn-danger">Delete</button></div>
      </div>
      <div class="">
        <input-text name="FULLNAME"></input-text>
        <input-text name="USERNAME"></input-text>
        <select-input name="GENDER" :value="['Male','Female']"></select-input>
        <input-date name="BRITH DATE"></input-date>
        <input-text name="COUNTRY"></input-text>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
import inputText from './inputText.vue';
import SelectInput from './SelectInput.vue';
import inputDate from './inputDate.vue';

export default {
  components: {inputText, SelectInput, inputDate}
};
</script>

<style>
.imgSettingCard {
  width: 30%;
  height: 20%;
}
.my-5{
  padding: 0 1rem 1rem 1rem;
}
</style>