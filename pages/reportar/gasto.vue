<template>
  <div>
    <h1 class="text-xl">Reporte Gasto</h1>
    <section class="mt-20">
      <div class="flex flex-col w-1/5">
        <label for="date">Fecha del consumo</label>
        <input
          class="w-40 bg-transparent text-gray-700 border-solid border-gray-700 border-b-2 outline-none no-spin"
          type="date"
          name="date"
          value
        >
      </div>

      <div class="mt-12 flex">
        <div class="flex flex-col w-1/2 pr-8">
          <label>Descripción</label>
          <input class="form-input" placeholder="Pago Uber">
        </div>

        <div class="flex flex-col w-1/2 pr-8">
          <label for>Lugar</label>
          <input class="form-input" placeholder="Calle Heriberto Núñez # 4 Urbanización Fernández">
        </div>
      </div>

      <div class="mt-12 flex">
        <div class="flex flex-col w-1/2 pr-8">
          <label for>Personas Presentes</label>
          <input class="form-input" placeholder="Juan, Predro...">
        </div>

        <div class="flex flex-col w-1/2 pr-8">
          <label for>Monto</label>
          <input class="form-input" placeholder="RD$180.20">
        </div>
      </div>
      <div class="mt-12 flex flex-col w-full pr-8">
        <label for>Comentario</label>
        <input class="form-input">
      </div>

      <div class="flex justify-around mt-12">
        <a class="btn bg-grad-gold/orange w-1/3" href="#">Cancelar</a>
        <a class="btn bg-grad-green/orange w-1/3" href="#">Reportar</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "main"
};
</script>