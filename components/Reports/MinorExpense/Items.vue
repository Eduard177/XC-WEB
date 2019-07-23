<template>
  <tr
    class="flex flex-col justify-center items-center p-4 w-full lg:flex-row lg:justify-around lg:py-2 rounded-lg"
  >
    <td class="flex justify-center items-center lg:w-1/12 bg-hueso rounded-full">
      <img class="rounded-full object-cover" src="~/assets/images/olopez.png" alt="foto de perfil">
    </td>
    <td class="flex flex-col mt-2 lg:px-3 w-1/3 lg:w-auto">
      <span>{{minorExpense.invoice_date}}</span>
      <label>Fecha</label>
    </td>
    <td class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
      <span>{{minorExpense.description}}</span>
      <label>Descripcion</label>
    </td>
    <td class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
      <span>{{minorExpense.place}}</span>
      <label>Lugar</label>
    </td>
    <!-- <td class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
      <span>{{minorExpense.witnesses == "" ? 'N/A' : minorExpense.witnesses}}</span>
      <label>Presentes</label>
    </td>-->
    <td class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
      <span>{{minorExpense.total}}</span>
      <label>Monto</label>
    </td>
    <td class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
      <span>{{minorExpense.status}}</span>
      <label>Status</label>
    </td>

    <td class="flex mt-2 lg:px-3 w-1/2 lg:w-auto">
      <actions
        :edit="edit"
        @details="$emit('itemDetails', minorExpense)"
        @edit="$emit('itemEdit', minorExpense)"
        @delete="$emit('itemDelete', minorExpense)"
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
    minorExpense: {
      required: true,
      type: Object
    },
    edit: {
      required: true,

      type: Boolean
    }
  }
};
</script>

