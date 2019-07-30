<template>
  <div class="flex flex-col">
    <select
      :value="value"
      @input="handleInput($event)"
      class="border-solid border-b bg-white border-black"
    >
      <slot></slot>
    </select>
    <div class="flex justify-between">
      <label v-if="!error">{{label}}</label>
      <span class="text-xs text-red-500 justi">{{ error }}</span>
    </div>
  </div>
</template>

<script>
export default {
  $_veeValidate: {
    name() {
      return this.label;
    },
    value() {
      return this.value;
    }
  },
  name: "xc-input-select",
  props: ["value", "label", "error"],
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

