<template>
    <main>
        <div class="search-content">
            <MovieSearchFlix @searched="searchFilm"/>
        </div>

        <div class="content-wrapper">
            <MovieList/>
        </div>
    </main>


</template>


<script>
import {store} from '../store.js';
import axios from 'axios';
import MovieSearchFlix from './MovieSearchFlix.vue';
import MovieList from './MovieList.vue';

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

            }

            axios.get(listMovie)
                .then(response =>{
                    store.movieList = response.data.results;
                    console.log(store.movieList)
                })
            

            let listSeriesMovie = store.apiSeriesUrl;

            if(store.searchMovie !== ""){
                listSeriesMovie += `${store.searchMovie}`
                console.log(listSeriesMovie)

                store.searchMovie = "";
            
            }

            axios.get(listSeriesMovie)
                .then(response =>{
                    store.seriesList = response.data.results;
                    console.log(store.seriesList)
                })



        }
    },
    created(){
        this.searchFilm();
    }
}
</script>
<style lang="scss">
    div.search-content{
        margin-bottom: 2rem;
    }

    div.content-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>