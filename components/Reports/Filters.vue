<template>
  <div class="flex flex-col justify-end my-5 items-center tablet:flex-row">
    <button
      @click="GenerateExcel()"
      class="w-40 tablet:ml-6 h-8 bg-white outline-none flex p-1 rounded-lg no-spin outline-none"
    >exportar</button>
    <div class="flex items-center">
      <input
        name="StartDate"
        v-validate="'required'"
        v-model="filters.start"
        :class="errors.first('StartDate') ? error : input"
        type="date"
      />

      <span v-if="$mq == 'lg'" class="mx-3 font-bold text-center">hasta</span>
      <span v-else class="mx-2 font-bold text-center">-</span>
      <input
        name="EndDate"
        v-validate="'required'"
        v-model="filters.end"
        :class="errors.first('EndDate') ? error : input"
        type="date"
      />
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
          debugger;
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
        debugger;
        this.fireErrorAlert();
      }
    }
  }
};
</script>
