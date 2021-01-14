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
      <div class="alert alert-success" role="alert" v-if="success">
        {{ success.message }}
      </div>
      <div class="alert alert-danger" role="alert" v-if="error">
        {{ error }}
      </div>
      <form @submit.prevent="handleSubmit">
        <input-text
          name="USERNAME"
          :user="user"
          @username="getUsername"
        ></input-text>
        <select-input
          name="GENDER"
          :value="['Male', 'Female']"
          @gender="getGender"
          :user="user"
        ></select-input>
        <input-date name="BRITH DATE" @date="getDate" :user="user"></input-date>
        <contries-dropdown
          name="CONTRIES"
          :value="countries"
          @country="getCountry"
          :user="user"
        ></contries-dropdown>
        <button
          type="submit"
          class="btn btn-success mt-3"
          @click="handleSubmit"
        >
          Save
        </button>
      </form>
      <!-- end -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import inputText from "./inputText.vue";
import SelectInput from "./SelectInput.vue";
import inputDate from "./inputDate.vue";
import ContriesDropdown from "./ContriesDropdown.vue";

export default {
  name: "Profil Settings Card",
  data() {
    return {
      user: null,
      success: "",
      error: "",
      cardData: {
        name: "",
        gender: "",
        country_id: null,
        birth_date: null,
      },
      countries: [],
    };
  },
  components: { inputText, SelectInput, inputDate, ContriesDropdown },
  async created() {
    const response = await axios.get("countries");
    this.countries = response.data.data;

    const user = await axios.get(
      "profiles/" +
        localStorage.getItem("profilID") +
        "?representation=private",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    this.user = user.data.data;
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.put(
          "profiles/" + localStorage.getItem("profilID"),
          this.cardData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        this.success = response.data;
        location.reload();
      } catch (e) {
        console.log(e);
        this.error = e.message;
      }
    },
    getUsername(data) {
      this.cardData.name = data;
    },
    getGender(data) {
      this.cardData.gender = data;
    },
    getCountry(data) {
      this.cardData.country_id = data;
    },
    getDate(data) {
      this.cardData.birth_date = data;
    },
    getFile(event) {
      this.cardData.image = event.target.files[0];
      console.log(URL.createObjectURL(event.target.files[0]));
    },
    mounted() {
      this.handleUser();
    },
  },
};
</script>

<style>
.imgSettingCard {
  width: 30%;
  height: 20%;
}
.my-5 {
  padding: 0 1rem 1rem 1rem;
}
</style>