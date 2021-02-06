<template>
  <div class="mt-8 flex flex-col items-center">
    <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
      <img
        v-if="user.image_url"
        class="hidden tablet:block rounded-full object-cover"
        :src="imageUrl"
        alt="foto de perfil"
      >
<!--      <avatar-->
<!--        :lighten="10"-->
<!--        :size="98"-->
<!--        color="grey"-->
<!--        backgroundColor="ccc"-->
<!--        v-else-->
<!--        :username="user.fullname"-->
<!--      ></avatar>-->
    </figure>
    <h1 class="hidden tablet:block mt-4 text-3xl text-teal-500 font-extrabold">{{user.fullname}}</h1>
    <p class="hidden tablet:block text-md text-gray-700">{{user.email}}</p>
  </div>
</template>
<script>
import Avatar from "vue-avatar";

export default {
  props: ["user", "apiUrl"],
  components: { Avatar },
  computed: {
    imageUrl() {
      return this.apiUrl + this.user.image_url;
    }
  }
};
</script>
