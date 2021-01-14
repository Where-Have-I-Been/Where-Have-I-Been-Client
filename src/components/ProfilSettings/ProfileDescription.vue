<template>
  <div class="card mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="card-body">
        <div class="alert alert-secondary" role="alert" v-if="success">
          {{ success }}
        </div>
        <h5 class="card-header text-center">PROFILE DESCRIPTION</h5>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            v-model="description"
            required
          ></textarea>
          <label for="floatingTextarea2">Description</label>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-3">
        <input type="submit" class="btn btn-info btnchngPass" value="EDIT" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Profle Description",
  data() {
    return {
      description: "",
      success: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.put(
          "profiles/" + localStorage.getItem("profilID"),
          { description: this.description },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        this.success = response.data.message;
        location.reload();
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
.btnchngPass {
  text-align: center;
}
</style>