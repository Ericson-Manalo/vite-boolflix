<template>
    <div>
        <h1>
            Title: 
            {{ infos.title }}
        </h1>

        <p>
            Original title:
            {{ infos.original_title }}
        </p>
        <div class="d-flex">
            <p>
                Original language:
            </p>

            <!--<span v-if="store.lang.includes(infos.original_language)">
                <img :src="`../assets/images/flags/${infos.original_language}.png`" alt="">
            </span>
            <span v-else>
                {{ infos.original_language }}
            </span> -->

            <!--da cambiare-->
            <span v-if="infos.original_language == 'en'">
                <img src="../assets/images/flags/en.png" alt="En flag">
            </span>
            <span v-if="infos.original_language == 'it'">
                <img src="../assets/images/flags/it.png" alt="It flag">
            </span>
            <span v-if="infos.original_language == 'es'">
                <img src="../assets/images/flags/es.png" alt="Es flag">
            </span>
            <span v-if="infos.original_language == 'ja'">
                <img src="../assets/images/flags/ja.png" alt="Jp flag">
            </span>
            <span v-if="infos.original_language == 'fr'">
                <img src="../assets/images/flags/fr.png" alt="Fr flag">
            </span>
            <span v-else>
                {{ infos.original_language }}
            </span>

        </div>
        <p>
            {{ infos.vote_average }}
        </p>
        <hr>
    </div>

</template>


<script>
import {store} from '../store.js'
export default {
    name :'SingleMovie',
    data() {
        return {
            store
        }
    },

    props:{
        infos : Object
    },

    components:{
        
    },

    methods:{

    },


    created(){
    }
}
</script>
<style lang="scss">
    img{
        width: 20px;
        height: 10px;
    }
</style>