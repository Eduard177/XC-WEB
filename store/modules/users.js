import cookies from "js-cookie";
const headers = {
  headers: {
    Authorization: cookies.get("Authorization"),
  },
};

export default {
  namespaced: true,
  state: {
    users: [],
    user: {},
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await this.$axios.get("/user/");
        commit("setUsers", response.data);
      } catch (error) {
        throw error;
      }
    },
    async editUser({ dispatch, commit }, user) {
      try {
        const response = await this.$axios.patch(
          "user/update/" + user.id ,
          {
            admissionDate: user.admission_date,
            fullName: user.fullName,
            email: user.email,
            office: user.office,
            companyCode: user.company_code,
            isAdmin: user.isAdmin,
            position: user.position,
            role: user.role,
            cellphone: user.cellphone,
          }
        );

        commit("setUser", response.data);
      } catch (error) {
        throw error;
      }
    },
    async createUser({ dispatch }, user) {
      try {
        await this.$axios.post(
          "/auth/register",
          {
            admissionDate: user.admission_date,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            office: user.office,
            companyCode: user.company_code,
            position: user.position,
            role: user.role,
            cellphone: user.cellphone,
            imageUrl: "",
          },
          headers
        );
      } catch (error) {
        throw error;
      }
    },
    async uploadProfilePicture({}, user) {
      try {
        let form = new FormData();

        form.append("file", user.image_url);
        form.append("remark", "Profile Picture");
        form.append("user", user.id);

        await this.$axios.post("/upload/", form), headers;
      } catch (error) {
        throw error;
      }
    },
  },
};
