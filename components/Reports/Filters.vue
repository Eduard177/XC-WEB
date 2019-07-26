<template>
  <div class="flex flex-col justify-end my-5 items-center tablet:flex-row">
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

export default {
  data() {
    return {
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
  }
};
</script>
