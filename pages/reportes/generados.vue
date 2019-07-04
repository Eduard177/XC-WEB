<template>
  <section>
    <div>
      <h2 class="text-xl">Reporte de Gasto Generados</h2>

      <div class="flex justify-end">
        <input class="p-1 rounded-lg no-spin" type="date" name id>
        <select class="ml-6 px-4 outline-none" name id>
          <option value="1">Estatus</option>
        </select>
      </div>

      <div class="flex flex-col mt-8">
        <div class="flex justify-around items-center bg-white shadow-md rounded-lg py-2">
          <figure class="flex justify-center items-center w-16 bg-hueso rounded-full">
            <img
              class="rounded-full object-cover"
              src="~/assets/images/olopez.png"
              alt="foto de perfil"
            >
          </figure>

          <div class="flex flex-col">
            <span>8/06/2019</span>
            <label for>Fecha</label>
          </div>

          <div class="flex flex-col">
            <span>Pago Uber</span>
            <label for>Descripcion</label>
          </div>
          <div class="flex flex-col">
            <span>Pro Consumidor - Xpertcode</span>
            <label for>Lugar</label>
          </div>
          <div class="flex flex-col">
            <span>Juan, Pedro</span>
            <label for>Presentes</label>
          </div>
          <div class="flex flex-col">
            <span>RD$ 189.02</span>
            <label for>Monto</label>
          </div>
          <div class="flex flex-col">
            <span>Ninguno</span>
            <label for>Comentario</label>
          </div>
        </div>

        <div class="flex justify-around items-center rounded-lg py-2 mt-2">
          <figure class="flex justify-center items-center w-16 bg-hueso rounded-full">
            <img
              class="rounded-full object-cover"
              src="~/assets/images/olopez.png"
              alt="foto de perfil"
            >
          </figure>

          <div class="flex flex-col">
            <span>8/06/2019</span>
            <label for>Fecha</label>
          </div>

          <div class="flex flex-col">
            <span>Pago Uber</span>
            <label for>Descripcion</label>
          </div>
          <div class="flex flex-col">
            <span>Pro Consumidor - Xpertcode</span>
            <label for>Lugar</label>
          </div>
          <div class="flex flex-col">
            <span>Juan, Pedro</span>
            <label for>Presentes</label>
          </div>
          <div class="flex flex-col">
            <span>RD$ 189.02</span>
            <label for>Monto</label>
          </div>
          <div class="flex flex-col">
            <span>Ninguno</span>
            <label for>Comentario</label>
          </div>
        </div>

        <div class="flex justify-around items-center bg-white shadow-md rounded-lg py-2">
          <figure class="flex justify-center items-center w-16 bg-hueso rounded-full">
            <img
              class="rounded-full object-cover"
              src="~/assets/images/olopez.png"
              alt="foto de perfil"
            >
          </figure>

          <div class="flex flex-col">
            <span>8/06/2019</span>
            <label for>Fecha</label>
          </div>

          <div class="flex flex-col">
            <span>Pago Uber</span>
            <label for>Descripcion</label>
          </div>
          <div class="flex flex-col">
            <span>Pro Consumidor - Xpertcode</span>
            <label for>Lugar</label>
          </div>
          <div class="flex flex-col">
            <span>Juan, Pedro</span>
            <label for>Presentes</label>
          </div>
          <div class="flex flex-col">
            <span>RD$ 189.02</span>
            <label for>Monto</label>
          </div>
          <div class="flex flex-col">
            <span>Ninguno</span>
            <label for>Comentario</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "main"
};
</script>
