import cookies from 'js-cookie';
import { queryStingParamsParser } from '../../utils/Helpers';

const headers = {
  headers: {
    Authorization: cookies.get('Authorization')
  }
};

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
    async fetchMinorExpensesByUser({ commit }, filters) {
      try {
        let queryString = queryStingParamsParser({
          user_id: filters.user_id,
          start: filters.start,
          end: filters.end
        });

        const response = await this.$axios.get(
          '/minorexpenses/?search=' + filters.status + queryString
        );

        commit('setMinorExpenses', response.data);
      } catch (error) {
        throw error;
      }
    },
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
          headers
        );
      } catch (error) {
        throw error;
      }
    },
    async deleteMinorExpense({}, minor_expense) {
      try {
        await this.$axios.delete('/minorexpenses/' + minor_expense.id + '/', {
          headers: {
            Authorization: cookies.get('Authorization')
          }
        });
      } catch (error) {
        throw error;
      }
    },
    async paginateMinorExpenses({ commit }, params) {
      try {
        const queryString = queryStingParamsParser(params);
        const response = await this.$axios.get(
          '/minorexpenses/?' + queryString
        );
        commit('setMinorExpenses', response.data);
      } catch (error) {
        throw error;
      }
    },
    async searchMinorExpenses({ commit }, filters) {
      let queryString = queryStingParamsParser({
        start: filters.start,
        end: filters.end
      });

      const response = await this.$axios.get(
        '/minorexpenses/?search=' + filters.status + queryString
      );

      await commit('setMinorExpenses', response.data);
    },
    async setMinorExpenseStatus({}, params) {
      try {
        await this.$axios.patch(
          '/minorexpenses/' + params.minor_expense_id + '/',
          {
            status: params.status
          },
          headers
        );
      } catch (error) {
        throw error;
      }
    },

    async fetchReimbursablesByUser({ commit }, user_id) {
      try {
        const response = await this.$axios.get(
          '/reimbursable/?user_id= ' + user_id,
          headers
        );

        commit('setReimbursables', response.data);
      } catch (error) {
        throw error;
      }
    },
    async createReimbursable({}, reimbursable) {
      try {
        await this.$axios.post('/reimbursable/', reimbursable, headers);
      } catch (error) {
        throw error;
      }
    },
    async editReimbursable({}, reimbursable) {
      try {
        await this.$axios.put(
          '/reimbursable/' + reimbursable.id + '/',
          reimbursable,
          headers
        );
      } catch (error) {
        throw error;
      }
    },
    async deleteReimbursable({}, reimbursable) {
      try {
        await this.$axios.delete('/reimbursable/' + reimbursable.id + '/', {
          headers: {
            Authorization: cookies.get('Authorization')
          }
        });
      } catch (error) {
        throw error;
      }
    },
    async paginateReimbursables({ commit }, params) {
      try {
        const queryString = queryStingParamsParser(params);
        const response = await this.$axios.get('/reimbursable/?' + queryString);
        commit('setReimbursables', response.data);
      } catch (error) {
        throw error;
      }
    },
    async searchReimbursables({ commit }, filters) {
      let queryString = queryStingParamsParser({
        start: filters.start,
        end: filters.end
      });

      const response = await this.$axios.get(
        '/reimbursable/?search=' + filters.status + queryString
      );

      await commit('setReimbursables', response.data);
    }
  }
};
