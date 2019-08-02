<template>
  <div>
    <section>
      <h1 class="text-xl">Mis Gastos Menores</h1>

      <reports-filter @onFiltersChange="applyFilters($event)" @toExcel="ExportExcel($event)"></reports-filter>

      <no-results :items="minor_expenses.results"></no-results>

      <reports-table
        :reports="minor_expenses.results"
        :type="'minor_expense'"
        :edit="true"
        @itemDetails="minor_expense =  $event; show_report_detail = true"
        @itemEdit="minor_expense =  $event; show_edit_report = true; "
        @itemDelete="deleteMinorExpense($event)"
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

      <button
        @click="show_create_report = true"
        style="bottom: 12px;"
        class="fixed right-0 bottom-0 mr-4 tablet:mr-24 mb-12 w-16 h-16 bg-grad-gold/orange rounded-full text-white font-bold text-3xl text-center shadow-2xl cursor-pointer"
      >&plus;</button>
    </section>

    <card-modal :showing="show_create_report" @close="show_create_report = false">
      <minor-expense-form
        :report="new_minor_expense"
        subtmit="Crear"
        @close="show_create_report = false"
        @submit="create($event)"
      >
        <template v-slot:header>
          <h1 class="text-xl">Nuevo Reporte - Gastos Menores</h1>
        </template>
      </minor-expense-form>
    </card-modal>

    <card-modal :showing="show_edit_report" @close="show_edit_report = false">
      <minor-expense-form
        :report="minor_expense"
        :submit="'Editar'"
        @close="show_edit_report = false"
        @submit="edit($event)"
      >
        <template v-slot:header>
          <h1 class="text-xl">Editar Reporte - Gastos Menores</h1>
        </template>
      </minor-expense-form>
    </card-modal>

    <card-modal :showing="show_report_detail" @close="show_report_detail = false">
      <reports-details
        :report="minor_expense"
        @approve="changeMinorExpenseStatus({status:'aprobado', minor_expense_id:$event.id})"
        @decline="changeMinorExpenseStatus({status:'declinado', minor_expense_id:$event.id})"
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
      minor_expenses: {
        results: [],
        count: 0
      },
      filters: {
        user_id: this.$store.getters["auth/getLoggedUser"].id,
        status: "pendiente",
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD")
      },
      currentPage: 1,
      minor_expense: new MinorExpense(),
      new_minor_expense: new MinorExpense(),
      show_create_report: false,
      show_edit_report: false,
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
    async ExportExcel(filters) {
      try {
        await this.$store.dispatch("reports/GenerateExcel", filters);
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async fetchMinorExpensesByUser() {
      try {
        let user = await this.$store.dispatch(
          "reports/fetchMinorExpensesByUser",
          this.filters
        );

        this.minor_expenses = this.$store.getters["reports/getMinorExpenses"];
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

        const minor_expenses = await this.$store.getters[
          "reports/getMinorExpenses"
        ];

        this.minor_expenses = minor_expenses;

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async create(minor_expense) {
      try {
        let loader = this.$loading.show({});

        minor_expense.user = this.user.id;
        minor_expense.invoice_date = new Date(minor_expense.invoice_date)
          .toISOString()
          .split("T")[0];

        await this.$store.dispatch("reports/createMinorExpense", minor_expense);

        await this.fetchMinorExpensesByUser();

        await this.hideLoading(loader);

        this.show_create_report = false;
        this.minor_expense = new MinorExpense();

        this.fireAlert(
          "success",
          "El reporte ha sido creado correctamente.",
          "top"
        );
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async edit(minor_expense) {
      try {
        let loader = this.$loading.show({});

        minor_expense.user = this.user.id;
        minor_expense.invoice_date = new Date(minor_expense.invoice_date)
          .toISOString()
          .split("T")[0];

        await this.$store.dispatch("reports/editMinorExpense", minor_expense);

        await this.fetchMinorExpensesByUser();

        await this.hideLoading(loader);

        this.show_edit_report = false;
        this.fireAlert(
          "success",
          "El reporte ha sido actualizado correctamente.",
          "top"
        );
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    async deleteMinorExpense(minor_expense) {
      const dialogResponse = await this.fireConfirmAlert();

      if (dialogResponse.value) {
        try {
          let loader = this.$loading.show({});

          await this.$store.dispatch(
            "reports/deleteMinorExpense",
            minor_expense
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
      this.minor_expense = report;
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
    async changeMinorExpenseStatus(params) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/setMinorExpenseStatus", params);
        await this.fetchMinorExpensesByUser();

        this.fireAlert(
          "success",
          "El reporte ha sido " + params.status + " correctamente.",
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