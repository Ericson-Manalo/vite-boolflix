<template>
    <div class="input-group mb-5">
        <input class ="searching-input" type="text"  placeholder="Type to search a Movie" aria-label="Username" aria-describedby="basic-addon1" v-model="store.searchMovie">
        <button @click="$emit('searched')">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
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
    div.input-group{
        display: flex;
        justify-content: center;
    }
    input.searching-input{
        padding: .7rem;
        border: none;
        border-radius: 10px;
        width: 300px;
    }

    button{
        padding: .7rem;
        border: none;
        border-radius: 10px;
    }
</style>