<template>
  <nav
    class="flex justify-center fixed inset-x-0 bottom-0 bg-gradb-green/blue shadow-2xl lg:static lg:justify-between lg:flex-col lg:h-screen lg:w-24"
  >
    <Logo v-if="$mq === 'lg'"/>

    <Menu :page="$route.name"/>

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
