<template>
  <div class="flex flex-col">
    <select
      :value="value"
      @input="handleInput($event)"
      class="border-solid border-b bg-white border-black"
    >
      <slot>
        <option selected value="Basic_user">Usuario Basico</option>
        <option value="Administrator">Administrador</option>
      </slot>
    </select>
    <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "xc-input-select",
  props: ["value", "label"],
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

