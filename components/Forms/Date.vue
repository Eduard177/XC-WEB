<template>
  <div class="flex flex-col">
    <input
      ref="input"
      :value="value"
      @change="handleInput($event)"
      class="bg-transparent outline-none no-spin border-solid border-b border-black"
      type="date"
    >
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
  name: "xc-input-date",
  props: {
    value: {
      type: [Date, String],
      default: null
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      required: false
    }
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
