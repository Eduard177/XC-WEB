<template>
  <div class="flex flex-col">
    <div class="px-4 py-2">
      <nuxt-link to="/usuarios">
        <figure
          class="flex justify-center items-center group hover:bg-orange-500 items-center bg-white rounded-full w-10 h-10"
        >
          <svg
            class="w-4 fill-current group-hover:text-white text-green-700"
            viewBox="0 0 14.291 15.708"
          >
            <g id="surface1" transform="translate(-2651.709 -393.124)">
              <path
                id="Path_514"
                data-name="Path 514"
                d="M2662.415,399.924v-2.973a.343.343,0,0,0-.095-.226l-3.333-3.5a.332.332,0,0,0-.239-.1h-5.284a1.76,1.76,0,0,0-1.755,1.771v9.992a1.749,1.749,0,0,0,1.755,1.758h4.171a4.5,4.5,0,1,0,4.78-6.721Zm-3.339-5.651,2.236,2.354h-1.451a.79.79,0,0,1-.785-.789Zm-5.612,11.717a1.1,1.1,0,0,1-1.1-1.1v-9.992a1.106,1.106,0,0,1,1.1-1.117h4.957v2.06a1.444,1.444,0,0,0,1.44,1.444h1.9v2.557c-.1,0-.177-.014-.262-.014a4.57,4.57,0,0,0-2.986,1.127h-4.157a.327.327,0,1,0,0,.654h3.549a5.232,5.232,0,0,0-.577,1.015h-2.972a.327.327,0,1,0,0,.655h2.759a4.453,4.453,0,0,0-.124,1.054,4.369,4.369,0,0,0,.321,1.664h-3.847Zm8.031,2.191a3.847,3.847,0,1,1,3.847-3.847A3.852,3.852,0,0,1,2661.5,408.181Z"
              ></path>
              <path
                id="Path_515"
                data-name="Path 515"
                d="M2654.355,399.966h3.316a.327.327,0,0,0,0-.655h-3.316a.327.327,0,1,0,0,.655Z"
              ></path>
              <path
                id="Path_516"
                data-name="Path 516"
                d="M2661.75,403.764h-.523a1.849,1.849,0,0,0-1.857,1.847v1.512a.34.34,0,0,0,.328.341h3.581a.328.328,0,0,0,.315-.341v-1.512A1.838,1.838,0,0,0,2661.75,403.764Zm1.189,3.045h-2.914v-1.2a1.2,1.2,0,0,1,1.2-1.192h.523a1.183,1.183,0,0,1,1.189,1.192Z"
              ></path>
              <path
                id="Path_517"
                data-name="Path 517"
                d="M2661.488,403.7a1.365,1.365,0,1,0-1.365-1.365A1.367,1.367,0,0,0,2661.488,403.7Zm0-2.076a.71.71,0,1,1-.71.711A.71.71,0,0,1,2661.488,401.629Z"
              ></path>
            </g>
          </svg>
        </figure>
      </nuxt-link>

      <span
        v-if="page == 'usuarios'"
        class="absolute flex flex-col -ml-12 -mt-10 px-3 py-1 text-green-700 text-2xl"
      >&bull;</span>
    </div>

    <div class="relative px-4 py-2">
      <a @click="show_options = !show_options;">
        <figure
          class="flex justify-center cursor-pointer items-center group hover:bg-orange-500 items-center bg-white rounded-full w-10 h-10"
        >
          <svg
            class="w-4 fill-current group-hover:text-white text-green-700"
            viewBox="0 0 13.85 18"
          >
            <g id="Group_581" data-name="Group 581" transform="translate(-2651.993 -448.792)">
              <path
                id="Path_499"
                data-name="Path 499"
                d="M2662.4,450.157l-6.209,6.209a.392.392,0,0,0-.1.179l-.533,2.052a.391.391,0,0,0,.379.49.408.408,0,0,0,.1-.012l2.053-.533a.4.4,0,0,0,.178-.1l6.21-6.21h0l1.25-1.25a.392.392,0,0,0,0-.554l-1.519-1.52a.393.393,0,0,0-.554,0l-1.25,1.25h0Zm-4.614,7.654-1.3.338.339-1.3,5.858-5.858.965.966Zm6.142-8.074.966.966-.7.7-.966-.966Z"
              ></path>
              <path
                id="Path_500"
                data-name="Path 500"
                d="M2665.451,453.035a.391.391,0,0,0-.391.391v12.582h-12.284v-14.97h7.248a.392.392,0,0,0,0-.784h-7.639a.392.392,0,0,0-.392.392V466.4a.392.392,0,0,0,.392.392h13.066a.392.392,0,0,0,.392-.392V453.426A.391.391,0,0,0,2665.451,453.035Z"
              ></path>
            </g>
          </svg>
        </figure>
        <span
          v-if="page == 'reportar-gasto' || page == 'reportar-factura'"
          class="absolute flex flex-col -ml-12 -mt-10 px-3 py-1 text-green-700 text-2xl"
        >&bull;</span>
      </a>
      <div
        v-show="show_options"
        class="absolute flex flex-col -ml-40 -mt-12 bg-white shadow-xl rounded w-32 h-16 px-3 py-1 text-gray-700"
      >
        <nuxt-link class="hover:text-orange-500 cursor-pointer" to="/reportar/gasto">Gasto</nuxt-link>
        <nuxt-link class="mt-2 hover:text-orange-500 cursor-pointer" to="/reportar/factura">Factura</nuxt-link>
      </div>
    </div>

    <div class="px-4 py-2">
      <nuxt-link to="/">
        <figure
          class="flex justify-center items-center group hover:bg-orange-500 items-center bg-white rounded-full w-10 h-10"
        >
          <svg
            class="w-4 fill-current group-hover:text-white text-green-700"
            viewBox="0 0 15.384 18"
          >
            <path
              id="Path_518"
              data-name="Path 518"
              d="M2666.349,514.551a.436.436,0,0,0-.436.436v7.765h-4.677v-4.875a.436.436,0,0,0-.436-.436h-3.414a.436.436,0,0,0-.436.436v3.865a.436.436,0,0,0,.872,0v-3.429h2.542v4.439h-8.091V512.083l6.82-5.465,6.983,5.6a.436.436,0,1,0,.545-.68l-7.256-5.815a.435.435,0,0,0-.545,0l-7.256,5.815a.437.437,0,0,0-.163.34v11.314a.436.436,0,0,0,.436.435h14.512a.436.436,0,0,0,.436-.435v-8.2A.436.436,0,0,0,2666.349,514.551Z"
              transform="translate(-2651.401 -505.623)"
            ></path>
          </svg>
        </figure>
      </nuxt-link>
      <span
        v-if="page == 'index'"
        class="absolute flex flex-col -ml-12 -mt-10 px-3 py-1 text-green-700 text-2xl"
      >&bull;</span>
    </div>

    <div class="px-4 py-2">
      <a @click="show_reports_options = !show_reports_options">
        <figure
          class="flex justify-center items-center group hover:bg-orange-500 items-center bg-white rounded-full w-10 h-10"
        >
          <svg
            class="w-4 fill-current group-hover:text-white text-green-700"
            viewBox="0 0 14 13.568"
          >
            <g id="Group_523" data-name="Group 523" transform="translate(-2651.999 -564.589)">
              <path
                id="Path_501"
                data-name="Path 501"
                d="M2665.781,572.52l-.713-.712a.747.747,0,0,0-1.055,0l-3.847,3.848-.531,1.944-.129.13a.249.249,0,0,0,0,.351v.005h.005a.245.245,0,0,0,.174.072.248.248,0,0,0,.177-.073l.13-.13,1.945-.53,3.847-3.848A.748.748,0,0,0,2665.781,572.52Zm-5.038,3.266,2.561-2.561,1.06,1.061-2.56,2.56Zm-.226.481.8.8-1.107.3Zm4.91-3.045-.709.71-1.061-1.06.71-.71a.246.246,0,0,1,.348,0l.713.712A.245.245,0,0,1,2665.427,573.222Z"
              ></path>
              <path
                id="Path_502"
                data-name="Path 502"
                d="M2658.75,567.589a.25.25,0,0,0,0,.5h4.5a.25.25,0,0,0,0-.5Z"
              ></path>
              <path
                id="Path_503"
                data-name="Path 503"
                d="M2663.5,571.34a.249.249,0,0,0-.25-.25h-4.5a.25.25,0,0,0,0,.5h4.5A.25.25,0,0,0,2663.5,571.34Z"
              ></path>
              <path
                id="Path_504"
                data-name="Path 504"
                d="M2657.145,566.4a.249.249,0,0,0-.353.027l-1.562,1.822-.956-.717a.25.25,0,1,0-.3.4l1.143.857a.251.251,0,0,0,.34-.037l1.715-2A.251.251,0,0,0,2657.145,566.4Z"
              ></path>
              <path
                id="Path_505"
                data-name="Path 505"
                d="M2657.145,569.9a.249.249,0,0,0-.353.027l-1.562,1.822-.956-.717a.25.25,0,1,0-.3.4l1.143.857a.251.251,0,0,0,.34-.037l1.715-2A.251.251,0,0,0,2657.145,569.9Z"
              ></path>
              <path
                id="Path_506"
                data-name="Path 506"
                d="M2656.792,573.677l-1.562,1.822-.956-.717a.25.25,0,1,0-.3.4l1.143.857a.251.251,0,0,0,.34-.037l1.715-2a.25.25,0,0,0-.38-.325Z"
              ></path>
              <path
                id="Path_507"
                data-name="Path 507"
                d="M2658.25,577.59h-3.207a2.548,2.548,0,0,1-2.544-2.544v-7.413a2.547,2.547,0,0,1,2.544-2.544h7.413a2.547,2.547,0,0,1,2.544,2.544v2.956a.25.25,0,0,0,.5,0v-2.956a3.048,3.048,0,0,0-3.044-3.044h-7.413a3.048,3.048,0,0,0-3.044,3.044v7.412a3.047,3.047,0,0,0,3.044,3.044h3.207a.249.249,0,1,0,0-.5Z"
              ></path>
            </g>
          </svg>
        </figure>
        <span
          v-if="page == 'reportes-pendientes' || page == 'reportes-generados' "
          class="absolute flex flex-col -ml-12 -mt-10 px-3 py-1 text-green-700 text-2xl"
        >&bull;</span>
      </a>

      <div
        v-show="show_reports_options"
        class="absolute flex flex-col -ml-40 -mt-12 bg-white shadow-xl rounded w-32 h-16 px-3 py-1 text-gray-700"
      >
        <nuxt-link class="hover:text-orange-500 cursor-pointer" to="/reportes/pendientes">Pendientes</nuxt-link>
        <nuxt-link
          class="mt-2 hover:text-orange-500 cursor-pointer"
          to="/reportes/generados"
        >Generados</nuxt-link>
      </div>
    </div>

    <div class="px-4 py-2">
      <nuxt-link to="/reports">
        <figure
          class="flex justify-center items-center group hover:bg-orange-500 items-center bg-white rounded-full w-10 h-10"
        >
          <svg class="w-4 fill-current group-hover:text-white text-green-700" viewBox="0 0 14 14">
            <g id="Group_537" data-name="Group 537" transform="translate(-2652 -621.124)">
              <g id="Group_526" data-name="Group 526">
                <g id="Group_525" data-name="Group 525">
                  <path
                    id="Path_508"
                    data-name="Path 508"
                    d="M2665.727,626.832h-1.75a.274.274,0,0,0-.274.273v1.381a.274.274,0,0,0,.547,0v-1.108h1.2v7.2h-1.2v-4.04a.274.274,0,1,0-.547,0v4.04h-.547v-5.66a.274.274,0,0,0-.273-.274h-1.75a.274.274,0,0,0-.274.274v5.66h-.546v-3.746a.274.274,0,0,0-.274-.274h-1.75a.273.273,0,0,0-.273.274v3.746h-.547V632.4a.274.274,0,0,0-.274-.274h-1.75a.273.273,0,0,0-.273.274v2.177h-2.352a.274.274,0,0,1-.273-.274V621.944a.273.273,0,0,1,.273-.273h7.054v1.8a.822.822,0,0,0,.821.821h1.8v3.363a.273.273,0,0,0,.547,0v-3.637a.274.274,0,0,0-.08-.193l-2.625-2.625a.27.27,0,0,0-.193-.08h-7.328a.821.821,0,0,0-.82.82V634.3a.821.821,0,0,0,.82.821h12.907a.274.274,0,0,0,.273-.274V627.1A.273.273,0,0,0,2665.727,626.832Zm-5.306-4.775,1.692,1.692H2660.7a.275.275,0,0,1-.274-.274Zm-3.5,12.52h-1.2v-1.9h1.2Zm2.844,0h-1.2V631.1h1.2Zm2.843,0h-1.2V629.19h1.2Z"
                  ></path>
                </g>
              </g>
              <g id="Group_528" data-name="Group 528">
                <g id="Group_527" data-name="Group 527">
                  <path
                    id="Path_509"
                    data-name="Path 509"
                    d="M2664.17,629.267a.274.274,0,1,0,.08.193A.275.275,0,0,0,2664.17,629.267Z"
                  ></path>
                </g>
              </g>
              <g id="Group_530" data-name="Group 530">
                <g id="Group_529" data-name="Group 529">
                  <path
                    id="Path_510"
                    data-name="Path 510"
                    d="M2655.981,622.62a.274.274,0,0,0-.274.274v.491a2.515,2.515,0,1,0,2.774,2.774h.492a.273.273,0,0,0,.273-.273A3.269,3.269,0,0,0,2655.981,622.62Zm0,5.234a1.969,1.969,0,0,1-.274-3.918v1.95a.274.274,0,0,0,.274.273h1.949A1.972,1.972,0,0,1,2655.981,627.854Zm.273-2.242h0v-2.431a2.724,2.724,0,0,1,2.432,2.431Z"
                  ></path>
                </g>
              </g>
              <g id="Group_532" data-name="Group 532">
                <g id="Group_531" data-name="Group 531">
                  <path
                    id="Path_511"
                    data-name="Path 511"
                    d="M2658.973,629.17h-5.223a.273.273,0,0,0,0,.546h5.223a.273.273,0,1,0,0-.546Z"
                  ></path>
                </g>
              </g>
              <g id="Group_534" data-name="Group 534">
                <g id="Group_533" data-name="Group 533">
                  <path
                    id="Path_512"
                    data-name="Path 512"
                    d="M2655.5,630.489h-1.75a.273.273,0,0,0,0,.547h1.75a.273.273,0,0,0,0-.547Z"
                  ></path>
                </g>
              </g>
              <g id="Group_536" data-name="Group 536">
                <g id="Group_535" data-name="Group 535">
                  <path
                    id="Path_513"
                    data-name="Path 513"
                    d="M2657.063,630.569a.274.274,0,1,0-.194.467.281.281,0,0,0,.194-.08.274.274,0,0,0,0-.387Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </figure>
      </nuxt-link>
      <span
        v-if="page == 'reports'"
        class="absolute flex flex-col -ml-12 -mt-10 px-3 py-1 text-green-700 text-2xl"
      >&bull;</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["page"],
  data() {
    return {
      show_options: false,
      show_reports_options: false
    };
  },
  watch: {
    page() {
      this.show_options = false;
      this.show_reports_options = false;
    }
  }
};
</script>

