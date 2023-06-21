<template lang="">
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type to search a Movie" aria-label="Username" aria-describedby="basic-addon1" v-model="searchMovie">
        <button @click="logContent(searchMovie)">Search</button>
    </div>

</template>


<script>
export default {
    name :'MovieSearchFlix',
    data() {
        return {
            searchMovie: ''
        }
    },
    components:{
        
    },
    methods: {
        logContent(content){
            console.log(content)
        }
    },
}
</script>
<style lang="scss">
    
</style>