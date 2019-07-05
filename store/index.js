import Vuex from 'vuex';

// //Modules
import authModule from './modules/auth.js';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth: authModule
    }
  });
};

export default createStore;
