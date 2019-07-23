<template>
  <div>
    <h1 class="text-2xl font-bold">Ajustes</h1>
    <section>
      <h2 class="text-xl mt-4">User Profile</h2>
      <user-form
        @updateImage="editProfilePicture($event)"
        type="edit"
        :user="user"
        @submit="editUser($event)"
      ></user-form>
    </section>
  </div>
</template>
<script>
import User from "../models/User";
import Alert from "../mixins/mixin-alert.js";
import UserForm from "../components/Users/Form";

export default {
  layout: "main",
  components: {
    UserForm
  },
  mixins: [Alert],
  data() {
    return {
      user: this.$store.getters["auth/getLoggedUser"]
    };
  },
  methods: {
    async editUser(user) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("users/editUser", user);
        await this.$store.dispatch("auth/fetchUser");

        this.edit_user_modal = false;
        this.hideLoading(this.loader);
        this.fireAlert("success", "El Usuario ha sido actualizado", "top");
      } catch (error) {
        console.error(error);
        this.hideLoading(this.loader);
        this.fireErrorAlert();
      }
    },
    async editProfilePicture(user) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("users/uploadProfilePicture", user);
        await this.$store.dispatch("auth/fetchUser");

        this.hideLoading(this.loader);
        this.fireAlert("success", "La imagen ha sido actualizada", "top");
      } catch (error) {
        console.error(error);

        this.hideLoading(this.loader);
        this.fireErrorAlert();
      }
    }
  }
};
</script>

