import cookies from 'js-cookie';
const headers = {
  headers: {
    Authorization: cookies.get('Authorization')
  }
};

export default {
  namespaced: true,
  state: {
    payment_methods: []
  },
  getters: {
    get(state) {
      return state.payment_methods;
    }
  },
  mutations: {
    setPaymentsMethods(state, payment_methods) {
      state.payment_methods = payment_methods;
    }
  },
  actions: {
    async fetch({ commit }) {
      try {
        const response = await this.$axios.get('/payment/', headers);
        commit('setPaymentsMethods', response.data.results);
      } catch (error) {
        throw error;
      }
    }
  }
};
