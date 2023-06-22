<template>
    <div>
        <div class="card">
            <img class="poster-img" :src="'https://image.tmdb.org/t/p/w342/' + infos.poster_path" alt="Image of the serie">
        </div>
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
            <img class="logo-flag" v-else :src="`/img/${infos.original_language}.png`" alt="Logo Flag">
                

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
@use '../styles/general.scss' as*; 

</style>