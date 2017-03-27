<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'admin-lte/dist/js/app.js';
// import 'admin-lte/plugins/pace/pace.min.js';
$.AdminLTE.options.enableBSToppltip = false;

export default {
}
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
@import './assets/font/css/font-awesome.css';
@import '~admin-lte/dist/css/AdminLTE.css';
@import '~admin-lte/dist/css/skins/skin-blue.css';

</style>
