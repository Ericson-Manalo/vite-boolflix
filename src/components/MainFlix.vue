<template>
    <h1>
        MainFlix
    </h1>

    <MovieSearchFlix/>

    <MovieList/>
</template>


<script>
import MovieList from './MoveList.vue'
import MovieSearchFlix from './MovieSearchFlix.vue'
import axios from 'axios'

export default {
    name:'MainFlix',
    data() {
        return {
            
        }
    },
    components:{
        MovieList,
        MovieSearchFlix
        
    }
}
</script>
<style lang="scss">
    
</style>