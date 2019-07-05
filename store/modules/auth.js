import cookies from 'js-cookie';

export default {
  namespaced: true,
  state: {
    is_login: false,
    token: '',
    expires_at: '',
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
      state.token = '';
      state.expires_at = '';
      state.logged_user = {};
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async login({ commit, dispatch }, auth) {
      try {
        const response = await this.$axios.post('/login/', {
          username: auth.username,
          password: auth.password
        });

        const token = response.data.token;

        await commit('setToken', token);

        this.$axios.setToken(token);

        cookies.set('Authorization', token, { expires: 7 });

        await dispatch('fetchUser');

        return;
      } catch (e) {
        throw e;
      }
    },

    async fetchUser({ state, commit }) {
      const response = await this.$axios.get('/logged/');
      commit('setUser', response.data.user);
    }
  }
};
