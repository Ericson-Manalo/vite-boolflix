<template>
    <article>
        <div class="card-image">
            <img class="poster-img" :src="'https://image.tmdb.org/t/p/w342/' + infos.poster_path" alt="Image of the serie">
        </div>
        <div class="content">
            <h1 class="title-card">
                <em>
                    {{ infos.title }}
                </em>
            </h1>

            <hr>

            <p class="original-title">
                Original title:
                {{ infos.original_title }}
            </p>

            <p class="overview">
                <em>{{ infos.overview }}</em>
            </p>
            <div class="lang">
                <span>
                    Original language:  
                </span>

                <p v-if="!store.lang.includes(infos.original_language)"> 
                    {{ infos.original_language }}
                </p>
                <img class="logo-flag" v-else :src="`/img/${infos.original_language}.png`" alt="Logo Flag">
            </div>

            <p>
                {{ infos.vote_average / 2 }}
            </p>
        </div>
    </article>

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
<style lang="scss" scoped>
@use '../styles/general.scss' as*; 


p{
    font-weight: 200;
}
.fa-star{
    color: grey;
}

</style>