<template>
  <div class="col-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı : {{ name }} </p>
    <p>Kullanıcı Adı : {{ switchName() }} </p>
    <p>Kullanıcı Yaşı : {{ age }} </p>
    <button @click="sendToParent">Veriyi Parente Gönder</button>
  </div>
</template>
<script>
import { eventBus } from "../main.js";

 export default{
   props : {
     // Validation kullanımları.
     //name : [String, Array] // name tipi string yada array olabilir dedik.
     name : {
       type : String,
       default : "google.com"
     },
     age : Number
   },
   methods : {
     switchName(){
       return this.name.split("").reverse().join("");
     },
     sendToParent(){
       // $emit() parent componente veri göndermeyi sağlar.
       this.$emit("data", "kablosuzkedi");
     }
   },
   created(){
     eventBus.$on("ageWasEdited", (age) => {
       this.age = age;
     })
   }
 }
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
