import Vue from 'vue';
import Router from 'vue-router';

// import {isLogin} from './services/auth'

import Main from './views/Main'
import Index from './views/dashboard/Index'
import Index2 from './views/dashboard/Index2'

import Topnav from './views/layout/TopNav'
import Boxed from './views/layout/Boxed'
import Fixed from './views/layout/Fixed'
import Collapsed from './views/layout/Collapsed'

import Widgets from './views/widgets/Widgets'

import Chartjs from './views/charts/Chartjs'
import Morris from './views/charts/Morris'
import Flot from './views/charts/Flot'
import Inline from './views/charts/Inline'

import General from './views/elements/General'
import Icons from './views/elements/Icons'
import Buttons from './views/elements/Buttons'
import Sliders from './views/elements/Sliders'
import Timeline from './views/elements/Timeline'
import Modals from './views/elements/Modals'

import Generalform from './views/forms/General'
import Advance from './views/forms/Advance'
import Editors from './views/forms/Editors'

import SimpleTable from './views/tables/Simple'
import DataTable from './views/tables/Data'

import Calendar from './views/calendar/Calendar'

import Inbox from './views/mailbox/Inbox'
import Compose from './views/mailbox/Compose'
import ReadMail from './views/mailbox/Read'

import Invoice from './views/examples/Invoice'
import Profile from './views/examples/Profile'
import Login from './views/examples/Login'
import Register from './views/examples/Register'
import Lockscreen from './views/examples/Lockscreen'
import Notfound from './views/examples/404'
import Servererror from './views/examples/500'
import Blank from './views/examples/Blank'
import Pace from './views/examples/Pace'


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
        { path: '/dashboard/index2', component: Index2, name: 'index2' },
        { path: '/layout/boxed', component: Boxed, name: 'boxed' },
        { path: '/layout/fixed', component: Fixed, name: 'fixed' },
        { path: '/layout/collapsed', component: Collapsed, name: 'collapsed' },
        { path: '/widgets', component: Widgets, name: 'widgets' },
        { path: '/charts/chartjs', component: Chartjs, name: 'chartjs' },
        { path: '/charts/morris', component: Morris, name: 'morris' },
        { path: '/charts/flot', component: Flot, name: 'flot' },
        { path: '/charts/inline', component: Inline, name: 'inline' },
        { path: '/elements/general', component: General, name: 'general' },
        { path: '/elements/icons', component: Icons, name: 'icons' },
        { path: '/elements/buttons', component: Buttons, name: 'buttons' },
        { path: '/elements/sliders', component: Sliders, name: 'sliders' },
        { path: '/elements/timeline', component: Timeline, name: 'timeline' },
        { path: '/elements/modals', component: Modals, name: 'modals' },
        { path: '/forms/general', component: Generalform, name: 'generalfrom' },
        { path: '/forms/advance', component: Advance, name: 'advance' },
        { path: '/forms/editors', component: Editors, name: 'editors' },
        { path: '/tables/simple', component: SimpleTable, name: 'simpleTable' },
        { path: '/tables/data', component: DataTable, name: 'dataTable' },
        { path: '/calendar', component: Calendar, name: 'calendar' },
        { path: '/mailbox/inbox', component: Inbox, name: 'inbox' },
        { path: '/mailbox/compose', component: Compose, name: 'compose' },
        { path: '/mailbox/read', component: ReadMail, name: 'readMail' },
        { path: '/examples/invoice', component: Invoice, name: 'invoice' },
        { path: '/examples/profile', component: Profile, name: 'profile' },
        { path: '/examples/404', component: Notfound, name: '404' },
        { path: '/examples/500', component: Servererror, name: '500' },
        { path: '/examples/blank', component: Blank, name: 'blank' },
        { path: '/examples/pace', component: Pace, name: 'pace' }
      ],
      beforeEnter: (to, from, next) => {
        // isLogin() ? next() : next('/');
        next()
      }
    },
    { path: '/layout/topnav', component: Topnav, name: 'topnav' },
    { path: '/examples/login', component: Login, name: 'login' },
    { path: '/examples/register', component: Register, name: 'register' },
    { path: '/examples/lockscreen', component: Lockscreen, name: 'lockscreen' },
    { path: '*', redirect: '/' },
  ],
});