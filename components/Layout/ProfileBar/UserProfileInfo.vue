<template>
  <div class="mt-8 flex flex-col items-center">
    <img
      class="hidden lg:block w-1/3 rounded-full object-cover"
      :src="imageUrl"
      alt="foto de perfil"
    >
    <h1 class="hidden lg:block mt-4 text-3xl text-teal-500 font-extrabold">{{user.fullname}}</h1>
    <p class="hidden lg:block text-md text-gray-700">{{user.email}}</p>
  </div>
</template>
<script>
export default {
  props: ["user", "apiUrl"],
  computed: {
    imageUrl() {
      return this.apiUrl + this.user.image_url;
    }
  }
};
</script>
