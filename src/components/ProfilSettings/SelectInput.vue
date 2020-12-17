<template>
  <div class="form-floating mt-3">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <!-- <option selected>{{name}}</option> -->
    <option v-for="(v,i) in value" :key="i">{{v}}</option>
  </select>  
  <label for="floatingSelect">{{name}}</label>
</div>
</template>

<script>
export default {
    props: {name: String, value: Array}
}
</script>

<style>

</style>