<template>
<div id="vv">
    <lamp-status v-for="i in 5" ></lamp-status>
</div>

</template>

<script>
import LampStatus from './LampStatus';

export default {
    components : {
        "lamp-status" : LampStatus
    }
}
</script>

