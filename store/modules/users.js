import cookies from 'js-cookie';
const headers = {
  headers: {
    Authorization: cookies.get('Authorization')
  }
};

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
    async editUser({ dispatch }, user) {
      try {
        const token = cookies.get('Authorization');

        await this.$axios.patch(
          'users/' + user.id + '/',
          {
            admission_date: user.admission_date,
            fullname: user.fullname,
            email: user.email,
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

        if (user.image_url) {
          await dispatch('uploadProfilePicture', user);
        }
      } catch (error) {
        throw error;
      }
    },
    async createUser({ dispatch }, user) {
      try {
        await this.$axios.post(
          '/users/',
          {
            admission_date: user.admission_date,
            fullname: user.fullname,
            email: user.email,
            password: user.password,
            office: user.office,
            company_code: user.company_code,
            position: user.position,
            role: user.role,
            cellphone: user.cellphone,
            image_url: null
          },
          headers
        );

        if (user.image_url) {
          await dispatch('uploadProfilePicture', user);
        }
      } catch (error) {
        throw error;
      }
    },
    async uploadProfilePicture({}, user) {
      try {
        let form = new FormData();

        form.append('file', user.image_url);
        form.append('remark', 'Profile Picture');
        form.append('user', user.id);

        await this.$axios.post('/upload/', form), headers;
      } catch (error) {
        throw error;
      }
    }
  }
};
