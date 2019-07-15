<template>
  <div class="flex flex-col py-8 px-2">
    <slot name="header"></slot>
    <div class="flex flex-wrap lg:mt-4">
      <div
        v-for="(property, key) in report"
        :key="key"
        v-if="key !='user'"
        class="w-1/2 flex flex-col my-3 pr-6"
      >
        <span v-if="key != 'status'" class="border-solid">{{property}}</span>
        <span v-else class="border-solid">{{property == false ? 'Pendiente' : 'Aprobado'}}</span>
        <label>{{options[key] }}</label>
      </div>
    </div>
    <div
      v-if="user.rol == 'Administrator'"
      class="flex justify-between items-center leading-none mt-12"
    >
      <button class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer">Declinar</button>
      <button class="btn bg-grad-green/orange w-1/3 h-9">Aprobar</button>
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
  data() {
    return {
      user: this.$store.getters["auth/getLoggedUser"],
      options: {
        rnc: "RNC",
        ncf: "NCF",
        invoice_date: "Fecha",
        details: "Detalles",
        bussiness_type: "Tipo de comercio",
        provider: "Proveedor",
        payment_method: "Metodo de pago",
        tip: "Propina",
        itbis: "ITBIS",
        sub_total: "Sub Total",
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
