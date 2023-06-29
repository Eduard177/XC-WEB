<template>
  <div>
    <h1 class="text-xl">Usuarios</h1>
    <section class="flex justify-center flex-wrap mt-8">
      <user-card
        @click.native="create_user_modal = true"
        :user="{
          fullName: 'Nombre',
          email: 'Correo',
          position: 'Cargo',
          office: 'Ubicacion',
          cellphone: '809-000-0000',
        }"
        type="orange"
        :addImage="true"
      ></user-card>

      <user-card
        v-for="(user, index) in users"
        :key="index"
        @click.native="showEditModal(index)"
        :user="user"
        type="green"
      ></user-card>
    </section>

    <div class="mt-5">
      <pagination
        v-if="parseInt(users.count) / 15 + 1 > 2"
        :totalPages="parseInt(users.count) / 15 + 1"
        :total="parseInt(users.count)"
        :per-page="15"
        :current-page="currentPage"
        @pagechanged="
          paginateMinorExpenses($event);
          currentPage = $event;
        "
      ></pagination>
    </div>

    <card-modal :showing="create_user_modal" @close="create_user_modal = false">
      <user-form
        type="create"
        :user="new_user"
        @submit="createUser($event)"
        @close="create_user_modal = false"
      ></user-form>
    </card-modal>

    <card-modal :showing="edit_user_modal" @close="edit_user_modal = false">
      <user-form
        type="edit"
        :user="users[index]"
        @updateImage="editProfilePicture($event)"
        @submit="editUser($event)"
        @close="edit_user_modal = false"
      ></user-form>
    </card-modal>
  </div>
</template>
<script>
import UserCard from "../components/Users/Card";
import UserForm from "../components/Users/Form";
import CardModal from "../components/CardModal";
import Pagination from "../components/Pagination";
import Alert from "../mixins/mixin-alert.js";
import User from "../models/User";

export default {
  name: "usuarios",
  layout: "main",
  // middleware: "administrator",
  components: {
    CardModal,
    UserCard,
    UserForm,
    Pagination,
  },
  mixins: [Alert],
  data() {
    return {
      users: [],
      new_user: new User(),
      index: 0,
      create_user_modal: false,
      edit_user_modal: false,
      currentPage: 1,
    };
  },
  async created() {
    let loader = this.$loading.show({});

    await this.fetchUsers();

    this.hideLoading(loader);
  },
  methods: {
    async fetchUsers() {
      try {
        await this.$store.dispatch("users/fetchUsers");
        this.users = this.$store.getters["users/getUsers"];
      } catch (error) {
        this.fireErrorAlert();
      }
    },
    showEditModal(index) {
      this.index = index;
      this.edit_user_modal = true;
    },
    async createUser(new_user) {
      try {
        this.loader = this.$loading.show({});
        await this.$store.dispatch("users/createUser", new_user);
        await this.fetchUsers();
        this.create_user_modal = false;
        this.hideLoading(this.loader);
        this.fireAlert("success", "El Usuario ha sido creado", "top");
      } catch (error) {
        this.hideLoading(this.loader);

        if (error.response.status === 400) {
          this.alert400Error(error);
        } else {
          this.fireErrorAlert();
        }
      }
    },
    async editUser(user) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("users/editUser", user);
        await this.fetchUsers();

        this.edit_user_modal = false;
        this.hideLoading(this.loader);
        this.fireAlert("success", "El Usuario ha sido actualizado", "top");
      } catch (error) {
        this.hideLoading(this.loader);
        if (error.response.status == 400) {
          this.alert400Error(error);
        } else {
          this.fireErrorAlert();
        }
      }
    },
    async editProfilePicture(file) {
      try {
        this.loader = this.$loading.show({});

        await this.$store.dispatch("users/uploadProfilePicture", file);
        await this.fetchUsers();

        this.hideLoading(this.loader);
        this.fireAlert("success", "La imagen ha sido actualizada", "top");
      } catch (error) {
        this.hideLoading(this.loader);
        if (error.response.status == 400) {
          this.alert400Error(error);
        } else {
          this.fireErrorAlert();
        }
      }
    },
  },
};
</script>
