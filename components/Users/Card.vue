<template>
  <div :class="card[type]">
    <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
      <img
        v-if="addImage"
        class="rounded-full object-cover"
        src="~/assets/images/add-image.svg"
        alt="foto de perfil"
      >
      <img
        v-if="user.image_url"
        class="w-24 h-24 shadow-md rounded-full object-cover object-center"
        :src="api_url + user.image_url"
        alt="foto de perfil"
      >
      <avatar
        v-show="!addImage"
        :lighten="10"
        :size="98"
        color="grey"
        backgroundColor="ccc"
        v-else
        :username="user.fullname"
      ></avatar>
    </figure>
    <h3 class="mt-4 text-xl text-orange-500 font-bold text-center">{{user.fullname}}</h3>
    <p class="text-xs font-light">{{user.email}}</p>

    <div class="mt-2 text-xs font-light">
      <span>{{user.position}}</span> ||
      <span>{{user.office}}</span>
    </div>
    <p class="mt-2 text-sm text-orange-500 font-light">{{user.cellphone}}</p>
  </div>
</template>
<script>
import Avatar from "vue-avatar";

export default {
  name: "user-card",
  components: { Avatar },
  props: ["user", "type", "addImage"],
  data() {
    return {
      api_url: process.env.API_URL,
      card: {
        green:
          "flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-full sm:w-1/2 tablet:w-1/3 tablet:w-1/4 mt-6 tablet:ml-6 bg-gradient-green-40% rounded-br-xl cursor-pointer",
        orange:
          "flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-full sm:w-1/2 tablet:w-1/3 tablet:w-1/4 mt-6 tablet:ml-6 bg-gradient-orange-40% rounded-br-xl cursor-pointer"
      }
    };
  }
};
</script>

