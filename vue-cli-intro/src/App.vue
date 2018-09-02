<template>
  <div class="container">
      <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-servers-details></app-servers-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/Common/Header";
import footer from "./components/Common/Footer";
import server from "./components/Server/Server";
import serverdetails from "./components/Server/ServerDetails";
export default{
  components : {
    appHeader : header,
    appFooter : footer,
    appServers : server,
    appServersDetails : serverdetails,
  }
}
</script>

<style>

</style>
