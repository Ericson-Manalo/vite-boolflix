<template>
    <article>
        <div class="card-image">
            <img class="poster-img" :src="'https://image.tmdb.org/t/p/w342/' + infos.poster_path" alt="Image of the serie">
        </div>
        <div class="content">
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
                <img class="logo-flag" v-else :src="`/img/${infos.original_language}.png`" alt="Logo flag">
            </div>
        <p>
            {{ infos.vote_average / 2}}
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
    props:{
        infos: Object
    }
}
</script>
<style lang="scss">
@use '../styles/general.scss' as*; 
    
</style>