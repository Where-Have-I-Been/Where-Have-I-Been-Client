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
              <input
                type="text"
                class="form-control"
                placeholder="search value"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <!-- Filtr more -->
            <select-more-filter @input="ValueOfFilter"></select-more-filter>
            <!-- End Filtr more -->

            <!-- card  -->
            <div class="card w-50 mx-auto">
              <div class="card-body card-scrollable">
                <ul class="list-group" v-if="FiltrByValue == 'Country/City'">
                  <div>
                    <country-checkbox :countries="countries"></country-checkbox>
                  </div>
                </ul>
              </div>
              <button class="btn btn-primary mt-2" type="button">Apply</button>
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
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryCheckbox from "./countryCheckbox.vue";
import SelectMoreFilter from "./Users/SelectMoreFilter.vue";
import axios from "axios";
export default {
  name: "ddf",
  components: { countryCheckbox, SelectMoreFilter },
  data() {
    return {
      isActive: false,
      FiltrByValue: "",
      countries: null,
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