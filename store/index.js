import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

// //Modules
import authModule from './modules/auth.js';
import userModule from './modules/users.js';
import reportsModule from './modules/reports.js';

const vuexLocalStorage = new VuexPersist({
  key: 'xc-vuex',
  storage: window.localStorage,
  reducer: state => ({
    auth: state.auth
  })
});

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: authModule,
      users: userModule,
      reports: reportsModule
    },
    plugins: [vuexLocalStorage.plugin]
  });
};

export default createStore;
