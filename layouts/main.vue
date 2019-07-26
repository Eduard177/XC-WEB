<template>
  <div class="flex flex-col bg-hueso tablet:flex-row">
    <ProfileBar @toogleMenu="toogleMenu()"/>

    <div v-if="toogle" class="tablet:hidden">
      <!-- reportes -->

      <div class="flex flex-col py-5 bg-white shadow-lg">
        <div class="flex items-center justify-around">
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
        <div @click="logout()" class="flex justify-center mt-6">
          <span class="text-xl font-bold items-center">Cerrar Sesión</span>
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
    },
    async logout() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
};
</script>

