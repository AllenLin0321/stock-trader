import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-97cf2.firebaseio.com/'

Vue.config.productionTip = false;

Vue.filter('currency', value => {
  return `$ ${value.toLocaleString()}`;
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
