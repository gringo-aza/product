import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history',
});


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
