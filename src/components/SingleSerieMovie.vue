<template>
    <h1>
        {{ infos.original_name }}
    </h1>
    <h2>
        {{infos.original_language}}
    </h2>
</template>


<script>
import {store} from '../store.js';

export default {
    name :'SingleSerieMovie',
    data() {
        return {
            store
        }
    },
    components:{

    },
    props:{
        infos: Object
    }
}
</script>
<style lang="scss">
    
</style>