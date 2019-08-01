<template>
  <div class="container flex flex-col tablet:flex tablet:flex-col">
    <img
      class="tablet:max-w-xs tablet:max-w-sm w-56 tablet:w-auto self-center tablet:self-start"
      src="http://xpertcode.com.do/wp-content/uploads/2018/08/XC-logo-final-05.png"
      alt="logo"
    >

    <div class="tablet:flex tablet:mt-12">
      <div class>
        <img
          class="hidden tablet:block tablet:pt-20 tablet:pr-20 tablet:my-0 tablet:mx-auto"
          src="../assets/images/undraw_authentication_fsn5.svg"
          alt
        >
      </div>

      <div>
        <h1
          class="text-3xl text-center mt-6 tablet:mt-12 tablet:text-5xl text-teal-600 font-bold"
        >Bienvenido</h1>
        <p
          class="p-6 text-md text-gray-800 tablet:mt-5"
        >Puedes utilizar esta aplicacion para reportar tus gastos a ser rembolsables por nomina.</p>

        <div class="flex items-center border border-gray-200 border-b-0 rounded-t-lg">
          <div class="ml-3 p-5">
            <img src alt srcset>
          </div>
          <div class="w-full py-4">
            <span class="block text-xs text-gray-800">Correo Electrónico</span>
            <input
              v-model="email"
              v-validate="'required|email'"
              name="email"
              class="w-full focus:outline-none"
              placeholder="dtrump@xpertcode.com.do"
            >
            <!-- <span>{{ errors.first('email') }}</span> -->
          </div>

          <svg
            v-if="errors.first('email')"
            class="mr-5"
            viewBox="0 0 426.667 426.667"
            width="23.167"
            height="23.167"
          >
            <path
              style="fill:#F05228;"
              d="M213.333,0C95.514,0,0,95.514,0,213.333s95.514,213.333,213.333,213.333
	s213.333-95.514,213.333-213.333S331.153,0,213.333,0z M330.995,276.689l-54.302,54.306l-63.36-63.356l-63.36,63.36l-54.302-54.31
	l63.356-63.356l-63.356-63.36l54.302-54.302l63.36,63.356l63.36-63.356l54.302,54.302l-63.356,63.36L330.995,276.689z"
            ></path>
            <g transform="translate(-1155.489 -478.107)"></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <svg
            v-else
            class="mr-5"
            xmlns="http://www.w3.org/2000/svg"
            width="23.167"
            height="23.167"
            viewBox="0 0 23.167 23.167"
          >
            <g transform="translate(-1155.489 -478.107)">
              <circle
                cx="11.584"
                cy="11.584"
                r="11.584"
                transform="translate(1155.489 478.107)"
                fill="#fff"
              ></circle>
              <path
                d="M1167.073,479.395a10.3,10.3,0,1,0,10.3,10.3A10.3,10.3,0,0,0,1167.073,479.395Zm-1.889,15.585-4.533-4.534,1.511-1.511,3.022,3.022,6.8-6.8,1.511,1.511Z"
                fill="#15824b"
              ></path>
            </g>
          </svg>
        </div>

        <div class="flex items-center border border-gray-200 rounded-b-lg">
          <div class="ml-3 p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="31.909"
              viewBox="0 0 26 31.909"
            >
              <g transform="translate(-852.656 -544.365)">
                <path
                  d="M875.111,556.25v-3.317c0-4.724-4.242-8.568-9.455-8.568s-9.454,3.844-9.454,8.568v3.317a4.276,4.276,0,0,0-3.546,4.206V572a4.277,4.277,0,0,0,4.272,4.271h17.457A4.276,4.276,0,0,0,878.656,572V560.455A4.275,4.275,0,0,0,875.111,556.25Zm-17.727-3.317c0-4.073,3.711-7.386,8.272-7.386s8.273,3.313,8.273,7.386v3.25H857.384ZM877.475,572a3.094,3.094,0,0,1-3.09,3.09H856.928a3.093,3.093,0,0,1-3.09-3.09V560.455a3.093,3.093,0,0,1,3.09-3.09h17.457a3.094,3.094,0,0,1,3.09,3.09Z"
                  fill="#999"
                ></path>
                <path
                  d="M865.656,560.911a2.366,2.366,0,0,0-2.363,2.363v3.546a2.363,2.363,0,0,0,4.727,0v-3.546A2.366,2.366,0,0,0,865.656,560.911Zm1.182,5.909a1.182,1.182,0,0,1-2.363,0v-3.546a1.182,1.182,0,1,1,2.363,0Z"
                  fill="#999"
                ></path>
              </g>
            </svg>
          </div>
          <div class="w-full py-4">
            <span class="block text-xs text-gray-800">Constraseña</span>
            <input
              v-model="password"
              v-validate="'required'"
              class="w-full focus:outline-none"
              type="password"
              name="password"
              placeholder="*******"
            >
          </div>

          <svg
            v-if="errors.first('password')"
            class="mr-5"
            viewBox="0 0 426.667 426.667"
            width="23.167"
            height="23.167"
          >
            <path
              style="fill:#F05228;"
              d="M213.333,0C95.514,0,0,95.514,0,213.333s95.514,213.333,213.333,213.333
	s213.333-95.514,213.333-213.333S331.153,0,213.333,0z M330.995,276.689l-54.302,54.306l-63.36-63.356l-63.36,63.36l-54.302-54.31
	l63.356-63.356l-63.356-63.36l54.302-54.302l63.36,63.356l63.36-63.356l54.302,54.302l-63.356,63.36L330.995,276.689z"
            ></path>
            <g transform="translate(-1155.489 -478.107)"></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <svg
            v-else
            class="mr-5"
            xmlns="http://www.w3.org/2000/svg"
            width="23.167"
            height="23.167"
            viewBox="0 0 23.167 23.167"
          >
            <g transform="translate(-1155.489 -478.107)">
              <circle
                cx="11.584"
                cy="11.584"
                r="11.584"
                transform="translate(1155.489 478.107)"
                fill="#fff"
              ></circle>
              <path
                d="M1167.073,479.395a10.3,10.3,0,1,0,10.3,10.3A10.3,10.3,0,0,0,1167.073,479.395Zm-1.889,15.585-4.533-4.534,1.511-1.511,3.022,3.022,6.8-6.8,1.511,1.511Z"
                fill="#15824b"
              ></path>
            </g>
          </svg>
        </div>

        <div class="flex flex-col items-center">
          <span v-if="show_error" class="text-red-600 text-sm mt-2">Complete los campos requeridos</span>
          <a class="mt-4 py-0 text-gray-500 px-auto" href="#">¿Olvidaste tu constraseña?</a>

          <a
            @click="login()"
            class="block mt-10 btn bg-grad-green/orange w-2/3 tablet:w-full"
            href="#"
          >Iniciar Sesión</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from "../mixins/mixin-alert.js";

export default {
  name: "login",
  middleware: "notAuthenticated",
  mixins: [Alert],
  data() {
    return {
      email: "",
      password: "",
      show_error: false
    };
  },
  methods: {
    async login() {
      try {
        this.loader = this.$loading.show({});

        const validated = await this.$validator.validateAll();

        if (validated) {
          await this.$store.dispatch("auth/login", {
            username: this.email,
            password: this.password
          });

          if (await this.$store.getters["auth/getIsLoggedIn"]) {
            await this.hideLoading(this.loader);
            this.$router.push("/");
          }
        } else {
          await this.hideLoading(this.loader);
          this.fireAlert("warning", "Complete los campos requeridos", "top");
        }

        // throw { message: "Complete los campos requeridos", status: 400 };
      } catch (error) {
        if (error.request.status == 400) {
          let msg = JSON.parse(error.request.response).non_field_errors[0];
          this.fireAlert("error", msg, "top");
          await this.hideLoading(this.loader);
        } else {
          this.fireErrorAlert();
          await this.hideLoading(this.loader);
        }
      }
    }
  }
};
</script>


