<template>
  <div class="flex flex-col">
    <input
      :disabled="disabled"
      :value="value"
      @input="handleInput($event)"
      @change="handleInput($event)"
      class="bg-transparent border-solid border-b border-black outline-none"
      :placeholder="placeholder"
      :type="type"
      min="0"
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
  name: "xc-input",
  props: {
    value: String,
    label: {
      type: String
    },
    placeholder: { type: String },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: "text"
      // validator: val => {
      //   return (
      //     ["url", "text", "password", "email", "search"].indexOf(val) !== -1
      //   );
      // }
    }
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

