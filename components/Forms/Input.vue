<template>
  <div class="flex flex-col">
    <input
      :value="value"
      @input="handleInput($event)"
      class="bg-transparent border-solid border-b border-black outline-none"
      :placeholder="placeholder"
      :type="type"
    >
    <label>{{label}}</label>
  </div>
</template>
<script>
export default {
  name: "xc-input",
  props: ["value", "placeholder", "label", "type"],
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

