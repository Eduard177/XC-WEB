<template>
  <div class="flex flex-col">
    <input
      :value="value"
      @change="handleInput($event)"
      class="bg-transparent outline-none no-spin border-solid border-b border-black"
      type="date"
    >
    <label>{{label}}</label>
  </div>
</template>
<script>
export default {
  name: "xc-input-date",
  props: ["value", "label"],
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
