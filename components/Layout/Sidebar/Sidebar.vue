<template>
  <nav
    class="flex justify-center fixed inset-x-0 bottom-0 bg-gradb-green/blue shadow-2xl tablet:static tablet:justify-between tablet:flex-col tablet:h-screen tablet:w-24 desktop:w-16"
  >
    <Logo :user="user" v-if="$mq === 'lg' || $mq === 'md'"/>

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
