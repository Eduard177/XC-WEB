<template>
  <div class="flex flex-col justify-end my-5 items-center tablet:flex-row">
    <svg
      @click="GenerateExcel()"
      class="w-6 mr-4 fill-current text-green-700 cursor-pointer"
      viewBox="0 0 484.032 484.032"
      style="enable-background:new 0 0 484.032 484.032;"
      xml:space="preserve"
    >
      <g>
        <path
          d="M200.811,400.709v-45.331h59.7l-10.999-14.32h-48.701v-47.004h107.376v26.268l13.479,5.328V177.303
              c0-1.872,0.352-3.653,0.831-5.368v-9.823h6.402c3.437-2.867,7.811-4.662,12.63-4.662h58.486c4.818,0,9.192,1.795,12.629,4.662
              h20.009v53.686h-12.78v14.317h12.78v49.629h-12.78v14.313h12.78v26.547l14.315-5.659V32.873c0-9.207-7.491-16.698-16.693-16.698
              H16.698C7.485,16.175,0,23.672,0,32.873v365.862c0,5.65,2.84,10.636,7.154,13.661v2.633h5.989c1.149,0.253,2.331,0.398,3.554,0.398
              h289.986l-11.322-14.719H200.811z M322.503,30.484h107.76c1.315,0,2.391,1.072,2.391,2.389v48.12h-110.15V30.484z M322.503,95.306
              h110.15v52.493h-110.15V95.306z M200.811,30.484h107.376v50.509H200.811V30.484z M200.811,95.306h107.376v52.493H200.811V95.306z
              M200.811,162.113h107.376v53.686H200.811V162.113z M200.811,230.116h107.376v49.629H200.811V230.116z M66.006,400.709H15.458
              c-0.673-0.416-1.149-1.133-1.149-1.987v-43.344h51.697V400.709z M66.006,341.058H14.309v-47.004h51.697V341.058z M66.006,279.745
              H14.309v-49.629h51.697V279.745z M66.006,215.799H14.309v-53.686h51.697V215.799z M66.006,147.799H14.309V95.306h51.697V147.799z
              M186.494,400.709H80.319v-45.331h106.175V400.709z M186.494,341.058H80.319v-47.004h106.175V341.058z M186.494,279.745H80.319
              v-49.629h106.175V279.745z M186.494,215.799H80.319v-53.686h106.175V215.799z M186.494,147.799H80.319V95.306h106.175V147.799z
              M186.494,80.988H80.319v-50.51h106.175V80.988z M482.817,322.224l-110.2,143.355c-1.116,1.434-2.831,2.278-4.646,2.278
              c-1.813,0-3.535-0.845-4.643-2.278l-110.2-143.355c-0.813-1.051-1.22-2.309-1.22-3.568c0-1.242,0.394-2.471,1.178-3.522
              c1.568-2.091,4.383-2.885,6.816-1.917l72.969,28.832V173.101c0-3.234,2.621-5.844,5.855-5.844h58.486
              c3.227,0,5.85,2.618,5.85,5.844v168.942l72.969-28.832c2.452-0.968,5.24-0.179,6.822,1.922
              C484.438,317.233,484.425,320.134,482.817,322.224z"
        ></path>
      </g>
    </svg>

    <div class="flex items-center">
      <input
        name="StartDate"
        v-validate="'required'"
        v-model="filters.start"
        :class="errors.first('StartDate') ? error : input"
        type="date"
      >

      <span v-if="$mq == 'lg'" class="mx-3 font-bold text-center">hasta</span>
      <span v-else class="mx-2 font-bold text-center">-</span>
      <input
        name="EndDate"
        v-validate="'required'"
        v-model="filters.end"
        :class="errors.first('EndDate') ? error : input"
        type="date"
      >
    </div>

    <select v-model="filters.status" class="w-40 tablet:ml-6 h-8 bg-white outline-none">
      <option value="aprobado">Aprobados</option>
      <option value="pendiente">Pendientes</option>
      <option value="declinado">Declinados</option>
    </select>
  </div>
</template>
<script>
import dayjs from "dayjs";
import { queryStingParamsParser } from "../../utils/Helpers";
import Alert from "../../mixins/mixin-alert.js";

export default {
  mixins: [Alert],
  data() {
    return {
      user: 0,
      error:
        "flex p-1 rounded-lg no-spin outline-none border-2 border-red-500 shadow-lg ",
      input: "p-1 rounded-lg no-spin outline-none my-2",
      filters: {
        start: dayjs()
          .startOf("month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .endOf("month")
          .format("YYYY-MM-DD"),
        status: "pendiente"
      }
    };
  },
  created() {
    this.user = this.$store.getters["auth/getLoggedUser"];
  },
  watch: {
    filters: {
      handler: async function(newFilters) {
        const validated = await this.$validator.validateAll();
        if (validated) {
          this.$emit("onFiltersChange", this.filters);
        }
      },
      deep: true
    }
  },
  methods: {
    GenerateExcel() {
      try {
        if (this.user.rol === "Administrator") {
          let querystring = queryStingParamsParser({
            start: this.filters.start,
            end: this.filters.end
          });
          window.open(
            process.env.API_URL + "/generate/?" + querystring,
            "_blank"
          );
        } else {
          let querystring = queryStingParamsParser({
            user_id: this.user.id,
            start: this.filters.start,
            end: this.filters.end
          });
          window.open(
            process.env.API_URL + "/generate/?" + querystring,
            "_blank"
          );
        }
      } catch (error) {
        this.fireErrorAlert();
      }
    }
  }
};
</script>
