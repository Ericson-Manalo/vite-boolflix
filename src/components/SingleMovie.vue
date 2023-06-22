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

            <p v-if="!lang.includes(infos.original_language)"> 
                {{ infos.original_language }}
            </p>
            <img v-else :src="`/img/${infos.original_language}.png`" alt="">
                

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
            lang: ['en', 'es', 'it', 'ja', 'fr']
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
        width: 20px;
        height: 10px;
    }
</style>