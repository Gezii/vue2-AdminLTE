<template>
<!-- Main content -->
<section class="content">

  <!-- Default box -->
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">Title</h3>

      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
          <i class="fa fa-minus"></i></button>
        <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
          <i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">
      Pace loading works automatically on page. You can still implement it with ajax requests by adding this js:
      <br /><code>$(document).ajaxStart(function() { Pace.restart(); });</code>
      <br />
      <div class="row">
      <div class="col-xs-12 text-center">
      <button type="button" class="btn btn-default btn-lrg ajax" title="Ajax Request">
        <i class="fa fa-spin fa-refresh"></i>&nbsp; Get External Content
      </button>
      </div>
      </div>
        <div class="ajax-content">
        </div>
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      Footer
    </div>
    <!-- /.box-footer-->
  </div>
  <!-- /.box -->

</section>
<!-- /.content -->
</template>

<script>
// import Pace from 'admin-lte/plugins/pace/pace.min.js';

export default {
  ready() {
    $(document).ajaxStart(function() { Pace.restart(); });
  }
}
</script>