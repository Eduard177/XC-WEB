<template>
  <div class="flex flex-col h-screen w-1/3 shadow px-3">
    <div>
      <svg
        class="mt-4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30"
        height="28.696"
        viewBox="0 0 30 28.696"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            y1="0.5"
            x2="1"
            y2="0.5"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ed9e21"></stop>
            <stop offset="0.163" stop-color="#c29f37"></stop>
            <stop offset="0.577" stop-color="#5aa26e"></stop>
            <stop offset="0.865" stop-color="#19a591"></stop>
            <stop offset="1" stop-color="#00a69f"></stop>
          </linearGradient>
        </defs>
        <g id="Group_364" data-name="Group 364" transform="translate(-19.5 -1296.296)">
          <path
            id="Path_333"
            data-name="Path 333"
            d="M48.522,1309.666H31.971l3.548-3.548a.979.979,0,0,0-1.384-1.384l-5.218,5.218a.994.994,0,0,0-.107.128l-.014.019c-.011.017-.021.034-.031.052l-.019.031-.021.044c-.007.015-.014.029-.02.044l-.013.035c-.007.019-.014.038-.02.057l-.006.023c-.006.023-.012.047-.017.071v.006a.993.993,0,0,0-.018.182.981.981,0,0,0,.072.368h0a.8.8,0,0,0,.04.084v0a1.008,1.008,0,0,0,.181.243l5.211,5.211a.969.969,0,0,0,.691.287.978.978,0,0,0,.693-1.67l-3.548-3.548H48.522a.978.978,0,1,0,0-1.956Z"
            fill="url(#linear-gradient)"
          ></path>
          <path
            id="Path_334"
            data-name="Path 334"
            d="M46.65,1314.625a.979.979,0,0,0-1.269.553,12.392,12.392,0,1,1,0-9.066.978.978,0,0,0,1.821-.716,14.347,14.347,0,1,0,0,10.5A.98.98,0,0,0,46.65,1314.625Z"
            fill="url(#linear-gradient)"
          ></path>
        </g>
      </svg>

      <UserProfileInfo/>
    </div>

    <div>
      <!-- reportes -->
      <div class="flex justify-around mt-20">
        <div class="flex flex-col items-center">
          <span class="text-4xl text-orange-400 font-bold">13</span>
          <p>Reportes</p>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-teal-500 font-bold">13</span>
          <p>Pendientes</p>
        </div>
      </div>

      <div class="flex flex-col items-center mt-8">
        <span class="text-4xl text-green-700 font-bold">0</span>
        <p>Pendientes</p>
      </div>
    </div>

    <!-- Informacion -->
    <div class="mt-20 flex flex-col items-center">
      <h1 class="text-4xl">Información</h1>
      <div class="text-md text-gray-800">
        <span>Front-End Developer ||</span>
        <span>XpertCode</span>
      </div>
      <p class="text-md text-gray-800">809-345-5678</p>
    </div>
  </div>
</template>

<script>
import UserProfileInfo from "./UserProfileInfo";

export default {
  components: { UserProfileInfo }
};
</script>
