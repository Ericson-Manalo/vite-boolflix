<template>
    <h1>
        MainFlix
    </h1>

import MovieList from './MovieList.vue';

    <MovieSearchFlix @searched/>
    <MovieList/>

</template>


<script>
import {store} from '../store.js';
import MovieSearchFlix from './MovieSearchFlix.vue';
import MovieList from './MovieList.vue';


export default {
    name:'MainFlix',
    data() {
        return {
            store

        }
    },
    components:{
    MovieSearchFlix,
    MovieList
}
}
</script>
<style lang="scss">
    
</style>