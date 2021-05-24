<template>
  <div>
    <section>
      <h2 class="text-xl">Gastos Menores Generales</h2>

      <reports-filter :type="'admin'" @onFiltersChange="applyFilters($event)"></reports-filter>

      <no-results :items="minor_expenses"></no-results>

      <reports-table
        :reports="minor_expenses"
        :type="'minorExpense'"
        :edit="false"
        @itemDetails="minor_expense =  $event; show_modal = true"
      ></reports-table>

      <div class="mt-5">
        <pagination
          v-if="(parseInt(minor_expenses.count) / 15) + 1 > 2 "
          :totalPages="(parseInt(minor_expenses.count) / 15) + 1"
          :total="parseInt(minor_expenses.count)"
          :per-page="15"
          :current-page="currentPage"
          @pagechanged="paginateMinorExpenses($event); currentPage = $event"
        ></pagination>
      </div>
    </section>

    <card-modal :showing="show_modal" @close="show_modal = false">
      <report-details
        :report="minor_expense"
        @approve="changeMinorExpenseStatus({status:'Aprobado', reportId:$event})"
        @decline="changeMinorExpenseStatus({status:'Declinado', reportId:$event})"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Gasto Menor</h1>
        </template>
      </report-details>
    </card-modal>
  </div>
</template>
<script>
import dayjs from "dayjs";
import ReportDetails from "../../components/Reports/Details";
import Pagination from "../../components/Pagination";
import Alert from "../../mixins/mixin-alert.js";
import CardModal from "../../components/CardModal";
import ReportsTable from "../../components/Reports/Table";
import NoResults from "../../components/NoResults";
import MinorExpense from "../../models/Reports/MinorExpense.js";
import ReportsFilter from "../../components/Reports/Filters";

export default {
  layout: "main",
  middleware: "administrator",
  components: {
    CardModal,
    ReportsTable,
    NoResults,
    Pagination,
    ReportDetails,
    ReportsFilter,
  },
  mixins: [Alert],
  data() {
    return {
      filters: {
        status: "Pendiente",
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD")
      },
      currentPage: 1,
      minor_expense: new MinorExpense(),
      minor_expenses: {},
      show_modal: false
    };
  },
  async created() {
    let loader = this.$loading.show({});

    await this.fetchMinorExpenses();

    this.hideLoading(loader);
  },
  methods: {
    async fetchMinorExpenses() {
      await this.$store.dispatch("reports/searchMinorExpenses", this.filters);

      this.minor_expenses = await this.$store.getters[
        "reports/getMinorExpenses"
      ];
    },
    async paginateMinorExpenses(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/paginateMinorExpenses", {
          page: page
        });

        const minor_expenses = await this.$store.getters[
          "reports/getMinorExpenses"
        ];

        this.minor_expenses = minor_expenses;

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    },
    async changeMinorExpenseStatus($event) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/UpdateStatusReportMinorExpenses", $event);
        await this.fetchMinorExpenses();

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
        await this.fetchMinorExpenses();

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    }
  }
};
</script>