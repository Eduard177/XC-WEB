import cookies from 'js-cookie';
const headers = {
  headers: {
    Authorization: cookies.get('Authorization')
  }
};

export default {
  namespaced: true,
  state: {
    is_login: false,
    token: '',
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
      state.user = {};
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
        await commit('setToken', 'Token ' + token);

        this.$axios.setToken('Token ' + token);
        cookies.set('Authorization', 'Token ' + token, { expires: 7 });

        await dispatch('fetchUser');

        return;
      } catch (error) {
        throw error;
      }
    },

    async fetchUser({ commit }) {
      const response = await this.$axios.get('/logged/', headers);
      commit('setUser', response.data.user);
    },
    async logout({ commit }) {
      commit('logout');
      await localStorage.removeItem('xc-vuex');

      return;
    }
  }
};
