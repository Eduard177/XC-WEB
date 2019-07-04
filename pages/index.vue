<template>
  <div class="container">
    <div>
      <h1 class="title">Bienvenido al sistema de reporte rembolsable</h1>
      <section class="flex justify-start mt-12">
        <figure
          class="flex flex-col justify-center items-center shadow-xl h-56 w-2/5 bg-white rounded-br-xl"
        >
          <span class="text-6xl text-orange-400 font-bold">13</span>
          <p class="text-xl text-black font-light">Reportes Realizados</p>
        </figure>

        <figure
          class="flex flex-col ml-16 justify-center items-center shadow-xl h-56 w-2/5 bg-grad-green/blue rounded-br-xl"
        >
          <svg width="75.838" height="75.838" viewBox="0 0 75.838 75.838">
            <g id="Group_585" data-name="Group 585" transform="translate(-2333.508 -298.286)">
              <path
                id="Path_470"
                data-name="Path 470"
                d="M2371.427,298.286a37.919,37.919,0,1,0,37.919,37.919A37.92,37.92,0,0,0,2371.427,298.286Zm-6.956,57.4-16.7-16.7,5.565-5.565,11.131,11.131,25.044-25.044,5.565,5.565Z"
                fill="#fff"
              ></path>
            </g>
          </svg>

          <p class="text-2xl text-white font-light mt-4">Pagos Completados</p>
        </figure>
      </section>

      <!-- <section class="flex justify-start items-centers mt-6">
        <div class="flex flex-col">
          <h2>Forma de pago</h2>
          <div class>
            <donnut-chart class="mt-6" :data="donnut_chart" :options="options"></donnut-chart>
          </div>
        </div>

        <div class="ml-8">
          <h2>Gasto por tipo</h2>
        </div>
      </section>-->
    </div>
  </div>
</template>
<script>
import DonnutChart from "../components/Charts/Donnut";
export default {
  layout: "main",
  components: {
    DonnutChart
  },
  data() {
    return {
      donnut_chart: {
        labels: ["Caja Chica", "Nomina", "Otros"],
        datasets: [
          {
            data: [20, 70, 10],
            backgroundColor: ["#00A69F", "#15824B", "#ED9E21"],
            weight: 1
          }
        ]
      },
      options: {
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 100
          }
        }
      }
    };
  }
};
</script>
