<template>
  <div class="container">
      <header-component></header-component>
    <hr>
    <div class="row">
      <server-component></server-component>
      <serverdetails-component></serverdetails-component>
    </div>
    <hr>
    <footer-component></footer-component>
  </div>
</template>

<script>
import header from "./components/Common/Header";
import footer from "./components/Common/Footer";
import server from "./components/Server/Server";
import serverdetails from "./components/Server/ServerDetails";
export default{
  components : {
    "header-component" : header,
    "footer-component" : footer,
    "server-component" : server,
    "serverdetails-component" : serverdetails,
  }
}
</script>

<style>

</style>
