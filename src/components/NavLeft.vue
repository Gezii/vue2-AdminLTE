<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li class="treeview" :class="{'active': $route.path.indexOf('dashboard') >= 0}">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" :class="{'menu-open': $route.path.indexOf('dashboard') >= 0}">
            <li :class="{'active': $route.path === '/dashboard/index'}">
              <router-link to="/dashboard/index"><i class="fa fa-circle-o"></i> Dashboard v1</router-link>
            </li>
            <li :class="{'active': $route.path === '/dashboard/index2'}">
              <router-link to="/dashboard/index2"><i class="fa fa-circle-o"></i> Dashboard v2</router-link>
            </li>
          </ul>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('layout') >= 0}">
          <a href="#">
            <i class="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span class="pull-right-container">
              <span class="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/layout/topnav'}">
              <router-link to="/layout/topnav"><i class="fa fa-circle-o"></i> Top Navigation</router-link>
            </li>
            <li :class="{'active': $route.path === '/layout/boxed'}">
              <router-link to="/layout/boxed"><i class="fa fa-circle-o"></i> Boxed</router-link>
            </li>
            <li :class="{'active': $route.path === '/layout/fixed'}">
              <router-link to="/layout/fixed"><i class="fa fa-circle-o"></i> Fixed</router-link>
            </li>
            <li :class="{'active': $route.path === '/layout/collapsed'}">
              <router-link to="/layout/collapsed"><i class="fa fa-circle-o"></i> Collapsed Sidebar</router-link>
            </li>
          </ul>
        </li>
        <li :class="{'active': $route.path.indexOf('widgets') >= 0}">
          <router-link to="/widgets">
            <i class="fa fa-th"></i> <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </router-link>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('charts') >= 0}">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Charts</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/charts/chartjs'}">
              <router-link to="/charts/chartjs"><i class="fa fa-circle-o"></i> ChartJS</router-link>
            </li>
            <li :class="{'active': $route.path === '/charts/morris'}">
              <router-link to="/charts/morris"><i class="fa fa-circle-o"></i> Morris</router-link>
            </li>
            <li :class="{'active': $route.path === '/charts/flot'}">
              <router-link to="/charts/flot"><i class="fa fa-circle-o"></i> Flot</router-link>
            </li>
            <li :class="{'active': $route.path === '/charts/inline'}">
              <router-link to="/charts/inline"><i class="fa fa-circle-o"></i> Inline charts</router-link>
            </li>
          </ul>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('elements') >= 0}">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>UI Elements</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/elements/general'}">
              <router-link to="/elements/general"><i class="fa fa-circle-o"></i> General</router-link>
            </li>
            <li :class="{'active': $route.path === '/elements/icons'}">
              <router-link to="/elements/icons"><i class="fa fa-circle-o"></i> Icons</router-link>
            </li>
            <li :class="{'active': $route.path === '/elements/buttons'}">
              <router-link to="/elements/buttons"><i class="fa fa-circle-o"></i> Buttons</router-link>
            </li>
            <li :class="{'active': $route.path === '/elements/sliders'}">
              <router-link to="/elements/sliders"><i class="fa fa-circle-o"></i> Sliders</router-link>
            </li>
            <li :class="{'active': $route.path === '/elements/timeline'}">
              <router-link to="/elements/timeline"><i class="fa fa-circle-o"></i> Timeline</router-link>
            </li>
            <li :class="{'active': $route.path === '/elements/modals'}">
              <router-link to="/elements/modals"><i class="fa fa-circle-o"></i> Modals</router-link>
            </li>
          </ul>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('forms') >= 0}">
          <a href="#">
            <i class="fa fa-edit"></i> <span>Forms</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/forms/general'}">
              <router-link to="/forms/general"><i class="fa fa-circle-o"></i> General Elements</router-link>
            </li>
            <li :class="{'active': $route.path === '/forms/advance'}">
              <router-link to="/forms/advance"><i class="fa fa-circle-o"></i> Advanced Elements</router-link>
            </li>
            <li :class="{'active': $route.path === '/forms/editors'}">
              <router-link to="/forms/editors"><i class="fa fa-circle-o"></i> Editors</router-link>
            </li>
          </ul>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('tables') >= 0}">
          <a href="#">
            <i class="fa fa-table"></i> <span>Tables</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/tables/simple'}">
              <router-link to="/tables/simple"><i class="fa fa-circle-o"></i> Simple tables</router-link>
            </li>
            <li :class="{'active': $route.path === '/tables/data'}">
              <router-link to="/tables/data"><i class="fa fa-circle-o"></i> Data tables</router-link>
            </li>
          </ul>
        </li>
        <li :class="{'active': $route.path.indexOf('calendar') >= 0}">
          <router-link to="/calendar">
            <i class="fa fa-calendar"></i> <span>Calendar</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-red">3</small>
              <small class="label pull-right bg-blue">17</small>
            </span>
          </router-link>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('mailbox') >= 0}">
          <a href="mailbox.html">
            <i class="fa fa-envelope"></i> <span>Mailbox</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/mailbox/inbox'}">
              <router-link to="/mailbox/inbox">Inbox
                <span class="pull-right-container">
                  <span class="label label-primary pull-right">13</span>
                </span>
              </router-link>
            </li>
            <li :class="{'active': $route.path === '/mailbox/compose'}">
              <router-link to="/mailbox/compose">Compose</router-link>
            </li>
            <li :class="{'active': $route.path === '/mailbox/read'}">
              <router-link to="/mailbox/read">Read</router-link>
            </li>
          </ul>
        </li>
        <li class="treeview" :class="{'active': $route.path.indexOf('examples') >= 0}">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Examples</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li :class="{'active': $route.path === '/examples/invoice'}">
              <router-link to="/examples/invoice"><i class="fa fa-circle-o"></i> Invoice</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/profile'}">
              <router-link to="/examples/profile"><i class="fa fa-circle-o"></i> Profile</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/login'}">
              <router-link to="/examples/login"><i class="fa fa-circle-o"></i> Login</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/register'}">
              <router-link to="/examples/register"><i class="fa fa-circle-o"></i> Register</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/lockscreen'}">
              <router-link to="/examples/lockscreen"><i class="fa fa-circle-o"></i> Lockscreen</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/404'}">
              <router-link to="/examples/404"><i class="fa fa-circle-o"></i> 404 Error</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/500'}">
              <router-link to="/examples/500"><i class="fa fa-circle-o"></i> 500 Error</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/blank'}">
              <router-link to="/examples/blank"><i class="fa fa-circle-o"></i> Blank Page</router-link>
            </li>
            <li :class="{'active': $route.path === '/examples/pace'}">
              <router-link to="/examples/pace"><i class="fa fa-circle-o"></i> Pace Page</router-link>
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-share"></i> <span>Multilevel</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
            <li>
              <a href="#"><i class="fa fa-circle-o"></i> Level One
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>
                <li>
                  <a href="#"><i class="fa fa-circle-o"></i> Level Two
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
          </ul>
        </li>
        <li><a href="documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
        <li class="header">LABELS</li>
        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
}
</script>
