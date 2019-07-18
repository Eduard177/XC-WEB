<template>
  <div>
    <h1 class="text-xl">Facturas</h1>

    <div class="flex justify-end">
      <input class="p-1 rounded-lg no-spin" type="date" name id>
      <select class="ml-6 px-4 outline-none" name id>
        <option selected :value="true">Aproabdo</option>
        <option :value="false">Pendiente</option>
      </select>
    </div>

    <reports-table
      :reports="reimbursables.results"
      type="reimbursables"
      @itemDetails="show_report_detail = true; new_reimbursable = $event;"
      @itemEdit="show_report_edit = true; reimbursable = $event;"
      @itemDelete="deleteReimbursable($event)"
    ></reports-table>

    <button
      @click="show_create_report = true"
      class="fixed right-0 bottom-0 mr-24 mb-12 w-16 h-16 bg-grad-gold/orange rounded-full text-white font-bold text-3xl text-center shadow-2xl cursor-pointer"
    >&plus;</button>

    <div class="mt-6 text-green-500">
      <pagination
        :totalPages="(parseInt(reimbursables.count) / 15) + 1"
        :total="parseInt(reimbursables.count)"
        :per-page="15"
        :current-page="currentPage"
        @pagechanged="paginateReimbursables($event); currentPage = $event"
      ></pagination>
    </div>

    <card-modal :showing="show_report_detail" @close="show_report_detail = false">
      <reports-details :report="reimbursable">
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Factura Reembolsable</h1>
        </template>
      </reports-details>
    </card-modal>

    <card-modal :showing="show_create_report" @close="show_create_report = false">
      <reimbursable-form
        @submit="createReimbursable($event)"
        :report="new_reimbursable"
        @close="show_create_report = false"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Nuevo Factura</h1>
        </template>
      </reimbursable-form>
    </card-modal>

    <card-modal :showing="show_report_edit" @close="show_report_edit = false">
      <reimbursable-form
        @submit="editReimbursable($event)"
        :report="reimbursable"
        @close="show_report_edit = false"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Editar Factura</h1>
        </template>
      </reimbursable-form>
    </card-modal>
  </div>
</template>
<script>
import Alert from "../../mixins/mixin-alert.js";
import CardModal from "../../components/CardModal";
import ReportsTable from "../../components/Reports/Table";
import Reimbursable from "../../models/Reports/Reimbursable.js";
import ReportsDetails from "../../components/Reports/Details";
import ReimbursableForm from "../../components/Reports/Reimbursable/Form";
import Pagination from "../../components/Pagination";

export default {
  middleware: "authenticated",
  layout: "main",
  mixins: [Alert],
  components: {
    Pagination,
    ReportsTable,
    CardModal,
    ReportsDetails,
    ReimbursableForm
  },
  data() {
    return {
      currentPage: 1,
      reimbursables: {
        results: [new Reimbursable()],
        count: 0
      },
      reimbursable: new Reimbursable(),
      new_reimbursable: new Reimbursable(),
      show_report_detail: false,
      show_create_report: false,
      show_report_edit: false,
      user: this.$store.getters["auth/getLoggedUser"]
    };
  },
  created() {
    this.fetchReimbursable();
  },
  methods: {
    async paginateReimbursables(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/paginateReimbursables", page);

        const reimbursables = await this.$store.getters[
          "reports/getReimbursables"
        ];

        this.reimbursables = reimbursables;

        await this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async fetchReimbursable() {
      try {
        await this.$store.dispatch("reports/fetchReimbursables");

        const reimbursables = await this.$store.getters[
          "reports/getReimbursables"
        ];

        this.reimbursables = reimbursables;
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async createReimbursable(reimbursable) {
      try {
        this.loader = this.$loading.show({});

        reimbursable.user = this.user.id;

        await this.$store.dispatch("reports/createReimbursable", reimbursable);

        await this.fetchReimbursable();

        this.show_create_report = false;

        await this.hideLoading(this.loader);

        this.fireAlert(
          "success",
          "El reporte ha sido creado correctamente.",
          "top"
        );
      } catch (error) {
        console.error(error);
        this.loader.hide();
        this.show_create_report = false;
        this.fireErrorAlert();
      }
    },
    async editReimbursable(reimbursable) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/editReimbursable", reimbursable);

        await this.fetchReimbursable();

        this.show_report_edit = false;

        console.log(this.show_report_edit);

        await this.hideLoading(this.loader);

        this.fireAlert(
          "success",
          "El reporte ha sido actualizado correctamente.",
          "top"
        );
      } catch (error) {
        this.loader.hide();
        this.show_report_edit = false;
        this.fireErrorAlert();
      }
    },
    async deleteReimbursable(reimbursable) {
      const dialogResponse = await this.fireConfirmAlert();

      if (dialogResponse.value) {
        try {
          let loader = this.$loading.show({});

          await this.$store.dispatch(
            "reports/deleteReimbursable",
            reimbursable
          );

          await this.fetchReimbursable();

          await this.hideLoading(loader);

          this.fireAlert(
            "success",
            "El reporte ha sido elimidado correctamente.",
            "top"
          );
        } catch (error) {
          this.fireErrorAlert();
        }
      }
    }
  }
};
</script>