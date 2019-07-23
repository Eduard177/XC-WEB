<template>
  <div>
    <section>
      <h2 class="text-xl">Reporte de Gasto Generados</h2>

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
    </section>
    <card-modal :showing="show_modal" @close="show_modal = false">
      <div class="flex flex-col py-8 px-2">
        <div class="flex flex-col lg:flex-row items-center">
          <figure class="flex justify-center items-center w-20 lg:w-1/6 bg-hueso rounded-full">
            <img
              class="rounded-full object-cover"
              src="~/assets/images/olopez.png"
              alt="foto de perfil"
            >
          </figure>

          <div class="flex flex-wrap lg:ml-4">
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">01/07/2019</span>
              <label for>Fecha</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Pago Uber</span>
              <label for>Descripción</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Pro Consumidor</span>
              <label for>Lugar</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Oscar Lopez G.</span>
              <label for>Presentes</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">RD$180</span>
              <label for>Monto</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <span class="border-solid border-b border-black">Ninguno</span>
              <label for>Comentario</label>
            </div>
          </div>
        </div>
        <div class="flex justify-around items-center leading-none mt-12">
          <a
            @click="show_modal = false"
            class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer"
          >Declinar</a>
          <a href="#" class="btn bg-grad-green/orange w-1/3 h-9">Aprobar</a>
        </div>
      </div>
    </card-modal>
  </div>
</template>
<script>
import CardModal from "../../components/CardModal";
export default {
  layout: "main",
  middleware: "administrator",
  components: {
    CardModal
  },
  data() {
    return {
      show_modal: false
    };
  }
};
</script>
