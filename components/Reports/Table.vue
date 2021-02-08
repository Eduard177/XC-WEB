<template>
  <table class="w-full mt-4 border-collapse">
    <tbody v-if="type == 'minorExpense'">
      <minor-expense-item
        v-for="(minorExpense, index) in reports"
        :key="index"
        :minorExpense="minorExpense"
        :class="((index % 2) == 0) ? 'bg-white shadow-md' : ''"
        :edit="edit"
        @itemDetails="$emit('itemDetails', $event)"
        @itemEdit="$emit('itemEdit', $event)"
        @itemDelete="$emit('itemDelete', $event)"
      ></minor-expense-item>
    </tbody>
    <tbody v-if="type == 'reimbursables'">
      <reimbursable-item
        v-for="(reimbursable, index) in reports"
        :key="index"
        :reimbursable="reimbursable"
        :edit="edit"
        :class="((index % 2) == 0) ? 'bg-white shadow-md' : ''"
        @itemDetails="$emit('itemDetails', $event)"
        @itemEdit="$emit('itemEdit', $event)"
        @itemDelete="$emit('itemDelete', $event)"
      ></reimbursable-item>
    </tbody>
  </table>
</template>
<script>
import MinorExpenseItem from "../Reports/MinorExpense/Items";
import ReimbursableItem from "../Reports/Reimbursable/Item";
export default {
  components: { MinorExpenseItem, ReimbursableItem },
  props: {
    reports: {
      required: true,
      type: Array
    },
    type: {
      required: true,
      type: String
    },
    edit: {
      required: true,
      type: Boolean
    }
  }
};
</script>

