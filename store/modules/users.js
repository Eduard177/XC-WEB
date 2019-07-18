import cookies from 'js-cookie';

export default {
  namespaced: true,
  state: {
    users: {}
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await this.$axios.get('/users/');
        commit('setUsers', response.data.results);
      } catch (error) {
        throw error;
      }
    },
    async editUser({}, user) {
      try {
        const token = cookies.get('Authorization');

        await this.$axios.put(
          'users/' + user.id + '/',
          {
            fullname: user.fullname,
            email: user.email,
            password: 'secret',
            office: user.office,
            company_code: user.company_code,
            is_admin: user.is_admin,
            position: user.position,
            role: user.role,
            cellphone: user.cellphone
          },
          {
            headers: {
              Authorization: token
            }
          }
        );
      } catch (error) {
        throw error;
      }
    },
    async createUser({}, user) {
      try {
        await this.$axios.post(
          '/users/',
          {
            fullname: user.fullname,
            email: user.email,
            password: user.password,
            office: user.office,
            company_code: user.company_code,
            is_admin: user.is_admin,
            position: user.position,
            role: 'Administrator',
            cellphone: user.cellphone
          },
          {
            headers: {
              Authorization: cookies.get('Authorization')
            }
          }
        );
      } catch (error) {
        throw error;
      }
    }
  }
};
