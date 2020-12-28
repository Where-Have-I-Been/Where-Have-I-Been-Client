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
              <div class="card-body">
                <ul class="list-group" v-if="FiltrByValue=='Followed Users'">
                  <div>
                    <country-checkbox name="Algieria"></country-checkbox>
                  </div>
                </ul>
              </div>
              <button class="btn btn-primary" type="button">Apply</button>
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

export default {
  name: "ddf",
  components: { countryCheckbox, SelectMoreFilter },
  data() {
    return {
      isActive: false,
      FiltrByValue: "",
    };
  },
  methods: {
    launchModal() {
      this.isActive = !this.isActive;
    },
    ValueOfFilter(value) {
      this.FiltrByValue = value;
    },
  },
};
</script>

<style>
.showM {
  display: block;
  padding-right: 17px;
}
</style>