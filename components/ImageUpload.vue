<template>
  <div class="flex flex-col justify-center items-center">
    <div v-if="!image">
      <label class="cursor-pointer" for="image-input">
        <img
          class="rounded-full object-cover w-32 h-32 shadow-md"
          src="~/assets/images/add-image.svg"
        >
      </label>
      <input class="hidden" type="file" id="image-input" @change="onFileChange($event)">
    </div>

    <div v-else class="flex flex-col justify-center items-center w-2/3">
      <img class="rounded-full object-cover w-32 h-32 shadow-md" :src="image">

      <label for="image-input1" class="cursor-pointer btn-xs bg-green-600 w-1/2 mt-3">Cambiar...</label>
      <input class="hidden" type="file" id="image-input1" @change="onFileChange($event)">
    </div>
  </div>
</template>
<script>
export default {
  name: "image-upload",
  props: ["imageProp"],
  data() {
    return {
      image: this.imageProp
    };
  },
  created() {
    this.image = this.imageProp;
  },
  methods: {
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
        this.$emit("input", file);
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>
</script>

