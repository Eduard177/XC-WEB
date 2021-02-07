<template>
  <tr
    class="flex flex-col justify-center items-center p-4 w-full tablet:flex-row tablet:justify-around tablet:py-2 rounded-lg"
  >
    <td class="flex justify-center items-center tablet:w-1/12 bg-hueso rounded-full">
      <img class="rounded-full object-cover" src="~/assets/images/olopez.png" alt="foto de perfil">
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/3 tablet:w-auto">
      <span>{{reimbursable.invoiceDate}}</span>
      <label>Fecha</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{reimbursable.provider}}</span>
      <label>Proveedor</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{reimbursable.rnc}}</span>
      <label>RNC</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>RD${{parseInt(reimbursable.total).toFixed(2)}}</span>
      <label>Total</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{reimbursable.status }}</span>
      <label>Status</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <actions
        :edit="edit"
        @details="$emit('itemDetails', reimbursable)"
        @edit="$emit('itemEdit', reimbursable)"
        @delete="$emit('itemDelete', reimbursable)"
      ></actions>
    </td>
  </tr>
</template>
<script>
import Actions from "../Actions";

export default {
  components: {
    Actions
  },
  props: {
    edit: {
      required: true
    },
    reimbursable: {
      required: true,
      type: Object
    }
  }
};
</script>

