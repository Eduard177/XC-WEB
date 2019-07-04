<template>
  <div>
    <h1 class="text-xl">Usuarios</h1>
    <section class="flex justify-start flex-wrap mt-8">
      <div
        class="flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-1/4 mt-6 ml-6 bg-gradient-orange-40% rounded-br-xl"
      >
        <figure
          @click="show_modal = true"
          class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.91"
            height="31.91"
            viewBox="0 0 31.91 31.91"
          >
            <g id="Group_438" data-name="Group 438" transform="translate(-472.897 -1491.214)">
              <path
                id="Path_392"
                data-name="Path 392"
                d="M472.9,1503.5h12.286v-12.287h7.337V1503.5h12.287v7.337H492.52v12.286h-7.337v-12.286H472.9Z"
                fill="#ed9e21"
              ></path>
            </g>
          </svg>
        </figure>
        <h3 class="mt-4 text-xl text-orange-500 font-bold">Nombre</h3>
        <p class="text-xs font-light">Correo</p>

        <div class="mt-2 text-xs font-light">
          <span>Cargo</span> ||
          <span>Ubicacion</span>
        </div>
        <p class="mt-2 text-sm text-orange-500 font-light">000-000-000</p>
      </div>

      <div
        class="flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-1/4 mt-6 ml-6 bg-gradient-green-40% rounded-br-xl"
      >
        <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
          <img
            class="rounded-full object-cover"
            src="~/assets/images/olopez.png"
            alt="foto de perfil"
          >
        </figure>
        <h3 class="mt-4 text-xl text-orange-500 font-bold">Oscar Lopez</h3>
        <p class="text-xs font-light">olopez@xpertcode.com.do</p>

        <div class="mt-2 text-xs font-light">
          <span>Cargo</span> ||
          <span>Ubicacion</span>
        </div>
        <p class="mt-2 text-sm text-orange-500 font-light">809-696-6784</p>
      </div>
      <div
        class="flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-1/4 mt-6 ml-6 bg-gradient-green-40% rounded-br-xl"
      >
        <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
          <img
            class="rounded-full object-cover"
            src="~/assets/images/olopez.png"
            alt="foto de perfil"
          >
        </figure>
        <h3 class="mt-4 text-xl text-orange-500 font-bold">Oscar Lopez</h3>
        <p class="text-xs font-light">olopez@xpertcode.com.do</p>

        <div class="mt-2 text-xs font-light">
          <span>Cargo</span> ||
          <span>Ubicacion</span>
        </div>
        <p class="mt-2 text-sm text-orange-500 font-light">809-696-6784</p>
      </div>
      <div
        class="flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-1/4 mt-6 ml-6 bg-gradient-green-40% rounded-br-xl"
      >
        <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
          <img
            class="rounded-full object-cover"
            src="~/assets/images/olopez.png"
            alt="foto de perfil"
          >
        </figure>
        <h3 class="mt-4 text-xl text-orange-500 font-bold">Oscar Lopez</h3>
        <p class="text-xs font-light">olopez@xpertcode.com.do</p>

        <div class="mt-2 text-xs font-light">
          <span>Cargo</span> ||
          <span>Ubicacion</span>
        </div>
        <p class="mt-2 text-sm text-orange-500 font-light">809-696-6784</p>
      </div>
      <div
        class="flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-1/4 mt-6 ml-6 bg-gradient-green-40% rounded-br-xl"
      >
        <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
          <img
            class="rounded-full object-cover"
            src="~/assets/images/olopez.png"
            alt="foto de perfil"
          >
        </figure>
        <h3 class="mt-4 text-xl text-orange-500 font-bold">Oscar Lopez</h3>
        <p class="text-xs font-light">olopez@xpertcode.com.do</p>

        <div class="mt-2 text-xs font-light">
          <span>Cargo</span> ||
          <span>Ubicacion</span>
        </div>
        <p class="mt-2 text-sm text-orange-500 font-light">809-696-6784</p>
      </div>
      <div
        class="flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-1/4 mt-6 ml-6 bg-gradient-green-40% rounded-br-xl"
      >
        <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
          <img
            class="rounded-full object-cover"
            src="~/assets/images/olopez.png"
            alt="foto de perfil"
          >
        </figure>
        <h3 class="mt-4 text-xl text-orange-500 font-bold">Oscar Lopez</h3>
        <p class="text-xs font-light">olopez@xpertcode.com.do</p>

        <div class="mt-2 text-xs font-light">
          <span>Cargo</span> ||
          <span>Ubicación</span>
        </div>
        <p class="mt-2 text-sm text-orange-500 font-light">809-696-6784</p>
      </div>
    </section>
    <card-modal :showing="show_modal" @close="show_modal = false">
      <div class="flex flex-col py-8 px-2">
        <div class="flex">
          <figure class="pr-8 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="107.484"
              height="107.484"
              viewBox="0 0 107.484 107.484"
            >
              <g id="Group_152" data-name="Group 152" transform="translate(-312.606 -2425.181)">
                <circle
                  id="Ellipse_47"
                  data-name="Ellipse 47"
                  cx="53.742"
                  cy="53.742"
                  r="53.742"
                  transform="translate(312.606 2425.181)"
                  fill="#f2f2f2"
                ></circle>
                <g id="Group_151" data-name="Group 151">
                  <path
                    id="Path_135"
                    data-name="Path 135"
                    d="M351.29,2465.618a2.961,2.961,0,1,0,2.961,2.961A2.959,2.959,0,0,0,351.29,2465.618Z"
                    fill="#ed9e21"
                  ></path>
                  <path
                    id="Path_136"
                    data-name="Path 136"
                    d="M373,2470.489a5.781,5.781,0,0,0,2.281.445c2.182,0,3.949-1.065,3.949-2.382s-1.767-2.382-3.949-2.382a5.849,5.849,0,0,0-2.208.408,1.432,1.432,0,0,0-.994-.408h-.576a1.41,1.41,0,0,0-1.394,1.263c-1.771.185-3.078.824-3.078,1.59,0,.912,1.84,1.648,4.125,1.648A9.547,9.547,0,0,0,373,2470.489Z"
                    fill="#ed9e21"
                  ></path>
                  <path
                    id="Path_137"
                    data-name="Path 137"
                    d="M385.028,2476.522v-16.168a.879.879,0,0,0-.881-.878h-41.86a.886.886,0,0,0-.892.878v36.23a.888.888,0,0,0,.892.883h27.8a12.913,12.913,0,1,0,14.937-20.945Zm-23.865-2.981c-4.782-4.775-9.406,13.7-9.406,13.7h-6.321v-23.759h36.289v11.67a12.833,12.833,0,0,0-15.268,7.766C365.453,2479.968,363.764,2476.149,361.163,2473.541Zm17.308,24.159a10.057,10.057,0,1,1,10.06-10.059A10.058,10.058,0,0,1,378.471,2497.7Z"
                    fill="#ed9e21"
                  ></path>
                  <path
                    id="Path_138"
                    data-name="Path 138"
                    d="M380.225,2480.607h-4.294v4.9h-5v4.294h5v5.039h4.294V2489.8h4.94V2485.5h-4.94Z"
                    fill="#ed9e21"
                  ></path>
                </g>
              </g>
            </svg>
          </figure>

          <div class="flex flex-wrap">
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <input class="no-spin border-solid border-b border-black" type="date">
              <label for>Fecha de ingreso</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <input class="border-solid border-b border-black" placeholder="White House">
              <label for>Ubicación</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <input
                class="border-solid border-b border-black"
                placeholder="dtrump@xpertcode.com.do"
              >
              <label for>Correo</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <input class="border-solid border-b border-black" placeholder="Donald Trump">
              <label for>Nombre</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <input class="border-solid border-b border-black" placeholder="Presidente">
              <label for>Cargo</label>
            </div>
            <div class="w-1/2 flex flex-col my-3 pr-6">
              <input class="border-solid border-b border-black" placeholder="8492556677">
              <label for>Teléfono Personal</label>
            </div>
          </div>
        </div>
        <div class="flex justify-around items-center leading-none mt-12">
          <a
            @click="show_modal = false"
            class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer"
          >Cancelar</a>
          <a href="#" class="btn bg-grad-green/orange w-1/3 h-9">Agregar</a>
        </div>
      </div>
    </card-modal>
  </div>
</template>
<script>
import CardModal from "../components/CardModal";

export default {
  layout: "main",
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
