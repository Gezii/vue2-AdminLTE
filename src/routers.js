import Vue from 'vue';
import Router from 'vue-router';

// import {isLogin} from './services/auth'

import Main from './views/Main'
import Index from './views/dashboard/Index'
import Index2 from './views/dashboard/Index2'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 注册路由 - 登录
    { path: '/', component: Main },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        { path: '/dashboard/index', component: Index, name: 'index' },
        { path: '/dashboard/index2', component: Index2, name: 'index2' }
      ],
      beforeEnter: (to, from, next) => {
        // isLogin() ? next() : next('/');
        next()
      }
    },
    { path: '*', redirect: '/' },
  ],
});