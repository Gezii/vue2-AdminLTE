// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './routers';

import App from './App'


const app = new Vue({
  router,
  ...App,
});

app.$mount('#app');
