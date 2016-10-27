<template>
  <div class="main-view wrapper">
    <nav-top></nav-top>
    <nav-left></nav-left>
    <!-- Main content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Dashboard
          <small>Control panel</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <!-- /.content -->
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 0.4.2
      </div>
      <strong>Copyright &copy; 2016 <a href="#">Three Body</a>.</strong> All rights reserved.
    </footer>
  </div>
</template>

<script>
import NavLeft from '../components/NavLeft'
import NavTop from '../components/NavTop'

export default {
  mounted() {
    // document.querySelector("body").className = "hold-transition skin-blue sidebar-mini";
  },
  components: {
    NavLeft,
    NavTop
  }
}
</script>

<style lang="scss">
.main-view{
}
</style>