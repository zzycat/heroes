<template>
  <div>
    <myheader></myheader>
    <div class="container-fliud">
      <div class="row">
        <!-- sidebar -->
        <mysidebar></mysidebar>
      
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/myheader";
import mysidebar from "@/components/mysidebar";

export default {
  name: "App",
  components: {
    myheader,
    mysidebar
  }
};
</script>

<style>

</style>
