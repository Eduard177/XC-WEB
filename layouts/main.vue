<template>
  <div class="flex flex-col lg:flex-row">
    <ProfileBar @toogleMenu="toogleMenu()"/>

    <div v-if="toogle" class="lg:hidden">
      <!-- reportes -->

      <div class="flex justify-around py-5">
        <div class="flex flex-col items-center">
          <span class="text-2xl text-orange-400 font-bold">13</span>
          <p>Reportes</p>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl text-teal-500 font-bold">13</span>
          <p>Pendientes</p>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl text-green-700 font-bold">0</span>
          <p>Pendientes</p>
        </div>
      </div>
    </div>

    <div class="px-10 pt-16 w-screen h-screen bg-hueso">
      <nuxt/>
    </div>

    <Sidebar/>
  </div>
</template>

<script>
import ProfileBar from "../components/Layout/ProfileBar/ProfileBar";
import Sidebar from "../components/Layout/Sidebar/Sidebar";

export default {
  components: {
    Sidebar,
    ProfileBar
  },
  data() {
    return {
      toogle: false
    };
  },
  methods: {
    toogleMenu() {
      this.toogle = !this.toogle;
    }
  }
};
</script>

