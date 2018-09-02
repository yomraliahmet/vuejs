<template>
<div id="bb">
    <p>Lamba Durumu : {{ status }}</p>
    <button @click="openLamp">Lambayı Aç</button>
    <hr>
</div>

</template>

<script>
export default {
    data : function(){
        return {
            key : 0,
            status : "Kapalı"
        }
    },
    methods : {
        openLamp(){
            this.key = ! this.key;
            this.status = this.key == 1 ? "Açık" : "Kapalı";
            
        }
    }
}
</script>
