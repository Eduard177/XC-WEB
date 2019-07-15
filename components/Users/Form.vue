<template>
  <div class="flex flex-col py-8 px-2">
    <div class="flex flex-col items-center lg:flex-row">
      <img class="pr-8 py-5" src="~/assets/images/add-image.svg">

      <div class="flex flex-wrap">
        <xc-input-date
          v-model="result_user.admission_date"
          class="w-full lg:w-1/2 md:w-1/2 my-3 pr-6"
          label="Fecha de ingreso"
        ></xc-input-date>

        <xc-input
          class="w-full lg:w-1/2 my-3 pr-6"
          v-model="result_user.office"
          label="Ubicación"
          placeholder="White House"
        ></xc-input>

        <xc-input
          class="w-full lg:w-1/2 my-3 pr-6"
          v-model="result_user.email"
          label="Correo"
          placeholder="dtrump@xpertcode.com.do"
        ></xc-input>

        <xc-input
          v-if="type == 'create'"
          class="w-full lg:w-1/2 my-3 pr-6"
          v-model="result_user.password"
          type="password"
          label="Contraseña"
          placeholder="********"
        ></xc-input>

        <xc-input
          class="w-full lg:w-1/2 my-3 pr-6"
          v-model="result_user.fullname"
          placeholder="Donald Trump"
          label="Nombre"
        ></xc-input>

        <xc-input
          class="w-full lg:w-1/2 my-3 pr-6"
          v-model="result_user.position"
          placeholder="Presidente"
          label="Cargo"
        ></xc-input>

        <xc-input
          class="w-full lg:w-1/2 my-3 pr-6"
          v-model="result_user.cellphone"
          placeholder="8492556677"
          label="Teléfono Personal"
        ></xc-input>

        <xc-input-select
          class="w-full lg:w-1/2 md:w-1/2 my-3 pr-6"
          v-model="result_user.role"
          label="Rol"
        >
          <option value="Basic_user">Usuario Basico</option>
          <option value="Administrator">Administrador</option>
        </xc-input-select>
      </div>
    </div>
    <div class="flex justify-around items-center leading-none mt-6 lg:mt-12">
      <button
        v-if="cancel"
        @click="$emit('close')"
        class="btn bg-grad-gold/orange w-1/3 h-9 cursor-pointer"
      >Cancelar</button>
      <button
        v-if="type == 'create'"
        @click="submit()"
        class="btn bg-grad-green/orange w-1/3 h-9"
      >Agregar</button>
      <button v-else @click="submit()" class="btn bg-grad-green/orange w-1/3 h-9">Actualizar</button>
    </div>
  </div>
</template>
<script>
import User from "../../models/User";
import XcInput from "../../components/Forms/Input";
import XcInputDate from "../../components/Forms/Date";
import XcInputSelect from "../../components/Forms/Select";

export default {
  name: "user-form",
  props: {
    user: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    cancel: {
      type: Boolean,
      default: true
    }
  },
  components: {
    XcInput,
    XcInputDate,
    XcInputSelect
  },
  data() {
    return {
      result_user: this.user
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.result_user);
    }
  }
};
</script>

