<template>
  <div class="flex flex-col py-8 px-2 mt-10 table:mt-auto">
    <slot name="header"></slot>
    <div class="flex flex-wrap tablet:mt-4">
      <div
        v-for="(property, key) in report"
        :key="key"
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
        v-if="report.status =='Pendiente'"
        @click="updateStatus('Declinado')"
        class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer"
      >Declinar</button>
    
      <button 
      v-if="report.status =='Pendiente'"
      @click="updateStatus('Aprobado')"
      class="btn bg-grad-green/orange w-1/3 h-9"
      >Aprobar</button>
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
      this.reportId = this.report.id;
      this.reportType = this.report.type;
      delete this.report.id;
      delete this.report.type;
      delete this.report.hasItbis;
      delete this.report.hasTip;
  },
  data() {
    return {
      user: this.$store.getters["auth/getLoggedUser"],
      reportId: null,
      reportType: null,
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
  },methods:{
    async updateStatus(updateStatus){
      const reportId = this.reportId;
      if(this.reportType == undefined){
        await this.$store.dispatch("reports/UpdateStatusReportMinorExpenses", {reportId, updateStatus}); 
      }else{
        await this.$store.dispatch("reports/UpdateStatusReportRefundable", {reportId, updateStatus}); 
      }

  }
}}
</script>


</template>
