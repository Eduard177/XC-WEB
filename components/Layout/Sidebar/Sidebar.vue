<template>
  <nav class="flex flex-col justify-between green-grad h-screen w-24 shadow-2xl">
    <Logo/>

    <Menu/>

    <Settings/>
  </nav>
</template>
<script>
import Logo from "./Logo";
import Menu from "./Menu";
import Settings from "./Settings";

export default {
  components: {
    Logo,
    Menu,
    Settings
  }
};
</script>
