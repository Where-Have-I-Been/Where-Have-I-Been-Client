<template>
  <div
    class="modal fade pt-5 modalImage"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    aria-modal="true"
    role="dialog"
    :class="{ show: active }"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <card-image-modal @card-change="getCardChange"></card-image-modal>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="active = false"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-if="cardSetOrUpload"
            @click="handleSaveChanges"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardImageModal from "./CardImageModal.vue";
export default {
  data() {
    return {
      active: true,
      cardSetOrUpload: true,
    };
  },
  components: { CardImageModal },
  methods: {
    getCardChange(data) {
      this.cardSetOrUpload = data;
    },
    handleSaveChanges() {
      console.log("Data changes");
    },
  },
  change() {
    this.getCardChange();
  },
};
</script>

<style>
.show {
  display: block;
  padding-right: 17px;
}

.modalImage {
  margin-top: 5vh;
}
</style>