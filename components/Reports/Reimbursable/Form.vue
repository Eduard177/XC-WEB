<template>
  <div>
    <slot name="header"></slot>

    <section>
      <div class="flex flex-wrap justify-start flex-row w-full">
        <xc-input-select
          v-validate="'required'"
          :error="errors.first('Tipo de factura')"
          v-model="reimbursable.type"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Tipo de factura"
        >
          <option selected value="Rembolsable">Rembolsable</option>
          <option value="No Rembolsable">No Rembolsable</option>
        </xc-input-select>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Proveedor')"
          v-model="reimbursable.provider"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Proveedor"
          placeholder="Sunix Jacobo Majluta"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Tipo Bienes y Servicios Comprados')"
          v-model="reimbursable.businessType"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Tipo Bienes y Servicios Comprados"
        >
        </xc-input>

        <xc-input-date
          v-validate="'required'"
          :error="errors.first('Fecha de pago')"
          v-model="reimbursable.invoiceDate"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Fecha de pago"
        ></xc-input-date>

        <xc-input
          v-validate="'required|numeric'"
          :error="errors.first('Subtotal')"
          @change="itbis(); tip();"
          v-model="reimbursable.subTotal"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Subtotal"
          placeholder="RD$ 280.20"
          type="number"
        ></xc-input>

        <xc-input
          v-validate="'required|numeric|min:9|max:9'"
          :error="errors.first('RNC')"
          v-model="reimbursable.rnc"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="RNC"
          placeholder="131813755"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Detalle')"
          v-model="reimbursable.details"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Detalle"
          placeholder="Almuerzo"
        ></xc-input>

        <xc-input
          v-validate="'required|min:11|max:11|ncf'"
          :error="errors.first('NCF')"
          v-model="reimbursable.ncf"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="NCF"
          placeholder="B010009098"
        ></xc-input>

        <xc-input-select
          v-validate="'required'"
          :error="errors.first('Forma de pago')"
          v-model="reimbursable.paymentMethod"
          class="flex-col-reverse w-full mt-6 pr-6 mobile:w-1/2"
          label="Forma de pago"
        >
        <option selected value="Efectivo">Efectivo</option>
          <option value="Credito">Credito</option>
        </xc-input-select>

        <div class="flex mt-8">
          <div class="flex flex-col">
            <label>ITBIS</label>
            <input v-model="reimbursable.hasItbis" type="checkbox">
          </div>
          <span class="text-sm -ml-1 pt-3 gray-350">RD${{itbis}}</span>
          <div class="flex flex-col ml-8">
            <label for="cbox2">Propina</label>
            <input v-model="reimbursable.hasTip" type="checkbox">
          </div>
          <span class="text-sm -ml-2 pt-3 gray-350">RD${{tip}}</span>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col mt-8">
          <label for>Total</label>
          <span class="text-3xl text-teal-500">RD${{total}}</span>
        </div>

        <div class="flex items-center justify-around w-full">
          <button @click="$emit('close')" class="btn bg-grad-gold/orange w-1/3 mt-12">Cancelar</button>
          <button @click="submitEvent()" class="btn bg-grad-green/orange w-1/3 mt-12 h-12">{{submit}}</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Alert from "../../../mixins/mixin-alert.js";
import XcInput from "../../../components/Forms/Input";
import XcInputDate from "../../../components/Forms/Date";
import XcInputSelect from "../../../components/Forms/Select";
import Reimbursable from "../../../models/Reports/Reimbursable";

import { Validator } from "vee-validate";

export default {
  name: "reimbursable-form",
  mixins: [Alert],
  components: {
    XcInput,
    XcInputDate,
    XcInputSelect
  },
  props: {
    report: {
      default: new Reimbursable()
    },
    submit: {
      default: "Reportar"
    }
  },
  data() {
    return {
      reimbursable: new Reimbursable(),
      businessTypes: [],
      paymentMethods: [],
      isRncValid: false,
      isNcfValid: false,
      rnc: '',
      ncf: '',
      user: this.$store.getters["auth/getLoggedUser"]
    };
  },
  created() {
    Validator.extend(
      "ncf",
      {
        getMessage: field => "El " + field + " debe iniciar con B01",
        validate: async value => value.slice(0, 3) == "B01"
      },
      { immediate: false }
    );
    this.reimbursable = Object.assign(this.report);
  },
  computed: {
    total() {
      let total =
        parseInt(this.reimbursable.subTotal) +
        parseInt(this.reimbursable.itbis) +
        parseInt(this.reimbursable.tip);

      this.reimbursable.total = total.toFixed(2);
      return total.toFixed(2) ? total.toFixed(2) : 0;
    },
    itbis() {
      if (this.reimbursable.hasItbis) {
        this.reimbursable.itbis = parseInt(this.reimbursable.subTotal) * 0.18;
      } else {
        this.reimbursable.itbis = 0;
      }

      return this.reimbursable.itbis.toFixed(2)
        ? this.reimbursable.itbis.toFixed(2)
        : 0;
    },
    tip() {
      if (this.reimbursable.hasTip) {
        this.reimbursable.tip = parseInt(this.reimbursable.subTotal) * 0.1;
      } else {
        this.reimbursable.tip = 0;
      }
      return this.reimbursable.tip.toFixed(2)
        ? this.reimbursable.tip.toFixed(2)
        : 0;
    }
  },
  methods: {
    async fetchBusinessTypes() {
      await this.$store.dispatch("businessTypes/fetch");
      const businessTypes = await this.$store.getters["businessTypes/get"];
      this.businessTypes = businessTypes;
    },
    async fetchPaymentMethods() {
      await this.$store.dispatch("paymentMethods/fetch");
      const paymentMethods = await this.$store.getters["paymentMethods/get"];
      this.paymentMethods = paymentMethods;
    },

    async submitEvent() {
      const validated = await this.$validator.validateAll();
      await this.rncNfcValid();
      if (validated && this.isRncValid && this.isNcfValid) {
        await this.$store.getters["auth/getLoggedUser"];
        this.$emit("submit", this.reimbursable);
      }else if(!this.isRncValid && !this.isNcfValid){
       this.fireAlert("error", "Comprobantes invalidos", "top"); 
      }else {
        this.fireAlert("warning", "Complete los campos requeridos", "top");
      }
    },
    async rncNfcValid(){
      try {
        let rnc = this.reimbursable.rnc;
        let ncf = this.reimbursable.ncf;
        let loader = this.$loading.show({});

          if (rnc.length === 9 && !this.isRncValid) {
            this.isRncValid = await this.$store.dispatch(
              "reports/ValidateRNC",
              rnc
            );
          }
          if (ncf.length === 11 && rnc.length === 9) {
            this.isNcfValid = await this.$store.dispatch(
              "reports/ValidateNCF",
              {
                rnc,
                ncf
              }
            );
          }
          await this.hideLoading(loader);
      } 
      catch(error){
        throw error
      };
    }
  },
};
</script>
