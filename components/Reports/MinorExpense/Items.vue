<template>
  <tr
    class="flex flex-wrap justify-center items-center p-4 w-full tablet:flex-no-wrap tablet:justify-around tablet:py-2 rounded-lg"
  >
    <td
      v-if="$mq != 'sm'"
      class="flex justify-center items-center tablet:w-1/12 bg-hueso rounded-full"
    >
      <img
        v-if="minorExpense.image_url"
        class="rounded-full object-cover"
        :src="api_url + minorExpense.image_url"
        alt="foto de perfil"
      />
      <avatar
        :lighten="10"
        :size="80"
        color="grey"
        backgroundColor="ccc"
        v-else
        :username="minorExpense.description"
      ></avatar>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{ minorExpense.invoiceDate }}</span>
      <label>Fecha</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{ minorExpense.description }}</span>
      <label>Descripcion</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{ minorExpense.place }}</span>
      <label>Lugar</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{ minorExpense.total }}</span>
      <label>Monto</label>
    </td>
    <td class="flex flex-col mt-2 tablet:px-3 w-1/2 tablet:w-auto">
      <span>{{ minorExpense.status }}</span>
      <label>Status</label>
    </td>

    <td class="flex mt-2 tablet:px-3 w-1/2 tablet:w-auto">
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
import Avatar from "vue-avatar";
import Actions from "../Actions";

export default {
  components: {
    Avatar,
    Actions,
  },
  data() {
    return {
      api_url: process.env.API_URL,
    };
  },
  props: {
    minorExpense: {
      required: true,
      type: Object,
    },
    edit: {
      required: true,

      type: Boolean,
    },
  },
};
</script>
