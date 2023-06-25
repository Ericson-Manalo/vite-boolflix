<template>
    <article>
        <div class="card-image">
            <img class="poster-img" :src="'https://image.tmdb.org/t/p/w342/' + infos.poster_path" alt="Image of the serie">
        </div>
        <div class="content">
            <h1 class="title-card">
                Title: 
                {{ infos.name }}
            </h1>

            <hr>

            <p class="original-title">
                Original title:
                {{ infos.original_name }}
            </p>
            <p class="overview">
                <em>{{ infos.overview }}</em>
            </p>
            <div class="lang">
                <span>
                    Original language:
                </span>
                <span v-if="!store.lang.includes(infos.original_language)"> 
                    {{ infos.original_language }}
                </span>
                <img class="logo-flag" v-else :src="`/img/${infos.original_language}.png`" alt="Logo flag">
            </div>
            <p>
                <i class="fa-solid fa-star yellow" v-for="star in dividedNum(infos.vote_average)"></i>
                <i class="fa-solid fa-star grey" v-for="star in 5 - dividedNum(infos.vote_average)"></i>
            </p>
        </div>
        
    </article>
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
    methods: {
        dividedNum(num){
            return Math.ceil(num/2)
        }
    },
    props:{
        infos: Object
    }
}
</script>
<style lang="scss">
@use '../styles/general.scss' as*; 
    
</style>