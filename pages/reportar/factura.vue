<template>
  <div>
    <h1 class="text-xl">Facturas Reembolsables</h1>

    <div class="flex justify-end">
      <input class="p-1 rounded-lg no-spin" type="date" name id>
      <select class="ml-6 px-4 outline-none" name id>
        <option selected :value="true">Aproabdo</option>
        <option :value="false">Pendiente</option>
      </select>
    </div>

    <reports-table
      :reports="reimbursables"
      type="reimbursables"
      @itemDetails="show_report_detail = true; reimbursable_detail = $event;"
    ></reports-table>

    <card-modal :showing="show_report_detail" @close="show_report_detail = false">
      <reports-details :report="reimbursable_detail">
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Factura Reembolsable</h1>
        </template>
      </reports-details>
    </card-modal>
  </div>
</template>
<script>
import ReportsTable from "../../components/Reports/Table";
import Reimbursable from "../../models/Reports/Reimbursable.js";
import CardModal from "../../components/CardModal";
import ReportsDetails from "../../components/Reports/Details";

export default {
  middleware: "authenticated",
  layout: "main",
  components: {
    ReportsTable,
    CardModal,
    ReportsDetails
  },
  data() {
    return {
      reimbursables: [new Reimbursable()],
      reimbursable_detail: new Reimbursable(),
      show_report_detail: false
    };
  },
  created() {
    this.fetchReimbursable();
  },
  methods: {
    async fetchReimbursable() {
      await this.$store.dispatch("reports/fetchReimbursables");

      const reimbursables = await this.$store.getters[
        "reports/getReimbursables"
      ];

      this.reimbursables = reimbursables;
    }
  }
};
</script>