<template>
  <div class="flex">
    <ProfileBar/>

    <div class="px-10 pt-16 w-screen h-screen bg-hueso">
      <nuxt/>
    </div>

    <Sidebar/>
  </div>
</template>

<script>
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import ProfileBar from "../components/Layout/ProfileBar/ProfileBar";

export default {
  components: {
    Sidebar,
    ProfileBar
  }
};
</script>

