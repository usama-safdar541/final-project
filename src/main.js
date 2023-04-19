import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';
import store from './Store/Store';
import BootstrapVue from 'bootstrap-vue';
import { values } from 'core-js/core/array';

Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes,

})
new Vue({

  render: h => h(App),
  router,
  store,
}).$mount('#app')
