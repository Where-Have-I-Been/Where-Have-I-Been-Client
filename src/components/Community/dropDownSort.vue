<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    @click="launchModal()"
  >
    Filtr by
  </button>

  <!-- Modal -->
  <div
    class="modal fade show"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    :class="{ show, showM: isActive }"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="isActive = false"
          ></button>
        </div>

        <!-- body -->
        <div class="modal-body">
          <!-- card  -->
          <div class="modal-body">
            <div class="input-group flex-nowrap pb-4">
              <!-- <input
                type="text"
                class="form-control"
                placeholder="search value"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              /> -->
            </div>
            <!-- Filtr more -->
            <select-more-filter @input="ValueOfFilter"></select-more-filter>
            <!-- End Filtr more -->

            <!-- card  -->
            <div class="card w-50 mx-auto">
              <div
                class="card-body card-scrollable"
                v-if="FiltrByValue == 'Country'"
              >
                <ul class="list-group">
                  <div>
                    <country-checkbox
                      :countries="countries"
                      @country="setCountry"
                    ></country-checkbox>
                  </div>
                </ul>
              </div>
              <ul class="list-group" v-if="FiltrByValue == 'city'">
                <div>
                  <filtr-city @city="setCity"></filtr-city>
                </div>
              </ul>

              <ul class="list-group" v-if="FiltrByValue == 'only-followings'">
                <div>
                  <follows-filter @follows="setFollows"></follows-filter>
                </div>
              </ul>
              <ul class="list-group" v-if="FiltrByValue == 'only-liked'">
                <div>
                  <liked-filter @like="setLike"></liked-filter>
                </div>
              </ul>
              <!-- <button class="btn btn-primary mt-2" type="button">Apply</button> -->
            </div>
          </div>
          <!-- card end -->
        </div>
        <!-- body end -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="isActive = false"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="saveChanges">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryCheckbox from "./countryCheckbox.vue";
import SelectMoreFilter from "./Users/SelectMoreFilter.vue";
import FiltrCity from "./FiltrCity.vue";
import FollowsFilter from "./FollowsFilter.vue";
import likedFilter from "./likedFilter.vue";
import axios from "axios";
export default {
  name: "ddf",
  components: {
    countryCheckbox,
    SelectMoreFilter,
    FiltrCity,
    FollowsFilter,
    likedFilter,
  },
  data() {
    return {
      isActive: false,
      FiltrByValue: "",
      countries: null,
      Filtr: {
        city: "",
        country: "",
        like: false,
        follows: false,
      },
    };
  },
  methods: {
    launchModal() {
      this.isActive = !this.isActive;
    },
    ValueOfFilter(value) {
      this.FiltrByValue = value;
    },
    async getCountries() {
      const countries = await axios.get("countries");
      this.countries = countries.data;
    },
    setCity(data) {
      this.Filtr.city = data;
    },
    setLike(data) {
      this.Filtr.like = data;
    },
    setCountry(data) {
      this.Filtr.country = data;
    },
    setFollows(data) {
      this.Filtr.follows = data;
    },
    async saveChanges() {
      const filtr = await axios.get(
        "trips?city=" +
          this.Filtr.city +
          "&county=" +
          this.Filtr.country +
          "&only-followings=" +
          this.Filtr.follows +
          "&only-liked=" +
          this.Filtr.like,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(filtr);
      this.$emit("filter", filtr.data.data);
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style>
.showM {
  display: block;
  padding-right: 17px;
}

.card-scrollable {
  overflow-y: scroll;
  max-height: 30vh;
}
</style>