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
                <i class="fa-solid fa-star yellow" v-for="star in dividedNum(infos.vote_average)"></i>
                <i class="fa-solid fa-star" v-for="star in 5 - dividedNum(infos.vote_average)"></i>
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
        dividedNum(num){
            return Math.ceil(num/2)
        }
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