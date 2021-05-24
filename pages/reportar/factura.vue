<template>
  <div>
    <h1 class="text-xl">Mis Facturas</h1>

    <reports-filter :type="'No Admin'" @onFiltersChange="applyFilters($event)"></reports-filter>

    <no-results :items="reimbursables"></no-results>
    
    <reports-table v-if="filters.status == 'Aprobado'"
      :reports="reimbursables"
      :type="'reimbursable'"
      :edit="false"
      @itemDetails="reimbursable = $event; show_report_detail = true;"
    ></reports-table>

    <reports-table v-else
      :reports="reimbursables"
      :type="'reimbursable'"
      :edit="true"
      @itemDetails="reimbursable = $event; show_report_detail = true;"
      @itemEdit="reimbursable = $event; showEditReport = true;"
      @itemDelete="deleteReimbursable($event)"
    ></reports-table>

    <button
      @click="show_create_report = true"
      style="bottom: 12px;"
      class="fixed right-0 bottom-0 mr-4 tablet:mr-24 mb-12 w-16 h-16 bg-grad-gold/orange rounded-full text-white font-bold text-3xl text-center shadow-2xl cursor-pointer"
    >&plus;</button>

    <div class="mt-6">
      <pagination
        v-if="(parseInt(reimbursables.count) / 15) + 1 > 2 "
        :totalPages="(parseInt(reimbursables.count) / 15) + 1"
        :total="parseInt(reimbursables.count)"
        :per-page="15"
        :current-page="currentPage"
        @pagechanged="paginateReimbursables($event); currentPage = $event"
      ></pagination>
    </div>

    <card-modal :showing="show_report_detail" @close="show_report_detail = false">
      <reports-details 
      :report="reimbursable"
      @approve="changeReimbursableStatus({status:'Aprobado', reportId:$event})"
      @decline="changeReimbursableStatus({status:'Declinado', reportId:$event})"
      > 
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Factura Reembolsable</h1>
        </template>
      </reports-details>
    </card-modal>

    <card-modal :showing="show_create_report" @close="show_create_report = false">
      <reimbursable-form
        @submit="createReimbursable($event)"
        :report="new_reimbursable"
        :submit="'Crear'"
        @close="show_create_report = false"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Nuevo Factura</h1>
        </template>
      </reimbursable-form>
    </card-modal>

    <card-modal :showing="showEditReport" @close="showEditReport = false">
      <reimbursable-form
        :report="reimbursable"
        @close="showEditReport = false"
        :submit="'Editar'"
        @submit="editReimbursable($event)"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Editar Factura</h1>
        </template>
      </reimbursable-form>
    </card-modal>
  </div>
</template>
<script>
import dayjs from "dayjs";
import Alert from "../../mixins/mixin-alert.js";
import CardModal from "../../components/CardModal";
import ReportsTable from "../../components/Reports/Table";
import Reimbursable from "../../models/Reports/Reimbursable.js";
import ReportsDetails from "../../components/Reports/Details";
import ReportsFilter from "../../components/Reports/Filters";
import ReimbursableForm from "../../components/Reports/Reimbursable/Form";
import Pagination from "../../components/Pagination";
import NoResults from "../../components/NoResults";

export default {
  name: "reimbursable",
  middleware: "authenticated",
  layout: "main",
  mixins: [Alert],
  components: {
    Pagination,
    ReportsTable,
    CardModal,
    ReportsDetails,
    ReportsFilter,
    ReimbursableForm,
    NoResults
  },
  data() {
    return {
      filters: {
        userId: this.$store.getters["auth/getLoggedUser"].id,
        status: "Pendiente",
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD")
      },
      currentPage: 1,
      reimbursables: {},
      reimbursable: new Reimbursable(),
      new_reimbursable: new Reimbursable(),
      show_report_detail: false,
      show_create_report: false,
      showEditReport: false,
      user: this.$store.getters["auth/getLoggedUser"]
    };
  },
  async created() {
    let loader = this.$loading.show({});

    await this.fetchReimbursablesByUser();

    this.hideLoading(loader);
  },
  methods: {
    async paginateReimbursables(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/paginateReimbursables", {
          userId: this.user.id,
          page: page
        });

        const reimbursables = await this.$store.getters[
          "reports/getReimbursables"
        ];

        this.reimbursables = reimbursables;

        await this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async fetchReimbursablesByUser() {
      try {
        await this.$store.dispatch(
          "reports/fetchReimbursablesByUser",
          this.filters
        );

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
        reimbursable.invoiceDate = new Date(minorExpense.invoiceDate)
          .toISOString()
          .split("T")[0];

        await this.$store.dispatch("reports/createReimbursable", reimbursable);

        await this.fetchReimbursablesByUser();

        this.show_create_report = false;

        await this.hideLoading(this.loader);

        this.fireAlert(
          "success",
          "El reporte ha sido creado correctamente.",
          "top"
        );
      } catch (error) {
        this.loader.hide();
        this.show_create_report = false;
        this.fireErrorAlert();
      }
    },
    async editReimbursable(reimbursable) {
      try {
        let loader = this.$loading.show({});
        
        reimbursable.invoiceDate = new Date(reimbursable.invoiceDate)
          .toISOString()
          .split("T")[0];
        delete reimbursable.user
        await this.$store.dispatch("reports/editReimbursable", reimbursable);

        await this.fetchReimbursablesByUser();

        await this.hideLoading(loader);


        this.showEditReport = false;
        this.fireAlert(
          "success",
          "El reporte ha sido actualizado correctamente.",
          "top"
        );
      } catch (error) {
        this.loader.hide();
        this.showEditReport = false;
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

          await this.fetchReimbursablesByUser();

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
    },
    async applyFilters(filters) {
      try {
        this.loader = this.$loading.show({});

        filters.userId = this.user.id;
        this.filters = filters;
        await this.fetchReimbursablesByUser();

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    },
    async changeReimbursableStatus($event) {
      try {
        this.loader = this.$loading.show({});
        await this.$store.dispatch("reports/UpdateStatusReportRefundable", $event);
        await this.fetchReimbursablesByUser();

        this.fireAlert(
          "success",
          "El reporte ha sido " + $event.status + " correctamente.",
          "top"
        );

        this.show_report_detail = false;

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    }
  },
};
</script>
