import cookies from 'js-cookie';

export default {
  namespaced: true,
  state: {
    minor_expenses: [],
    reimbursables: []
  },
  getters: {
    getMinorExpenses(state) {
      return state.minor_expenses;
    },
    getReimbursables(state) {
      return state.reimbursables;
    }
  },
  mutations: {
    setMinorExpenses(state, minor_expenses) {
      state.minor_expenses = minor_expenses;
    },
    setReimbursables(state, reimbursables) {
      state.reimbursables = reimbursables;
    }
  },
  actions: {
    async createMinorExpense({}, minor_expense) {
      try {
        await this.$axios.post('/minorexpenses/', minor_expense, {
          headers: {
            Authorization: cookies.get('Authorization')
          }
        });
      } catch (error) {
        throw error;
      }
    },
    async editMinorExpense({}, minor_expense) {
      try {
        await this.$axios.put(
          '/minorexpenses/' + minor_expense.id + '/',
          minor_expense,
          {
            headers: {
              Authorization: cookies.get('Authorization')
            }
          }
        );
      } catch (error) {
        throw error;
      }
    },
    async fetchMinorExpenses({ commit }, user_id) {
      try {
        const response = await this.$axios.get(
          '/minorexpenses/',
          { user_id: user_id },
          {
            headers: {
              Authorization: cookies.get('Authorization')
            }
          }
        );

        commit('setMinorExpenses', response.data);
      } catch (error) {
        throw error;
      }
    },
    async fetchReimbursables({ commit }, user_id) {
      try {
        const response = await this.$axios.get(
          '/reimbursable/',
          { user_id: user_id },
          {
            headers: {
              Authorization: cookies.get('Authorization')
            }
          }
        );

        commit('setReimbursables', response.data);
      } catch (error) {
        throw error;
      }
    }
  }
};
