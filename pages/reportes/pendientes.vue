<template>
  <div>
    <section>
      <h2 class="text-xl">Reporte de Gasto Pendientes</h2>

      <no-results :items="minor_expenses.results"></no-results>

      <reports-table
        :reports="minor_expenses.results"
        :type="'minor_expense'"
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
          @pagechanged="paginateMinor_expenses($event); currentPage = $event"
        ></pagination>
      </div>
    </section>

    <card-modal :showing="show_modal" @close="show_modal = false">
      <div class="flex flex-col py-8 px-2">
        <div class="flex flex-col lg:flex-row items-center">
          <figure class="flex justify-center items-center w-20 lg:w-1/6 bg-hueso rounded-full">
            <img
              class="rounded-full object-cover"
              src="~/assets/images/olopez.png"
              alt="foto de perfil"
            >
          </figure>

          <div class="flex flex-wrap lg:ml-4">
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">01/07/2019</span>
              <label for>Fecha</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Pago Uber</span>
              <label for>Descripción</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Pro Consumidor</span>
              <label for>Lugar</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Oscar Lopez G.</span>
              <label for>Presentes</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">RD$180</span>
              <label for>Monto</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Ninguno</span>
              <label for>Comentario</label>
            </div>
          </div>
        </div>
        <div class="flex justify-around items-center leading-none mt-12">
          <a
            @click="show_modal = false"
            class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer"
          >Declinar</a>
          <a href="#" class="btn bg-grad-green/orange w-1/3 h-9">Aprobar</a>
        </div>
      </div>
    </card-modal>
  </div>
</template>
<script>
import dayjs from "dayjs";
import Alert from "../../mixins/mixin-alert.js";
import Paginators from "../../mixins/mixin-paginators.js";
import CardModal from "../../components/CardModal";
import ReportsTable from "../../components/Reports/Table";
import NoResults from "../../components/NoResults";
import MinorExpense from "../../models/Reports/MinorExpense.js";

export default {
  layout: "main",
  middleware: "authenticated",
  components: {
    CardModal,
    ReportsTable,
    NoResults
  },
  mixins: [Alert, Paginators],
  data() {
    return {
      minor_expense: new MinorExpense(),
      minor_expenses: {
        count: 0,
        results: []
      },
      show_modal: false
    };
  },
  async created() {
    let loader = this.$loading.show({});

    await this.fetchMinorExpenses("pendiente");

    this.hideLoading(loader);
  },
  methods: {
    async fetchMinorExpenses(status = "") {
      await this.$store.dispatch("reports/searchMinorExpenses", {
        status: status,
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD")
      });

      this.minor_expenses = await this.$store.getters[
        "reports/getMinorExpenses"
      ];
    },
    async paginateMinorExpenses(page) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/paginateMinorExpenses", page);

        const minor_expense = await this.$store.getters[
          "reports/getMinorExpenses"
        ];

        this.minor_expense = minor_expense;

        await this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
      }
    }
  }
};
</script>