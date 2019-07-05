<template>
  <div>
    <section>
      <div>
        <h2 class="text-xl">Reporte de Gasto</h2>

        <div class="flex justify-end">
          <input class="p-1 rounded-lg no-spin" type="date" name id>
          <select class="ml-6 px-4 outline-none" name id>
            <option value="1">Estatus</option>
          </select>
        </div>

        <div class="flex flex-wrap lg:flex-col mt-4">
          <div
            @click="show_modal = true"
            class="flex flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer p-4 w-full lg:flex-row lg:justify-around lg:py-2"
          >
            <figure class="flex justify-center items-center w-20 lg:w-1/12 bg-hueso rounded-full">
              <img
                class="rounded-full object-cover"
                src="~/assets/images/olopez.png"
                alt="foto de perfil"
              >
            </figure>

            <div class="flex flex-wrap lg:flex-no-wrap justify-around pl-12 lg:pl-2">
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>8/06/2019</span>
                <label for>Fecha</label>
              </div>

              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pago Uber</span>
                <label for>Descripcion</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pro Consumidor</span>
                <label for>Lugar</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Juan, Pedro</span>
                <label for>Presentes</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>RD$ 189.02</span>
                <label for>Monto</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Ninguno</span>
                <label for>Comentario</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap lg:flex-col mt-4">
          <div
            @click="show_modal = true"
            class="flex flex-col justify-center items-center cursor-pointer p-4 w-full lg:flex-row lg:justify-around lg:py-2"
          >
            <figure class="flex justify-center items-center w-20 lg:w-1/12 bg-white rounded-full">
              <img
                class="rounded-full object-cover"
                src="~/assets/images/olopez.png"
                alt="foto de perfil"
              >
            </figure>

            <div class="flex flex-wrap lg:flex-no-wrap justify-around pl-12 lg:pl-2">
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>8/06/2019</span>
                <label for>Fecha</label>
              </div>

              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pago Uber</span>
                <label for>Descripcion</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pro Consumidor</span>
                <label for>Lugar</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Juan, Pedro</span>
                <label for>Presentes</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>RD$ 189.02</span>
                <label for>Monto</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Ninguno</span>
                <label for>Comentario</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap lg:flex-col mt-4">
          <div
            @click="show_modal = true"
            class="flex flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer p-4 w-full lg:flex-row lg:justify-around lg:py-2"
          >
            <figure class="flex justify-center items-center w-20 lg:w-1/12 bg-hueso rounded-full">
              <img
                class="rounded-full object-cover"
                src="~/assets/images/olopez.png"
                alt="foto de perfil"
              >
            </figure>

            <div class="flex flex-wrap lg:flex-no-wrap justify-around pl-12 lg:pl-2">
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>8/06/2019</span>
                <label for>Fecha</label>
              </div>

              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pago Uber</span>
                <label for>Descripcion</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pro Consumidor</span>
                <label for>Lugar</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Juan, Pedro</span>
                <label for>Presentes</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>RD$ 189.02</span>
                <label for>Monto</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Ninguno</span>
                <label for>Comentario</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <div>
        <h2 class="text-xl">Reporte de Factura</h2>

        <div class="flex justify-end">
          <input class="p-1 rounded-lg no-spin" type="date" name id>
          <select class="ml-6 px-4 outline-none" name id>
            <option value="1">Estatus</option>
          </select>
        </div>

        <div class="flex flex-wrap lg:flex-col mt-4">
          <div
            @click="show_modal = true"
            class="flex flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer p-4 w-full lg:flex-row lg:justify-around lg:py-2"
          >
            <figure class="flex justify-center items-center w-20 lg:w-1/12 bg-hueso rounded-full">
              <img
                class="rounded-full object-cover"
                src="~/assets/images/olopez.png"
                alt="foto de perfil"
              >
            </figure>

            <div class="flex flex-wrap lg:flex-no-wrap justify-around pl-12 lg:pl-2">
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>8/06/2019</span>
                <label for>Fecha</label>
              </div>

              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pago Uber</span>
                <label for>Descripcion</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pro Consumidor</span>
                <label for>Lugar</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Juan, Pedro</span>
                <label for>Presentes</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>RD$ 189.02</span>
                <label for>Monto</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Ninguno</span>
                <label for>Comentario</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap lg:flex-col mt-4">
          <div
            @click="show_modal = true"
            class="flex flex-col justify-center items-center cursor-pointer p-4 w-full lg:flex-row lg:justify-around lg:py-2"
          >
            <figure class="flex justify-center items-center w-20 lg:w-1/12 bg-white rounded-full">
              <img
                class="rounded-full object-cover"
                src="~/assets/images/olopez.png"
                alt="foto de perfil"
              >
            </figure>

            <div class="flex flex-wrap lg:flex-no-wrap justify-around pl-12 lg:pl-2">
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>8/06/2019</span>
                <label for>Fecha</label>
              </div>

              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pago Uber</span>
                <label for>Descripcion</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pro Consumidor</span>
                <label for>Lugar</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Juan, Pedro</span>
                <label for>Presentes</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>RD$ 189.02</span>
                <label for>Monto</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Ninguno</span>
                <label for>Comentario</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap lg:flex-col mt-4">
          <div
            @click="show_modal = true"
            class="flex flex-col justify-center items-center bg-white shadow-md rounded-lg cursor-pointer p-4 w-full lg:flex-row lg:justify-around lg:py-2"
          >
            <figure class="flex justify-center items-center w-20 lg:w-1/12 bg-hueso rounded-full">
              <img
                class="rounded-full object-cover"
                src="~/assets/images/olopez.png"
                alt="foto de perfil"
              >
            </figure>

            <div class="flex flex-wrap lg:flex-no-wrap justify-around pl-12 lg:pl-2">
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>8/06/2019</span>
                <label for>Fecha</label>
              </div>

              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pago Uber</span>
                <label for>Descripcion</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Pro Consumidor</span>
                <label for>Lugar</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Juan, Pedro</span>
                <label for>Presentes</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>RD$ 189.02</span>
                <label for>Monto</label>
              </div>
              <div class="flex flex-col mt-2 lg:px-3 w-1/2 lg:w-auto">
                <span>Ninguno</span>
                <label for>Comentario</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: "main",
  middleware: "authenticated"
};
</script>