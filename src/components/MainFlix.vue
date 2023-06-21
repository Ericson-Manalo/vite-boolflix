<template>
    <h1>
        MainFlix
    </h1>

    <MovieSearchFlix/>

    <MovieList/>
</template>


<script>
import MovieList from './MovieList.vue'
import MovieSearchFlix from './MovieSearchFlix.vue'
import axios from 'axios'

export default {
    name:'MainFlix',
    data() {
        return {
            movieList: [],
            apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=b4e23a9ed230e66a8e63084cff9d0035&'
        }
    },
    components:{
        MovieList,
        MovieSearchFlix
        
    },

    methods: {
        searchFlix(needle = ''){
            axios.get(this.apiUrl,{
                params:{
                    name:needle
                } 
            })
            .then ((response) =>{
                this.movieList = response.data;
                console.log(this.movieList)
            })
        }
    },

    created() {
        this.searchFlix();
    },
}
</script>
<style lang="scss">
    
</style>