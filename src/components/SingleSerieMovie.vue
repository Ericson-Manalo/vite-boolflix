<template>
    <div>
        <h1>
            Title: 
            {{ infos.name }}
        </h1>

        <p>
            Original title:
            {{ infos.original_name }}
        </p>
        <div class="d-flex">
            <p>
                Original language:
            </p>

            <p v-if="!store.lang.includes(infos.original_language)"> 
                {{ infos.original_language }}
            </p>
            <img v-else :src="`/img/${infos.original_language}.png`" alt="Logo flag">
                

        </div>
        <p>
            {{ infos.vote_average }}
        </p>
        <hr>
    </div>
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