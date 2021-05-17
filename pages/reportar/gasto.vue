<template>
  <div>
    <section>
      <h1 class="text-xl">Mis Gastos Menores</h1>

      <reports-filter @onFiltersChange="applyFilters($event)"></reports-filter>

      <no-results :items="minorExpenses"></no-results>

      <reports-table
        :reports="minorExpenses"
        :type="'minorExpense'"
        :edit="true"
        @itemDetails="minorExpense =  $event; show_report_detail = true"
        @itemEdit="minorExpense =  $event; showEditReport = true; "
        @itemDelete="deleteMinorExpense($event)"
      ></reports-table>

      <div class="mt-5">
        <pagination
          v-if="(parseInt(minorExpenses.count) / 15) + 1 > 2 "
          :totalPages="(parseInt(minorExpenses.count) / 15) + 1"
          :total="parseInt(minorExpenses.count)"
          :per-page="15"
          :current-page="currentPage"
          @pagechanged="paginateMinorExpenses($event); currentPage = $event"
        ></pagination>
      </div>

      <button
        @click="showCreateReport = true"
        style="bottom: 12px;"
        class="fixed right-0 bottom-0 mr-4 tablet:mr-24 mb-12 w-16 h-16 bg-grad-gold/orange rounded-full text-white font-bold text-3xl text-center shadow-2xl cursor-pointer"
      >&plus;</button>
    </section>

    <card-modal :showing="showCreateReport" @close="showCreateReport = false">
      <minor-expense-form
        :report="newMinorExpense"
        submit="Crear"
        @close="showCreateReport = false"
        @submit="create($event)"
      >
        <template v-slot:header>
          <h1 class="text-xl">Nuevo Reporte - Gastos Menores</h1>
        </template>
      </minor-expense-form>
    </card-modal>

    <card-modal :showing="showEditReport" @close="showEditReport = false">
      <minor-expense-form
        :report="minorExpense"
        :submit="'Editar'"
        @close="showEditReport = false"
        @submit="edit($event)"
      >
        <template v-slot:header>
          <h1 class="text-xl">Editar Reporte - Gastos Menores</h1>
        </template>
      </minor-expense-form>
    </card-modal>

    <card-modal :showing="show_report_detail" @close="show_report_detail = false">
      <reports-details
        :report="minorExpense"
        @approve="changeMinorExpenseStatus({status:'Aprobado', reportId:$event})"
        @decline="changeMinorExpenseStatus({status:'Declinado', reportId:$event})"
      >
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Gastos Menores</h1>
        </template>
      </reports-details>
    </card-modal>
  </div>
</template>
<script>
import dayjs from "dayjs";
import Alert from "../../mixins/mixin-alert.js";
import CardModal from "../../components/CardModal";
import ReportsTable from "../../components/Reports/Table";
import MinorExpense from "../../models/Reports/MinorExpense.js";
import ReportsDetails from "../../components/Reports/Details";
import MinorExpenseForm from "../../components/Reports/MinorExpense/Form";
import Pagination from "../../components/Pagination";
import NoResults from "../../components/NoResults";
import ReportsFilter from "../../components/Reports/Filters";

export default {
  name: "gastos-menores",
  middleware: "authenticated",
  layout: "main",
  mixins: [Alert],
  components: {
    CardModal,
    ReportsTable,
    ReportsDetails,
    MinorExpenseForm,
    Pagination,
    NoResults,
    ReportsFilter
  },
  data() {
    return {
      minorExpenses: {
        results: [],
        count: 0
      },
      filters: {
        user_id: this.$store.getters["auth/getLoggedUser"].id,
        status: "Pendiente",
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD")
      },
      currentPage: 1,
      minorExpense: new MinorExpense(),
      newMinorExpense: new MinorExpense(),
      showCreateReport: false,
      showEditReport: false,
      show_report_detail: false,
      user: this.$store.getters["auth/getLoggedUser"]
    };
  },
  async created() {
    let loader = this.$loading.show({});

    await this.fetchMinorExpensesByUser();

    this.hideLoading(loader);
  },
  methods: {
    async fetchMinorExpensesByUser() {
      try {
          await this.$store.dispatch(
          "reports/fetchMinorExpensesByUser",
          this.filters
        );

        this.minorExpenses = await this.$store.getters[
          "reports/getMinorExpenses"
        ];
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async paginateMinorExpenses(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/paginateMinorExpenses", {
          user_id: this.user.id,
          page: page
        });

        const minorExpenses = await this.$store.getters[
          "reports/getMinorExpenses"
        ];

        this.minorExpenses = minorExpenses;

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async create(minorExpense) {
      try {
        let loader = this.$loading.show({});

        minorExpense.user = this.user.id;
        minorExpense.invoiceDate = new Date(minorExpense.invoiceDate)
          .toISOString()
          .split("T")[0];

        await this.$store.dispatch("reports/createMinorExpense", minorExpense);

        await this.fetchMinorExpensesByUser();
        await this.hideLoading(loader);

        this.showCreateReport = false;
        this.minorExpense = new MinorExpense();

        this.fireAlert(
          "success",
          "El reporte ha sido creado correctamente.",
          "top"
        );
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async edit(minorExpense) {
      try {
        let loader = this.$loading.show({});
        
        minorExpense.invoiceDate = new Date(minorExpense.invoiceDate)
          .toISOString()
          .split("T")[0];
        delete minorExpense.user
        await this.$store.dispatch("reports/editMinorExpense", minorExpense);

        await this.fetchMinorExpensesByUser();

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
    async deleteMinorExpense(minorExpense) {
      const dialogResponse = await this.fireConfirmAlert();

      if (dialogResponse.value) {
        try {
          let loader = this.$loading.show({});

          await this.$store.dispatch(
            "reports/deleteMinorExpense",
            minorExpense
          );

          await this.fetchMinorExpensesByUser();

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
    async assingReport(report) {
      this.minorExpense = report;
    },
    async applyFilters(filters) {
      try {
        this.loader = this.$loading.show({});

        filters.user_id = this.user.id;
        this.filters = filters;
        await this.fetchMinorExpensesByUser();

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
        await this.fetchMinorExpensesByUser();

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
  }
};
</script>