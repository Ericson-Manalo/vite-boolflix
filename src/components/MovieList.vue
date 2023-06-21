<template>
    <SingleMovie v-for="movie in store.movieList" :infos="movie"/>
</template>


<script>
import SingleMovie from './SingleMovie.vue';
import {store} from '../store.js';

export default {
    name :'MovieList',
    data() {
        return {
            store
        }
    },
    components:{
        SingleMovie
    }
}
</script>
<style lang="scss">
    
</style>