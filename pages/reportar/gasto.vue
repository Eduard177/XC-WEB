<template>
  <div>
    <section>
      <h1 class="text-xl">Gastos Menores</h1>

      <div class="flex justify-end">
        <input class="p-1 rounded-lg no-spin" type="date" name id>
        <select class="ml-6 px-4 outline-none" name id>
          <option selected :value="true">Aproabdo</option>
          <option :value="false">Pendiente</option>
        </select>
      </div>

      <reports-table
        :reports="minor_expenses"
        :type="'minor_expense'"
        @itemDetails="minor_expense =  $event; show_report_detail = true"
        @itemEdit="minor_expense =  $event; show_edit_report = true; "
        @itemDelete="deleteMinorExpense($event)"
      ></reports-table>

      <button
        @click="show_create_report = true"
        class="fixed right-0 bottom-0 mr-24 mb-12 w-16 h-16 bg-grad-gold/orange rounded-full text-white font-bold text-3xl text-center shadow-2xl cursor-pointer"
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
      <reports-details :report="minor_expense">
        <template v-slot:header>
          <h1 class="text-2xl">Detalles Gastos Menores</h1>
        </template>
      </reports-details>
    </card-modal>
  </div>
</template>
<script>
import Alert from "../../mixins/mixin-alert.js";
import CardModal from "../../components/CardModal";
import ReportsTable from "../../components/Reports/Table";
import MinorExpense from "../../models/Reports/MinorExpense.js";
import ReportsDetails from "../../components/Reports/Details";
import MinorExpenseForm from "../../components/Reports/MinorExpense/Form";

export default {
  middleware: "authenticated",
  layout: "main",
  mixins: [Alert],
  components: {
    CardModal,
    ReportsTable,
    ReportsDetails,
    MinorExpenseForm
  },
  data() {
    return {
      minor_expenses: [new MinorExpense()],
      minor_expense: new MinorExpense(),
      new_minor_expense: new MinorExpense(),
      show_create_report: false,
      show_edit_report: false,
      show_report_detail: false,
      user: this.$store.getters["auth/getLoggedUser"]
    };
  },
  created() {
    let loader = this.$loading.show({});

    this.fetchMinorExpenses();

    this.hideLoading(loader);
  },
  methods: {
    async fetchMinorExpenses() {
      try {
        let user = await this.$store.dispatch(
          "reports/fetchMinorExpenses",
          this.user.id
        );

        this.minor_expenses = this.$store.getters["reports/getMinorExpenses"];
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

        await this.fetchMinorExpenses();

        await this.hideLoading(loader);

        this.show_create_report = false;
        this.minor_expense = new MinorExpense();

        this.fireAlert(
          "success",
          "El reporte ha sido creado correctamente.",
          "top"
        );
      } catch (error) {
        console.error(error);
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

        await this.fetchMinorExpenses();

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

          await this.fetchMinorExpenses();

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
    showMinorExpensDetails(minor_expense) {}
  }
};
</script>