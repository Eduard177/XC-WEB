<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75 z-10 overflow-y-scroll"
      @click.self="close"
    >
      <div
        class="relative w-full max-w-3xl bg-white shadow-lg tablet:rounded-lg p-8 h-full tablet:h-auto overflow-y-scroll"
      >
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-gray-500 mx-4 my-2 outline-none"
          @click.prevent="close"
        >×</button>
        <slot/>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "card-modal",
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    showing(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }

      document.querySelector("body").classList.remove("overflow-hidden");
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
