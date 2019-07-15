<template>
  <div :class="card[type]">
    <figure class="flex justify-center items-center h-24 w-24 bg-gray-300 rounded-full">
      <img class="rounded-full object-cover" :src="image" alt="foto de perfil">
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
export default {
  name: "user-card",
  props: ["user", "type", "image"],
  data() {
    return {
      card: {
        green:
          "flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-6 ml-6 bg-gradient-green-40% rounded-br-xl cursor-pointer",
        orange:
          "flex flex-col justify-center pb-2 pt-16 items-center shadow-lg h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-6 ml-6 bg-gradient-orange-40% rounded-br-xl cursor-pointer"
      }
    };
  }
};
</script>

