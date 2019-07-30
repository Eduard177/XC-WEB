<template>
  <div v-if="items.length == 0" class="flex justify-center items-center mt-8">
    <h2 class="text-2xl">No se ha encontrado resultados</h2>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>

