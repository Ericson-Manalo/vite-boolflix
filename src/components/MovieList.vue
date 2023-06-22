<template>
    <SingleMovie v-for="movie in store.movieList" :infos="movie"/>

    <SingleSerieMovie v-for="serie in store.seriesList" :infos="serie"/>
</template>


<script>
import SingleMovie from './SingleMovie.vue';
import SingleSerieMovie from './SingleSerieMovie.vue';
import {store} from '../store.js';

export default {
    name :'MovieList',
    data() {
        return {
            store
        }
    },
    components:{
        SingleMovie,
        SingleSerieMovie
    }
}
</script>
<style lang="scss">
    
</style>