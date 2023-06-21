<template>
    <h1>
        MainFlix
    </h1>
    <MovieSearchFlix @searched="searchFilm"/>
    <MovieList/>

</template>


<script>
import {store} from '../store.js';
import MovieSearchFlix from './MovieSearchFlix.vue';
import MovieList from './MovieList.vue';
import axios from 'axios';


export default {
    name:'MainFlix',
    data() {
        return {
            store,
            
        }
    },
    components:{
        MovieSearchFlix,
        MovieList
    },
    methods:{
        searchFilm(){
            let listMovie = store.apiUrl;

            if(store.searchMovie !== ""){
                listMovie += `${store.searchMovie}`
                console.log(listMovie)

            store.searchMovie = "";
            }

            axios.get(listMovie)
                .then(response =>{
                    store.movieList = response.data.results;
                    console.log(store.movieList)
                })


        }
    },
    created(){
        this.searchFilm();
    }
}
</script>
<style lang="scss">
    
</style>