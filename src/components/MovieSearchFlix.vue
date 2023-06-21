<template lang="">
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type to search a Movie" aria-label="Username" aria-describedby="basic-addon1" v-model="store.searchMovie">
        <button @click="$emit('searched')">Search</button>
    </div>

</template>


<script>
import {store} from '../store.js';
export default {
    name :'MovieSearchFlix',
    data() {
        return {
            store
        }
    },
    components:{
        
    },
    methods: {
        
    },
}
</script>
<style lang="scss">
    
</style>