<template>
  <div>
    <h1 class="text-xl">Mis Facturas</h1>

    <reports-filter @onFiltersChange="applyFilters($event)"></reports-filter>

    <no-results :items="reimbursables.results"></no-results>

    <reports-table
      :reports="reimbursables.results"
      type="reimbursables"
      :edit="true"
      @itemDetails="show_report_detail = true; new_reimbursable = $event;"
      @itemEdit="show_report_edit = true; reimbursable = $event;"
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
      reimbursables: {
        results: [],
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
        this.loader = this.$loading.show({});

        await this.$store.dispatch("reports/editReimbursable", reimbursable);

        await this.fetchReimbursablesByUser();

        this.show_report_edit = false;

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

        filters.user_id = this.user.id;
        this.filters = filters;
        await this.fetchReimbursablesByUser();

        this.hideLoading(this.loader);
      } catch (error) {
        this.fireErrorAlert();
        this.hideLoading(this.loader);
      }
    }
  }
};
</script>