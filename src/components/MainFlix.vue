<template>
    <h1>
        MainFlix
    </h1>

    <MovieSearchFlix/>
</template>


<script>

import MovieSearchFlix from './MovieSearchFlix.vue'
import axios from 'axios'

export default {
    name:'MainFlix',
    data() {
        return {
            
        }
    },
    components:{
        MovieSearchFlix
    }
}
</script>
<style lang="scss">
    
</style>