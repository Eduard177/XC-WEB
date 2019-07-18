import Vue from 'vue';

// Import component
import Loading from 'vue-loading-overlay';

// Init plugin
Vue.use(Loading, {
  loader: 'bars',
  color: '#4CA48D',
  width: 100,
  height: 100
});
