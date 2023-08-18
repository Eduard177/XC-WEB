<template>
  <div class="container">
    <div>
      <h1>Bienvenido al sistema de reporte rembolsable</h1>
      <section class="flex flex-wrap justify-start mt-6 tablet:mt-12">
        <figure
          class="flex flex-col justify-center items-center shadow-xl h-56 w-full tablet:w-2/5 bg-white rounded-br-xl"
        >
          <span class="text-6xl text-orange-400 font-bold">{{
            report_count.total
          }}</span>
          <p class="text-xl text-black font-light">Reportes Realizados</p>
        </figure>

        <figure
          v-if="report_count.total === report_count.approved"
          class="flex flex-col justify-center items-center shadow-xl h-56 w-full bg-grad-green/blue rounded-br-xl mt-8 tablet:mt-0 tablet:w-2/5 tablet:ml-16"
        >
          <svg width="75.838" height="75.838" viewBox="0 0 75.838 75.838">
            <g
              id="Group_585"
              data-name="Group 585"
              transform="translate(-2333.508 -298.286)"
            >
              <path
                id="Path_470"
                data-name="Path 470"
                d="M2371.427,298.286a37.919,37.919,0,1,0,37.919,37.919A37.92,37.92,0,0,0,2371.427,298.286Zm-6.956,57.4-16.7-16.7,5.565-5.565,11.131,11.131,25.044-25.044,5.565,5.565Z"
                fill="#fff"
              ></path>
            </g>
          </svg>

          <p class="text-2xl text-white font-light mt-4">Pagos Completados</p>
        </figure>
        <figure
          v-else
          class="flex flex-col justify-center items-center shadow-xl h-56 w-full bg-grad-gold/orange rounded-br-xl mt-8 tablet:mt-0 tablet:w-2/5 tablet:ml-16"
        >
          <span class="text-6xl text-white font-bold">{{
            report_count.pending
          }}</span>

          <p class="text-2xl text-white font-light">Reportes Pendientes</p>
        </figure>
      </section>
    </div>
  </div>
</template>
<script>
import Alert from "../mixins/mixin-alert.js";

export default {
  name: "home",
  layout: "main",
  middleware: "authenticated",
  mixins: [Alert],
  data() {
    return {
      report_count: {
        pending: 0,
        approved: 0,
        total: 0,
      },
    };
  },
  async created() {
    this.loader = this.$loading.show({});

    await this.fetchReportsCounts();

    this.hideLoading(this.loader);
  },
  methods: {
    async fetchReportsCounts() {
      try {
        const userId = this.$store.getters["auth/getLoggedUser"].id;

        await this.$store.dispatch("reports/ReportsCount", +userId);

        this.report_count = await this.$store.getters["reports/getReportCount"];
      } catch (error) {
        this.fireErrorAlert(this.loader);
      }
    },
  },
};
</script>
