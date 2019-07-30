import cookies from 'js-cookie';
const headers = {
  headers: {
    Authorization: cookies.get('Authorization')
  }
};

export default {
  namespaced: true,
  state: {
    business_types: []
  },
  getters: {
    get(state) {
      return state.business_types;
    }
  },
  mutations: {
    setBusinessTypes(state, business_types) {
      state.business_types = business_types;
    }
  },
  actions: {
    async fetch({ commit }) {
      try {
        const response = await this.$axios.get('/business/', headers);
        commit('setBusinessTypes', response.data.results);
      } catch (error) {
        throw error;
      }
    }
  }
};
