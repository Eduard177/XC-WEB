<template>
  <div>
    <slot name="header"></slot>

    <section class="mt-6">
      <xc-input-date
        v-validate="'required'"
        :error="errors.first('Fecha del consumo')"
        v-model="minor_expense.invoiceDate"
        class="tablet:w-1/5 flex-col-reverse"
        label="Fecha del consumo"
      ></xc-input-date>

      <div class="flex flex-col tablet:flex-row">
        <xc-input
          v-validate="'required'"
          :error="errors.first('Descripción')"
          v-model="minor_expense.description"
          class="flex-col-reverse w-full mt-8 table:mt-4 tablet:w-1/2 tablet:pr-8"
          label="Descripción"
          placeholder="Pago Uber"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Lugar')"
          v-model="minor_expense.place"
          class="flex-col-reverse mt-8 table:mt-4 w-full tablet:w-1/2 tablet:pr-8"
          label="Lugar"
          placeholder="Calle Heriberto Núñez # 4 Urbanización Fernández"
        ></xc-input>
      </div>

      <div class="flex flex-col tablet:flex-row">
        <xc-input
          v-model="minor_expense.witnesses"
          class="flex-col-reverse w-full mt-8 table:mt-4 tablet:w-1/2 tablet:pr-8"
          label="Personas Presentes"
          placeholder="Juan, Pedro..."
        ></xc-input>

        <xc-input
          v-validate="'required|numeric'"
          :error="errors.first('Monto')"
          v-model="minor_expense.total"
          class="flex-col-reverse w-full mt-8 table:mt-4 tablet:w-1/2 tablet:pr-8"
          label="Monto"
          type="number"
          placeholder="RD$180.20"
        ></xc-input>
      </div>

      <xc-input
        v-model="minor_expense.comment"
        class="flex-col-reverse w-full mt-8 tablet:pr-8 tablet:mt-12"
        label="Comentario"
      ></xc-input>

      <div class="flex justify-around mt-12">
        <button @click="$emit('close')" class="btn bg-grad-gold/orange w-1/3">Cancelar</button>
        <button @click="submitEvent()" class="btn bg-grad-green/orange w-1/3">{{submit}}</button>
      </div>
    </section>
  </div>
</template>
<script>
import Alert from "../../../mixins/mixin-alert.js";
import XcInput from "../../../components/Forms/Input";
import XcInputDate from "../../../components/Forms/Date";
import MinorExpense from "../../../models/Reports/MinorExpense";

export default {
  name: "minor-expense-form",
  mixins: [Alert],
  components: {
    XcInput,
    XcInputDate
  },
  props: {
    report: {
      default: new MinorExpense()
    },
    submit: {
      default: "Reportar"
    }
  },
  created() {
    this.minor_expense = this.report;
  },
  data() {
    return {
      minor_expense: new MinorExpense()
    };
  },
  methods: {
    async submitEvent() {
      const validated = await this.$validator.validateAll();

      if (validated) {
        this.$emit("submit", this.minor_expense);
      } else {
        this.fireAlert("warning", "Complete los campos requeridos", "top");
      }
    }
  }
};
</script>

