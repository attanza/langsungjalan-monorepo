<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="primary--text headline">
            {{ formTitle }}
          </span>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <sharedForm
            :items="formItem"
            :show-button="checkPermission('create-schedulle')"
            :show-cancel="true"
            :init-value="initValue"
            @onClose="onClose"
            @onSubmit="saveData"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { global, catchError } from "~/mixins"
import sharedForm from "../sharedForm"
import { formItem } from "./util"
export default {
  components: { sharedForm },
  mixins: [global, catchError],
  props: {
    show: {
      type: Boolean,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      formItem: formItem,
      formTitle: "Tambah DP",
      initValue: {}
    }
  },
  watch: {
    show() {
      this.dialog = this.show
    }
  },

  mounted() {
    this.generateCode()
    this.populateMarketingTarget()
  },

  methods: {
    onClose() {
      this.$emit("onClose")
    },
    async populateMarketingTarget() {
      await this.populateComboData(
        "/combo-data?model=MarketingTarget",
        "code",
        "marketing_target_id"
      )
    },
    generateCode() {
      const code = this.$moment().unix()
      this.initValue.transaction_no = code
    },

    async saveData(data) {
      try {
        data.date = `${data.date} ${data.time}`
        delete data["time"]
        this.activateLoader()
        const resp = await this.$axios.$post(this.link, data)
        this.showNoty(this.$messages.form.SAVED, "success")
        this.$emit("onAdd", resp.data)
        this.deactivateLoader()
      } catch (e) {
        this.dialog = false
        this.deactivateLoader()
        this.catchError(e)
      }
    }
  }
}
</script>
