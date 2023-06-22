<template>
    <div>
        <h1>
            Title: 
            {{ infos.title }}
        </h1>

        <p>
            Original title:
            {{ infos.original_title }}
        </p>
        <div class="d-flex">
            <p>
                Original language:
            </p>

            <p v-if="!store.lang.includes(infos.original_language)"> 
                {{ infos.original_language }}
            </p>
            <img v-else :src="`/img/${infos.original_language}.png`" alt="Logo Flag">
                

        </div>
        <p>
            {{ infos.vote_average }}
        </p>
        <hr>
    </div>

</template>


<script>
import {store} from '../store.js'
export default {
    name :'SingleMovie',
    data() {
        return {
            store,
        }
    },

    props:{
        infos : Object
    },

    components:{
        
    },

    methods:{

    },


    created(){
    }
}
</script>
<style lang="scss">
    img{
        width: 30px;
        height: 20px;
    }
</style>