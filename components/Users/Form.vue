<template>
  <div class="flex flex-col py-8 tablet:mt-64 tablet:mt-0">
    <image-upload
      :imageProp="result_user.image_url ? (api_url + result_user.image_url) : result_user.image_url   "
      @input=" result_user.image_url = $event; $emit('updateImage', result_user)"
    ></image-upload>

    <div class="flex flex-col items-center tablet:flex-row mt-8">
      <div class="flex flex-wrap">
        <xc-input-date
          v-validate="'required'"
          data-vv-as="Fecha de ingreso"
          :error="errors.first('Fecha de ingreso')"
          v-model="result_user.admission_date"
          class="w-full tablet:w-1/2 tablet:w-1/2 my-3 pr-6"
          label="Fecha de ingreso"
        ></xc-input-date>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Ubicación')"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.office"
          label="Ubicación"
          placeholder="White House"
        ></xc-input>

        <xc-input
          v-validate="'required|email'"
          :error="errors.first('Correo')"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.email"
          label="Correo"
          type="email"
          placeholder="dtrump@xpertcode.com.do"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Contraseña')"
          v-if="type == 'create'"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.password"
          type="password"
          label="Contraseña"
          placeholder="********"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Nombre')"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.fullname"
          placeholder="Donald Trump"
          label="Nombre"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Cargo')"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.position"
          placeholder="Presidente"
          label="Cargo"
        ></xc-input>

        <xc-input
          v-validate="'required|numeric'"
          :error="errors.first('Teléfono Personal')"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.cellphone"
          placeholder="8492556677"
          label="Teléfono Personal"
          type="number"
        ></xc-input>

        <xc-input
          v-validate="'required'"
          :error="errors.first('Codigo de empleado')"
          class="w-full tablet:w-1/2 my-3 pr-6"
          v-model="result_user.company_code"
          placeholder="XC001"
          label="Codigo de empleado"
        ></xc-input>

        <xc-input-select
          v-validate="'required'"
          :error="errors.first('Rol')"
          class="w-full tablet:w-1/2 tablet:w-1/2 my-3 pr-6"
          v-model="result_user.role"
          label="Rol"
        >
          <option value="Basic_user">Usuario Basico</option>
          <option value="Administrator">Administrador</option>
        </xc-input-select>
      </div>
    </div>
    <div class="flex justify-around items-center leading-none mt-6 tablet:mt-12">
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
import ImageUpload from "../../components/ImageUpload";
import Alert from "../../mixins/mixin-alert.js";
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
  mixins: [Alert],
  components: {
    XcInput,
    XcInputDate,
    XcInputSelect,
    ImageUpload
  },
  data() {
    return {
      api_url: process.env.API_URL,
      result_user: this.user
    };
  },
  methods: {
    async submit() {
      const validated = await this.$validator.validateAll();

      if (validated) {
        this.$emit("submit", this.result_user);
      } else {
        this.fireAlert("warning", "Complete los campos requeridos", "top");
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
        this.updatePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    updatePhoto(photo) {
      this.$emit("input", photo);
    }
  }
};
</script>

