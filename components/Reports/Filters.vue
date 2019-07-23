<template>
  <div class="flex my-5 justify-end items-center">
    <input
      name="StartDate"
      v-validate="'required'"
      v-model="filters.start"
      :class="errors.first('StartDate') ? error : input"
      type="date"
    >

    <span class="mx-4 font-bold">hasta</span>
    <input
      name="EndDate"
      v-validate="'required'"
      v-model="filters.end"
      :class="errors.first('EndDate') ? error : input"
      type="date"
    >

    <select v-model="filters.status" class="ml-6 h-8 bg-white outline-none">
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
        "p-1 rounded-lg no-spin outline-none border-2 border-red-500 shadow-lg",
      input: "p-1 rounded-lg no-spin outline-none ",
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
