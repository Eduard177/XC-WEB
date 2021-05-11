<template>
  <div>
    <section>
      <h2 class="text-xl">Facturas Generales</h2>

      <reports-filter @onFiltersChange="applyFilters($event)"></reports-filter>

      <no-results :items="reimbursables"></no-results>

      <reports-table
        :reports="reimbursables"
        :type="'reimbursables'"
        :edit="false"
        @itemDetails="reimbursable =  $event; show_modal = true"
      ></reports-table>
    </section>

    <div class="mt-5">
      <pagination
        v-if="(parseInt(reimbursables.count) / 15) + 1 > 2 "
        :totalPages="(parseInt(reimbursables.count) / 15) + 1"
        :total="parseInt(reimbursables.count)"
        :per-page="15"
        :current-page="currentPage"
        @pagechanged="paginateReimbursables($event); currentPage = $event"
      ></pagination>
    </div>
    <card-modal :showing="show_modal" @close="show_modal = false">
      <report-details
        :report="reimbursable"
        @approve="changeRefundableStatus({status:'Aprobado', reportId:$event})"
        @decline="changeRefundableStatus({status:'Declinado', reportId:$event})"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Factura</h1>
        </template>
      </report-details>
    </card-modal>
  </div>
</template>
<script>
import dayjs from "dayjs";
import Alert from "../../mixins/mixin-alert.js";
import CardModal from "../../components/CardModal";
import NoResults from "../../components/NoResults";
import ReportsTable from "../../components/Reports/Table";
import Pagination from "../../components/Pagination";
import ReportDetails from "../../components/Reports/Details";
import ReportsFilter from "../../components/Reports/Filters";

export default {
  name: "generados",
  layout: "main",
  middleware: "administrator",
  components: {
    CardModal,
    NoResults,
    ReportsTable,
    Pagination,
    ReportDetails,
    ReportsFilter
  },
  mixins: [Alert],
  data() {
    return {
      currentPage: 1,
      reimbursable: {},
      reimbursables: {},
      show_modal: false,
      filters: {
        status: "Pendiente",
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD")
      }
    };
  },
  async created() {
    this.loader = this.$loading.show({});

    await this.fetchReimbursables();

    this.hideLoading(this.loader);
  },
  methods: {
    async fetchReimbursables() {
      try {
        await this.$store.dispatch("reports/searchReimbursables", this.filters);

        this.reimbursables = await this.$store.getters[
          "reports/getReimbursables"
        ];
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    },
    async paginateReimbursables(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/paginateReimbursables", {
          page: page,
          user_id: this.user.id
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
    async changeRefundableStatus($event) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/UpdateStatusReportRefundable", $event);
        await this.fetchReimbursables();

        this.fireAlert(
          "success",
          "El reporte ha sido " + $event.status + " correctamente.",
          "top"
        );

        this.show_modal = false;

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    },
    async applyFilters(filters) {
      try {
        this.loader = this.$loading.show({});

        this.filters = filters;
        await this.fetchReimbursables();

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    }
  }
};
</script>
