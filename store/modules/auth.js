import cookies from "js-cookie";

export default {
  namespaced: true,
  state: {
    is_login: false,
    token: "",
    user: {}
  },
  getters: {
    getIsLoggedIn(state) {
      return state.is_login;
    },
    getLoggedUser(state) {
      return state.user;
    },
    getAccessToken(state) {
      return state.token;
    }
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
      state.is_login = true;
    },
    logout(state) {
      state.is_login = false;
      state.token = "";
      state.user = {};
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async login({ commit, dispatch }, auth) {
      try {
        const response = await this.$axios.post("/auth/login/", {
          email: auth.username,
          password: auth.password
        });

        const token = response.data.jwt.token;
        await commit("setToken", "Token " + token);
        await commit("setUser", response.data.user);

        this.$axios.setToken("Token " + token);
        cookies.set("Authorization", "Token " + token, {
          expires: 7
        });

      } catch (error) {
        throw error;
      }
    },

    async fetchUser({ commit }) {
      const response = await this.$axios.get("/logged/", {
        headers: {
          Authorization: cookies.get("Authorization")
        }
      });
      commit("setUser", response.data.user);
    },
    async logout({ commit }) {
      commit("logout");
      await localStorage.removeItem("xc-vuex");
      await cookies.remove("Authorization");
    }
  }
};
