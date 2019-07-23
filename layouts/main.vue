<template>
  <div class="flex flex-col bg-hueso tablet:flex-row">
    <ProfileBar @toogleMenu="toogleMenu()"/>

    <div v-if="toogle" class="tablet:hidden">
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

    <div
      class="container px-2 tablet:px-8 pt-4 pb-16 h-screen w-screen overflow-scroll tablet:pt-16"
    >
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

