<template>
  <div class="flex flex-col py-8 px-2 mt-10 table:mt-auto">
    <slot name="header"></slot>
    <div class="flex flex-wrap tablet:mt-4">
      <div
        v-for="(property, key) in report"
        :key="key"
        v-if="key !='user' || key !='image_url'"
        class="flex flex-col my-3 pr-6 w-full tablet:w-1/2"
      >
        <span class="border-solid">{{property}}</span>
        <label>{{options[key] }}</label>
      </div>
    </div>
    <div
      v-if="user.isAdmin"
      class="flex justify-between items-center leading-none mt-12"
    >
      <button
        @click="$emit('decline', report)"
        class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer"
      >Declinar</button>
      <button @click="$emit('approve', report)" class="btn bg-grad-green/orange w-1/3 h-9">Aprobar</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    report: {
      required: true
    }
  },
  created() {
      delete this.report.id;
      delete this.report.hasItbis;
      delete this.report.hasTip;
      delete this.report.type;
  },
  data() {
    return {
      user: this.$store.getters["auth/getLoggedUser"],
      options: {
        rnc: "RNC",
        ncf: "NCF",
        invoiceDate: "Fecha",
        details: "Detalles",
        bussinessType: "Tipo de comercio",
        provider: "Proveedor",
        paymentMethod: "Metodo de pago",
        tip: "Propina",
        itbis: "ITBIS",
        subTotal: "Sub Total",
        total: "Total",
        status: "Estatus",
        description: "Descripción",
        place: " Lugar",
        comment: "Comentario",
        witnesses: "Presentes"
      }
    };
  }
};
</script>


</template>
